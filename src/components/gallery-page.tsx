"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BentoGrid, BentoGridItem } from '@/components/bento-grid';
import { GalleryMedia } from '@/types';
import { ArrowLeftIcon } from '@sanity/icons';
import Lightbox from './lightbox';

export default function GalleryPage({
  galleryTrips
}: { galleryTrips: GalleryMedia[] }) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const closeLightbox = () => {
    setCurrentIndex(null);
    document.body.style.overflow = 'unset';
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (currentIndex === null) return;
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = galleryTrips.length - 1;
    if (newIndex >= galleryTrips.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl" />
      </div>

      {/* Header with Glassmorphism */}
      <motion.header
        className="sticky top-0 z-10 backdrop-blur-md bg-gray-900/70 border-b border-gray-700/50"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 justify-between w-full md:w-auto">
              <Link href="/" className="text-white hover:text-emerald-400 transition-colors">
                <ArrowLeftIcon className="h-5 w-5" />
              </Link>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Travel Memories Gallery
              </h1>
            </div>
            <p className="text-gray-400 text-sm">Moments from our unforgettable journeys</p>
          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8">
        {/* Bento Grid Layout */}
        <BentoGrid>
          {galleryTrips.map((trip) => (
            <BentoGridItem
              key={trip.source}
              title={trip.caption}
              media={{
                type: trip.type,
                source: trip.source,
                alt: trip.alt || trip.caption
              }}
              span="1x1"
              onClick={() => {
                const index = galleryTrips.findIndex((t) => t.source === trip.source);
                if (index !== -1) {
                  setCurrentIndex(index);
                  document.body.style.overflow = 'hidden';
                }
              }}
              priority={true}
            />
          ))}
        </BentoGrid>

        {/* Empty State */}
        {galleryTrips.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-gray-800/50 mb-6">
              <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No memories found</h3>
          </motion.div>
        )}

        <Lightbox
          galleryTrips={galleryTrips}
          selectedImage={currentIndex !== null ? galleryTrips[currentIndex] : null}
          closeLightbox={closeLightbox}
          navigate={navigate}
          currentIndex={currentIndex}
        />
      </main>
    </div>
  );
}
