import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading eyebrow="Skills" title="Technical skills" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-xl border border-line bg-surface p-5">
            <h3 className="mb-3 text-sm font-semibold">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <li key={s} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}