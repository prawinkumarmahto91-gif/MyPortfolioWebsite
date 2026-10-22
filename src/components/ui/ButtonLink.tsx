import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  variant?: "primary" | "secondary";
  download?: boolean;
  external?: boolean;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({ href, variant = "primary", download, external, className, children }: Props) {
  return (
    <a
      href={href}
      download={download || undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet",
        variant === "primary"
          ? "bg-violet text-white hover:bg-violet/90"
          : "border border-line text-fg hover:border-violet hover:text-violet",
        className
      )}
    >
      {children}
    </a>
  );
}