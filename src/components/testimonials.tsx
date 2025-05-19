"use client"

import { useState } from "react";
import { ITestimonial } from "@/types";
import TestimonialCard from "./testimonial-card";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import AddTestimonialForm from "./add-testimonial-form";
import uploadTestimonial from "@/hooks/uploadTestimonial";

export default function TestimonialsSection({ testimonials: initialTestimonials }: { testimonials: ITestimonial[] }) {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [form, setForm] = useState<ITestimonial>({
    name: "",
    location: "",
    text: "",
    _id: "",
    avatarUrl: ""
  });
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAddReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTestimonial: ITestimonial = {
      _id: Math.random().toString(36).substr(2, 9),
      name: form.name,
      text: form.text,
      location: form.location,
      avatarUrl: form.avatarUrl
    };
    setIsUploading(true);
    uploadTestimonial(newTestimonial)
      .then((res) => {
        if (res) {
          setTestimonials(prev => [newTestimonial, ...prev]);
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to upload testimonial");
      }).finally(() => {
        setIsUploading(false);
        setForm({ name: "", location: "", text: "", _id: "", avatarUrl: "" });
      });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18
      }
    }
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          variants={container}
          initial="hidden"
          animate="show" // Changed from whileInView
        >
          <AnimatePresence>
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial._id}
                variants={card}
                initial="hidden"
                animate="show"
                exit="hidden"
                whileHover={{ y: -8, boxShadow: "0 8px 24px rgba(16,185,129,0.15)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AddTestimonialForm
          handleSubmit={handleAddReview}
          form={form}
          handleChange={handleChange}
          isUploading={isUploading}
          error={error}
        />
      </div>
    </section>
  );
}
