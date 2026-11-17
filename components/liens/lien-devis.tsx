"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { track } from "@/lib/tracking";

export function LienDevis({ children, className = "", contexte = "inconnu" }: { children: ReactNode; className?: string; contexte?: string }) {
  return <Link href="/demande-de-devis" className={className} onClick={() => track("devis_click", { contexte })}>{children}</Link>;
}
