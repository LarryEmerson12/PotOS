import React, { ReactNode } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    <span className="relative group inline-block">
      {children}
      <span
        className="
          absolute left-1/2 bottom-full mb-1
          -translate-x-1/2
          px-2 py-0.5
          text-xs rounded bg-neutral-900 text-white
          opacity-0 group-hover:opacity-100
          pointer-events-none
          transition-opacity duration-150
          whitespace-nowrap
          z-50
        "
        style={{ fontSize: "10px", minWidth: "auto" }}
      >
        {content}
      </span>
    </span>
  );
};

export default Tooltip;