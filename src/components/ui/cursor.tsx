"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CursorProps {
  size: number;
}

const Cursor: React.FC<CursorProps> = ({ size }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="pointer-coarse:hidden"
      style={{
        position: "fixed",
        top: mousePosition.y - size / 2,
        left: mousePosition.x - size / 2,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      animate={{
        top: mousePosition.y - size / 2,
        left: mousePosition.x - size / 2,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.7)",
        }}
      />
    </motion.div>
  );
};

export default Cursor;