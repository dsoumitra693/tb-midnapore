import Link from "next/link";

export default function CustomTripSection() {
    return (
        <section id="custom-trip" className="py-16 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-8 md:p-12 shadow-xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Dream Trip, Your Way</h2>
                        <p className="text-emerald-100 mb-8 text-lg">
                            Tell us your destination, budget, and preferences – we&apos;ll craft the perfect plan tailored just for you and your group.
                        </p>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 transform hover:scale-105 group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2 transition-transform duration-200 group-hover:translate-x-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Plan My Custom Trip
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
