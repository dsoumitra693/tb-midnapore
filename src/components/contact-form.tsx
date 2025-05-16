import { motion } from "framer-motion";

export default function ContactForm({ form, handleChange, handleSubmit }: {
  form: { name: string; email: string; message: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <motion.form
      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-2xl space-y-6"
      onSubmit={handleSubmit}
      autoComplete="off"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h3
        className="text-2xl font-bold text-emerald-400 mb-6 relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Send us a message
        <span className="absolute left-0 -bottom-2 w-2/3 h-1 bg-emerald-500/40 rounded-full blur-sm"></span>
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <label htmlFor="name" className="block text-gray-200 mb-2 font-medium">
          Your Name
        </label>
        <input
          required
          type="text"
          id="name"
          name="name"
          className="w-full bg-white/10 border border-emerald-700/30 focus:border-emerald-400/60 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 shadow-inner backdrop-blur-md transition"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          aria-label="Your Name"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <label htmlFor="email" className="block text-gray-200 mb-2 font-medium">
          Email Address
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          className="w-full bg-white/10 border border-emerald-700/30 focus:border-emerald-400/60 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 shadow-inner backdrop-blur-md transition"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          aria-label="Email Address"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <label htmlFor="message" className="block text-gray-200 mb-2 font-medium">
          Your Message
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={4}
          className="w-full bg-white/10 border border-emerald-700/30 focus:border-emerald-400/60 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 shadow-inner backdrop-blur-md transition resize-none"
          placeholder="How can we help you?"
          value={form.message}
          onChange={handleChange}
          aria-label="Your Message"
        ></textarea>
      </motion.div>

      <motion.button
        type="submit"
        className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold text-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/80 transition-all duration-200 backdrop-blur-lg"
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.04 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}
