import Image from 'next/image'

interface Testimonial {
    name: string;
    location: string;
    text: string;
    avatar: string;
}

export default function TestimonialCard({ testimonial }: {
    testimonial: Testimonial
}) {
    return (
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 hover:border-emerald-900/50 transition-all duration-300">
            <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
            </div>
            <div className="relative">
                <svg className="absolute -top-2 -left-2 h-8 w-8 text-emerald-800/50" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-300 italic relative z-10">{testimonial.text}</p>
            </div>
        </div>
    )
}
