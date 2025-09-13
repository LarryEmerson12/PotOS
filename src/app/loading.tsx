"use client";

import React from "react";

export default function Loading() {
  return (
    <main className="bg-black w-screen h-screen flex flex-col items-center justify-center">
      <div className="grid-rows-2">
        <p>Installing PotOS</p>
        <p>Do not shut down your computer.</p>
      </div>
    </main>
  );
}
