import type { ElementType, ReactNode } from "react";

export function Section({ children, as: Tag = "section", className = "" }: { children: ReactNode; as?: ElementType; className?: string }) {
  return <Tag className={`px-4 py-[var(--space-section)] sm:px-6 lg:px-8 ${className}`}><div className="mx-auto max-w-content">{children}</div></Tag>;
}
