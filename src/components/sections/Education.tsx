import { GraduationCap, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function Education() {
  const { school, degree, years, cgpa } = profile.education;
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading eyebrow="Education" title="Education" />
      <div className="flex gap-4 rounded-xl border border-line bg-surface p-6">
        <GraduationCap className="mt-1 shrink-0 text-violet" aria-hidden />
        <div>
          <h3 className="text-lg font-semibold">{school}</h3>
          <p className="text-muted">{degree}</p>
          <p className="mt-2 font-mono text-sm text-muted">
            {years} · CGPA {cgpa}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={14} aria-hidden /> {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}