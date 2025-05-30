"use client";

import React from "react";
import Image from "next/image";

export default function MenuApp() {
  return (
    <div className="absolute flex flex-col items-center justify-center bg-white/20 rounded-xl p-4 backdrop-blur-md">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/icons/potted-plant.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="mt-8 space-y-4">
        {/* Add your menu items here */}
      </div>
    </div>
  );
}