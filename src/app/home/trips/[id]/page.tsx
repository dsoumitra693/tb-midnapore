"use client";

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon, CalendarDaysIcon, ClockIcon, CheckIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import useOneTrip from '@/hooks/useOneTrip';
import { formatDateToLongString } from '@/utils';
import InfoItem from '@/components/trip-info-item';
import PriceItem from '@/components/price-item';
import ItinerarySection from '@/components/ininerary-section';
import InclusionsSection from '@/components/inclusion-section';

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
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100 font-sans">
      {/* Subtle background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-emerald-600/5 blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl"></div>
      </div>
      {/* Header */}
      <motion.header
        className="sticky top-0 bg-gray-800/60 backdrop-blur-md z-10 border-b border-white/5"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/home/trips"
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2 group"
          >
            <ArrowLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline text-base">All Trips</span>
          </Link>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            {trip.title.slice(0, 25) + (trip.title.length > 25 ? '...' : '')}
          </h1>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 py-6 max-w-5xl">
        {/* Hero Image */}
        <motion.div
          className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-sm">
              {trip.title}
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-100 text-sm font-medium">
                {trip.durationDays} Days / {trip.durationNights} Nights
              </span>
              {trip.discountedCost < trip.actualCost && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 text-purple-100 text-sm font-medium">
                  {Math.round((1 - trip.discountedCost / trip.actualCost) * 100)}% Off
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Trip Overview */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-gray-700/20 backdrop-blur-md rounded-xl border border-white/5 p-5 shadow-sm">
            <h2 className="text-xl font-medium text-emerald-400 mb-4">Trip Overview</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InfoItem
                icon={CalendarDaysIcon}
                text={`${formatDateToLongString(trip.startDate)} - ${formatDateToLongString(trip.endDate)}`}
              />
              <InfoItem
                icon={ClockIcon}
                text={`${trip.durationDays} Days / ${trip.durationNights} Nights`}
              />
            </div>

            <PriceItem
              originalPrice={trip.actualCost}
              currentPrice={trip.discountedCost}
            />

            {/* Description */}
            {trip.description && (
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-base text-gray-200 leading-relaxed">{trip.description}</p>
              </div>
            )}
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="bg-gray-700/20 backdrop-blur-md rounded-xl border border-white/5 p-5 shadow-sm">
            <h2 className="text-xl font-medium text-emerald-400 mb-4">Trip Features</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trip.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-base text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Meals Section */}
        {trip.meals && trip.meals.length > 0 && (
          <motion.section
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="bg-gray-700/20 backdrop-blur-md rounded-xl border border-white/5 p-5 shadow-sm">
              <h2 className="text-xl font-medium text-emerald-400 mb-4">Meals Included</h2>

              <div className="flex flex-wrap gap-2">
                {trip.meals.map((meal, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-lg text-sm"
                  >
                    {meal}
                  </span>
                ))}
              </div>
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
          transition={{ delay: 0.6 }}
        >
          <a
            href={`https://wa.me/919564965458?text=I want to join the ${trip.title.replace(/\s+/g, '%20')} trip from ${trip.startDate}
               link: https://travelbuddiesmidnapore.in/home/trips/${trip._id}`}
            className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-200 gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span className="hidden sm:inline text-base">Book This Trip</span>
            <span className="sm:hidden text-base">Book Now</span>
          </a>
        </motion.div>
      </main>
    </div>
  )
}

// Loading, Error and Not Found States
function LoadingState() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-2 border-gray-700 border-t-emerald-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-emerald-400 text-base">Loading trip details...</p>
      </div>
    </div>
  )
}

function ErrorState() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-700/40 backdrop-blur-md p-6 rounded-lg border border-red-500/20 max-w-md w-full">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
          <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-xl font-medium text-center text-white mb-2">Error Loading Trip</h2>
        <div className="mt-6 flex justify-center">
          <Link href="/trips" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-base">
            Back to All Trips
          </Link>
        </div>
      </div>
    </div>
  )
}

function NotFoundState() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-700/40 backdrop-blur-md p-6 rounded-lg border border-gray-700/30 max-w-md w-full text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-700/50 flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-medium text-white mb-2">Trip Not Found</h2>
        <p className="text-gray-300 text-base">The trip you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        <div className="mt-6">
          <Link href="/trips" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors text-base">
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