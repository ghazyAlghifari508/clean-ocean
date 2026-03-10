import { motion } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, ExternalLink, Waves, Shell } from "lucide-react";

export default function ContactInfo() {
  const { ref, isInView } = useScrollAnimation();

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "info@oceanguard.id",
      href: "mailto:info@oceanguard.id",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 812 3456 7890",
      href: "tel:+6281234567890",
    },
    {
      icon: MapPin,
      label: "Lokasi",
      value: "Jakarta, Indonesia",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", handle: "@oceanguard.id", color: "#E1306C" },
    { icon: Twitter, label: "Twitter", href: "#", handle: "@oceanguard", color: "#1DA1F2" },
    { icon: Youtube, label: "YouTube", href: "#", handle: "OceanGuard ID", color: "#FF0000" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Contact Details */}
      <div className="glass-card p-8 md:p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-ocean-surface/5 to-transparent rounded-br-full pointer-events-none" />

        <h3 className="font-display text-2xl font-bold text-white mb-8 relative z-10">
          Informasi Kontak
        </h3>
        <div className="space-y-5 relative z-10">
          {contactItems.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-ocean-deep/40 border border-ocean-surface/15 flex items-center justify-center flex-shrink-0 group-hover:border-ocean-surface/30 group-hover:bg-ocean-deep/60 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-ocean-surface/10">
                <Icon className="w-5 h-5 text-ocean-surface" />
              </div>
              <div>
                <p className="text-white/35 text-xs uppercase tracking-wider mb-1">
                  {label}
                </p>
                <p className="text-white font-medium group-hover:text-ocean-sky transition-colors duration-300">
                  {value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="glass-card p-8 md:p-10 relative overflow-hidden">
        <h3 className="font-display text-2xl font-bold text-white mb-6">
          Media Sosial
        </h3>
        <div className="space-y-3">
          {socialLinks.map(({ icon: Icon, label, href, handle, color }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-ocean-deep/30 transition-all duration-300 group border border-transparent hover:border-ocean-surface/10"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `rgba(${color === "#E1306C"
                      ? "225,48,108"
                      : color === "#1DA1F2"
                        ? "29,161,242"
                        : "255,0,0"
                    },0.15)`,
                }}
              >
                <Icon
                  className="w-4 h-4 transition-colors duration-300"
                  style={{ color }}
                />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium group-hover:text-ocean-sky transition-colors">
                  {label}
                </p>
                <p className="text-white/35 text-xs">{handle}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-white/15 group-hover:text-ocean-sky/60 transition-colors duration-300" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Ocean protection message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="glass-card p-6 text-center relative overflow-hidden"
      >
        {/* Decorative seaweed elements */}
        <div className="absolute bottom-0 left-3 opacity-15 pointer-events-none">
          <svg width="30" height="50" viewBox="0 0 30 50" fill="none">
            <path
              d="M15,50 Q5,35 15,20 Q25,5 15,0"
              stroke="#2E8B57"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-3 opacity-15 pointer-events-none">
          <svg width="30" height="40" viewBox="0 0 30 40" fill="none">
            <path
              d="M15,40 Q25,28 15,16 Q5,4 15,0"
              stroke="#3CB371"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-3"
        >
          <Shell className="w-8 h-8 text-ocean-sky/50 mx-auto" />
        </motion.div>
        <p className="text-white/70 font-display text-sm leading-relaxed">
          "Bersama, kita bisa menjadikan lautan tempat yang lebih baik
          untuk semua makhluk hidup."
        </p>
        <p className="text-ocean-sky/50 text-xs mt-2 font-medium">
          — Tim OceanGuard
        </p>
      </motion.div>
    </motion.div>
  );
}
