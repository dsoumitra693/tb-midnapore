"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Notice } from "@/types";
import Notices from "./notice";
import { useNotices } from "@/hooks/useNotices";


export default function NoticeSection() {
    const { notices, loading } = useNotices({});
    const [visibleNotices, setVisibleNotices] = useState<Notice[]>(notices);
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };
    useEffect(() => {
        setVisibleNotices(notices);
    }, [notices]);

    if (visibleNotices.length === 0 || loading || notices.length === 0) return null;

    return (
        <motion.section
            className="py-16 bg-gray-800"
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
                        <h2 className="text-3xl font-bold text-white mb-2">Important Updates</h2>
                        <p className="text-gray-400">Stay informed about the latest news and announcements</p>
                    </div>

                    {/* Desktop "View All" Link */}
                    <motion.div
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="hidden md:flex"
                    >
                        <Link href="/home/notices" className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors">
                            View all updates
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

                {/* Notice Cards Animation */}
                <motion.div
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {visibleNotices.map((notice) => <Notices notice={notice} onDismiss={() =>
                        setVisibleNotices((prev) =>
                            prev.filter(n =>
                                n.id !== notice.id
                            ))
                    }
                        key={notice.id} />)}
                </motion.div>

                {/* Mobile "View All" Button */}
                <motion.div
                    className="mt-8 text-center md:hidden flex flex-col justify-center items-center p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <p className="text-white text-lg font-semibold mb-2">Stay updated!</p>
                    <motion.div whileTap={{ scale: 0.95 }}>
                        <Link href="/home/notices" className="btn-outline flex justify-center items-center text-emerald-400 hover:text-emerald-300 transition-colors">
                            View All Updates
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
