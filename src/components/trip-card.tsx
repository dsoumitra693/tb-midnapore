import Link from 'next/link'
import Image from 'next/image'

interface Trip {
  id: string;
  image: string;
  title: string;
  startDate: string;
  endDate: string;
  features: string[];
  originalPrice: number;
  currentPrice: number;
}

export default function TripCard({ trip }: { trip: Trip }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={trip.image}
          alt={trip.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-emerald-400 text-sm mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          {trip.startDate} – {trip.endDate}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{trip.title}</h3>
        <ul className="space-y-2 mb-6">
          {trip.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex items-baseline mb-4">
          <span className="text-gray-400 line-through text-sm mr-2">₹{trip.originalPrice}</span>
          <span className="text-white text-2xl font-bold">₹{trip.currentPrice}</span>
        </div>
        <Link
          href={`/trips/${trip.id}`}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 group-hover:scale-105"
        >
          <span>View Details</span>
          <svg
            className="w-5 h-5 text-white transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
