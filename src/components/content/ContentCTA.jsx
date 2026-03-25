import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Droplets } from "lucide-react";

export default function ContentCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-wave-light rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-sm"
        >
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-ocean-surface/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-ocean-sky/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-ocean-deep mb-8">
              <Droplets className="w-8 h-8" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ocean-abyss mb-6 leading-tight max-w-2xl">
              Sudah Belajar? <br />
              <span className="text-ocean-surface">Saatnya Beraksi.</span>
            </h2>

            <p className="text-ocean-deep/70 text-lg md:text-xl font-sans max-w-xl mx-auto mb-12">
              Teori tidak akan membersihkan lautan. Rasakan dampak langsung dari tindakanmu melalui simulasi interaktif kami.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/simulation"
                className="bg-ocean-abyss text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-ocean-deep transition-all duration-300 shadow-xl shadow-ocean-abyss/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ocean-abyss/30 active:scale-95"
              >
                Mulai Simulasi
              </Link>
              <Link
                to="/contact"
                className="bg-white text-ocean-abyss border border-gray-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
              >
                Bagikan Ilmu
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
