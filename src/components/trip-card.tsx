import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Trip } from '@/types';
import { formatDateToLongString } from '@/utils';


export default function TripCard({ trip }: { trip: Trip }) {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/60 border border-gray-700/40 backdrop-blur-lg p-0 rounded-2xl shadow-2xl group overflow-hidden"
      whileHover={{ scale: 1.015, boxShadow: "0 8px 32px rgba(16, 185, 129, 0.18)" }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      layout
    >
      {/* Glassy overlay for image */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 1.01 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <Image
            src={trip.image.asset.url}
            alt={trip.image.alt || trip.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          {/* Glass overlay (no blur!) */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
        </motion.div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-emerald-400 text-sm mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          {formatDateToLongString(trip.startDate)} – {formatDateToLongString(trip.endDate)}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{trip.title}</h3>

        <div className="flex items-baseline mb-4">
          <span className="text-gray-400 line-through text-sm mr-2">₹{trip.actualCost}</span>
          <span className="text-white text-2xl font-bold">₹{trip.discountedCost}</span>
        </div>

        {/* Animated Glassy Button */}
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link
            href={`/trips/${trip._id}`}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-emerald-500/80 to-emerald-600/80 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold shadow-md backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          >
            <span>View Details</span>
            <motion.div whileTap={{ scale: 0.95 }}>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              >
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Glassmorphic floating effect */}
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />
    </motion.div>
  )
}
