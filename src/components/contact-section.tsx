"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactCard from "./contact-card";
import ContactForm from "./contact-form";
import { redirect } from 'next/navigation'

export default function ContactSection({contactData}:{
  contactData: {
    phone: string;
    email: string;
    location: {
      name: string;
      googleMapLink: string;
    };
    whatsapp: string;
  }
}) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    redirect(`https://wa.me/${contactData.whatsapp}?text=Hello%20I%20am%20${form.name}%20and%20I%20am%20writing%20to%20you%20regarding%20%20${form.message}%20%20my%20email%20is%20${form.email}`);

    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have questions or ready to book? Reach out to us!
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactCard
              title="Call Us"
              href={`tel:${contactData.phone}`}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              }
            >
              <span className="text-gray-400 hover:text-emerald-400 block mt-1 transition-colors">
                +91 {contactData.phone.slice(0,5) + ' ' + contactData.phone.slice(5,10)}
              </span>
            </ContactCard>
            <ContactCard
              title="Email"
              href={`mailto:${contactData.email}`}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
            >
              <span className="text-gray-400 hover:text-emerald-400 block mt-1 transition-colors">
                {contactData.email}
              </span>
            </ContactCard>
            <ContactCard
              title="WhatsApp"
              href={`https://wa.me/91${contactData.whatsapp}`}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              }
            >
              <span className="text-gray-400 hover:text-emerald-400 block mt-1 transition-colors">
                +91 {contactData.whatsapp.slice(0,5) + ' ' + contactData.whatsapp.slice(5, 10)}
              </span>
            </ContactCard>
            <ContactCard
              title="Location"
              href={contactData.location.googleMapLink}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              }
            >
              <span className="text-gray-400 block mt-1">{contactData.location.name}</span>
            </ContactCard>
          </div>
          {/* Contact Form */}
          <ContactForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
}
