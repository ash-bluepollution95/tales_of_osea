"use client";

import { ExpandableCardSpread } from "./expandable-card-spread";
import data from "./data.json";

export default function Page() {
  return <ExpandableCardSpread data={data} />;
}
