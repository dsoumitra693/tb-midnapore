"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomTripSection() {
    // Animation variants for staggered entrance
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
    };

    return (
        <motion.section
            id="custom-trip"
            className="py-16 bg-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="
                        relative
                        rounded-2xl
                        p-8 md:p-12
                        shadow-2xl
                        bg-white/10
                        border
                        border-white/20
                        backdrop-blur-xl
                        overflow-hidden
                        before:content-['']
                        before:absolute
                        before:inset-0
                        before:bg-gradient-to-br
                        before:from-emerald-400/10
                        before:to-emerald-800/20
                        before:rounded-2xl
                        before:pointer-events-none
                    "
                    initial={{ scale: 0.98, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                >
                    <div className="relative max-w-3xl mx-auto text-center z-10">
                        <motion.h2
                            className="text-3xl font-bold text-white mb-4 drop-shadow-lg"
                            variants={itemVariants}
                        >
                            Dream Trip, Your Way
                        </motion.h2>
                        <motion.p
                            className="text-emerald-100 mb-8 text-lg"
                            variants={itemVariants}
                        >
                            Tell us your destination, budget, and preferences – we&apos;ll craft the perfect plan tailored just for you and your group.
                        </motion.p>
                        <motion.div
                            variants={itemVariants}
                            whileTap={{ scale: 0.96 }}
                            whileHover={{ scale: 1.04, boxShadow: "0 4px 32px 0 rgba(16,185,129,0.25)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <Link
                                href="/home/custom-trip"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-400/80 to-emerald-600/90 hover:from-emerald-500 hover:to-emerald-700 text-white font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 group backdrop-blur-md"
                            >
                                {/* Left Icon */}
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    whileHover={{ rotate: -15, x: -2 }}
                                    whileTap={{ scale: 1.15 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </motion.svg>
                                Plan My Custom Trip
                                {/* Right Arrow Icon */}
                                <motion.div whileTap={{ scale: 0.95 }}>
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 ml-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                    >
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </motion.svg>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
