"use client";

import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <main className="bg-black w-screen h-screen flex flex-col items-center justify-center">
      <div className="grid-rows-2">
        <Image
          src="/icons/droplet.png"
          width={50}
          height={50}
          alt="Droplet"
          className="animate-bounce mx-auto"
        />
        <Image
          src="/icons/potted-plant.png"
          width={100}
          height={100}
          alt="Potted Plant"
        />
      </div>
    </main>
  );
}
