"use client";

import { track } from "@/lib/tracking";

export function LienEmail({ email, className = "", contexte = "inconnu" }: { email: string; className?: string; contexte?: string }) {
  return <a href={`mailto:${email}`} className={className} onClick={() => track("email_click", { contexte })}>{email}</a>;
}
