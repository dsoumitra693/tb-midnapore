"use client";

import TestimonialCard from "./testimonial-card";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Kolkata',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
      text: 'The Darjeeling trip was perfectly organized! From the toy train ride to the tea garden visits, everything was memorable. Will definitely travel with Travel Buddies again!'
    },
    {
      id: 2,
      name: 'Rahul Gupta',
      location: 'Midnapore',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'As a solo traveler, I was hesitant at first, but the group was so welcoming! Made new friends and the itinerary was perfect for the budget. Highly recommended!'
    },
    {
      id: 3,
      name: 'Sneha Das',
      location: 'Kharagpur',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'They planned a custom trip for my family to Sikkim and it was flawless! Great attention to detail and excellent value for money. Will be booking our next vacation with them soon!'
    }
  ];

  // Animation variants for the cards
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18
      }
    }
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">Happy Travelers</h2>
          <p className="text-gray-400">What our community says about their experiences</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={card}
              whileHover={{ y: -8, boxShadow: "0 8px 24px rgba(16,185,129,0.15)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
