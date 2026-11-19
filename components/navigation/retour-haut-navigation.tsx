"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RetourHautNavigation() {
  const chemin = usePathname();

  useEffect(() => {
    const animation = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(animation);
  }, [chemin]);

  return null;
}
