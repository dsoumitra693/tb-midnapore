"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    CalendarDaysIcon,
    InformationCircleIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
    BellIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";
import { Notice } from "@/types";

interface NoticesProps {
    notice: Notice;
    onDismiss: (id: string) => void;
}

export default function Notices({ notice, onDismiss }: NoticesProps) {
    const getNoticeStyles = (type: Notice['type']) => {
        switch (type) {
            case 'info':
                return {
                    background: 'from-blue-900/20 to-blue-800/10',
                    border: 'border-blue-500/30',
                    icon: 'text-blue-400',
                    title: 'text-blue-300'
                };
            case 'warning':
                return {
                    background: 'from-amber-900/20 to-amber-800/10',
                    border: 'border-amber-500/30',
                    icon: 'text-amber-400',
                    title: 'text-amber-300'
                };
            case 'success':
                return {
                    background: 'from-emerald-900/20 to-emerald-800/10',
                    border: 'border-emerald-500/30',
                    icon: 'text-emerald-400',
                    title: 'text-emerald-300'
                };
            case 'announcement':
                return {
                    background: 'from-purple-900/20 to-purple-800/10',
                    border: 'border-purple-500/30',
                    icon: 'text-purple-400',
                    title: 'text-purple-300'
                };
            default:
                return {
                    background: 'from-gray-800/20 to-gray-700/10',
                    border: 'border-gray-500/30',
                    icon: 'text-gray-400',
                    title: 'text-gray-300'
                };
        }
    };

    const getNoticeIcon = (type: Notice['type']) => {
        switch (type) {
            case 'info':
                return <InformationCircleIcon className="h-6 w-6" />;
            case 'warning':
                return <ExclamationTriangleIcon className="h-6 w-6" />;
            case 'success':
                return <CheckCircleIcon className="h-6 w-6" />;
            case 'announcement':
                return <BellIcon className="h-6 w-6" />;
            default:
                return <InformationCircleIcon className="h-6 w-6" />;
        }
    };

    const styles = getNoticeStyles(notice.type);

    const noticeVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        show: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                type: "spring", 
                stiffness: 300,
                damping: 20
            } 
        },
        exit: { 
            opacity: 0, 
            scale: 0.8, 
            height: 0,
            transition: { 
                duration: 0.2 
            } 
        }
    };

    return (
        <motion.div
            key={notice.id}
            variants={noticeVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            layout
            className={`relative bg-gradient-to-r ${styles.background} border ${styles.border} rounded-xl p-6 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
            whileHover={{ scale: 1.02 }}
        >
            {notice.dismissible && (
                <motion.button
                    onClick={() => onDismiss(notice.id)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Dismiss notice"
                >
                    <XMarkIcon className="h-5 w-5" />
                </motion.button>
            )}

            <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className={`flex-shrink-0 ${styles.icon}`}>
                    {getNoticeIcon(notice.type)}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                        <h3 className={`text-lg font-semibold ${styles.title}`}>
                            {notice.title}
                        </h3>
                        <div className="flex items-center text-gray-400 text-sm">
                            <CalendarDaysIcon className="h-4 w-4 mr-1" />
                            {new Date(notice.date).toLocaleDateString('en-IN', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                            })}
                        </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                        {notice.message}
                    </p>

                    {notice.actionText && notice.actionLink && (
                        <motion.div whileTap={{ scale: 0.95 }}>
                            <Link
                                href={notice.actionLink}
                                className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors duration-200"
                            >
                                {notice.actionText}
                                <svg
                                    className="ml-2 h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
