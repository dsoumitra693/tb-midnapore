import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function InclusionsSection({ inclusions }: { inclusions: string[] }) {
    return (
      <motion.section
        className="bg-gray-900/40 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl ring-1 ring-white/10 border border-white/5"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <motion.h3
          className="text-2xl font-bold mb-6 text-emerald-400 relative inline-block"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          Inclusions
          <span className="absolute left-0 -bottom-2 w-2/3 h-1 bg-emerald-500/40 rounded-full blur-sm"></span>
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {inclusions.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 p-3 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-white/5 group hover:bg-emerald-900/20 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
              whileHover={{ y: -2 }}
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckIcon className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-gray-200 group-hover:text-white transition-colors">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    )
  }