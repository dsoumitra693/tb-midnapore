import { Trip } from '@/types'
import { motion } from 'framer-motion'

export default function MealSection({ meals }: { meals: Trip['meals'] }) {
  return (
    <motion.section
      className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-xl border border-gray-700/30"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="p-2 rounded-lg bg-emerald-500/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.25 2.25a.75.75 0 00-1.5 0v7.25a.25.25 0 01-.5 0V2.25a.75.75 0 00-1.5 0v7.25A1.75 1.75 0 006.5 11.25v10.5a.75.75 0 001.5 0V11.25a1.75 1.75 0 00.75-1.75V2.25zM14.25 2.25a.75.75 0 00-1.5 0v7.5a3 3 0 003 3v9a.75.75 0 001.5 0v-9a3 3 0 003-3v-7.5a.75.75 0 00-1.5 0v7.5a1.5 1.5 0 01-3 0v-7.5z" />
          </svg>
        </motion.div>
        <motion.h3
          className="text-2xl font-bold text-emerald-400"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Meals
        </motion.h3>
      </div>

      <div className="relative">
        <div className="space-y-8">
          {meals.map((meal, idx) => (
            <motion.div
              key={idx}
              className="relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30 hover:border-emerald-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
            >
              <p className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors duration-200">
                {meal}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}