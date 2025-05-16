"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" }
  }),
};

const iconTap = { scale: 0.85, rotate: -10 };

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-12 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Social */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-emerald-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                whileTap={iconTap}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </motion.svg>
              <span className="text-xl font-bold">
                Travel Buddies <span className="text-emerald-400">Midnapore</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Connecting travelers and creating unforgettable experiences across India. Join our community for budget-friendly adventures and personalized journeys.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons with tap feedback */}
              {[
                {
                  href: "https://www.facebook.com/TravelBuddiesMidnapore",
                  label: "Facebook",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  )
                },
                {
                  href: "#",
                  label: "Instagram",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm6.406-1.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )
                },
                {
                  href: "https://chat.whatsapp.com/Jj2VEpo8kGlI1XOgjfPURS",
                  label: "WhatsApp Group",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  )
                },
                {
                  href: "https://youtube.com/@travelbuddiesmidnapore?si=GYe-mv7iRywjTatw",
                  label: "YouTube",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  )
                }
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="hover:text-emerald-400 transition-colors"
                  whileTap={iconTap}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/trips", label: "Trips" },
                { href: "#about-us", label: "About Us" },
                { href: "#contact", label: "Contact" }
              ].map((item) => (
                <motion.li key={item.label} whileTap={{ scale: 0.94 }}>
                  <Link href={item.href} className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Trips */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            <h3 className="text-white text-lg font-semibold mb-6">Our Trips</h3>
            <ul className="space-y-3">
              {[
                { href: "/trips/darjeeling-escape", label: "Darjeeling" },
                { href: "/trips/goa-beach-getaway", label: "Goa" },
                { href: "/trips/rishikesh-adventure", label: "Rishikesh" },
                { href: "/custom-trip", label: "Custom Trips" }
              ].map((item) => (
                <motion.li key={item.label} whileTap={{ scale: 0.94 }}>
                  <Link href={item.href} className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
          >
            <h3 className="text-white text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 flex items-start">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 mt-0.5 text-emerald-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    whileTap={iconTap}
                  >
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </motion.svg>
                  Gosai Bazar, Chandrakona, West Bengal
                </span>
              </li>
              <motion.li whileTap={{ scale: 0.94 }}>
                <a href="tel:+919564965458" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-emerald-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    whileTap={iconTap}
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </motion.svg>
                  +91 95649 65458
                </a>
              </motion.li>
              <motion.li whileTap={{ scale: 0.94 }}>
                <a href="mailto:hello@travelbuddies.com" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-emerald-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    whileTap={iconTap}
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V16a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </motion.svg>
                  travelbuddiesmidnapore@gmail.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        {/* Copyright Row */}
        <motion.div
          className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          &copy; {new Date().getFullYear()} Travel Buddies Midnapore. All rights reserved.
          <p className='mt-4'>
            Made with ❤️ by <a href="https://www.instagram.com/soumo.das_" className="text-emerald-400 text-bold hover:text-emerald-500 transition-colors" target="_blank" rel="noopener noreferrer">Soumo</a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
