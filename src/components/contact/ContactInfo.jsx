import { motion } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, ExternalLink } from "lucide-react";

export default function ContactInfo() {
  const { ref, isInView } = useScrollAnimation();

  const contactItems = [
    { icon: Mail, label: "Email", value: "info@oceanguard.id", href: "mailto:info@oceanguard.id" },
    { icon: Phone, label: "Telepon", value: "+62 812 3456 7890", href: "tel:+6281234567890" },
    { icon: MapPin, label: "Lokasi", value: "Jakarta, Indonesia", href: "#" },
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", handle: "@oceanguard.id" },
    { icon: Twitter, label: "Twitter", href: "#", handle: "@oceanguard" },
    { icon: Youtube, label: "YouTube", href: "#", handle: "OceanGuard ID" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      {/* Contact Details */}
      <div className="glass-card p-8 md:p-10">
        <h3 className="font-display text-2xl font-bold text-white mb-8">Informasi Kontak</h3>
        <div className="space-y-6">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-ocean-deep/30 flex items-center justify-center flex-shrink-0 group-hover:bg-ocean-surface/20 transition-colors">
                <Icon className="w-5 h-5 text-ocean-surface" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{label}</p>
                <p className="text-white font-medium group-hover:text-ocean-sky transition-colors">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="glass-card p-8 md:p-10">
        <h3 className="font-display text-2xl font-bold text-white mb-6">Media Sosial</h3>
        <div className="space-y-4">
          {socialLinks.map(({ icon: Icon, label, href, handle }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-ocean-deep/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-ocean-deep/30 flex items-center justify-center group-hover:bg-ocean-surface/20 transition-colors">
                <Icon className="w-4 h-4 text-ocean-surface" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{label}</p>
                <p className="text-white/40 text-xs">{handle}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-ocean-sky transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
