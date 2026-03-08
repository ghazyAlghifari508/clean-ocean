import { motion } from "motion/react";
import Lottie from "lottie-react";
import fishAnim1 from "../../assets/banyak_ikan.json";
import fishAnim2 from "../../assets/fish1.json";
import turtleAnim from "../../assets/Turtle.json";
import fishSchoolAnim from "../../assets/fish_school.json";

// --- Lottie Components ---

export function Fish({ type = 1, size = 120, className = "", hue = 0 }) {
    const animationData = type === 2 ? fishAnim2 : fishAnim1;

    return (
        <div
            style={{
                width: size,
                transform: "scaleX(-1)",
                filter: `hue-rotate(${hue}deg)`
            }}
            className={className}
        >
            <Lottie animationData={animationData} loop={true} />
        </div>
    );
}

export function FishSchool({ className = "" }) {
    return (
        <div className={`w-full h-full ${className}`}>
            <Lottie
                animationData={fishSchoolAnim}
                loop={true}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
}

export function Turtle({ size = 150, className = "" }) {
    return (
        <div style={{ width: size }} className={className}>
            <Lottie animationData={turtleAnim} loop={true} />
        </div>
    );
}

// --- SVG Components ---

export function Diver({ size = 120, style, className = "" }) {
    return (
        <svg width={size} height={size * 1.5} viewBox="0 0 100 150" fill="none" style={style} className={`drop-shadow-2xl ${className}`}>
            <defs>
                <linearGradient id="wetsuit" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fcd34d" />
                    <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
                <linearGradient id="tank" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="flipper" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
            </defs>

            {/* Scuba Tank */}
            <rect x="35" y="20" width="30" height="60" rx="15" fill="url(#tank)" />
            <rect x="45" y="15" width="10" height="8" rx="2" fill="#94a3b8" />

            {/* Main Body (Wetsuit) */}
            <path d="M30 40 Q50 35 70 40 L75 80 Q50 90 25 80 Z" fill="url(#wetsuit)" />

            {/* Head & Mask */}
            <circle cx="50" cy="25" r="15" fill="url(#skin)" />
            <rect x="35" y="18" width="30" height="12" rx="6" fill="#0ea5e9" opacity="0.9" />
            <path d="M40 22 Q50 25 60 22" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

            {/* Arms */}
            <path d="M25 45 Q10 60 15 80" stroke="url(#wetsuit)" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M75 45 Q90 60 85 80" stroke="url(#wetsuit)" strokeWidth="12" strokeLinecap="round" fill="none" />

            {/* Legs */}
            <path d="M40 80 L35 110" stroke="url(#wetsuit)" strokeWidth="14" strokeLinecap="round" />
            <path d="M60 80 L65 110" stroke="url(#wetsuit)" strokeWidth="14" strokeLinecap="round" />

            {/* Flippers */}
            <path d="M25 110 L45 110 L50 145 L20 145 Z" fill="url(#flipper)" />
            <path d="M55 110 L75 110 L80 145 L50 145 Z" fill="url(#flipper)" />

            {/* Bubbles */}
            <circle cx="50" cy="10" r="4" fill="#fff" opacity="0.6" />
            <circle cx="60" cy="5" r="3" fill="#fff" opacity="0.5" />
            <circle cx="42" cy="0" r="5" fill="#fff" opacity="0.4" />
        </svg>
    )
}

export function Jellyfish({ size = 80, color = "#a855f7", glow = true, style, className = "" }) {
    return (
        <svg width={size} height={size * 1.5} viewBox="0 0 100 150" fill="none" style={style} className={`${glow ? 'drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]' : 'drop-shadow-lg'} ${className} transition-all duration-500`}>
            <defs>
                <radialGradient id="jellyHead" cx="50%" cy="30%" r="50%">
                    <stop offset="0%" stopColor="#e9d5ff" />
                    <stop offset="70%" stopColor={color} />
                    <stop offset="100%" stopColor="#581c87" />
                </radialGradient>
            </defs>
            {/* Inner Bell */}
            <path d="M25 60 Q50 20 75 60 Z" fill="#fff" opacity="0.6" />
            {/* Outer Bell */}
            <path d="M10 60 Q50 0 90 60 Q50 70 10 60 Z" fill="url(#jellyHead)" opacity="0.85" />
            {/* Tentacles */}
            <path d="M25 65 Q20 100 30 140" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
            <path d="M40 65 Q45 110 35 150" stroke={color} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6" />
            <path d="M60 65 Q55 110 65 150" stroke="#e9d5ff" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8" />
            <path d="M75 65 Q80 100 70 140" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
            {/* Highlights */}
            <path d="M20 40 Q50 10 80 40" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
        </svg>
    );
}

export function CoralPlant({ size = 100, style, className = "" }) {
    return (
        <svg width={size} height={size * 1.5} viewBox="0 0 100 150" fill="none" style={style} className={`drop-shadow-xl ${className}`}>
            <defs>
                <linearGradient id="coralStem" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#064e3b" />
                    <stop offset="50%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
            </defs>
            {/* Stems */}
            <path d="M50 150 Q40 100 20 50 Q10 20 30 10" stroke="url(#coralStem)" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M50 150 Q60 120 80 80 Q90 50 70 30" stroke="url(#coralStem)" strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M50 150 Q50 90 50 40 Q50 20 50 5" stroke="url(#coralStem)" strokeWidth="14" strokeLinecap="round" fill="none" />

            {/* Leaves/Tips */}
            <circle cx="30" cy="10" r="8" fill="#a7f3d0" />
            <circle cx="70" cy="30" r="7" fill="#a7f3d0" />
            <circle cx="50" cy="5" r="9" fill="#a7f3d0" />
        </svg>
    )
}

export function Bubble({ size, left, delay, duration, bottom = "-10%" }) {
    return (
        <div
            className="absolute rounded-full"
            style={{
                width: size,
                height: size,
                left: left,
                bottom: bottom,
                background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1))",
                boxShadow: "inset 0 0 10px rgba(255,255,255,0.5)",
                animation: `bubbleRise ${duration}s ease-in ${delay}s infinite`,
            }}
        />
    );
}

export function Seaweed({ height = 120, color = "#2E8B57", style, className = "" }) {
    return (
        <svg width="30" height={height} viewBox="0 0 30 120" fill="none" style={style} className={`drop-shadow-lg ${className}`}>
            <path d="M15,120 Q5,100 15,80 Q25,60 15,40 Q5,20 15,0" stroke={color} strokeWidth="6" fill="none" opacity="0.8" strokeLinecap="round" />
            <path d="M15,100 Q22,90 20,80" stroke={color} strokeWidth="4" fill="none" opacity="0.6" strokeLinecap="round" />
        </svg>
    );
}

export function Shell({ size = 35, style, className = "" }) {
    return (
        <svg width={size} height={size * 0.7} viewBox="0 0 50 35" fill="none" style={style} className={`drop-shadow-md ${className}`}>
            <path d="M5,30 Q25,-5 45,30 Z" fill="#F5E6CA" opacity="0.9" />
            <path d="M10,28 L25,5" stroke="#DCC8A0" strokeWidth="1" opacity="0.8" />
            <path d="M20,28 L25,5" stroke="#DCC8A0" strokeWidth="1" opacity="0.8" />
            <path d="M30,28 L25,5" stroke="#DCC8A0" strokeWidth="1" opacity="0.8" />
            <path d="M40,28 L25,5" stroke="#DCC8A0" strokeWidth="1" opacity="0.8" />
        </svg>
    );
}

export function Starfish({ size = 40, style, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 50 50" fill="none" style={style} className={`drop-shadow-lg ${className}`}>
            <polygon points="25,2 29,18 46,18 32,28 37,45 25,35 13,45 18,28 4,18 21,18" fill="#FF7F7F" opacity="0.9" />
            <polygon points="25,8 28,18 40,18 30,25 34,38 25,31 16,38 20,25 10,18 22,18" fill="#FF9F9F" opacity="0.7" />
        </svg>
    );
}

export function Lobster({ size = 60, style, className = "" }) {
    return (
        <svg width={size} height={size * 0.5} viewBox="0 0 100 50" fill="none" style={style} className={`drop-shadow-xl ${className}`}>
            <ellipse cx="50" cy="30" rx="25" ry="12" fill="#CD5C5C" opacity="0.95" />
            <ellipse cx="50" cy="30" rx="18" ry="8" fill="#E07070" opacity="0.7" />
            <ellipse cx="78" cy="28" rx="10" ry="8" fill="#CD5C5C" opacity="1" />
            <circle cx="83" cy="24" r="2" fill="#fff" opacity="0.8" />
            <circle cx="83" cy="24" r="1" fill="#063B52" />
            <path d="M85,22 Q95,10 100,5" stroke="#CD5C5C" strokeWidth="1.5" fill="none" opacity="0.9" />
            <path d="M85,20 Q90,8 88,2" stroke="#CD5C5C" strokeWidth="1.5" fill="none" opacity="0.9" />
            <path d="M25,28 L10,18" stroke="#CD5C5C" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
            <ellipse cx="7" cy="15" rx="7" ry="5" fill="#CD5C5C" opacity="0.9" transform="rotate(-20 7 15)" />
            <path d="M25,32 L12,40" stroke="#CD5C5C" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
            <ellipse cx="9" cy="43" rx="7" ry="5" fill="#CD5C5C" opacity="0.9" transform="rotate(20 9 43)" />
            <polygon points="25,30 15,25 15,35" fill="#CD5C5C" opacity="0.8" />
            <line x1="40" y1="40" x2="35" y2="48" stroke="#CD5C5C" strokeWidth="1.5" opacity="0.8" />
            <line x1="50" y1="42" x2="50" y2="50" stroke="#CD5C5C" strokeWidth="1.5" opacity="0.8" />
            <line x1="60" y1="40" x2="65" y2="48" stroke="#CD5C5C" strokeWidth="1.5" opacity="0.8" />
        </svg>
    );
}

export function Coral({ size = 70, color = "#FF7F7F", style, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 70 70" fill="none" style={style} className={`drop-shadow-xl ${className}`}>
            <path d="M35,70 Q30,50 20,35 Q15,25 10,15" stroke={color} strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.85" />
            <path d="M35,70 Q38,45 35,30 Q33,20 35,10" stroke={color} strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.85" />
            <path d="M35,70 Q40,50 50,35 Q55,25 60,15" stroke={color} strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.85" />
            <circle cx="10" cy="15" r="5" fill={color} opacity="0.7" />
            <circle cx="35" cy="10" r="5" fill={color} opacity="0.7" />
            <circle cx="60" cy="15" r="5" fill={color} opacity="0.7" />
            <path d="M25,42 Q18,35 12,30" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
            <circle cx="12" cy="30" r="3" fill={color} opacity="0.7" />
            <path d="M45,42 Q52,35 58,30" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
            <circle cx="58" cy="30" r="3" fill={color} opacity="0.7" />
        </svg>
    );
}
