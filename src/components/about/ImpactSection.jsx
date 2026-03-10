import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Turtle } from "../home/OceanCreatures";
import { Trash2, Fish, MapPin, Globe, AlertTriangle, Sparkles, Waves } from "lucide-react";

/* Animated counter hook */
function useCounter(target, duration = 2000, inView = false) {
    const [count, setCount] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!inView || hasAnimated.current) return;
        hasAnimated.current = true;
        const start = performance.now();
        const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [inView, target, duration]);

    return count;
}

const STAT_ICONS = {
    trash: <Trash2 className="w-6 h-6 text-ocean-sky" />,
    fish: <Fish className="w-6 h-6 text-ocean-sky" />,
    map: <MapPin className="w-6 h-6 text-ocean-sky" />,
    globe: <Globe className="w-6 h-6 text-ocean-sky" />,
};

function StatCard({ iconKey, value, suffix, label, delay, inView }) {
    const count = useCounter(value, 2000, inView);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass-card p-6 md:p-8 text-center group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-ocean-surface/0 group-hover:bg-ocean-surface/5 transition-colors duration-500 rounded-[20px]" />
            <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-ocean-deep/40 border border-ocean-surface/15 flex items-center justify-center mx-auto mb-3">
                    {STAT_ICONS[iconKey]}
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-ocean-sky mb-2">
                    {count.toLocaleString()}
                    {suffix}
                </div>
                <div className="text-white/40 text-sm">{label}</div>
            </div>
        </motion.div>
    );
}

export default function ImpactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { iconKey: "trash", value: 8, suffix: " Juta Ton", label: "Plastik masuk laut per tahun" },
        { iconKey: "fish", value: 700, suffix: "+", label: "Spesies laut terancam" },
        { iconKey: "map", value: 80, suffix: "%", label: "Sampah laut berasal dari daratan" },
        { iconKey: "globe", value: 5, suffix: " Triliun", label: "Partikel plastik di lautan" },
    ];

    return (
        <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(180deg, #063B52 0%, #042A3B 60%, #020617 100%)",
                }}
            />

            {/* Bioluminescent particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        width: 3 + (i % 4) * 2,
                        height: 3 + (i % 4) * 2,
                        left: `${(i * 5.1) % 96}%`,
                        top: `${(i * 4.7) % 90}%`,
                        backgroundColor: i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#a78bfa" : "#f472b6",
                        boxShadow: `0 0 ${6 + (i % 3) * 4}px ${i % 3 === 0 ? "rgba(34,211,238,0.6)" : i % 3 === 1 ? "rgba(167,139,250,0.6)" : "rgba(244,114,182,0.6)"}`,
                    }}
                    animate={{
                        opacity: [0, 0.7, 0],
                        y: [0, -40, 0],
                        x: [0, (i % 2 === 0 ? 20 : -20), 0],
                    }}
                    transition={{
                        duration: 4 + (i % 4) * 2,
                        repeat: Infinity,
                        delay: (i * 0.6) % 6,
                    }}
                />
            ))}

            {/* Turtle floating */}
            <motion.div
                className="absolute top-[15%] right-[5%] opacity-40 pointer-events-none"
                animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
                <Turtle size={120} />
            </motion.div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-400/20 text-red-300 text-xs font-semibold uppercase tracking-widest mb-4">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Dampak Nyata
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Krisis <span className="text-gradient">Lautan Kita</span>
                    </h2>
                    <p className="text-white/40 max-w-xl mx-auto">
                        Angka-angka ini menunjukkan betapa mendesaknya kebutuhan untuk bertindak
                        dalam melindungi ekosistem laut.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
                    {stats.map((stat, i) => (
                        <StatCard key={stat.label} {...stat} delay={i * 0.1} inView={isInView} />
                    ))}
                </div>

                {/* Clean vs Polluted ocean comparison */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* Polluted side */}
                    <div className="glass-card overflow-hidden group">
                        <div className="relative h-52 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=600&h=300&fit=crop"
                                alt="Laut tercemar"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ocean-abyss via-ocean-abyss/40 to-red-900/20" />
                            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/30 border border-red-400/30 text-red-200 text-xs font-medium backdrop-blur-sm">
                                <AlertTriangle className="w-3 h-3" />
                                Tercemar
                            </div>
                        </div>
                        <div className="p-6">
                            <h4 className="font-display text-lg font-bold text-white mb-2">Lautan yang Terluka</h4>
                            <p className="text-white/40 text-sm leading-relaxed">
                                Setiap menit, satu truk sampah plastik dibuang ke laut. Ekosistem terumbu
                                karang, habitat ikan, dan rantai makanan laut terus terancam.
                            </p>
                        </div>
                    </div>

                    {/* Clean side */}
                    <div className="glass-card overflow-hidden group">
                        <div className="relative h-52 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&h=300&fit=crop"
                                alt="Laut bersih"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ocean-abyss via-ocean-abyss/30 to-ocean-mid/10" />
                            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/30 text-emerald-200 text-xs font-medium backdrop-blur-sm">
                                <Sparkles className="w-3 h-3" />
                                Bersih
                            </div>
                        </div>
                        <div className="p-6">
                            <h4 className="font-display text-lg font-bold text-white mb-2">Lautan yang Kita Impikan</h4>
                            <p className="text-white/40 text-sm leading-relaxed">
                                Dengan aksi nyata, kita bisa mengembalikan keindahan laut. Terumbu karang
                                pulih, biota laut berkembang, dan ekosistem kembali seimbang.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-12 flex items-center justify-center gap-2 text-white/50 text-lg font-display"
                >
                    <Waves className="w-5 h-5 text-ocean-sky/60" />
                    Setiap tindakan kecil membuat perbedaan besar bagi lautan kita
                </motion.div>
            </div>
        </section>
    );
}
