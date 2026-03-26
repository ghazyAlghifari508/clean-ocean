import { Link } from "react-router-dom";
import { Anchor, Mail, MapPin, Phone, Instagram, Twitter, Youtube, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#021824] border-t border-ocean-abyss/40">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ocean-sky to-ocean-surface flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Anchor className="w-5 h-5 text-ocean-abyss" />
              </div>
              <span className="text-xl font-bold font-display text-white">
                OClean<span className="text-ocean-sky">Dive</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Website edukasi digital yang berfokus pada isu pembuangan sampah di laut dan
              dampaknya terhadap ekosistem laut.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-ocean-sky hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Tentang Kami", path: "/about" },
                { name: "Edukasi", path: "/content" },
                { name: "Hubungi Kami", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-ocean-sky text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Edukasi */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Edukasi
            </h4>
            <ul className="space-y-3">
              {[
                "Jenis Sampah Laut",
                "Dampak Ekosistem",
                "Solusi & Aksi Nyata",
                "Fakta & Statistik",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/content"
                    className="text-white/50 hover:text-ocean-sky text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Kontak
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-ocean-surface mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">info@ocleandive.id</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-ocean-surface mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">+62 812 3456 7890</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-ocean-surface mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {currentYear} OClean Dive. Jaga Lautmu, Jaga Masa Depanmu.
          </p>
          <p className="text-white/30 text-xs">
            Dibuat dengan ❤️ untuk lautan yang lebih bersih
          </p>
        </div>
      </div>
    </footer>
  );
}
