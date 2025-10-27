'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email',
    sessionType: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this to an API endpoint or email service
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredContact: 'email',
        sessionType: '',
      })
    }, 5000)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-700">
            Take the first step toward healing and growth
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Schedule a Consultation</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and I'll get back to you within 24-48 hours to schedule your initial consultation.
                All information is kept strictly confidential.
              </p>

              {submitted ? (
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    Your message has been received. I'll be in touch within 24-48 hours to discuss scheduling your consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method *
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      required
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="either">Either</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="sessionType" className="block text-sm font-medium text-gray-700 mb-2">
                      Session Preference
                    </label>
                    <select
                      id="sessionType"
                      name="sessionType"
                      value={formData.sessionType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    >
                      <option value="">Select preference</option>
                      <option value="in-person">In-Person</option>
                      <option value="virtual">Virtual</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      placeholder="Please share what brings you to counseling and any questions you may have..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-lg">
                    Send Message
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you consent to be contacted regarding your inquiry.
                    All information is kept confidential.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6">Contact Information</h2>

              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-primary-700">Melissa Tredennick Counseling PLLC</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:713-502-3457" className="text-accent-600 hover:text-accent-700">
                        713-502-3457
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:info@melissatredcounseling.com" className="text-accent-600 hover:text-accent-700">
                        info@melissatredcounseling.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-accent-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Office Location</p>
                      <p className="text-gray-700">
                        4265 Woodway Drive, Ste 745<br />
                        Houston, TX 77057
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Supervision:</strong><br />
                    Charissa Lopez, LPC-S<br />
                    License #73709
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-accent-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4 text-accent-800">Office Hours</h3>
                <p className="text-gray-700 mb-3">
                  I offer flexible scheduling to accommodate your needs, including:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-accent-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Daytime appointments
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-accent-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Evening appointments
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-accent-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Weekend availability
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Specific hours will be discussed during our initial consultation.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.8384!2d-95.4643!3d29.7564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3b3e6c6e6e5%3A0x6e6e6e6e6e6e6e6e!2s4265%20Woodway%20Dr%2C%20Houston%2C%20TX%2077057!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="bg-primary-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-primary-700">Important Information</h3>
            <p className="text-gray-700 mb-4">
              <strong>Response Time:</strong> I typically respond to inquiries within 24-48 hours during business days.
              If you don't hear from me within this timeframe, please feel free to follow up.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Confidentiality:</strong> All contact through this form is kept confidential. However, please be
              aware that email is not a completely secure method of communication. Do not include sensitive clinical
              information in your initial message.
            </p>
            <p className="text-gray-700">
              <strong>Crisis Support:</strong> This contact form is not for emergencies. If you're experiencing a crisis,
              please call 911, go to your nearest emergency room, or call the National Suicide Prevention Lifeline at 988.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
