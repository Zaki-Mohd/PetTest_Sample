import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Clock, Shield } from 'lucide-react';

export function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1587764379873-97837921fd44?auto=format&fit=crop&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Beauty And The Beast
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Luxury grooming and wellness services for your beloved pets
            </p>
            <Link
              to="/book"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Beauty And The Beast?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Loving Care</h3>
              <p className="text-gray-600">
                We treat your pets like family with gentle, attentive care
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
              <p className="text-gray-600">
                Professional groomers with years of experience
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
              <p className="text-gray-600">
                Convenient scheduling to fit your busy life
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safe Environment</h3>
              <p className="text-gray-600">
                Clean, sanitized facilities for your pet's safety
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Featured Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://lh5.googleusercontent.com/p/AF1QipOqXo2BOtuh9ElqGY55EIWGzbvp7k6V6hJ83cu9=w408-h306-k-no"
                alt="Pet Grooming"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Full Grooming</h3>
                <p className="text-gray-600 mb-4">
                  Complete grooming service including bath, haircut, and styling
                </p>
                <Link
                  to="/services"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80"
                alt="Spa Treatment"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Spa Treatments</h3>
                <p className="text-gray-600 mb-4">
                  Relaxing massages and therapeutic treatments for your pet
                </p>
                <Link
                  to="/services"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80"
                alt="Vet Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vet Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Professional veterinary consultations and health check-ups
                </p>
                <Link
                  to="/services"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Pamper Your Pet?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Book an appointment today and give your pet the care they deserve
          </p>
          <Link
            to="/book"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Schedule Now
          </Link>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    comment: 'My dog loves coming here! The staff is so friendly and professional. The grooming service is exceptional.',
  },
  {
    name: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    comment: 'Best pet spa in town! They really know how to make our pets feel comfortable and pampered.',
  },
  {
    name: 'Emily Rodriguez',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    comment: 'The spa treatments are amazing. My cat comes back so relaxed and happy every time.',
  },
];