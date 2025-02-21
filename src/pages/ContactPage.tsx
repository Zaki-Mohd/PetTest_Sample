import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="animate-fade-in py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help! Reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-purple-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                  <a
                      href="https://wa.me/917989169551"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-purple-600"
>
  Get in touch
</a>

                </div>
              </div>

              <div className="flex items-center">
                <Instagram className="h-6 w-6 text-purple-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Instagram</h3>
                  <a
                    href="https://www.instagram.com/professional.pet.groomer?igsh=dHVpNHpzMzZidnFk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    @professional.pet.groomer
                  </a>
                </div>
              </div>

              <div className="flex items-center">
               <a
  href="https://maps.app.goo.gl/M2azj1WbuX1WPx1r5"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center hover:text-purple-600 transition"
>
  <MapPin className="h-6 w-6 text-purple-600" />
  <div className="ml-4">
    <h3 className="text-lg font-semibold text-gray-900">Location</h3>
    <p className="text-gray-600">
      123 Pet Care Street, Hyderabad, Telangana, India
    </p>
  </div>
</a>

              </div>

              <div className="flex items-center">
                <Mail className="h-6 w-6 text-purple-600" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <a
                    href="mailto:contact@petcarespa.com"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    contact@petcarespa.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Weekdays
              </h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Weekends
              </h3>
              <p className="text-gray-600">Saturday - Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}