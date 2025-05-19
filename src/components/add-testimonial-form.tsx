import { motion } from "framer-motion";
import { ITestimonial } from "@/types";

export default function AddTestimonialForm({ form, handleChange, handleSubmit, isUploading, error }: {
  form: ITestimonial;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isUploading: boolean;
  error: string | null;
}) {

  return (
    <motion.form
      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-2xl space-y-6 mt-5"
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
        Write a Review
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
        <label htmlFor="location" className="block text-gray-200 mb-2 font-medium">
          Where you from?
        </label>
        <input
          required
          type="text"
          id="location"
          name="location"
          className="w-full bg-white/10 border border-emerald-700/30 focus:border-emerald-400/60 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 shadow-inner backdrop-blur-md transition"
          placeholder="Enter your location"
          value={form.location}
          onChange={handleChange}
          aria-label="Location"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <label htmlFor="text" className="block text-gray-200 mb-2 font-medium">
          How was your experience with us?
        </label>
        <textarea
          required
          id="text"
          name="text"
          rows={4}
          className="w-full bg-white/10 border border-emerald-700/30 focus:border-emerald-400/60 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 shadow-inner backdrop-blur-md transition resize-none"
          placeholder="Write your review here..."
          value={form.text}
          onChange={handleChange}
          aria-label="Your Message"
        ></textarea>
      </motion.div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-red-500 text-sm"
        >
          {error}
        </motion.p>
      )}

      <motion.button
        type="submit"
        className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold text-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/80 transition-all duration-200 backdrop-blur-lg"
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.04 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        disabled={isUploading}
      >
        {isUploading ? 'Uploading...' : 'Submit Review'}
      </motion.button>
    </motion.form>
  );
}
