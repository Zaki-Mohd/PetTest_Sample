import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Bath, Heart, Stethoscope, Dog, Cat, Brush, Clock } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  name: string;
  description: string;
  price: string;
  duration: string;
}

const services: Service[] = [
  {
    icon: <Scissors className="h-8 w-8 text-purple-600" />,
    name: 'Full Grooming Package',
    description: 'Complete grooming service including bath, haircut, nail trimming, and ear cleaning',
    price: '₹2000',
    duration: '2-3 hours',
  },
  {
    icon: <Bath className="h-8 w-8 text-purple-600" />,
    name: 'Spa Treatment',
    description: 'Relaxing massage, aromatherapy, and special shampoo treatment',
    price: '₹1500',
    duration: '1-2 hours',
  },
  {
    icon: <Heart className="h-8 w-8 text-purple-600" />,
    name: 'Basic Bath & Brush',
    description: 'Simple bath service with brushing and basic grooming',
    price: '₹1000',
    duration: '1 hour',
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-purple-600" />,
    name: 'Health Check-up',
    description: 'Basic veterinary examination and health assessment',
    price: '₹800',
    duration: '30 minutes',
  },
  {
    icon: <Dog className="h-8 w-8 text-purple-600" />,
    name: 'Dog Training Session',
    description: 'One-on-one training session with our professional trainer',
    price: '₹1200',
    duration: '1 hour',
  },
  {
    icon: <Cat className="h-8 w-8 text-purple-600" />,
    name: 'Cat Grooming Special',
    description: 'Specialized grooming service designed specifically for cats',
    price: '₹1800',
    duration: '1-2 hours',
  },
  {
    icon: <Brush className="h-8 w-8 text-purple-600" />,
    name: 'Teeth Cleaning',
    description: 'Professional dental cleaning and oral hygiene care',
    price: '₹1000',
    duration: '45 minutes',
  },
  {
    icon: <Clock className="h-8 w-8 text-purple-600" />,
    name: 'Express Grooming',
    description: 'Quick touch-up service for pets who need a fast refresh',
    price: '₹800',
    duration: '30 minutes',
  },
];

export function ServicesPage() {
  return (
    <div className="animate-fade-in py-12 bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of pet care services to keep your furry friends
            healthy, clean, and happy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">
                    {service.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Duration: {service.duration}</span>
                  <span className="font-semibold text-purple-600 text-lg">
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Book a Service?
          </h2>
          <p className="text-gray-600 mb-8">
            Choose the perfect service for your pet and book an appointment today.
          </p>
          <Link
            to="/book"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Book Appointment
          </Link>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Important Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Booking Policy
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Please arrive 10 minutes before your appointment</li>
                <li>Cancellations must be made 24 hours in advance</li>
                <li>All pets must be up to date with vaccinations</li>
                <li>Payment is required at the time of service</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What to Bring
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Vaccination records</li>
                <li>Any special shampoo or products if required</li>
                <li>Information about any health conditions</li>
                <li>Comfort items for anxious pets</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}