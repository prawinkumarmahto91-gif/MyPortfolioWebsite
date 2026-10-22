import { ArrowUpRight, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading eyebrow="Achievements" title="Problem solving" />
      <div className="rounded-xl border border-violet/40 bg-surface p-6 sm:p-8">
        <Trophy className="mb-3 text-violet" aria-hidden />
        <h3 className="text-xl font-semibold">
          500+ Data Structures and Algorithms problems solved on LeetCode.
        </h3>
        <p className="mt-2 max-w-2xl text-muted">
          Practicing problem-solving patterns across recursion, binary search, trees, graph traversal,
          and other fundamental topics.
        </p>
        <a
          href={profile.socials.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-violet hover:underline"
        >
          View LeetCode profile <ArrowUpRight size={14} aria-hidden />
        </a>
      </div>
    </section>
  );
}