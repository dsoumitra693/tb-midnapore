"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection({ heroData }: { heroData: { title: string; description: string; image: { asset: { url: string } } } }) {
    const [isMounted, setIsMounted] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    // Handle touch events for swipe gestures
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
        setTouchStart(e.targetTouches[0].clientY);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(e.targetTouches[0].clientY);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isDownSwipe = distance > 50;

        if (isDownSwipe) {
            document.getElementById('trips')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        setTouchStart(null);
        setTouchEnd(null);
    };


    return (
        <section
            className="relative h-[90vh] w-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Gradient overlay with more transparency for glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/50 to-gray-900/80 z-10"></div>

            {/* Background image with subtle zoom effect */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: isMounted ? 1 : 1.1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <Image
                    src={heroData?.image?.asset?.url}
                    alt="Travel adventure background"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>

            {/* Content container with glassmorphic card */}
            <motion.div
                className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center"
                variants={containerVariants}
                initial="hidden"
                animate={isMounted ? "visible" : "hidden"}
            >
                <motion.div
                    className="bg-gradient-to-br from-gray-900/40 to-gray-800/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl w-full text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                        variants={itemVariants}
                    >
                        {heroData?.title.split(",")[0]}, {" "}
                        <motion.span
                            className="text-emerald-400 relative inline-block"
                            animate={{
                                opacity: [0.7, 1, 0.7],
                                textShadow: [
                                    "0 0 5px rgba(52, 211, 153, 0.3)",
                                    "0 0 15px rgba(52, 211, 153, 0.5)",
                                    "0 0 5px rgba(52, 211, 153, 0.3)"
                                ]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            {heroData?.title.split(",")[1]}
                            <span className="absolute left-0 -bottom-2 w-full h-1 bg-emerald-500/40 rounded-full blur-sm"></span>
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
                        variants={itemVariants}
                    >
                        {heroData?.description}
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        variants={itemVariants}
                    >
                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Link
                                href="/home#trips"
                                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white rounded-2xl transition-all duration-300 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl hover:-translate-y-1 group active:translate-y-0"
                            >
                                <motion.span
                                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    animate={{ opacity: [0, 0.1, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                ></motion.span>
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mr-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                                >
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </motion.svg>
                                <span className="relative text-lg md:text-xl">Discover Our Trips</span>
                            </Link>
                        </motion.div>

                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Link
                                href="/home/custom-trip"
                                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold rounded-2xl transition-all duration-300 border-2 border-emerald-400/70 bg-emerald-400/10 backdrop-blur-sm hover:bg-emerald-400/20 text-emerald-400 hover:text-white hover:border-emerald-500 shadow-sm hover:shadow-md active:translate-y-0"
                            >
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mr-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut"
                                    }}
                                >
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </motion.svg>
                                <span className="relative text-lg md:text-xl">Plan Custom Trip</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Decorative glass orbs */}
            <motion.div
                className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-emerald-500/10 backdrop-blur-md z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 1, delay: 1 }}
            />
            <motion.div
                className="absolute bottom-1/3 right-10 w-24 h-24 rounded-full bg-blue-500/10 backdrop-blur-md z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 1, delay: 1.3 }}
            />
            <motion.div
                className="absolute top-2/3 left-1/4 w-16 h-16 rounded-full bg-purple-500/10 backdrop-blur-md z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 1, delay: 1.6 }}
            />
        </section>
    );
}
