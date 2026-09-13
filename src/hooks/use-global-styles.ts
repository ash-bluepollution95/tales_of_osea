"use client";

import { useEffect } from "react";

export function useGlobalStyles(css: string, id: string) {
  useEffect(() => {
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = css;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, [css, id]);
}
