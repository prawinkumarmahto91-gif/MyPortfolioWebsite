import { Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="rounded-2xl border border-line bg-surface p-8 text-center sm:p-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s build something meaningful.</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          I&apos;m interested in AI/ML, software development, and opportunities to learn, contribute, and
          build practical solutions.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href={`mailto:${profile.email}`}>
            <Mail size={16} aria-hidden /> {profile.email}
          </ButtonLink>
          <ButtonLink href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} variant="secondary">
            <Phone size={16} aria-hidden /> {profile.phone}
          </ButtonLink>
        </div>
        <div className="mt-6 flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}