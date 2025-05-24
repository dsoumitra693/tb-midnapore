"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { GalleryMedia } from '@/types';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Lightbox({
    galleryTrips,
    selectedImage,
    closeLightbox,
    navigate,
    currentIndex,
}: {
    galleryTrips: GalleryMedia[];
    selectedImage: GalleryMedia | null;
    closeLightbox: () => void;
    navigate: (direction: 'prev' | 'next') => void;
    currentIndex: number | null;
}) {
    if (currentIndex === null) return null;
    return (
        <AnimatePresence>
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 z-10 p-2 rounded-full bg-gray-900/80 text-white hover:text-emerald-400 hover:bg-gray-800/80 transition-all duration-300"
                        aria-label="Close lightbox"
                    >
                        <XMarkIcon className="w-6 h-6" />
                    </motion.button>


                    {/* Media Container */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="relative w-full h-full max-w-6xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative flex-1 mb-4 flex items-center justify-center">
                            {galleryTrips[currentIndex].type === 'videoItem' ? (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="relative max-w-full max-h-[80vh]"
                                >
                                    <video
                                        src={galleryTrips[currentIndex].source}
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="max-h-[80vh] max-w-full rounded-lg shadow-2xl"
                                        style={{ maxHeight: '80vh', maxWidth: '100%' }}
                                        onError={(e) => {
                                            console.error('Video failed to load:', e);
                                        }}
                                    />

                                    {/* Video overlay controls for better UX */}
                                    <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                        <span className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                            Video
                                        </span>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={galleryTrips[currentIndex].source}
                                        alt={galleryTrips[currentIndex].alt || galleryTrips[currentIndex].caption}
                                        fill
                                        className="object-contain rounded-lg"
                                        sizes="100vw"
                                        priority
                                    />
                                </motion.div>
                            )}
                        </div>

                        {/* Navigation */}
                        <div className="absolute bottom-[25%] flex w-full justify-between">
                            <motion.button
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -50, opacity: 0 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate('prev');
                                }}
                                className="z-10 p-3 rounded-full bg-gray-900/80 text-white hover:text-emerald-400 hover:bg-gray-800/80 transition-all duration-300"
                                aria-label="Previous image"
                            >
                                <ArrowLeftIcon className="w-6 h-6" />
                            </motion.button>

                            <motion.button
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 50, opacity: 0 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate('next');
                                }}
                                className="z-10 p-3 rounded-full bg-gray-900/80 text-white hover:text-emerald-400 hover:bg-gray-800/80 transition-all duration-300"
                                aria-label="Next image"
                            >
                                <ArrowRightIcon className="w-6 h-6" />
                            </motion.button>
                        </div>

                        {/* Media Info */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-center bg-gray-900/80 backdrop-blur-md rounded-xl p-4"
                        >
                            <div className="flex items-center justify-center gap-3 mb-2">
                                <h2 className="text-2xl font-bold text-white">
                                    {galleryTrips[currentIndex].caption}
                                </h2>
                                {galleryTrips[currentIndex].type === 'videoItem' && (
                                    <span className="px-2 py-1 bg-emerald-600/20 text-emerald-400 rounded-full text-xs font-medium">
                                        Video
                                    </span>
                                )}
                            </div>

                            {/* Media counter */}
                            <div className="text-gray-400 text-sm">
                                {currentIndex + 1} of {galleryTrips.length}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )
            }
        </AnimatePresence >

    )
}