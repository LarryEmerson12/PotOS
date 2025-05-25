"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
} from "@tabler/icons-react";

export default function Home() {
  const links = [
    {
      title: "Menu",
      icon: (
        <img
          src="/icons/potted-plant.png"
          width={20}
          height={20}
          alt="Menu Icon"
        />
      ),
      href: "#",
    },

    {
      title: "Launchpad",
      icon: (
        <img
          src="/icons/launchpad.png"
          width={20}
          height={20}
          alt="Files Icon"
        />
      ),
      href: "#",
    },
    {
      title: "Files",
      icon: (
        <img
          src="/icons/files.png"
          width={20}
          height={20}
          alt="Files Icon"
        />
      ),
      href: "#",
    },
    {
      title: "Browser",
      icon: (
        <img
          src="/icons/browser.png"
          width={20}
          height={20}
          alt="Browser Icon"
        />
      ),
      href: "#",
    },
    {
      title: "Camera",
      icon: (
        <img
          src="/icons/camera.png"
          width={20}
          height={20}
          alt="Camera Icon"
        />
      ),
      href: "#",
    },

    {
      title: "Notes",
      icon: (
        <img
          src="/icons/notes.png"
          width={20}
          height={20}
          alt="Notes Icon"
        />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub size={20} />
      ),
      href: "#",
    },
  ];
  return (
    <main
      style={{ backgroundImage: `url(/Wallpaper.jpg)` }}
      className="min-h-screen bg-cover bg-center p-4 flex justify-center items-end"
    >
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </main>
  );
}
