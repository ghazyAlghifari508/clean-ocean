import { motion } from "motion/react";
import { Droplet, Wind, Waves } from "lucide-react";

const journeySteps = [
  {
    step: "01",
    title: "Berawal dari Daratan",
    desc: "80% sampah plastik di laut berasal dari kegiatan darat yang bocor ke sungai atau terbawa angin.",
    icon: <Wind className="w-5 h-5" />,
  },
  {
    step: "02",
    title: "Mengalir ke Perairan",
    desc: "Plastik mengalir melalui sungai bermuara, berpotensi pecah menjadi potongan kecil akibat gesekan dan sinar matahari.",
    icon: <Droplet className="w-5 h-5" />,
  },
  {
    step: "03",
    title: "Berakhir di Lautan",
    desc: "Menjadi ancaman bagi ekosistem laut bawah. Mengonsumsi mikroplastik berarti memasukkannya ke rantai makanan manusia.",
    icon: <Waves className="w-5 h-5" />,
  },
];

export default function OceanJourney() {
  return (
    <section className="py-20 md:py-28 bg-wave-light">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-ocean-surface font-semibold tracking-widest uppercase text-sm mb-4">
            Jejak Kehancuran
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ocean-abyss leading-tight">
            Perjalanan Panjang Sebuah Plastik
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative"
            >
              {/* Step number */}
              <span className="text-[80px] font-display font-bold text-ocean-abyss/[0.04] leading-none absolute -top-4 -left-2 select-none pointer-events-none">
                {step.step}
              </span>

              <div className="relative pt-8">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-ocean-abyss text-white mb-5">
                  {step.icon}
                </div>

                <h3 className="text-xl font-display font-bold text-ocean-abyss mb-3">
                  {step.title}
                </h3>

                <p className="text-ocean-deep/60 leading-relaxed text-[15px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
