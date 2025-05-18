"use client";

import Link from "next/link";
import TripCard from "./trip-card";
import { motion } from "framer-motion";
import { useTrips } from "@/hooks/useTrips";

export default function TripSection() {
    const { trips: featuredTrips } = useTrips({
        limit: 3
    })

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.18,
                delayChildren: 0.2
            }
        }
    };

    return (
        <motion.section
            id="trips"
            className="py-16 bg-gray-900"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                {/* Heading Animation */}
                <motion.div
                    className="flex justify-between items-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Upcoming Adventures</h2>
                        <p className="text-gray-400">Join our scheduled group trips and explore with fellow travelers</p>
                    </div>
                    <motion.div
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="hidden md:flex"
                    >
                        <Link href="/trips" className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors">
                            See all trips
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
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Trip Cards Animation */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {!!featuredTrips && featuredTrips.map(trip => <TripCard trip={trip} key={trip._id} />)}
                </motion.div>

                {/* Mobile "See All Trips" Button */}
                <motion.div
                    className="mt-8 text-center md:hidden flex flex-col justify-center items-center p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <p className="text-white text-lg font-semibold mb-2">Want to explore more?</p>
                    <motion.div whileTap={{ scale: 0.95 }}>
                        <Link href="/trips" className="btn-outline flex justify-center items-center text-emerald-400 hover:text-emerald-300 transition-colors">
                            See All Trips
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
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
