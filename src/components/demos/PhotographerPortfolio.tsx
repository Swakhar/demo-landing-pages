'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function PhotographerPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const portfolioItems = [
    { 
      id: 1, 
      title: 'Bright Boho Sunshine', 
      category: 'Fashion', 
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1000&fit=crop',
      height: 'tall'
    },
    { 
      id: 2, 
      title: 'Jenifer in Green', 
      category: 'Portrait', 
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop',
      height: 'square'
    },
    { 
      id: 3, 
      title: 'Sunflower Boho Girl', 
      category: 'Lifestyle', 
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=800&fit=crop',
      height: 'square'
    },
    { 
      id: 4, 
      title: 'Iceland Beauty', 
      category: 'Nature', 
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&h=1000&fit=crop',
      height: 'tall'
    },
    { 
      id: 5, 
      title: 'California Dreams', 
      category: 'Fashion', 
      image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=600&fit=crop',
      height: 'wide'
    },
    { 
      id: 6, 
      title: 'Sun-downers Love', 
      category: 'Lifestyle', 
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop',
      height: 'wide'
    },
    { 
      id: 7, 
      title: 'Festive Mode', 
      category: 'Event', 
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1000&fit=crop',
      height: 'tall'
    },
    { 
      id: 8, 
      title: 'Autumn Collection', 
      category: 'Fashion', 
      image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&h=800&fit=crop',
      height: 'square'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-serif italic text-gray-900">
              Kimono
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm text-gray-700 hover:text-gray-900 transition">Home</a>
              <a href="#portfolio" className="text-sm text-gray-700 hover:text-gray-900 transition">Portfolio</a>
              <a href="#about" className="text-sm text-gray-700 hover:text-gray-900 transition">About</a>
              <a href="#services" className="text-sm text-gray-700 hover:text-gray-900 transition">Services</a>
              <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-900"
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
            <div className="md:hidden mt-6 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-sm text-gray-700 hover:text-gray-900 transition">Home</a>
                <a href="#portfolio" className="text-sm text-gray-700 hover:text-gray-900 transition">Portfolio</a>
                <a href="#about" className="text-sm text-gray-700 hover:text-gray-900 transition">About</a>
                <a href="#services" className="text-sm text-gray-700 hover:text-gray-900 transition">Services</a>
                <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900 transition">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-serif italic text-gray-900 mb-6 leading-tight">
            Capturing Life's
            <span className="block">Beautiful Moments</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            A visual storyteller dedicated to preserving your most precious memories through the art of photography
          </p>
          <div className="flex justify-center gap-4">
            <a href="#portfolio" className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg">
              View Portfolio
            </a>
            <a href="#contact" className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-50 transition-all transform hover:scale-105">
              Book a Session
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Grid - Masonry Layout */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif italic text-gray-900 mb-4">Latest Work</h2>
            <p className="text-gray-600">Explore my recent photography projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.id}
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                  item.height === 'tall' ? 'row-span-2' : 
                  item.height === 'wide' ? 'md:col-span-2' : ''
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative overflow-hidden bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={item.height === 'tall' ? 1000 : item.height === 'wide' ? 600 : 800}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-xs text-white/80 mb-2 tracking-wider uppercase">{item.category}</p>
                      <h3 className="text-2xl font-serif italic text-white mb-3">{item.title}</h3>
                      <div className="flex gap-3">
                        <button className="text-white hover:text-gray-300 transition">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                        <button className="text-white hover:text-gray-300 transition">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all">
              Load More Projects
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1554224311-beee415c201f?w=800&h=1000&fit=crop"
                  alt="Photographer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gray-900 rounded-lg -z-10"></div>
            </div>
            
            <div>
              <h2 className="text-5xl font-serif italic text-gray-900 mb-6">About Me</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Hello! I'm Sarah Mitchell, a passionate photographer with over 10 years of experience 
                capturing life's most beautiful moments. My journey began with a simple love for 
                preserving memories and has evolved into a lifelong dedication to the art of photography.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                I specialize in fashion, portrait, and lifestyle photography, always striving to bring 
                out the unique beauty in every subject. My work has been featured in numerous publications 
                and exhibitions worldwide.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">2000+</div>
                  <div className="text-sm text-gray-600">Photo Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
              </div>

              <a href="#contact" className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition">
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif italic text-gray-900 mb-4">Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From intimate portraits to grand fashion shoots, I offer a range of photography 
              services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Fashion Photography',
                description: 'Editorial shoots, lookbooks, and commercial campaigns that bring your vision to life',
                icon: '👗',
                image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop'
              },
              {
                title: 'Portrait Sessions',
                description: 'Personal, corporate, and creative portraiture that captures your unique personality',
                icon: '📸',
                image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop'
              },
              {
                title: 'Lifestyle Photography',
                description: 'Authentic moments and genuine emotions preserved in stunning imagery',
                icon: '🌟',
                image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop'
              }
            ].map((service, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-serif italic text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif italic text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-gray-600">Don't just take my word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Emma Thompson',
                role: 'Fashion Designer',
                text: 'Sarah has an incredible eye for detail and knows exactly how to capture the essence of a design. Her work elevated our entire collection.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
              },
              {
                name: 'Michael Chen',
                role: 'CEO, TechStart',
                text: 'Professional, creative, and an absolute pleasure to work with. The corporate headshots she took have received countless compliments.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
              },
              {
                name: 'Lisa Anderson',
                role: 'Bride',
                text: 'Our wedding photos are beyond anything we imagined. Sarah captured every moment perfectly and the results are simply magical!',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-serif italic text-gray-900 mb-4">Let's Connect</h2>
              <p className="text-gray-600 text-lg">
                Ready to create something beautiful together? Get in touch and let's discuss your project
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition">
                      <option>Fashion Photography</option>
                      <option>Portrait Session</option>
                      <option>Lifestyle Photography</option>
                      <option>Event Coverage</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif italic text-gray-900 mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Email</div>
                        <a href="mailto:hello@kimono.com" className="text-gray-600 hover:text-gray-900 transition">hello@kimono.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Phone</div>
                        <a href="tel:+15551234567" className="text-gray-600 hover:text-gray-900 transition">+1 (555) 123-4567</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Studio</div>
                        <p className="text-gray-600">123 Photography Lane<br />New York, NY 10001</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h3>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
                      <span className="text-sm">f</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
                      <span className="text-sm">📷</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
                      <span className="text-sm">t</span>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition">
                      <span className="text-sm">in</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-serif italic mb-4">Kimono</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Professional photographer capturing life's beautiful moments with artistry and passion.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Fashion Photography</li>
                <li>Portrait Sessions</li>
                <li>Lifestyle Photography</li>
                <li>Event Coverage</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Kimono Photography. All rights reserved.
            </p>
            <Link href="/demo" className="text-gray-400 hover:text-white transition text-sm">
              ← Back to All Templates
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
