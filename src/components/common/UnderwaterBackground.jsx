import { useState } from "react";
import { motion } from "motion/react";
import { Bubble, Jellyfish, Coral, Seaweed } from "../home/OceanCreatures";

/* ── tiny interactive wrappers (same pattern as OceanBackground) ── */
function FloatingJelly({ size, color, x, y, delay = 0 }) {
    const [hovered, setHovered] = useState(false);
    return (
        <motion.div
            className="absolute pointer-events-auto cursor-pointer"
            style={{ left: x, top: y }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            animate={
                hovered
                    ? { scale: 1.2, y: -15, transition: { type: "spring" } }
                    : { scale: 1, y: 0, transition: { duration: 2 } }
            }
        >
            <motion.div
                animate={{ y: [-15, 15, -15], x: [-8, 8, -8] }}
                transition={{
                    duration: 8 + delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                }}
            >
                <Jellyfish size={size} color={color} glow={hovered} />
            </motion.div>
        </motion.div>
    );
}

function SwimmingFishSVG({ delay = 0, y = "30%", direction = "right", hue = 0 }) {
    const isRight = direction === "right";
    return (
        <motion.div
            className="absolute"
            style={{ top: y }}
            initial={{ x: isRight ? "-120px" : "calc(100vw + 120px)" }}
            animate={{ x: isRight ? "calc(100vw + 120px)" : "-120px" }}
            transition={{
                duration: 22 + delay * 3,
                repeat: Infinity,
                ease: "linear",
                delay,
            }}
        >
            {/* Simple stylised SVG fish */}
            <svg
                width="60"
                height="36"
                viewBox="0 0 60 36"
                fill="none"
                style={{
                    transform: isRight ? "scaleX(1)" : "scaleX(-1)",
                    filter: `hue-rotate(${hue}deg)`,
                }}
            >
                <ellipse cx="28" cy="18" rx="22" ry="13" fill="#4DB8DB" opacity="0.8" />
                <polygon
                    points="50,18 60,8 60,28"
                    fill="#1A8FB5"
                    opacity="0.7"
                />
                <circle cx="18" cy="15" r="3" fill="#fff" opacity="0.9" />
                <circle cx="18" cy="15" r="1.5" fill="#063B52" />
                <path
                    d="M30,10 Q35,18 30,26"
                    stroke="#0C5F7F"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.5"
                />
            </svg>
        </motion.div>
    );
}

/* ── variant configs ── */
const VARIANTS = {
    shallow: {
        gradient: "linear-gradient(180deg, #0ea5e9 0%, #0369a1 30%, #0C5F7F 60%, #063B52 100%)",
        jellies: [
            { size: 60, color: "#c084fc", x: "80%", y: "20%", delay: 0 },
            { size: 45, color: "#60a5fa", x: "12%", y: "55%", delay: 3 },
        ],
        fish: [
            { delay: 0, y: "15%", direction: "right", hue: 0 },
            { delay: 6, y: "45%", direction: "left", hue: 120 },
            { delay: 12, y: "75%", direction: "right", hue: 200 },
        ],
        showLightRays: true,
        bubbleCount: 6,
    },
    mid: {
        gradient: "linear-gradient(180deg, #0369a1 0%, #0C5F7F 35%, #063B52 70%, #042A3B 100%)",
        jellies: [
            { size: 70, color: "#a855f7", x: "75%", y: "30%", delay: 1 },
            { size: 50, color: "#f472b6", x: "8%", y: "60%", delay: 4 },
        ],
        fish: [
            { delay: 2, y: "20%", direction: "left", hue: 40 },
            { delay: 8, y: "55%", direction: "right", hue: 180 },
        ],
        showLightRays: false,
        bubbleCount: 5,
    },
    deep: {
        gradient: "linear-gradient(180deg, #0C5F7F 0%, #063B52 30%, #042A3B 65%, #020617 100%)",
        jellies: [
            { size: 80, color: "#c084fc", x: "70%", y: "25%", delay: 2 },
            { size: 55, color: "#60a5fa", x: "15%", y: "50%", delay: 5 },
            { size: 40, color: "#f472b6", x: "85%", y: "70%", delay: 0 },
        ],
        fish: [
            { delay: 4, y: "35%", direction: "right", hue: 60 },
        ],
        showLightRays: false,
        bubbleCount: 7,
    },
};

/* ── bubbles array (deterministic) ── */
const BUBBLE_SEEDS = [
    { size: 14, left: "10%", delay: 0, duration: 14 },
    { size: 20, left: "25%", delay: 4, duration: 18 },
    { size: 10, left: "40%", delay: 2, duration: 12 },
    { size: 18, left: "55%", delay: 6, duration: 16 },
    { size: 12, left: "70%", delay: 1, duration: 15 },
    { size: 22, left: "82%", delay: 3, duration: 20 },
    { size: 8, left: "93%", delay: 5, duration: 13 },
];

/**
 * Reusable animated underwater background for non-home pages.
 * @param {"shallow"|"mid"|"deep"} variant
 */
export default function UnderwaterBackground({ variant = "shallow" }) {
    const cfg = VARIANTS[variant] || VARIANTS.shallow;

    return (
        <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ zIndex: 0 }}
        >
            {/* Gradient fill */}
            <div className="absolute inset-0" style={{ background: cfg.gradient }} />

            {/* Light rays (shallow only) */}
            {cfg.showLightRays && (
                <div className="absolute top-0 inset-x-0 h-[60vh] flex justify-center gap-12 opacity-30 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="w-28 h-[120%]"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",
                                transform: `rotate(${-12 + i * 6}deg) translateY(-10%)`,
                                transformOrigin: "top center",
                                filter: "blur(10px)",
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Swimming fish */}
            {cfg.fish.map((f, i) => (
                <SwimmingFishSVG key={`fish-${i}`} {...f} />
            ))}

            {/* Floating jellyfish */}
            {cfg.jellies.map((j, i) => (
                <FloatingJelly key={`jelly-${i}`} {...j} />
            ))}

            {/* Rising bubbles */}
            <div className="absolute inset-0 pointer-events-none">
                {BUBBLE_SEEDS.slice(0, cfg.bubbleCount).map((b, i) => (
                    <Bubble key={`bub-${i}`} {...b} />
                ))}
            </div>

            {/* Bottom coral / seaweed decorations */}
            <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
                <div className="absolute bottom-0 left-[5%] animate-sway origin-bottom">
                    <Seaweed height={100} color="#2E8B57" />
                </div>
                <div className="absolute bottom-0 left-[15%]">
                    <Coral size={50} color="#FF7F7F" />
                </div>
                <div className="absolute bottom-0 right-[8%] animate-sway-slow origin-bottom">
                    <Seaweed height={120} color="#3CB371" />
                </div>
                <div className="absolute bottom-0 right-[18%]">
                    <Coral size={60} color="#FF9F6F" />
                </div>
            </div>
        </div>
    );
}
