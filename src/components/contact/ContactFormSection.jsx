import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactFormSection() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hello@oceanguard.org",
      desc: "Kirim pesan kapan saja",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Lokasi",
      value: "Jakarta, Indonesia",
      desc: "Pusat gerakan nusantara",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Telepon",
      value: "+62 812 3456 7890",
      desc: "Senin - Jumat, 09:00 - 17:00",
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-ocean-abyss mb-4">Informasi Kontak</h2>
              <p className="text-ocean-deep/70 leading-relaxed font-sans">
                Tim kami siap membantu dan mendiskusikan ide-ide Anda untuk pelestarian laut yang lebih baik.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-ocean-sky/10 border border-ocean-sky/20 flex items-center justify-center text-ocean-deep shrink-0 transition-all duration-300 group-hover:bg-ocean-abyss group-hover:text-white group-hover:scale-110 shadow-sm">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-ocean-deep/50 mb-1">{info.label}</h3>
                    <p className="text-xl font-display font-bold text-ocean-abyss mb-1">{info.value}</p>
                    <p className="text-sm text-ocean-deep/60">{info.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Glassmorphism Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-ocean-abyss/10 border border-gray-100 relative overflow-hidden group"
          >
            {/* Soft decorative glow in background of card */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-ocean-sky/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-ocean-surface/30 transition-colors duration-700"></div>

            <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest text-ocean-deep/70 ml-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  placeholder="Bima Samudra"
                  className="w-full bg-ocean-sky/5 border border-gray-200 focus:border-ocean-surface focus:ring-4 focus:ring-ocean-surface/10 rounded-2xl px-6 py-4 outline-none transition-all duration-300 font-sans"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest text-ocean-deep/70 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="bima@service.com"
                  className="w-full bg-ocean-sky/5 border border-gray-200 focus:border-ocean-surface focus:ring-4 focus:ring-ocean-surface/10 rounded-2xl px-6 py-4 outline-none transition-all duration-300 font-sans"
                />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest text-ocean-deep/70 ml-1">Subjek</label>
                <select className="w-full bg-ocean-sky/5 border border-gray-200 focus:border-ocean-surface focus:ring-4 focus:ring-ocean-surface/10 rounded-2xl px-6 py-4 outline-none transition-all duration-300 font-sans appearance-none">
                  <option>Pertanyaan Umum</option>
                  <option>Kolaborasi Project</option>
                  <option>Laporan Bug</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-sm font-bold uppercase tracking-widest text-ocean-deep/70 ml-1">Pesan</label>
                <textarea 
                  rows="5"
                  placeholder="Bagaimana cara saya bisa ikut berkontribusi..."
                  className="w-full bg-ocean-sky/5 border border-gray-200 focus:border-ocean-surface focus:ring-4 focus:ring-ocean-surface/10 rounded-2xl px-6 py-4 outline-none transition-all duration-300 font-sans resize-none"
                ></textarea>
              </div>
              
              <div className="md:col-span-2 pt-4">
                <button className="w-full group/btn relative overflow-hidden bg-ocean-abyss text-white py-5 rounded-2xl font-bold tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-ocean-abyss/20 transition-transform active:scale-95">
                  <span className="relative z-10 uppercase">Kirim Pesan</span>
                  <Send className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  
                  {/* Hover visual effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep to-ocean-surface opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
