'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { z } from 'zod'
import {
  UserIcon, EnvelopeIcon, MapPinIcon,
  CalendarIcon, UserGroupIcon, CurrencyRupeeIcon, HeartIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline'

const tripSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }).optional().or(z.literal('')),
  destination: z.string().min(2, { message: 'Destination is required' }),
  dates: z.string().min(2, { message: 'Travel dates are required' }),
  travelers: z.string().min(1, { message: 'Number of travelers is required' }),
  budget: z.string().optional(),
  preferences: z.string().max(500, { message: 'Preferences must be less than 500 characters' }).optional(),
})

export default function CustomTripPage() {
  type FormDataKeys = 'name' | 'email' | 'destination' | 'dates' | 'travelers' | 'budget' | 'preferences';

  const [formData, setFormData] = useState<Record<FormDataKeys, string>>({
    name: '', email: '', destination: '',
    dates: '', travelers: '', budget: '', preferences: ''
  })
  const [errors, setErrors] = useState<Partial<Record<FormDataKeys, string>>>({})
  const [submitting, setSubmitting] = useState(false)
  const [touched, setTouched] = useState<Partial<Record<FormDataKeys, boolean>>>({})
  const router = useRouter()

  const validate = () => {
    const result = tripSchema.safeParse(formData)
    if (!result.success) {
      const fieldErrors: Partial<Record<FormDataKeys, string>> = {}
      result.error.issues.forEach(issue => {
        if (issue.path.length > 0) {
          const fieldName = issue.path[0] as FormDataKeys
          fieldErrors[fieldName] = issue.message
        }
      })
      setErrors(fieldErrors)
      return false
    }
    setErrors({})
    return true
  }

  const validateField = (field: FormDataKeys) => {
    try {
      const fieldSchema = tripSchema.shape[field]
      fieldSchema.parse(formData[field])
      setErrors(prev => ({ ...prev, [field]: undefined }))
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({
          ...prev,
          [field]: error.issues[0]?.message || `Invalid ${field}`
        }))
      }
    }
  }

  const handleBlur = (field: FormDataKeys) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    validateField(field)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key as FormDataKeys] = true
      return acc
    }, {} as Record<FormDataKeys, boolean>)
    setTouched(allTouched)

    if (!validate()) return

    setSubmitting(true)
    const message = `Hi! I'd like a custom trip plan.

Name: ${formData.name}
Email: ${formData.email || 'N/A'}
Destination: ${formData.destination}
Dates: ${formData.dates}
Travelers: ${formData.travelers}
Budget: ₹${formData.budget || 'Not specified'}
Preferences: ${formData.preferences || 'Not specified'}`

    const encodedMessage = encodeURIComponent(message)
    setTimeout(() => {
      router.push(`https://wa.me/919564965458?text=${encodedMessage}`)
      setSubmitting(false)
    }, 800) // Simulate loading
  }

  // Animation variants
  const fieldVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.07 }
    })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gradient-to-r from-emerald-700 to-teal-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >Plan Your Dream Trip</motion.h1>
          <motion.p
            className="text-emerald-100 opacity-90"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >Tell us what you&apos;re looking for – we&apos;ll handle the rest!</motion.p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: 'Full Name', icon: UserIcon, key: 'name', type: 'text', required: true, placeholder: 'e.g. Arpan Bhattacharya' },
              { label: 'Email (optional)', icon: EnvelopeIcon, key: 'email', type: 'email', required: false, placeholder: 'e.g. hello@travelbuddies.com' },
              { label: 'Destination(s)', icon: MapPinIcon, key: 'destination', type: 'text', required: true, placeholder: 'e.g. Bali, Indonesia' },
              { label: 'Travel Dates', icon: CalendarIcon, key: 'dates', type: 'text', required: true, placeholder: 'e.g. July 1 – July 5' },
              { label: 'Number of Travelers', icon: UserGroupIcon, key: 'travelers', type: 'text', required: true, placeholder: 'e.g. 2 Adults, 1 Child' },
              { label: 'Budget per Person', icon: CurrencyRupeeIcon, key: 'budget', type: 'text', required: false, placeholder: '₹' }
            ].map((field, i) => (
              <motion.div
                key={field.key}
                custom={i}
                variants={fieldVariant}
                initial="hidden"
                animate="visible"
                className="space-y-2"
              >
                <label className="flex items-center text-sm font-medium text-emerald-400">
                  <field.icon className="w-5 h-5 mr-2" />
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                <div className="relative">
                  <input
                    type={field.type}
                    required={field.required}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow duration-200 ${touched[field.key as FormDataKeys] && errors[field.key as FormDataKeys]
                        ? 'border-red-500 pr-10'
                        : 'border-gray-700'
                      }`}
                    value={formData[field.key as FormDataKeys]}
                    onChange={e => {
                      setFormData({ ...formData, [field.key]: e.target.value })
                      if (touched[field.key as FormDataKeys]) {
                        validateField(field.key as FormDataKeys)
                      }
                    }}
                    onBlur={() => handleBlur(field.key as FormDataKeys)}
                    placeholder={field.placeholder}
                    aria-invalid={Boolean(errors[field.key as FormDataKeys])}
                    aria-describedby={`${field.key}-error`}
                  />
                  {touched[field.key as FormDataKeys] && errors[field.key as FormDataKeys] && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {touched[field.key as FormDataKeys] && errors[field.key as FormDataKeys] && (
                  <p id={`${field.key}-error`} className="text-red-500 text-xs mt-1 ml-1">
                    {errors[field.key as FormDataKeys]}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Preferences */}
          <motion.div
            variants={fieldVariant}
            custom={7}
            initial="hidden"
            animate="visible"
            className="space-y-2"
          >
            <label className="flex items-center text-sm font-medium text-emerald-400">
              <HeartIcon className="w-5 h-5 mr-2" />
              Preferences / Activities
            </label>
            <div className="relative">
              <textarea
                rows={4}
                placeholder="e.g. Beach, Adventure, Food"
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-shadow duration-200 ${touched.preferences && errors.preferences ? 'border-red-500' : 'border-gray-700'
                  }`}
                value={formData.preferences}
                onChange={e => {
                  setFormData({ ...formData, preferences: e.target.value })
                  if (touched.preferences) {
                    validateField('preferences')
                  }
                }}
                onBlur={() => handleBlur('preferences')}
                maxLength={500}
                aria-invalid={Boolean(errors.preferences)}
                aria-describedby="preferences-error"
              />
              {formData.preferences && (
                <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                  {formData.preferences.length}/500
                </div>
              )}
            </div>
            {touched.preferences && errors.preferences && (
              <p id="preferences-error" className="text-red-500 text-xs mt-1 ml-1">
                {errors.preferences}
              </p>
            )}
          </motion.div>

          {/* Submit Button with micro-interaction */}
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20"
            whileTap={{ scale: 0.95 }}
            disabled={submitting}
          >
            {submitting ? (
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-2"
                style={{ display: 'inline-block', borderWidth: '3px', borderStyle: 'solid' }}
              />
            ) : (
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
              </svg>
            )}
            <span>
              {submitting ? "Sending..." : "Request Custom Plan via WhatsApp"}
            </span>
          </motion.button>
        </form>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-gray-400 text-sm">
            We&apos;ll contact you within 24 hours with a personalized itinerary
          </p>
          <p className="text-gray-500 text-xs mt-2">
            <span className="text-red-500">*</span> Required fields
          </p>
        </motion.div>
      </main>
    </div>
  )
}
