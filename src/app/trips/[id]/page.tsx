import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

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
      <header className="sticky top-0 bg-gray-800/90 backdrop-blur-sm z-10 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/trips" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2">
            <ArrowLeftIcon className="w-5 h-5" />
            All Trips
          </Link>
          <h1 className="text-xl font-bold">{trip.title}</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src={trip.image}
            alt={trip.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-emerald-400">Trip Overview</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-emerald-400" />
                  <span>{trip.dates}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-emerald-400" />
                  <span>{trip.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CurrencyRupeeIcon className="w-5 h-5 text-emerald-400" />
                  <span className="text-2xl font-bold">₹{trip.cost.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <Section title="Itinerary Highlights" items={trip.highlights} icon={CheckIcon} />
            <Section title="Inclusions" items={trip.inclusions} icon={CheckIcon} />
            <Section title="Exclusions" items={trip.exclusions} icon={XMarkIcon} />
          </div>
        </div>

        <a
          href={`https://wa.me/919564965458?text=I%20want%20to%20join%20the%20${trip.title.replace(/\s+/g, '%20')}%20trip%20on%20${trip.dates}`}
          className="fixed bottom-6 right-6 md:static md:w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="w-6 h-6" />
          Join Trip via WhatsApp
        </a>
      </main>
    </div>
  )
}

function Section({ title, items, icon: Icon }: { title: string; items: string[]; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-4 text-emerald-400">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <Icon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Icons (install @heroicons/react)
function CalendarIcon(props: { className?: string }) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

function ClockIcon(props: { className?: string }) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function CurrencyRupeeIcon(props: { className?: string }) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function WhatsAppIcon(props: { className?: string }) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
    </svg>
  )
}
