import { motion } from "motion/react";
import { Fish, TropicalFish, Turtle, Jellyfish, Bubble } from "./OceanCreatures";

export default function OceanBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ minHeight: "100%" }}>
            {/* Light Rays */}
            <div className="absolute inset-0 opacity-[0.08]">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute top-0"
                        style={{
                            left: `${15 + i * 15}%`,
                            width: "80px",
                            height: "100%",
                            background: "linear-gradient(180deg, rgba(135,206,235,0.8) 0%, transparent 60%)",
                            transform: `rotate(${-10 + i * 4}deg)`,
                            transformOrigin: "top center",
                        }}
                    />
                ))}
            </div>

            {/* Bubbles */}
            <div className="absolute inset-0">
                <Bubble size={8} left="10%" delay={0} duration={15} />
                <Bubble size={12} left="25%" delay={5} duration={18} />
                <Bubble size={6} left="35%" delay={2} duration={14} />
                <Bubble size={14} left="55%" delay={4} duration={20} />
                <Bubble size={9} left="70%" delay={1} duration={16} />
                <Bubble size={7} left="85%" delay={6} duration={15} />
                <Bubble size={10} left="92%" delay={3} duration={17} />
                {/* Mid-level bubbles */}
                <Bubble size={5} left="40%" delay={8} duration={14} bottom="30%" />
                <Bubble size={11} left="15%" delay={7} duration={19} bottom="20%" />
                <Bubble size={8} left="80%" delay={2} duration={16} bottom="40%" />
                <Bubble size={6} left="60%" delay={9} duration={15} bottom="50%" />
                <Bubble size={13} left="30%" delay={4} duration={21} bottom="10%" />
            </div>

            {/* Upper Zone (Near Stats) */}
            <div className="absolute" style={{ top: "8%", left: "0", width: "100%" }}>
                <div className="animate-swim-right" style={{ animationDuration: "25s" }}>
                    <Fish color="#FF7F7F" size={50} />
                </div>
                <div className="animate-swim-left" style={{ animationDelay: "5s", animationDuration: "30s" }}>
                    <TropicalFish color="#87CEEB" accent="#4DB8DB" size={45} />
                </div>
            </div>

            <div className="absolute" style={{ top: "15%", left: "12%" }}>
                <motion.div
                    animate={{ y: [-20, 20, -20], x: [0, 15, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Jellyfish size={50} color="rgba(200, 162, 255, 0.4)" />
                </motion.div>
            </div>

            {/* Mid Zone (Near Problems) */}
            <div className="absolute" style={{ top: "35%", left: "0", width: "100%" }}>
                <div className="animate-turtle-glide" style={{ animationDelay: "2s", animationDuration: "45s" }}>
                    <Turtle size={110} />
                </div>
                <div className="animate-swim-right" style={{ animationDelay: "12s", animationDuration: "20s" }}>
                    <Fish color="#FFB74D" size={40} />
                </div>
            </div>

            <div className="absolute" style={{ top: "45%", right: "18%" }}>
                <motion.div
                    animate={{ y: [-15, 25, -15], x: [0, -10, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                >
                    <Jellyfish size={40} color="rgba(180, 220, 255, 0.3)" />
                </motion.div>
            </div>

            {/* Lower Zone (Near Featured Content) */}
            <div className="absolute" style={{ top: "65%", left: "0", width: "100%" }}>
                <div className="animate-swim-left" style={{ animationDelay: "4s", animationDuration: "28s" }}>
                    <TropicalFish color="#FFD700" accent="#FF6347" size={55} />
                </div>
                <div className="animate-swim-right" style={{ animationDelay: "8s", animationDuration: "22s" }}>
                    <Fish color="#66CDAA" size={45} />
                </div>
            </div>

            <div className="absolute" style={{ top: "75%", left: "0", width: "100%" }}>
                <div className="animate-swim-left" style={{ animationDelay: "15s", animationDuration: "26s" }}>
                    <TropicalFish color="#90EE90" accent="#2E8B57" size={40} />
                </div>
            </div>
        </div>
    );
}
