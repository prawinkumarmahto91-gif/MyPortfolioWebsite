import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";

const links = ["About", "Skills", "Projects", "Experience", "Achievements", "Contact"];

async function CurrentYear() {
  "use cache";
  return <span>{new Date().getFullYear()}</span>;
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="text-sm text-muted">Always learning, always building.</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-fg">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks />
      </div>

      <p className="border-t border-line py-4 text-center text-xs text-muted">
        © <CurrentYear /> {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}