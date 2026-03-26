import { motion } from "motion/react";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function AboutTeam() {
  const team = [
    {
      name: "Andre Aqil Syafiq",
      role: "Ketua Tim & Lead Developer",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600",
      quote: "Lautan mendikte iklim kita. Menyelamatkannya berarti menyelamatkan diri sendiri.",
    },
    {
      name: "Ghazy Nabil Alghifari",
      role: "Simulation Developer & UI/UX Designer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      quote: "Edukasi terbaik adalah yang meresap melalui pengalaman dan empati visual.",
    },
    {
      name: "Fadli Sugiardi",
      role: "Marine Biologist & Content Curator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      quote: "Setiap cangkang penyu yang bebas dari plastik adalah penghargaan tertinggi kami.",
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-wave-light rounded-bl-full opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-ocean-foam text-ocean-deep text-xs font-bold uppercase tracking-widest rounded-full mb-4 shadow-sm border border-ocean-sky/10">
            Tim Pahlawan Laut
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ocean-abyss mb-6">
            Di Balik Layar OClean Dive
          </h2>
          <p className="text-ocean-deep/70 max-w-2xl mx-auto font-sans leading-relaxed">
            Perubahan besar digerakkan oleh niat kecil yang bersatu. Temui pemikir dan pendiri 
            di balik pengalaman edukasi interaktif ini.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-xl shadow-ocean-abyss/10 border border-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110 grayscale-[30%] group-hover:grayscale-0"
                />
                
                {/* Overlay Quote */}
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-abyss/90 via-ocean-abyss/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-white italic font-serif leading-relaxed mb-4 text-center">
                    "{member.quote}"
                  </p>
                  
                  {/* Social Icons Placeholder */}
                  <div className="flex justify-center gap-4 text-white">
                    <Linkedin className="w-5 h-5 hover:text-ocean-sky cursor-pointer transition-colors" />
                    <Twitter className="w-5 h-5 hover:text-ocean-sky cursor-pointer transition-colors" />
                    <Github className="w-5 h-5 hover:text-ocean-sky cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-display font-bold text-ocean-abyss mb-2">
                  {member.name}
                </h3>
                <p className="text-ocean-deep/70 text-sm font-bold tracking-widest uppercase">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
