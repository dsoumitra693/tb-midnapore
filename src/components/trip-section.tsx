import Link from "next/link";
import TripCard from "./trip-card";

export default function TripSection() {
    const featuredTrips = [
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
        }
    ]
    return (
        <section id="trips" className="py-16 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Upcoming Adventures</h2>
                        <p className="text-gray-400">Join our scheduled group trips and explore with fellow travelers</p>
                    </div>
                    <Link href="/trips" className="hidden md:flex items-center text-emerald-400 hover:text-emerald-300 transition-colors">
                        See all trips
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredTrips.map(trip => (
                        <TripCard key={trip.id} trip={trip} />
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden flex flex-col justify-center items-center p-4 rounded-lg">
                    <p className="text-white text-lg font-semibold mb-2">Want to explore more?</p>
                    <Link href="/trips" className="btn-outline flex justify-center items-center text-emerald-400 hover:text-emerald-300 transition-colors">
                        See All Trips
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}