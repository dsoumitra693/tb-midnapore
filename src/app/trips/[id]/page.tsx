"use client";

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface Trip {
  id: string
  title: string
  image: string
  dates: string
  duration: string
  cost: number
  highlights: string[]
  inclusions: string[]
  exclusions: string[]
}

export default function TripPage() {
  const trip: Trip = {
    id: 'meghalaya',
    title: 'Meghalaya Monsoon Magic',
    image: 'https://t4.ftcdn.net/jpg/04/32/18/41/240_F_432184158_lna3LLJcDCZvtfyCSv6lB6d7eVTls2yT.jpg',
    dates: 'May 22 – May 27, 2025',
    duration: '5 Days / 4 Nights',
    cost: 9500,
    highlights: [
      'Explore Shillong & Cherrapunji',
      'Visit Living Root Bridges',
      'Boating at Dawki River',
      'Group Bonfire Night',
      'Local food tasting'
    ],
    inclusions: [
      'Accommodation (shared)',
      'Breakfast & Dinner',
      'All local transport',
      'Guide & coordination'
    ],
    exclusions: [
      'Lunch',
      'Personal expenses',
      'Entry fees (if any)'
    ]
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header with refined motion */}
      <motion.header
        className="sticky top-0 bg-gray-800/90 backdrop-blur-sm z-10 border-b border-gray-700"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/trips"
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 group"
          >
            <motion.div
              whileHover={{ x: -4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </motion.div>
            <span className="hidden sm:inline">All Trips</span>
          </Link>
          <h1 className="text-xl font-bold text-center truncate max-w-[50vw]">
            {trip.title}
          </h1>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8">
        {/* Optimized image container */}
        <motion.div
          className="relative aspect-video rounded-xl overflow-hidden mb-8 shadow-xl"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={trip.image}
            alt={trip.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.section
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.h2
              className="text-2xl font-bold mb-6 text-emerald-400 relative inline-block"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              Trip Overview
              <span className="absolute left-0 -bottom-2 w-2/3 h-1 bg-emerald-500/40 rounded-full blur-sm"></span>
            </motion.h2>
            <div className="space-y-5">
              <InfoItem
                icon={CalendarIcon}
                text={trip.dates}
                delay={0.2}
              />
              <InfoItem
                icon={ClockIcon}
                text={trip.duration}
                delay={0.3}
              />
              <InfoItem
                icon={CurrencyRupeeIcon}
                text={`₹${trip.cost.toLocaleString()}`}
                isPrice={true}
                delay={0.4}
              />
            </div>
          </motion.section>

          {/* Highlights Sections */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Section
              title="Itinerary Highlights"
              items={trip.highlights}
              icon={CheckIcon}
              delay={0.4}
            />
            <Section
              title="Inclusions"
              items={trip.inclusions}
              icon={CheckIcon}
              delay={0.5}
            />
            <Section
              title="Exclusions"
              items={trip.exclusions}
              icon={XMarkIcon}
              delay={0.6}
            />
          </motion.div>
        </div>

        {/* Enhanced WhatsApp CTA */}
        <motion.div
          className="fixed bottom-6 right-6 md:static md:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: 0.8
          }}
        >
          <a
            href={`https://wa.me/919564965458?text=I%20want%20to%20join%20the%20${trip.title.replace(/\s+/g, '%20')}%20trip%20on%20${trip.dates}`}
            className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-200 gap-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="w-6 h-6" />
            <span className="hidden sm:inline">Join via WhatsApp</span>
            <span className="sm:hidden">Join Now</span>
          </a>
        </motion.div>
      </main>
    </div>
  )
}

function InfoItem({ icon: Icon, text, isPrice = false, delay }: {
  icon: React.ComponentType<{ className?: string }>,
  text: string,
  isPrice?: boolean,
  delay?: number
}) {
  return (
    <motion.div
      className="flex items-center gap-4 p-2 bg-gradient-to-br from-gray-800/60 via-gray-900/40 to-gray-800/60 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-lg"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      <div className="p-3 bg-emerald-400/20 rounded-lg backdrop-blur-sm shadow-inner">
        <Icon className="w-6 h-6 text-emerald-400" />
      </div>
      <span className={`${isPrice ? 'text-2xl font-bold text-emerald-400' : 'text-gray-300'}`}>
        {text}
      </span>
    </motion.div>
  )
}

export function Section({
  title,
  items,
  icon: Icon,
  delay = 0,
}: {
  title: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
}) {
  return (
    <motion.section
      className="bg-gradient-to-br from-gray-800/90 to-gray-900/80 border border-gray-700/60 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-2xl"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.h3
        className="text-2xl font-bold mb-6 text-emerald-400 relative inline-block"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
      >
        {title}
        <span className="absolute left-0 -bottom-2 w-2/3 h-1 bg-emerald-500/40 rounded-full blur-sm"></span>
      </motion.h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-4 group rounded-lg transition"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: delay + 0.15 + index * 0.08 }}
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-900/50 group-hover:bg-emerald-700/60 transition-colors shadow-inner">
              <Icon className="w-5 h-5 text-emerald-400" />
            </span>
            <span className="text-gray-200 text-base group-hover:text-emerald-100 transition-colors">
              {item}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}

const CalendarIcon = (props: { className?: string }) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
)

const ClockIcon = (props: { className?: string }) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CurrencyRupeeIcon = (props: { className?: string }) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const WhatsAppIcon = (props: { className?: string }) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
)
