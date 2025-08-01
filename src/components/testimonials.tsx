"use client"

import { useEffect, useState } from "react";
import { ITestimonial } from "@/types";
import TestimonialCard from "./testimonial-card";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import AddTestimonialForm from "./add-testimonial-form";
import uploadTestimonial from "@/hooks/uploadTestimonial";
import { getTestimonials } from "@/hooks/getTestimonials";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([] as ITestimonial[]);
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


  useEffect(() => {
    async function fetchTestimonials() {
      const testimonialsData: ITestimonial[] = await getTestimonials();
      setTestimonials(testimonialsData);
    }

    fetchTestimonials();
  }, []);

  return (
    <section className="py-16 bg-gray-800" id="testimonials">
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
              <TestimonialCard testimonial={testimonial} key={testimonial._id} />
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
