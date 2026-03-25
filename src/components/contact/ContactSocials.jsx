import { motion } from "motion/react";
import { Instagram, Twitter, Facebook, Youtube, Globe } from "lucide-react";

export default function ContactSocials() {
  const socials = [
    { name: "Instagram", icon: <Instagram className="w-8 h-8" />, handle: "@oceanguard_id", color: "hover:bg-[#E4405F]" },
    { name: "Twitter", icon: <Twitter className="w-8 h-8" />, handle: "@ocean_guard", color: "hover:bg-[#1DA1F2]" },
    { name: "Facebook", icon: <Facebook className="w-8 h-8" />, handle: "OceanGuard Official", color: "hover:bg-[#1877F2]" },
    { name: "Youtube", icon: <Youtube className="w-8 h-8" />, handle: "OceanGuard Education", color: "hover:bg-[#FF0000]" },
    { name: "Website", icon: <Globe className="w-8 h-8" />, handle: "www.oceanguard.org", color: "hover:bg-ocean-surface" },
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ocean-abyss mb-4">Ikuti Pergerakan Kami</h2>
          <p className="text-ocean-deep/60 max-w-xl mx-auto font-sans">
            Dapatkan update harian tentang aksi bersih pantai dan konten edukasi terbaru di media sosial kami.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`flex flex-col items-center justify-center gap-4 bg-white p-8 rounded-[2rem] shadow-lg shadow-gray-200/50 border border-gray-100 min-w-[180px] group transition-all duration-300 ${social.color}`}
            >
              <div className="text-ocean-abyss group-hover:text-white transition-colors duration-300">
                {social.icon}
              </div>
              <div className="text-center">
                <h3 className="font-bold text-ocean-abyss group-hover:text-white transition-colors duration-300">{social.name}</h3>
                <p className="text-xs text-ocean-deep/50 group-hover:text-white/80 transition-colors duration-300">{social.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
