"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`bg-white text-black py-1 px-2 rounded-xl hover:bg-gray-400 transition-colors duration-200 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
