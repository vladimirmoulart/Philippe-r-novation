import type { ReactNode } from "react";

export function Carte({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <article className={`rounded-card border border-border bg-surface p-6 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-raised ${className}`}>{children}</article>;
}
