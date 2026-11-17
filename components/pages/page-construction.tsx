import { FilAriane } from "@/components/navigation/fil-ariane";
import { Section } from "@/components/ui/section";

export function PageConstruction({ titre, parent }: { titre: string; parent?: { label: string; href: string } }) {
  return (
    <Section as="div" className="!py-10 sm:!py-14">
      <FilAriane elements={[...(parent ? [parent] : []), { label: titre }]} />
      <div className="mt-10 max-w-prose">
        <h1 className="mb-6">{titre}</h1>
        <p className="text-[var(--font-size-lead)] text-ink-muted">Page en construction.</p>
      </div>
    </Section>
  );
}
