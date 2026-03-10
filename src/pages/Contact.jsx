import { motion } from "motion/react";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import UnderwaterBackground from "../components/common/UnderwaterBackground";
import { Waves } from "lucide-react";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ContactHero />

      <div className="relative">
        <UnderwaterBackground variant="deep" />

        <div className="relative z-10">
          {/* Encouraging ocean message */}
          <section className="pt-10 pb-4 px-4 md:px-8">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center flex items-center justify-center gap-2"
              >
                <Waves className="w-5 h-5 text-ocean-sky/50" />
                <p className="text-white/40 font-display text-lg">
                  Setiap pesan Anda adalah langkah kecil untuk perubahan besar bagi lautan kita
                </p>
              </motion.div>
            </div>
          </section>

          {/* Form + Info section */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                <ContactForm />
                <ContactInfo />
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
