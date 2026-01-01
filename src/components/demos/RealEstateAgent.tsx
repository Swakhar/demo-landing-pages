'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function RealEstateAgent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:8794561349" className="flex items-center gap-2 hover:text-blue-400 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                879 456 1349
              </a>
              <a href="mailto:email@houzez.co" className="flex items-center gap-2 hover:text-blue-400 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                email@houzez.co
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-blue-400 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-3xl font-bold">
                <span className="text-blue-600">HOUZEZ</span>
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition font-medium">Home</a>
              <a href="#listings" className="text-gray-700 hover:text-blue-600 transition font-medium">Listings</a>
              <a href="#property" className="text-gray-700 hover:text-blue-600 transition font-medium">Property</a>
              <a href="#pages" className="text-gray-700 hover:text-blue-600 transition font-medium">Pages</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition font-medium">Blog</a>
              <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium">
                Add Listing
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                <a href="#listings" className="text-gray-700 hover:text-blue-600 transition">Listings</a>
                <a href="#property" className="text-gray-700 hover:text-blue-600 transition">Property</a>
                <a href="#pages" className="text-gray-700 hover:text-blue-600 transition">Pages</a>
                <a href="#blog" className="text-gray-700 hover:text-blue-600 transition">Blog</a>
                <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center">Add Listing</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Search */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
            alt="Real Estate"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Find Your Dream Home
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit donec sollicitudin
            </p>

            {/* Search Form */}
            <div className="bg-white rounded-lg p-6 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Enter Keyword..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                />
                <select className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 bg-white">
                  <option>All Status</option>
                  <option>For Sale</option>
                  <option>For Rent</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 bg-white">
                  <option>All Types</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Villa</option>
                </select>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <select className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 bg-white">
                  <option>Bedrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
                <select className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 bg-white">
                  <option>Bathrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
                <select className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-600 bg-white">
                  <option>All Cities</option>
                  <option>Miami</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                  <option>New York</option>
                </select>
                <button className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium">
                  <svg className="w-5 h-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Our Best Deals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover Our Best Deals
            </h2>
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit donec sollicitudin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: 'Light And Modern Apartment',
                price: '$4,500',
                period: '/mo',
                status: 'FOR RENT',
                featured: true,
                beds: 4,
                baths: 2,
                sqft: '1200',
                image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop'
              },
              {
                title: 'Design Apartment',
                price: '$876,000',
                period: '',
                status: 'FOR SALE',
                featured: true,
                beds: 3,
                baths: 2,
                sqft: '2560',
                image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop'
              },
              {
                title: 'New Apartment Nice View',
                price: '$11,000',
                period: '/mo',
                status: 'FOR RENT',
                featured: true,
                beds: 3,
                baths: 1,
                sqft: '1789',
                image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop'
              },
              {
                title: 'Complex',
                price: '$5,600',
                period: '/mo',
                status: 'FOR RENT',
                featured: false,
                beds: 5,
                baths: 3,
                sqft: '3450',
                image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop'
              },
              {
                title: 'Green View Design',
                price: '$3,500',
                period: '/mo',
                status: 'FOR RENT',
                featured: false,
                beds: 1,
                baths: 1,
                sqft: '1760',
                image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop'
              },
              {
                title: 'Modern Loft Apartment',
                price: '$3,750',
                period: '/mo',
                status: 'FOR RENT',
                featured: false,
                beds: 1,
                baths: 1,
                sqft: '1678',
                image: 'https://images.unsplash.com/photo-1502672260066-6bc35f0aaecb?w=800&h=600&fit=crop'
              }
            ].map((property, i) => (
              <div key={i} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {property.featured && (
                      <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded">
                        FEATURED
                      </span>
                    )}
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded">
                      {property.status}
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition">
                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                      {property.title}
                    </h3>
                    <div className="text-2xl font-bold text-blue-600">
                      {property.price}
                      {property.period && <span className="text-lg text-gray-600">{property.period}</span>}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      {property.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                      </svg>
                      {property.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      {property.sqft} Sq Ft
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Miami', image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=600&h=400&fit=crop' },
              { name: 'Los Angeles', image: 'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=600&h=400&fit=crop' },
              { name: 'Chicago', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop' },
              { name: 'New York', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop' }
            ].map((city, i) => (
              <div key={i} className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-blue-400">HOUZEZ</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Discover</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Miami</a></li>
                <li><a href="#" className="hover:text-white transition">Los Angeles</a></li>
                <li><a href="#" className="hover:text-white transition">Chicago</a></li>
                <li><a href="#" className="hover:text-white transition">New York</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Properties</a></li>
                <li><a href="#" className="hover:text-white transition">Agents</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>774 NE 84th St Miami, FL 33879</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>879 456 1349</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:email@houzez.co" className="hover:text-white transition">email@houzez.co</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © Houzez - All rights reserved
            </p>
            <Link href="/demo" className="text-blue-400 hover:text-blue-300 transition text-sm font-medium">
              ← Back to All Templates
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
