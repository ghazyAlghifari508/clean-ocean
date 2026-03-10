import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Send, CheckCircle, User, Mail, FileText, MessageSquare, Waves } from "lucide-react";

/* Tiny bubble particles that appear on input focus */
function FocusBubbles({ show }) {
  if (!show) return null;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4 + (i % 3) * 2,
            height: 4 + (i % 3) * 2,
            left: `${15 + i * 18}%`,
            bottom: 0,
            background:
              "radial-gradient(circle at 30% 30%, rgba(77,184,219,0.6), rgba(77,184,219,0.1))",
          }}
          initial={{ y: 0, opacity: 0.7 }}
          animate={{ y: -40 - i * 8, opacity: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function ContactForm() {
  const { ref, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) newErrors.email = "Email wajib diisi";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Format email tidak valid";
    if (!formData.subject.trim()) newErrors.subject = "Subjek wajib diisi";
    if (!formData.message.trim()) newErrors.message = "Pesan wajib diisi";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const inputClasses = (field) =>
    `w-full px-4 py-3.5 rounded-xl bg-ocean-deep/40 border ${errors[field]
      ? "border-red-400/50"
      : focusedField === field
        ? "border-ocean-surface/50 shadow-[0_0_15px_rgba(77,184,219,0.15)]"
        : "border-ocean-deep/30"
    } text-white placeholder-white/25 focus:outline-none focus:border-ocean-surface/50 focus:bg-ocean-deep/60 focus:shadow-[0_0_20px_rgba(77,184,219,0.12)] transition-all duration-300 backdrop-blur-sm`;

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 text-center relative overflow-hidden"
      >
        {/* Celebration bubbles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 6 + (i % 4) * 3,
              height: 6 + (i % 4) * 3,
              left: `${(i * 10) % 90}%`,
              bottom: 0,
              background:
                "radial-gradient(circle at 30% 30%, rgba(77,184,219,0.5), rgba(77,184,219,0.1))",
            }}
            animate={{ y: [-20, -200 - i * 20], opacity: [0.6, 0] }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ocean-surface/30 to-ocean-sky/20 flex items-center justify-center mx-auto mb-6 border border-ocean-surface/20">
            <CheckCircle className="w-10 h-10 text-ocean-sky" />
          </div>
        </motion.div>

        <h3 className="font-display text-2xl font-bold text-white mb-3">
          Pesan Terkirim!
        </h3>
        <p className="text-white/50 mb-2">
          Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.
        </p>
        <p className="text-ocean-sky/60 text-sm font-display flex items-center justify-center gap-2">
          <Waves className="w-4 h-4" />
          Bersama kita jaga lautan!
        </p>
      </motion.div>
    );
  }

  const fields = [
    { name: "name", label: "Nama Lengkap", type: "text", placeholder: "Masukkan nama Anda", Icon: User },
    { name: "email", label: "Email", type: "email", placeholder: "email@contoh.com", Icon: Mail },
    { name: "subject", label: "Subjek", type: "text", placeholder: "Tentang apa pesan Anda?", Icon: FileText },
  ];

  return (
    <motion.form
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="glass-card p-8 md:p-10 relative overflow-hidden"
    >
      {/* Subtle corner decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-ocean-surface/5 to-transparent rounded-bl-full pointer-events-none" />

      <h3 className="font-display text-2xl font-bold text-white mb-2">
        Kirim Pesan
      </h3>
      <p className="text-white/35 text-sm mb-8">
        Isi formulir di bawah dan kami akan segera merespons
      </p>

      <div className="space-y-5">
        {fields.map(({ name, label, type, placeholder, Icon }) => (
          <div key={name} className="relative">
            <label
              htmlFor={name}
              className="flex items-center gap-2 text-sm font-medium text-white/60 mb-2"
            >
              <Icon className="w-4 h-4 text-ocean-sky/60" />
              {label}
            </label>
            <div className="relative">
              <input
                type={type}
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                onFocus={() => setFocusedField(name)}
                onBlur={() => setFocusedField(null)}
                placeholder={placeholder}
                className={inputClasses(name)}
              />
              <FocusBubbles show={focusedField === name} />
            </div>
            <AnimatePresence>
              {errors[name] && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="mt-1.5 text-red-400 text-xs"
                >
                  {errors[name]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}

        <div className="relative">
          <label
            htmlFor="message"
            className="flex items-center gap-2 text-sm font-medium text-white/60 mb-2"
          >
            <MessageSquare className="w-4 h-4 text-ocean-sky/60" />
            Pesan
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              placeholder="Tulis pesan Anda di sini..."
              rows={5}
              className={`${inputClasses("message")} resize-none`}
            />
            <FocusBubbles show={focusedField === "message"} />
          </div>
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="mt-1.5 text-red-400 text-xs"
              >
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 text-base py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-ocean-mid to-ocean-surface hover:from-ocean-deep hover:to-ocean-mid transition-all duration-300 shadow-lg shadow-ocean-mid/25 hover:shadow-ocean-mid/40 relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div
              className="absolute inset-0 animate-wave"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
                width: "200%",
              }}
            />
          </div>
          <Send className="w-4 h-4 relative z-10" />
          <span className="relative z-10">Kirim Pesan</span>
        </motion.button>
      </div>
    </motion.form>
  );
}
