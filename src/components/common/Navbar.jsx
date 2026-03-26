import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Menu, X, ShipWheel } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Content", path: "/content" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  // Rotate the ship wheel based on scroll
  const wheelRotation = useTransform(scrollY, [0, 1000], [0, 360], { clamp: false });

  // Detect if current page has a light theme by default at the top
  const isLightBody = ["/about", "/contact", "/content"].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Styles based on scroll and page theme
  const navStyle = {
    text: isScrolled ? "text-white" : (isLightBody ? "text-ocean-abyss" : "text-white"),
    subText: isScrolled ? "text-white/80" : (isLightBody ? "text-ocean-deep/70" : "text-white/80"),
    border: isScrolled ? "border-white/20" : (isLightBody ? "border-ocean-abyss/10" : "border-white/10"),
    bg: isScrolled ? "bg-ocean-abyss/85 backdrop-blur-xl" : (isLightBody ? "bg-white/40 backdrop-blur-md" : "bg-transparent"),
    logoGlow: "drop-shadow-none"
  };

  return (
    <>
      {/* Container for the floating pill navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none mt-4 md:mt-6 transition-all duration-500 font-sans">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          className={`pointer-events-auto transition-all duration-700 rounded-full border ${isScrolled
              ? `${navStyle.bg} shadow-lg ${navStyle.border} py-3 px-6 md:px-8 w-full max-w-5xl`
              : `${navStyle.bg} ${navStyle.border} py-4 px-6 md:px-10 w-full max-w-7xl`
            }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-ocean-sky/10 to-ocean-surface/10 border border-ocean-sky/30 shadow-lg shadow-ocean-sky/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-ocean-sky/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full origin-center" />
                <motion.div style={{ rotate: wheelRotation }}>
                  <ShipWheel strokeWidth={1.5} className={`w-6 h-6 text-ocean-sky ${navStyle.logoGlow} transition-transform duration-300 group-hover:scale-110`} />
                </motion.div>
              </div>
              <span className={`text-2xl font-bold font-display tracking-wide transition-colors duration-300 ${navStyle.text}`}>
                OClean<span className="text-ocean-sky">Dive</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 md:gap-3 lg:gap-5">
              <div className={`flex items-center rounded-full p-1.5 border backdrop-blur-sm transition-colors duration-300 ${isScrolled ? "bg-white/5 border-white/10" : (isLightBody ? "bg-ocean-abyss/5 border-ocean-abyss/10" : "bg-white/5 border-white/10")}`}>
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                          ? "text-ocean-abyss bg-ocean-sky"
                          : `${navStyle.subText} hover:${navStyle.text} hover:bg-white/10`
                        }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <Link
                to="/simulation"
                className="ml-2 btn-primary text-sm !px-6 !py-2.5 rounded-full shadow-md group relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover:animate-[shine_2s_infinite]" />
                <span className="relative z-10 flex items-center gap-2">
                  <span>Get Started</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.div>
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`md:hidden w-11 h-11 rounded-full border flex items-center justify-center transition-colors shadow-lg backdrop-blur-md ${isScrolled ? "bg-white/5 border-white/10 text-white" : (isLightBody ? "bg-ocean-abyss/5 border-ocean-abyss/10 text-ocean-abyss" : "bg-white/5 border-white/10 text-white")}`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-5 h-5 drop-shadow-md" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-5 h-5 drop-shadow-md" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden bg-ocean-abyss/85 backdrop-blur-2xl"
          >
            {/* Background Decorations for Mobile Menu */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ocean-sky/15 rounded-full blur-[80px]" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ocean-surface/15 rounded-full blur-[100px]" />
            </div>

            <div className="relative flex flex-col items-center justify-center h-full gap-8 px-6">
              {/* Rotating Big Wheel in BG */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none"
              >
                <ShipWheel className="w-[120vw] h-[120vw]" />
              </motion.div>

              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ delay: i * 0.1, duration: 0.4, type: "spring", stiffness: 100 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-3xl sm:text-4xl font-display font-semibold transition-all duration-300 flex items-center gap-4 ${isActive ? "text-ocean-sky scale-110" : "text-white/70 hover:text-white hover:scale-105"
                        }`}
                    >
                      {isActive && (
                        <motion.div layoutId="mobileActive" className="w-2.5 h-2.5 rounded-full bg-ocean-sky" />
                      )}
                      {link.name}
                      {isActive && (
                        <motion.div layoutId="mobileActiveRight" className="w-2.5 h-2.5 rounded-full bg-ocean-sky" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8"
              >
                <Link to="/simulation" className="btn-primary text-lg px-8 py-4 rounded-full shadow-lg flex items-center gap-3 group transition-all duration-300">
                  <ShipWheel className="w-6 h-6 group-hover:animate-[spin_3s_linear_infinite]" />
                  <span>Start Simulation</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
