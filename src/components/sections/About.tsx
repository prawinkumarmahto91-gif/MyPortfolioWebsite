import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading eyebrow="About" title="A little about me." />
      <div className="max-w-3xl space-y-4 text-muted">
        <p>
          I&apos;m pursuing a B.Tech in Information Technology at UIT, RGPV, and I&apos;m building
          practical skills in machine learning, deep learning, data analytics, and software engineering.
        </p>
        <p>
          I like building working applications rather than only studying theory: training and evaluating
          ML models, exploring computer vision with PyTorch, and practicing data structures and
          algorithms consistently.
        </p>
        <p>
          I&apos;m looking for opportunities to learn, contribute to engineering teams, and keep
          growing as a developer.
        </p>
      </div>
    </section>
  );
}