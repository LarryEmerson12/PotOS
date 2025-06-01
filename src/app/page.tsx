"use client";

import React, { useEffect, useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub } from "@tabler/icons-react";
import Loading from "./loading";
import Cursor from "@/components/ui/cursor";
import MenuApp from "@/components/apps/menu-app";
import FilesApp from "@/components/apps/files-app";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  // Here is the states for the apps
  const [menuAppOpen, setMenuAppOpen] = useState(false);
  const [filesAppOpen, setFilesAppOpen] = useState(false);

  const links = [
    {
      title: "Menu",
      icon: (
        <img
          src="/icons/icons/potted-plant.png"
          width={20}
          height={20}
          alt="Menu Icon"
        />
      ),
      onClick: () => setMenuAppOpen(!menuAppOpen),
    },
    {
      title: "Launchpad",
      icon: (
        <img
          src="/icons/app/launchpad.png"
          width={20}
          height={20}
          alt="Launchpad Icon"
        />
      ),
      onClick: () => {},
    },
    {
      title: "Files",
      icon: (
        <img
          src="/icons/app/files.png"
          width={20}
          height={20}
          alt="Files Icon"
        />
      ),
      onClick: () => setFilesAppOpen(!filesAppOpen),
    },
    {
      title: "Browser",
      icon: (
        <img
          src="/icons/app/browser.png"
          width={20}
          height={20}
          alt="Browser Icon"
        />
      ),
      onClick: () => {},
    },
    {
      title: "Camera",
      icon: (
        <img
          src="/icons/app/camera.png"
          width={20}
          height={20}
          alt="Camera Icon"
        />
      ),
      onClick: () => {},
    },
    {
      title: "Notes",
      icon: (
        <img
          src="/icons/app/notes.png"
          width={20}
          height={20}
          alt="Notes Icon"
        />
      ),
      onClick: () => {},
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub size={20} />,
      onClick: () =>
        window.open("https://github.com/LarryEmerson12/PotOS", "_blank"),
    },
  ];

  if (loading) {
    return <Loading />;
  }

  return (
    <main
      style={{ backgroundImage: `url(/Wallpaper.jpg)` }}
      className="min-h-screen bg-cover bg-center p-4 flex justify-center items-end"
    >
      <Cursor size={20} />
      {menuAppOpen && <MenuApp />}
      {filesAppOpen && <FilesApp />}
      <FloatingDock items={links} />
    </main>
  );
}
