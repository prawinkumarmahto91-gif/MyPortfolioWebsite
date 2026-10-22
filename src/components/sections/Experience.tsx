import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading eyebrow="Experience" title="Internships" />
      <ol className="relative space-y-8 border-l border-line pl-6">
        {experience.map((e) => (
          <li key={e.role} className="relative">
            <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-violet" aria-hidden />
            <p className="font-mono text-xs text-muted">{e.dates}</p>
            <h3 className="mt-1 text-lg font-semibold">{e.role}</h3>
            <p className="text-sm text-violet">
              {e.organization}
              {e.inAssociationWith && (
                <span className="text-muted"> · in association with {e.inAssociationWith}</span>
              )}
            </p>
            <p className="mt-2 max-w-2xl text-sm text-muted">{e.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}