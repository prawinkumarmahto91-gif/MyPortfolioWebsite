import { Award, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading eyebrow="Certifications" title="Certifications" />
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => (
          <div key={c.title} className="flex gap-4 rounded-xl border border-line bg-surface p-5">
            <Award className="mt-0.5 shrink-0 text-blue" aria-hidden />
            <div>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-muted">{c.issuer}</p>
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm text-violet hover:underline"
                >
                  Verify <ArrowUpRight size={14} aria-hidden />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}