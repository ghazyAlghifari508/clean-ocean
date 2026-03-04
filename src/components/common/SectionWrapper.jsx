import { motion } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export default function SectionWrapper({ children, className = "", id = "" }) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`section-padding ${className}`}
    >
      <div className="container-custom">{children}</div>
    </motion.section>
  );
}
