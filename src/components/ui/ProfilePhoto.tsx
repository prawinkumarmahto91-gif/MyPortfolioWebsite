"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";

export function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="rounded-2xl bg-gradient-to-br from-violet to-blue p-[2px] shadow-[0_0_60px_-15px] shadow-violet/50">
      <div className="relative h-60 w-60 overflow-hidden rounded-[14px] bg-surface sm:h-72 sm:w-72 lg:h-80 lg:w-80">
        {failed ? (
          <div className="flex h-full w-full items-center justify-center text-6xl font-bold text-gradient">
            PK
          </div>
        ) : (
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 288px, 240px"
            className="object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}