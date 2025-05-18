"use client";

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon, CalendarDaysIcon, ClockIcon, CheckIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import useOneTrip from '@/hooks/useOneTrip';
import InfoItem from '@/components/trip-info-item';
import PriceItem from '@/components/price-item';
import ItinerarySection from '@/components/ininerary-section';
import InclusionsSection from '@/components/inclusion-section';
import { formatDateToLongString } from '@/utils';

export interface Trip {
  _id: string;
  image: { asset: { url: string }; alt: string };
  title: string;
  startDate: string;
  endDate: string;
  originalPrice: number;
  currentPrice: number;
  durationDays: number;
  durationNights: number;
  actualCost: number;
  discountedCost: number;
  meals: string[];
  features: string[];
  inclusions: string[];
  description: string;
  itinerary: { day: string; details: string[] }[];
}

export default function TripPage() {
  const { id } = useParams()
  const { trip, loading, error } = useOneTrip(id as string)

  if (loading) return <LoadingState />
  if (error) return <ErrorState />
  if (!trip) return <NotFoundState />

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-inter">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
      </div>

      {/* Header */}
      <motion.header
        className="sticky top-0 bg-gray-900/40 backdrop-blur-md z-10 border-b border-white/10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/trips"
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 group"
          >
            <ArrowLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">All Trips</span>
          </Link>
          <h1 className="text-lg md:text-xl font-bold text-center truncate max-w-[60vw]">
            {trip.title}
          </h1>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Image */}
        <motion.div
          className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-2xl ring-1 ring-white/10"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={trip.image.asset.url}
            alt={trip.image.alt || trip.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 75vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
              {trip.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-100 text-sm font-medium">
                {trip.durationDays} Days / {trip.durationNights} Nights
              </span>
              {trip.discountedCost < trip.actualCost && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/30 text-purple-100 text-sm font-medium">
                  {Math.round((1 - trip.discountedCost / trip.actualCost) * 100)}% Off
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Trip Overview */}
          <motion.section
            className="bg-gray-900/40 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl ring-1 ring-white/10 border border-white/5"
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
                icon={CalendarDaysIcon}
                text={`${formatDateToLongString(trip.startDate)} - ${formatDateToLongString(trip.endDate)}`}
              />
              <InfoItem
                icon={ClockIcon}
                text={`${trip.durationDays} Days / ${trip.durationNights} Nights`}
              />
              <PriceItem
                originalPrice={trip.actualCost}
                currentPrice={trip.discountedCost}
              />

              {/* Description */}
              {trip.description && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="text-lg font-semibold text-emerald-300 mb-2">About This Trip</h3>
                  <p className="text-gray-300">{trip.description}</p>
                </div>
              )}
            </div>
          </motion.section>

          {/* Features */}
          <motion.section
            className="bg-gray-900/40 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl ring-1 ring-white/10 border border-white/5"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-emerald-400 relative inline-block">
              Trip Features
              <span className="absolute left-0 -bottom-2 w-2/3 h-1 bg-emerald-500/40 rounded-full blur-sm"></span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {trip.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3 p-2 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-white/5 group hover:bg-emerald-900/20 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center aspect-square">
                    <CheckIcon className="w-5 h-5 text-emerald-400 aspect-square" />
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors">{feature}</span>
                </motion.div>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Meals Section */}
        {trip.meals && trip.meals.length > 0 && (
          <motion.section
            className="bg-gray-900/40 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-2xl ring-1 ring-white/10 border border-white/5 mb-6"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 text-emerald-400 relative inline-block">
              Meals Included
              <span className="absolute left-0 -bottom-2 w-2/3 h-1 bg-emerald-500/40 rounded-full blur-sm"></span>
            </h3>
            <div className="flex flex-wrap gap-3 mt-4">
              {trip.meals.map((meal, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-emerald-500/10 text-emerald-300 rounded-lg border border-emerald-500/20"
                >
                  {meal}
                </span>
              ))}
            </div>
          </motion.section>
        )}

        {/* Itinerary Section */}
        {trip.itinerary && trip.itinerary.length > 0 && (
          <ItinerarySection itinerary={trip.itinerary} />
        )}

        {/* Inclusions Section */}
        {trip.inclusions && trip.inclusions.length > 0 && (
          <InclusionsSection inclusions={trip.inclusions} />
        )}

        {/* Book Now CTA */}
        <motion.div
          className="fixed bottom-6 right-6 md:static md:mt-8 md:flex md:justify-center"
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
            href={`https://wa.me/919564965458?text=I want to join the ${trip.title.replace(/\s+/g, '%20')} trip from ${trip.startDate}
                   link: https://travelbuddiesmidnapore.in/trips/${trip._id}`}
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-200 gap-3 ring-2 ring-emerald-500/20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="w-6 h-6" />
            <span className="hidden sm:inline">Book This Trip</span>
            <span className="sm:hidden">Book Now</span>
          </a>
        </motion.div>
      </main>
    </div>
  )
}



// Loading, Error and Not Found States
function LoadingState() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-gray-700 border-t-emerald-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-emerald-400 font-medium">Loading trip details...</p>
      </div>
    </div>
  )
}

function ErrorState() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800/60 backdrop-blur-xl p-6 rounded-xl border border-red-500/20 max-w-md w-full">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-center text-white mb-2">Error Loading Trip</h2>
        <div className="mt-6 flex justify-center">
          <Link href="/trips" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
            Back to All Trips
          </Link>
        </div>
      </div>
    </div>
  )
}

function NotFoundState() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800/60 backdrop-blur-xl p-6 rounded-xl border border-gray-700/50 max-w-md w-full text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-700/50 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-white mb-2">Trip Not Found</h2>
        <p className="text-gray-300">The trip you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <div className="mt-6">
          <Link href="/trips" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
            Explore Available Trips
          </Link>
        </div>
      </div>
    </div>
  )
}

const WhatsAppIcon = (props: { className?: string }) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
)
