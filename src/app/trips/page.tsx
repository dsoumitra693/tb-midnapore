"use client";

import Link from 'next/link'
import TripCard from '@/components/trip-card'

export default function TripsPage() {
    const trips = [
        {
            id: 'darjeeling-escape',
            title: 'Darjeeling Escape',
            image: 'https://scontent.fccu13-1.fna.fbcdn.net/v/t39.30808-6/481998710_955880883395592_4558968641924199367_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=554OtrOqyuYQ7kNvwGzAgfs&_nc_oc=Adm9Zwq7fJkPAb83OJk7HWH36-cj62qU-oVwkbF_T0hSCOgv2lpZ_IpLhs5LcFwAPSJ7qAwoOWMAbRyr0u02B_Bm&_nc_zt=23&_nc_ht=scontent.fccu13-1.fna&_nc_gid=iOeP008QZ0kuVQbHepMc7Q&oh=00_AfLngmZL136h-NTYU-lZTO_J3Lo8WIVtgqjd9FHn9yvlvw&oe=682BDE95',
            startDate: 'June 10',
            endDate: 'June 14',
            features: ['Toy Train Ride', 'Tea Garden Visit', 'Tiger Hill Sunrise'],
            originalPrice: 12500,
            currentPrice: 9999
        },
        {
            id: 'goa-beach-getaway',
            title: 'Goa Beach Getaway',
            image: 'https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.jpg?s=612x612&w=0&k=20&c=BE0ZCnKZj8xi9Zgx5meO77k-o8v8EPT9TwlsPvY3TMc=',
            startDate: 'July 15',
            endDate: 'July 19',
            features: ['Beach Hopping', 'Water Sports', 'Sunset Cruise'],
            originalPrice: 15000,
            currentPrice: 12499
        },
        {
            id: 'rishikesh-adventure',
            title: 'Rishikesh Adventure',
            image: 'https://media.istockphoto.com/id/1069264492/photo/spectacular-view-of-the-lakshman-temple-bathed-by-the-sacred-river-ganges-at-sunset.jpg?s=612x612&w=0&k=20&c=f-H_D86P9wO-q4E0Iv9VTy0EZeLa5izQUQCMSVCSzWk=',
            startDate: 'August 5',
            endDate: 'August 9',
            features: ['River Rafting', 'Camping', 'Yoga Sessions'],
            originalPrice: 14000,
            currentPrice: 11999
        },
        {
            id: 'meghalaya-monsoon',
            title: 'Meghalaya Monsoon Magic',
            image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
            startDate: 'July 1',
            endDate: 'July 6',
            features: ['Living Root Bridges', 'Waterfall Trek', 'Cave Exploration'],
            originalPrice: 13500,
            currentPrice: 10999
        },
        {
            id: 'sikkim-blossom',
            title: 'Sikkim Spring Blossom',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
            startDate: 'April 10',
            endDate: 'April 15',
            features: ['Tsomgo Lake', 'Monastery Tour', 'Flower Valley Hike'],
            originalPrice: 14500,
            currentPrice: 11999
        },
        {
            id: 'leh-ladakh-expedition',
            title: 'Leh-Ladakh Expedition',
            image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
            startDate: 'September 1',
            endDate: 'September 10',
            features: ['Pangong Lake', 'Nubra Valley', 'Magnetic Hill'],
            originalPrice: 28000,
            currentPrice: 23999
        },
        {
            id: 'andaman-island-hopping',
            title: 'Andaman Island Hopping',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
            startDate: 'November 5',
            endDate: 'November 11',
            features: ['Snorkeling', 'Havelock Beach', 'Cellular Jail'],
            originalPrice: 26000,
            currentPrice: 20999
        },
        {
            id: 'jaipur-heritage-tour',
            title: 'Jaipur Heritage Tour',
            image: 'https://as1.ftcdn.net/v2/jpg/02/56/53/38/1000_F_256533834_Chxhh4CkOk6YVnvAKGPSN3jc40rSTFaV.jpg',
            startDate: 'October 18',
            endDate: 'October 22',
            features: ['Amber Fort', 'City Palace', 'Local Bazaars'],
            originalPrice: 11000,
            currentPrice: 8999
        },
        {
            id: 'kerala-backwaters',
            title: 'Kerala Backwaters Retreat',
            image: 'https://as1.ftcdn.net/v2/jpg/03/32/52/80/1000_F_332528013_S60jTsByjBTlfT3fGNyjWGg3WJotNLtg.jpg',
            startDate: 'August 20',
            endDate: 'August 25',
            features: ['Houseboat Stay', 'Ayurvedic Spa', 'Tea Gardens'],
            originalPrice: 15000,
            currentPrice: 12499
        },
        {
            id: 'varanasi-spiritual-journey',
            title: 'Varanasi Spiritual Journey',
            image: 'https://as2.ftcdn.net/v2/jpg/02/64/56/29/1000_F_264562951_MQRFSoIUDhNi3RVJByRKGtD2sVtRJb4W.jpg',
            startDate: 'December 3',
            endDate: 'December 7',
            features: ['Ganga Aarti', 'Temple Walk', 'Boat Ride'],
            originalPrice: 10500,
            currentPrice: 8499
        }
    ]

    return (
        <div className="min-h-screen bg-gray-900">
            <header className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-emerald-400">Upcoming Group Trips</h1>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trips.map(trip => (
                        <TripCard key={trip.id} trip={trip} />
                    ))}
                </div>
            </main>

            <Link
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
                aria-label="Contact us on WhatsApp"
            >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                </svg>
            </Link>
        </div>
    )
}
