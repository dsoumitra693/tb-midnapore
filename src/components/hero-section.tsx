import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative h-[90vh] w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/90 z-10"></div>
            <Image
                src="https://scontent.fccu13-2.fna.fbcdn.net/v/t39.30808-6/481316294_948123060838041_6477257046568340295_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VNwVXD9kmLkQ7kNvwGHLjzw&_nc_oc=Adn_HHQzgczEl-GY0Ra_F0PpQzZZav1klFN1-X3b4wmMNzbx8HP_J4h_-PhA5Wo19hvcWdb3u-VODbc1NpBHa0t-&_nc_zt=23&_nc_ht=scontent.fccu13-2.fna&_nc_gid=GAS4C3ELuEItN3K6CqiFmQ&oh=00_AfKVls9Eodz0zybCYJCb2m82CgErR3y0gf4ADkN3T84HPQ&oe=682BF037"
                alt="Travel adventure background"
                fill
                priority
                className="object-cover"
            />
            <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                    Explore Together, <span className="text-emerald-400">Create Memories</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
                    Join our community of travelers for affordable group adventures or let us craft a personalized journey just for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="#trips"
                        className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white rounded-2xl transition-all duration-300 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                    >
                        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-3 transition-transform duration-300 group-hover:translate-x-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                        <span className="relative text-lg md:text-xl">Discover Our Trips</span>
                    </Link>

                    <Link
                        href="/custom-trip"
                        className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold rounded-2xl transition-all duration-300 border-2 border-emerald-400 hover:bg-emerald-400/10 text-emerald-400 hover:text-white hover:border-emerald-500 shadow-sm hover:shadow-md"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-3 transition-transform duration-300 group-hover:translate-x-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="relative text-lg md:text-xl">Plan Custom Trip</span>
                    </Link>
                </div>

            </div>
        </section>
    )
}