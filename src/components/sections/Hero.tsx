import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { hasResume } from "@/lib/resume";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
      <div className="absolute -top-32 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet/20 blur-3xl" aria-hidden />
      <div className="absolute right-0 top-40 -z-10 h-72 w-72 rounded-full bg-blue/15 blur-3xl" aria-hidden />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up order-last lg:order-first">
          {profile.status.show && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
              {profile.status.text}
            </p>
          )}
          <p className="mb-3 font-mono text-xs tracking-widest text-violet">{profile.eyebrow}</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{profile.name}.</span>
          </h1>
          <p className="mt-4 text-xl text-fg/90">{profile.headline}</p>
          <p className="mt-4 max-w-xl text-muted">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects">Explore My Projects</ButtonLink>
            {hasResume() && (
              <ButtonLink href={profile.resume} download variant="secondary">
                <Download size={16} aria-hidden /> Download Resume
              </ButtonLink>
            )}
          </div>

          <div className="mt-6">
            <SocialLinks />
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
            {profile.proof.map((p) => (
              <div key={p.label}>
                <dt className="text-xs text-muted">{p.label}</dt>
                <dd className="text-xl font-semibold">{p.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-2 text-xs text-muted">Self-reported figures.</p>
        </div>

        <div className="order-first flex justify-center lg:order-last lg:justify-end">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}