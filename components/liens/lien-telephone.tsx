"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/tracking";

export function LienTelephone({ e164, children, className = "", contexte = "inconnu" }: { e164: `+${number}`; children: ReactNode; className?: string; contexte?: string }) {
  return <a href={`tel:${e164}`} className={className} onClick={() => track("telephone_click", { telephone: e164, contexte })}>{children}</a>;
}
