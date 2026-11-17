import Link from "next/link";

export type ElementFilAriane = { label: string; href?: string };

export function FilAriane({ elements, inverse = false }: { elements: ElementFilAriane[]; inverse?: boolean }) {
  return (
    <nav aria-label="Fil d’Ariane" className={`text-sm ${inverse ? "text-ink-inverse/75" : "text-ink-muted"}`}>
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="underline-offset-4 hover:underline">Accueil</Link></li>
        {elements.map((element) => (
          <li key={element.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {element.href ? <Link href={element.href} className="underline-offset-4 hover:underline">{element.label}</Link> : <span aria-current="page">{element.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
