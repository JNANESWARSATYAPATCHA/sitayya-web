"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
