import React from 'react';

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    url: 'https://res.cloudinary.com/dihvty4sl/image/upload/v1740161274/Screenshot_2025-02-21_233055_yza2jx.png',
    title: 'Professional Grooming',
    description: 'Expert grooming services for all breeds',
  },
  {
    url: 'https://res.cloudinary.com/dihvty4sl/image/upload/v1740161147/Screenshot_2025-02-21_233346_z0um9b.png',
    title: 'Happy Customers',
    description: 'Pets love our care and attention',
  },
  {
    url: 'https://res.cloudinary.com/dihvty4sl/image/upload/v1740161333/Screenshot_2025-02-21_233107_pvq2df.png',
    title: 'Spa Treatments',
    description: 'Relaxing spa day for your furry friend',
  },
  {
    url: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80',
    title: 'Pet Care',
    description: 'Comprehensive care for your pets',
  },
  {
    url: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80',
    title: 'Cat Grooming',
    description: 'Specialized care for our feline friends',
  },
  {
    url: 'https://images.unsplash.com/photo-1608096299210-db7e38487075?auto=format&fit=crop&q=80',
    title: 'Dental Care',
    description: 'Professional dental cleaning services',
  },
  {
    url: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80',
    title: 'Pet Training',
    description: 'Professional training sessions',
  },
  {
    url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80',
    title: 'Wellness Checks',
    description: 'Regular health check-ups',
  },
];

export function GalleryPage() {
  return (
    <div className="animate-fade-in py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at our facility and some of our happy furry clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}