"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    BellIcon,
    ArrowLeftIcon
} from "@heroicons/react/24/outline";
import Notices from "@/components/notice";
import { useNotices } from "@/hooks/useNotices";


export default function NoticesPage() {
    const { notices, loading } = useNotices({});


    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    if (loading || notices?.length === 0)
        return null

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            {/* Page Header */}
            <motion.header
                className="sticky top-0 z-10 backdrop-blur-md bg-gray-900/70 border-b border-gray-700/50"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 py-5">
                    <div className="flex items-center gap-4">
                        <motion.div
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ x: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link href="/" className="text-white hover:text-emerald-400 transition-colors">
                                <ArrowLeftIcon className="h-5 w-5" />
                            </Link>
                        </motion.div>
                        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                            All Updates & Notices
                        </h1>
                    </div>
                </div>
            </motion.header>

            <main className="container mx-auto px-4 py-8">
                {/* Notices List */}
                {notices.length === 0 ? (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-gray-800/50 mb-6">
                            <BellIcon className="w-10 h-10 text-gray-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">No current updates</h3>
                        <p className="text-gray-400">Check back later for important announcements</p>
                    </motion.div>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        {notices.map((notice) => <Notices notice={notice} onDismiss={() => { }} key={notice.id} />)}
                    </motion.div>
                )}
            </main>
        </div>
    );
}
