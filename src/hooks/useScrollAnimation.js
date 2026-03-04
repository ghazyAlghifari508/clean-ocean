import { useRef } from "react";
import { useInView } from "motion/react";

export function useScrollAnimation(options = {}) {
  const { once = true, margin = "-100px" } = options;
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });
  return { ref, isInView };
}
