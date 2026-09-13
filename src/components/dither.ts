export interface BitmapSource {
  source: CanvasImageSource;
  width: number;
  height: number;
}

const BAYER_8X8 = [
  0, 32, 8, 40, 2, 34, 10, 42,
  48, 16, 56, 24, 50, 18, 58, 26,
  12, 44, 4, 36, 14, 46, 6, 38,
  60, 28, 52, 20, 62, 30, 54, 22,
  3, 35, 11, 43, 1, 33, 9, 41,
  51, 19, 59, 27, 49, 17, 57, 25,
  15, 47, 7, 39, 13, 45, 5, 37,
  63, 31, 55, 23, 61, 29, 53, 21,
];

export function renderHandBitmap(
  src: BitmapSource,
  colorHex: string,
  isDark: boolean,
  outWidth: number,
  outHeight: number,
): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = outWidth;
  canvas.height = outHeight;
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  ctx.drawImage(src.source, 0, 0, outWidth, outHeight);
  const imageData = ctx.getImageData(0, 0, outWidth, outHeight);
  const pixels = imageData.data;
  const count = outWidth * outHeight;
  const luminance = new Float32Array(count);
  const opaque = new Uint8Array(count);

  for (let p = 0, i = 0; p < count; p++, i += 4) {
    if (pixels[i + 3] < 128) continue;
    opaque[p] = 1;
    luminance[p] = 0.299 * pixels[i] + 0.587 * pixels[i + 1] + 0.114 * pixels[i + 2];
  }

  if (isDark) {
    ditherOrdered(luminance, opaque, outWidth, outHeight);
  } else {
    ditherAtkinson(luminance, opaque, outWidth, outHeight);
  }

  const r = parseInt(colorHex.slice(1, 3), 16);
  const g = parseInt(colorHex.slice(3, 5), 16);
  const b = parseInt(colorHex.slice(5, 7), 16);

  for (let p = 0, i = 0; p < count; p++, i += 4) {
    if (!opaque[p]) {
      pixels[i + 3] = 0;
      continue;
    }
    if (luminance[p] > 127) {
      pixels[i + 3] = 0;
    } else {
      pixels[i] = r;
      pixels[i + 1] = g;
      pixels[i + 2] = b;
      pixels[i + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas;
}

function ditherOrdered(
  lum: Float32Array,
  opaque: Uint8Array,
  w: number,
  h: number,
): void {
  for (let y = 0; y < h; y++) {
    const matrixRow = (y & 7) * 8;
    for (let x = 0; x < w; x++) {
      const p = y * w + x;
      if (!opaque[p]) continue;
      const threshold = ((BAYER_8X8[matrixRow + (x & 7)] + 0.5) / 64) * 255;
      lum[p] = lum[p] > threshold ? 255 : 0;
    }
  }
}

function ditherAtkinson(
  lum: Float32Array,
  opaque: Uint8Array,
  w: number,
  h: number,
): void {
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const p = y * w + x;
      if (!opaque[p]) continue;
      const old = lum[p];
      const next = old > 127 ? 255 : 0;
      lum[p] = next;
      const error = (old - next) / 8;
      spread(lum, opaque, x + 1, y, w, h, error);
      spread(lum, opaque, x + 2, y, w, h, error);
      spread(lum, opaque, x - 1, y + 1, w, h, error);
      spread(lum, opaque, x, y + 1, w, h, error);
      spread(lum, opaque, x + 1, y + 1, w, h, error);
      spread(lum, opaque, x, y + 2, w, h, error);
    }
  }
}

function spread(
  lum: Float32Array,
  opaque: Uint8Array,
  x: number,
  y: number,
  w: number,
  h: number,
  error: number,
): void {
  if (x < 0 || x >= w || y >= h) return;
  const p = y * w + x;
  if (!opaque[p]) return;
  lum[p] += error;
}
