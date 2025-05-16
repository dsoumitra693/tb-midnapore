"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const featureList = [
  {
    label: "Budget-friendly",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Community-focused",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
  },
  {
    label: "Local expertise",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "Personalized care",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <motion.section
      id="about-us"
      className="py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 z-0"></div>
      
      {/* Glassmorphic background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-1">Who We Are</h2>
          <div className="w-24 h-1 bg-emerald-500/60 mx-auto rounded-full mb-1 blur-sm"></div>
          <p className="text-gray-300 max-w-2xl">Your local travel community in Midnapore</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Animated Image with glassmorphic frame */}
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl z-0 border border-white/10"></div>
            <div className="relative aspect-[4/3] m-3 rounded-xl overflow-hidden z-10">
              <Image
                src="/team.jpeg"
                alt="Travel Buddies Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-20"></div>
          </motion.div>
          
          {/* Content with glassmorphic card */}
          <motion.div
            className="relative p-8 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/60 rounded-2xl z-0"></div>
            
            <div className="relative z-10 space-y-6">
              <motion.p
                className="text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                We&apos;re a passionate community of travel enthusiasts based in Midnapore who believe that great travel experiences shouldn&apos;t break the bank. Founded in 2020, we organize budget-friendly group trips and personalized tours across India.
              </motion.p>
              
              <motion.p
                className="text-gray-200 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our mission is to make travel accessible, enjoyable, and memorable for everyone. Whether you&apos;re a solo traveler looking to join a group or planning a trip with friends and family, we&apos;ve got you covered!
              </motion.p>

              {/* Features grid with glassmorphic effect */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {featureList.map((feature, i) => (
                  <motion.div
                    key={feature.label}
                    className="flex items-center gap-4 p-3 rounded-xl group relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Glassmorphic background for each feature */}
                    <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/10 group-hover:border-emerald-500/20 rounded-xl transition-all duration-300 z-0"></div>
                    
                    <motion.div
                      className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400 shadow-inner shadow-emerald-900/30 relative z-10"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <span className="text-white font-medium relative z-10">{feature.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
