import { Trip } from '@/types'
import { motion } from 'framer-motion'

export default function ItinerarySection({ itinerary }: { itinerary: Trip['itinerary'] }) {
  return (
    <motion.section
      className="bg-gray-900/40 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl ring-1 ring-white/10 border border-white/5 mb-6"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="p-2 rounded-lg bg-emerald-500/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </motion.div>
        <motion.h3
          className="text-2xl font-bold text-emerald-400"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Itinerary
        </motion.h3>
      </div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[18px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-emerald-500/50 via-emerald-400/30 to-emerald-500/10 rounded-full"></div>

        <div className="space-y-8">
          {itinerary.map((day, idx) => (
            <motion.div
              key={idx}
              className="relative pl-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
            >
              {/* Day marker */}
              <motion.div
                className="absolute left-0 top-1 w-9 h-9 rounded-full flex items-center justify-center bg-emerald-900/80 border border-emerald-500/50 shadow-lg shadow-emerald-500/10"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0.4 + idx * 0.1
                }}
              >
                <span className="text-emerald-300 text-sm font-semibold">{idx + 1}</span>
              </motion.div>

              {/* Day content */}
              <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30 hover:border-emerald-500/20 transition-all duration-300">

                {day.details.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-2 group space-y-3"
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 + i * 0.05 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <p className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors duration-200">
                      {item.trim()}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}