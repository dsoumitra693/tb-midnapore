"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TripCard from '@/components/trip-card';
import { motion } from 'framer-motion';

export default function TripsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTrips, setFilteredTrips] = useState<Array<{
        id: string;
        title: string;
        image: string;
        startDate: string;
        endDate: string;
        features: string[];
        originalPrice: number;
        currentPrice: number;
    }>>([]);

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

    useEffect(() => {
        setFilteredTrips(
            searchTerm
                ? trips.filter(trip =>
                    trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    trip.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
                )
                : trips
        );
    }, [searchTerm]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            {/* Decorative Background Elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 -left-40 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl"></div>
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
                        <div className="flex items-center gap-3">
                            <Link href="/" className="text-white hover:text-emerald-400 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                                Upcoming Adventures
                            </h1>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-auto">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input
                                type="search"
                                className="w-full md:w-64 p-2.5 pl-10 text-sm bg-gray-800/70 border border-gray-700 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-white placeholder-gray-400"
                                placeholder="Search destinations..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </motion.header>

            <main className="container mx-auto px-4 py-10">
                {/* Trip Count */}
                <motion.div
                    className="mb-6 text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <p>Showing {filteredTrips.length} amazing trips</p>
                </motion.div>

                {/* Trip Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {filteredTrips.map((trip, index) => (
                        <motion.div
                            key={trip.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="transform transition-all duration-300"
                        >
                            <TripCard trip={trip} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredTrips.length === 0 && (
                    <motion.div
                        className="text-center py-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-gray-800/50 mb-6">
                            <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">No trips found</h3>
                        <p className="text-gray-400">Try adjusting your search criteria</p>
                    </motion.div>
                )}
            </main>

            {/* Floating WhatsApp Button with Glassmorphism */}
            <motion.div
                className="fixed bottom-6 right-6 z-20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.6
                }}
            >
                <Link
                    href="https://wa.me/919564965458"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 transition-all duration-300 group"
                    aria-label="Contact us on WhatsApp"
                >
                    <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                    </svg>
                </Link>
            </motion.div>
        </div>
    );
}
