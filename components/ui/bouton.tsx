import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variante = "primaire" | "secondaire" | "sombre";

const variantes: Record<Variante, string> = {
  primaire: "bg-brand text-ink-inverse hover:bg-brand-hover",
  secondaire: "border border-brand bg-surface text-brand hover:bg-brand-subtle",
  sombre: "bg-surface-dark text-ink-inverse hover:bg-ink",
};

const base = "inline-flex min-h-11 items-center justify-center rounded-button px-5 py-2.5 font-bold no-underline transition-colors";

export function BoutonLien({ href, children, variante = "primaire", className = "" }: { href: string; children: ReactNode; variante?: Variante; className?: string }) {
  return <Link href={href} className={`${base} ${variantes[variante]} ${className}`}>{children}</Link>;
}

export function Bouton({ children, variante = "primaire", className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variante?: Variante }) {
  return <button className={`${base} ${variantes[variante]} ${className}`} {...props}>{children}</button>;
}
