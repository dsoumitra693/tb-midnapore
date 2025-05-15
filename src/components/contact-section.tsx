"use client";

import React, { useState } from "react";
import ContactCard from "./contact-card";


export default function ContactSection() {
  // Form state (for demonstration, not functional)
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: { target: { name: string; value: string; }; }) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    // You can implement actual form submission here
    alert("Thank you for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Get in Touch</h2>
          <p className="text-gray-400">
            Have questions or ready to book? Reach out to us!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactCard
              title="Call Us"
              href="tel:+919564965458"
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
                +91 9195649 65458
              </span>
            </ContactCard>
            <ContactCard
              title="Email"
              href="mailto:hello@travelbuddies.com"
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
                hello@travelbuddies.com
              </span>
            </ContactCard>
            <ContactCard
              title="WhatsApp"
              href="https://wa.me/919564965458"
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
                +91 9195649 65458
              </span>
            </ContactCard>
            <ContactCard
              title="Location"
              href="https://maps.app.goo.gl/WA1Jd3M3EaV4fWyF6"
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
              <span className="text-gray-400 block mt-1">Gosai Bazar, Chandrakona, West Bengal</span>
            </ContactCard>
          </div>

          {/* Contact Form */}
          <form
            className="bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us a message
            </h3>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  aria-label="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  aria-label="Email Address"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Your Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={handleChange}
                  aria-label="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
