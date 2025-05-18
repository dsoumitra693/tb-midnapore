"use client";

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ITestimonial } from "@/types";

export default function TestimonialCard({ testimonial }: { testimonial: ITestimonial }) {
    return (
        <motion.div
            className="bg-gradient-to-br from-gray-800/70 to-gray-900/60 border border-gray-700/60 backdrop-blur-lg p-6 md:p-7 rounded-2xl shadow-2xl transition-all duration-300 hover:border-emerald-500/60 group relative overflow-hidden"
            whileHover={{ scale: 1.035, boxShadow: "0 4px 32px rgba(16,185,129,0.16)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 13 }}
        >
            {/* Emerald Glow Accent */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center mb-4 relative z-10">
                <motion.div
                    className="relative w-12 h-12 rounded-full overflow-hidden mr-4 shadow-lg border-2 border-emerald-400/60 group-hover:border-emerald-400/90 transition"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 160, damping: 11, delay: 0.1 }}
                >
                    <Image
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <div>
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-emerald-300 text-sm">{testimonial.location}</p>
                </div>
            </div>
            <div className="relative z-10">
                <motion.svg
                    className="absolute -top-2 -left-2 h-8 w-8 text-emerald-600/30"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    initial={{ scale: 0.9, opacity: 0.7 }}
                    animate={{
                        scale: [0.9, 1.1, 0.9],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </motion.svg>
                <motion.p
                    className="text-gray-100/90 italic relative z-10 text-base md:text-lg"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.15 }}
                >
                    {testimonial.text}
                </motion.p>
            </div>
        </motion.div>
    )
}
