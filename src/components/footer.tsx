import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-12 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Social */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-xl font-bold">
                Travel Buddies <span className="text-emerald-400">Midnapore</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Connecting travelers and creating unforgettable experiences across India. Join our community for budget-friendly adventures and personalized journeys.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/TravelBuddiesMidnapore" aria-label="Facebook" className="hover:text-emerald-400 transition-colors">
                {/* Facebook Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-emerald-400 transition-colors">
                {/* Instagram Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm6.406-1.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-emerald-400 transition-colors">
                {/* Twitter Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-emerald-400 transition-colors">
                {/* YouTube Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/trips" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                  Trips
                </Link>
              </li>
              <li>
                <Link href="#about-us" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Trips */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Our Trips</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/trips/darjeeling-escape" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                  Darjeeling
                </Link>
              </li>
              <li>
                <Link href="/trips/goa-beach-getaway" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                  Goa
                </Link>
              </li>
              <li>
                <Link href="/trips/rishikesh-adventure" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                  Rishikesh
                </Link>
              </li>
              <li>
                <Link href="#custom-trip" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                  Custom Trips
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Gosai Bazar, Chandrakona, West Bengal
                </span>
              </li>
              <li>
                <a href="tel:+919876543210" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 9195649 65458
                </a>
              </li>
              <li>
                <a href="mailto:hello@travelbuddies.com" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V16a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  hello@travelbuddies.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright Row */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Travel Buddies Midnapore. All rights reserved.
          <p className='mt-4'>Made with ❤️ by <a href="https://www.instagram.com/soumo.das_" className="text-emerald-400 text-bold hover:text-emerald-500 transition-colors" target="_blank" rel="noopener noreferrer">Soumo</a></p>
        </div>
      </div>
    </footer>
  )
}
