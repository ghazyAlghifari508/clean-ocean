import { motion } from "motion/react";

export function Fish({ color = "#FF7F7F", size = 50, style, className = "" }) {
    return (
        <svg width={size} height={size * 0.55} viewBox="0 0 100 55" fill="none" style={style} className={className}>
            <ellipse cx="45" cy="27" rx="35" ry="18" fill={color} opacity="0.9" />
            <polygon points="80,27 100,10 100,44" fill={color} opacity="0.85" />
            <circle cx="25" cy="22" r="3" fill="#fff" />
            <circle cx="25" cy="22" r="1.5" fill="#063B52" />
            <path d="M15 27 Q25 32, 35 27" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
            <ellipse cx="50" cy="12" rx="10" ry="6" fill={color} opacity="0.7" transform="rotate(-15 50 12)" />
        </svg>
    );
}

export function TropicalFish({ color = "#FFD700", accent = "#FF6347", size = 45, style, className = "" }) {
    return (
        <svg width={size} height={size * 0.7} viewBox="0 0 90 63" fill="none" style={style} className={className}>
            <ellipse cx="40" cy="32" rx="28" ry="22" fill={color} opacity="0.9" />
            <polygon points="68,32 88,15 88,49" fill={accent} opacity="0.8" />
            <circle cx="22" cy="26" r="3.5" fill="#fff" />
            <circle cx="22" cy="26" r="1.8" fill="#063B52" />
            <rect x="32" y="12" width="4" height="40" rx="2" fill={accent} opacity="0.5" transform="rotate(5 34 32)" />
            <rect x="42" y="14" width="3" height="36" rx="1.5" fill={accent} opacity="0.4" transform="rotate(5 43 32)" />
            <ellipse cx="38" cy="10" rx="12" ry="7" fill={accent} opacity="0.6" />
        </svg>
    );
}

export function Turtle({ size = 90, style, className = "" }) {
    return (
        <svg width={size} height={size * 0.6} viewBox="0 0 120 72" fill="none" style={style} className={className}>
            <ellipse cx="60" cy="38" rx="32" ry="22" fill="#2E8B57" opacity="0.85" />
            <ellipse cx="60" cy="38" rx="24" ry="16" fill="#3CB371" opacity="0.6" />
            <path d="M48 28 L60 22 L72 28" stroke="#2E8B57" strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M45 38 L60 32 L75 38" stroke="#2E8B57" strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M48 48 L60 42 L72 48" stroke="#2E8B57" strokeWidth="2" fill="none" opacity="0.5" />
            <ellipse cx="95" cy="34" rx="12" ry="8" fill="#66CDAA" opacity="0.9" />
            <circle cx="102" cy="31" r="2" fill="#063B52" />
            <ellipse cx="40" cy="22" rx="15" ry="5" fill="#66CDAA" opacity="0.7" transform="rotate(-30 40 22)" />
            <ellipse cx="40" cy="54" rx="15" ry="5" fill="#66CDAA" opacity="0.7" transform="rotate(30 40 54)" />
            <ellipse cx="80" cy="22" rx="12" ry="4" fill="#66CDAA" opacity="0.7" transform="rotate(20 80 22)" />
            <ellipse cx="80" cy="54" rx="12" ry="4" fill="#66CDAA" opacity="0.7" transform="rotate(-20 80 54)" />
            <polygon points="28,38 18,34 18,42" fill="#66CDAA" opacity="0.7" />
        </svg>
    );
}

export function Jellyfish({ size = 55, color = "#E0B0FF", style, className = "" }) {
    return (
        <svg width={size} height={size * 1.4} viewBox="0 0 60 84" fill="none" style={style} className={className}>
            <path d="M5,45 Q5,5 30,5 Q55,5 55,45 Z" fill={color} opacity="0.5" />
            <path d="M10,42 Q10,12 30,12 Q50,12 50,42 Z" fill={color} opacity="0.3" />
            <path d="M15,45 Q12,60 18,75" stroke={color} strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M25,45 Q22,62 28,80" stroke={color} strokeWidth="2" fill="none" opacity="0.4" />
            <path d="M35,45 Q38,62 32,80" stroke={color} strokeWidth="2" fill="none" opacity="0.4" />
            <path d="M45,45 Q48,60 42,75" stroke={color} strokeWidth="2" fill="none" opacity="0.5" />
        </svg>
    );
}

export function Seaweed({ height = 120, color = "#2E8B57", style, className = "" }) {
    return (
        <svg width="30" height={height} viewBox="0 0 30 120" fill="none" style={style} className={className}>
            <path d="M15,120 Q5,100 15,80 Q25,60 15,40 Q5,20 15,0" stroke={color} strokeWidth="6" fill="none" opacity="0.7" strokeLinecap="round" />
            <path d="M15,100 Q22,90 20,80" stroke={color} strokeWidth="4" fill="none" opacity="0.5" strokeLinecap="round" />
        </svg>
    );
}

export function Shell({ size = 35, style, className = "" }) {
    return (
        <svg width={size} height={size * 0.7} viewBox="0 0 50 35" fill="none" style={style} className={className}>
            <path d="M5,30 Q25,-5 45,30 Z" fill="#F5E6CA" opacity="0.8" />
            <path d="M10,28 L25,5" stroke="#DCC8A0" strokeWidth="1" opacity="0.6" />
            <path d="M20,28 L25,5" stroke="#DCC8A0" strokeWidth="1" opacity="0.6" />
            <path d="M30,28 L25,5" stroke="#DCC8A0" strokeWidth="1" opacity="0.6" />
            <path d="M40,28 L25,5" stroke="#DCC8A0" strokeWidth="1" opacity="0.6" />
        </svg>
    );
}

export function Starfish({ size = 40, style, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 50 50" fill="none" style={style} className={className}>
            <polygon points="25,2 29,18 46,18 32,28 37,45 25,35 13,45 18,28 4,18 21,18" fill="#FF7F7F" opacity="0.8" />
            <polygon points="25,8 28,18 40,18 30,25 34,38 25,31 16,38 20,25 10,18 22,18" fill="#FF9F9F" opacity="0.5" />
        </svg>
    );
}

export function Lobster({ size = 60, style, className = "" }) {
    return (
        <svg width={size} height={size * 0.5} viewBox="0 0 100 50" fill="none" style={style} className={className}>
            <ellipse cx="50" cy="30" rx="25" ry="12" fill="#CD5C5C" opacity="0.85" />
            <ellipse cx="50" cy="30" rx="18" ry="8" fill="#E07070" opacity="0.5" />
            <ellipse cx="78" cy="28" rx="10" ry="8" fill="#CD5C5C" opacity="0.9" />
            <circle cx="83" cy="24" r="2" fill="#fff" opacity="0.8" />
            <circle cx="83" cy="24" r="1" fill="#063B52" />
            <path d="M85,22 Q95,10 100,5" stroke="#CD5C5C" strokeWidth="1.5" fill="none" opacity="0.7" />
            <path d="M85,20 Q90,8 88,2" stroke="#CD5C5C" strokeWidth="1.5" fill="none" opacity="0.7" />
            <path d="M25,28 L10,18" stroke="#CD5C5C" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            <ellipse cx="7" cy="15" rx="7" ry="5" fill="#CD5C5C" opacity="0.8" transform="rotate(-20 7 15)" />
            <path d="M25,32 L12,40" stroke="#CD5C5C" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            <ellipse cx="9" cy="43" rx="7" ry="5" fill="#CD5C5C" opacity="0.8" transform="rotate(20 9 43)" />
            <polygon points="25,30 15,25 15,35" fill="#CD5C5C" opacity="0.7" />
            <line x1="40" y1="40" x2="35" y2="48" stroke="#CD5C5C" strokeWidth="1.5" opacity="0.6" />
            <line x1="50" y1="42" x2="50" y2="50" stroke="#CD5C5C" strokeWidth="1.5" opacity="0.6" />
            <line x1="60" y1="40" x2="65" y2="48" stroke="#CD5C5C" strokeWidth="1.5" opacity="0.6" />
        </svg>
    );
}

export function Coral({ size = 70, color = "#FF7F7F", style, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 70 70" fill="none" style={style} className={className}>
            <path d="M35,70 Q30,50 20,35 Q15,25 10,15" stroke={color} strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.7" />
            <path d="M35,70 Q38,45 35,30 Q33,20 35,10" stroke={color} strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.7" />
            <path d="M35,70 Q40,50 50,35 Q55,25 60,15" stroke={color} strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.7" />
            <circle cx="10" cy="15" r="5" fill={color} opacity="0.6" />
            <circle cx="35" cy="10" r="5" fill={color} opacity="0.6" />
            <circle cx="60" cy="15" r="5" fill={color} opacity="0.6" />
            <path d="M25,42 Q18,35 12,30" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
            <circle cx="12" cy="30" r="3" fill={color} opacity="0.5" />
            <path d="M45,42 Q52,35 58,30" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
            <circle cx="58" cy="30" r="3" fill={color} opacity="0.5" />
        </svg>
    );
}

export function Bubble({ size, left, delay, duration, bottom = "-10%" }) {
    return (
        <div
            className="absolute rounded-full bubble"
            style={{
                width: size,
                height: size,
                left: left,
                bottom: bottom,
                animation: `bubbleRise ${duration}s ease-in ${delay}s infinite`,
            }}
        />
    );
}
