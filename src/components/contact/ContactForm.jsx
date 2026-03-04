import { useState } from "react";
import { motion } from "motion/react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Send, CheckCircle } from "lucide-react";

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

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) newErrors.email = "Email wajib diisi";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Format email tidak valid";
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
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const inputClasses = (field) =>
    `w-full px-4 py-3 rounded-xl bg-luna-dark/50 border ${
      errors[field] ? "border-red-400/50" : "border-luna-deep/30"
    } text-white placeholder-white/30 focus:outline-none focus:border-luna-medium/50 focus:bg-luna-dark/70 transition-all duration-300 backdrop-blur-sm`;

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-luna-medium/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-luna-light" />
        </div>
        <h3 className="font-display text-2xl font-bold text-white mb-3">Pesan Terkirim!</h3>
        <p className="text-white/50">
          Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="glass-card p-8 md:p-10"
    >
      <h3 className="font-display text-2xl font-bold text-white mb-8">Kirim Pesan</h3>

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama Anda"
            className={inputClasses("name")}
          />
          {errors.name && <p className="mt-1 text-red-400 text-xs">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@contoh.com"
            className={inputClasses("email")}
          />
          {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-white/60 mb-2">
            Subjek
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Tentang apa pesan Anda?"
            className={inputClasses("subject")}
          />
          {errors.subject && <p className="mt-1 text-red-400 text-xs">{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tulis pesan Anda di sini..."
            rows={5}
            className={`${inputClasses("message")} resize-none`}
          />
          {errors.message && <p className="mt-1 text-red-400 text-xs">{errors.message}</p>}
        </div>

        <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-base py-4">
          <Send className="w-4 h-4" />
          Kirim Pesan
        </button>
      </div>
    </motion.form>
  );
}
