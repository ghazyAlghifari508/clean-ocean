import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Diver, Fish, Jellyfish, Bubble, CoralPlant, FishSchool, Turtle } from "./OceanCreatures";

// --- Interactive Wrappers ---
function InteractiveFish({ children, direction = "right" }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            className="pointer-events-auto cursor-pointer inline-block"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={isHovered ? {
                x: direction === "right" ? 150 : -150,
                y: -30,
                scale: 1.1,
                transition: { duration: 0.3, type: "spring" }
            } : {
                x: 0,
                y: 0,
                scale: 1,
                transition: { duration: 2, type: "spring" }
            }}
        >
            {children}
        </motion.div>
    );
}

function HoverJellyfish({ size, color }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            className="pointer-events-auto cursor-pointer inline-block"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={isHovered ? { scale: 1.15, y: -20 } : { scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Jellyfish size={size} color={color} glow={isHovered} />
        </motion.div>
    );
}

// --- Main Background Engine ---
export default function OceanBackground() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // 1. Global Background Color transitioning based on depth
    // Surface (Bright Blue) -> Reef (Teal) -> Mid (Indigo) -> Deep Canyon (Abyss)
    const bgColor = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        ["#0ea5e9", "#0369a1", "#1e1b4b", "#020617"]
    );

    // 2. Sunlight fading out as you go deeper
    const lightRaysOpacity = useTransform(scrollYProgress, [0, 0.25], [0.4, 0]);

    // 3. Diver following the scroll
    const diverY = useTransform(scrollYProgress, [0, 0.8, 1], ["20vh", "80vh", "120vh"]);
    const diverScale = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
    const diverRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 10, -5]);

    return (
        <>
            {/* Base Color Background */}
            <motion.div
                className="fixed inset-0 pointer-events-none"
                style={{ backgroundColor: bgColor, zIndex: -2 }}
            />

            {/* Scrollable Container covering the whole page length */}
            <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ minHeight: "100%" }}>

                {/* --- THE DIVER (Fixed to viewport but scroll driven) --- */}
                <motion.div
                    className="fixed left-1/2 -translate-x-1/2 z-0"
                    style={{ y: diverY, scale: diverScale, rotate: diverRotate }}
                >
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Diver size={180} />
                    </motion.div>
                </motion.div>

                {/* --- SECTION 2: SHALLOW REEF (Top 0-30%) --- */}
                {/* Surface Light Rays */}
                <motion.div className="absolute top-0 inset-x-0 h-[80vh] flex justify-center gap-10 opacity-60" style={{ opacity: lightRaysOpacity }}>
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="w-32 h-[120%] mix-blend-screen"
                            style={{
                                background: "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)",
                                transform: `rotate(${-15 + i * 5}deg) translateY(-10%)`,
                                transformOrigin: "top center",
                                filter: "blur(8px)",
                            }}
                        />
                    ))}
                </motion.div>

                {/* Parallax Reef Elements */}
                <div className="absolute" style={{ top: "15%", left: "0", width: "100%" }}>
                    {/* Background Parallax Plants */}
                    <motion.div className="absolute left-[5%]" style={{ y: useTransform(scrollYProgress, [0.1, 0.4], [100, -200]) }}>
                        <CoralPlant size={200} />
                    </motion.div>
                    <motion.div className="absolute right-[5%]" style={{ y: useTransform(scrollYProgress, [0.1, 0.5], [200, -300]) }}>
                        <CoralPlant size={280} className="scale-x-[-1]" />
                    </motion.div>

                    {/* Swimming Fish (Shallow) */}
                    <div className="animate-swim-right" style={{ animationDuration: "25s", top: "50px", position: "relative" }}>
                        <InteractiveFish direction="right">
                            <Fish type={1} hue={0} size={150} />
                        </InteractiveFish>
                    </div>
                    <div className="animate-swim-left" style={{ animationDelay: "5s", animationDuration: "30s", top: "150px", position: "relative" }}>
                        <InteractiveFish direction="left">
                            <Fish type={2} hue={180} size={100} className="scale-x-[-1]" />
                        </InteractiveFish>
                    </div>
                </div>

                {/* --- SECTION 4: MID OCEAN (Top 30-70%) --- */}
                <div className="absolute" style={{ top: "45%", left: "0", width: "100%" }}>
                    {/* Floating Jellyfish */}
                    <div className="absolute" style={{ top: "0%", left: "20%" }}>
                        <motion.div animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
                            <HoverJellyfish size={120} color="#c084fc" />
                        </motion.div>
                    </div>

                    <div className="absolute" style={{ top: "200px", right: "25%" }}>
                        <motion.div animate={{ y: [-15, 25, -15], x: [10, -10, 10] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
                            <HoverJellyfish size={90} color="#60a5fa" />
                        </motion.div>
                    </div>

                    <div className="absolute" style={{ top: "500px", left: "15%" }}>
                        <motion.div animate={{ y: [-25, 15, -25] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}>
                            <HoverJellyfish size={150} color="#f472b6" />
                        </motion.div>
                    </div>

                    {/* Slower deeper fish */}
                    <div className="animate-swim-right" style={{ animationDelay: "8s", animationDuration: "40s", top: "300px", position: "relative" }}>
                        <InteractiveFish direction="right">
                            <Turtle size={200} />
                        </InteractiveFish>
                    </div>
                </div>

                {/* --- SECTION 5: DEEP CANYON (Top 70-100%) --- */}
                <div className="absolute" style={{ top: "75%", left: "0", width: "100%", height: "25%" }}>
                    {/* Canyon Walls */}
                    <div className="absolute left-0 bottom-0 w-[40%] h-[150%] bg-[#0f172a] rounded-tr-[100px] blur-[2px] opacity-80 mix-blend-multiply flex items-end">
                        <CoralPlant size={300} className="ml-10 mb-20 opacity-30" />
                    </div>
                    <div className="absolute right-0 bottom-0 w-[30%] h-[120%] bg-[#020617] rounded-tl-[150px] blur-[4px] opacity-90 mix-blend-multiply flex items-end justify-end">
                        <CoralPlant size={250} className="mr-10 mb-10 opacity-40 scale-x-[-1]" />
                    </div>

                    {/* Bioluminescent Plankton */}
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-cyan-400 blur-[2px]"
                            style={{
                                width: Math.random() * 6 + 2,
                                height: Math.random() * 6 + 2,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                boxShadow: "0 0 10px rgba(34, 211, 238, 0.8)"
                            }}
                            animate={{ opacity: [0, 0.8, 0], y: [0, -50, 0], x: [0, Math.random() * 40 - 20, 0] }}
                            transition={{ duration: 4 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 5 }}
                        />
                    ))}

                    {/* Deep sea light beam */}
                    <div className="absolute left-[30%] top-[-20%] w-[40%] h-[140%] bg-gradient-to-b from-transparent via-[#0ea5e9]/10 to-transparent mix-blend-screen rotate-12 blur-3xl pointer-events-none" />
                </div>

                {/* --- BOTTOM SCHOOL OF FISH --- */}
                <div className="absolute w-full pointer-events-none" style={{ bottom: "0", height: "600px", zIndex: 0 }}>
                    <FishSchool className="opacity-40" />
                </div>

                {/* --- GLOBAL BUBBLES --- */}
                <div className="absolute inset-0">
                    <Bubble size={12} left="15%" delay={0} duration={15} />
                    <Bubble size={20} left="35%" delay={5} duration={18} />
                    <Bubble size={10} left="65%" delay={2} duration={12} bottom="10%" />
                    <Bubble size={25} left="75%" delay={4} duration={20} />
                    <Bubble size={8} left="85%" delay={1} duration={14} bottom="40%" />
                    <Bubble size={16} left="10%" delay={7} duration={17} bottom="30%" />
                    <Bubble size={14} left="50%" delay={3} duration={16} bottom="60%" />
                </div>

            </div>
        </>
    );
}