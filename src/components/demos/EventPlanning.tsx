import Link from 'next/link';

export default function EventPlanning() {
  return (
    <div className="min-h-screen bg-rose-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-4xl">✨</div>
              <span className="text-2xl font-bold text-gray-900">
                Enchanted <span className="text-rose-600">Events</span>
              </span>
            </Link>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#services" className="text-gray-700 hover:text-rose-600 transition font-medium">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-rose-600 transition font-medium">Portfolio</a>
              <a href="#testimonials" className="text-gray-700 hover:text-rose-600 transition font-medium">Reviews</a>
              <button className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full hover:shadow-lg hover:shadow-rose-500/50 transition font-semibold">
                Plan Your Event
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-200/50 backdrop-blur-sm rounded-full text-sm font-semibold text-rose-700 mb-6">
                <span className="text-xl">🎊</span>
                Award-Winning Event Planning
              </div>
              
              <h1 className="text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Create
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">
                  Magical
                </span>
                Moments
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From intimate gatherings to grand celebrations, we transform your vision into 
                unforgettable experiences with meticulous attention to every detail.
              </p>

              <div className="flex gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-rose-500/50 transition-all transform hover:scale-105">
                  Start Planning
                </button>
                <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold border-2 border-gray-200 hover:border-rose-600 transition">
                  View Gallery
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-rose-300 to-purple-300 rounded-3xl rotate-6 absolute inset-0 opacity-30" />
              <div className="aspect-square bg-gradient-to-br from-rose-400 to-pink-500 rounded-3xl -rotate-3 relative flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-9xl mb-4">💐</div>
                  <p className="text-2xl font-bold">Your Perfect Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive event planning for every occasion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: '💒', title: 'Weddings', desc: 'Create the wedding of your dreams with our expert planning and coordination', color: 'from-rose-100 to-pink-100' },
              { icon: '🎉', title: 'Celebrations', desc: 'Birthday parties, anniversaries, and milestone celebrations made extraordinary', color: 'from-purple-100 to-pink-100' },
              { icon: '🏢', title: 'Corporate Events', desc: 'Professional conferences, seminars, and corporate gatherings', color: 'from-blue-100 to-purple-100' }
            ].map((service, i) => (
              <div key={i} className="group cursor-pointer">
                <div className={`p-10 bg-gradient-to-br ${service.color} rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                  <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Recent Events</h2>
            <p className="text-xl text-gray-600">
              A glimpse into the beautiful moments we've created
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              { emoji: '💒', title: 'Garden Wedding' },
              { emoji: '🎂', title: 'Birthday Gala' },
              { emoji: '🥂', title: 'Anniversary' },
              { emoji: '🎓', title: 'Graduation' },
              { emoji: '🌹', title: 'Romantic Dinner' },
              { emoji: '🎪', title: 'Festival' },
              { emoji: '🎭', title: 'Charity Event' },
              { emoji: '🏆', title: 'Awards Night' }
            ].map((item, i) => (
              <div key={i} className="group aspect-square bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                <div className="h-full flex flex-col items-center justify-center p-6 group-hover:bg-gradient-to-br group-hover:from-rose-100 group-hover:to-pink-100 transition-all">
                  <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform">
                    {item.emoji}
                  </div>
                  <p className="font-semibold text-gray-700 group-hover:text-rose-700 transition-colors">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600">
              Hear from our happy clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Emily & James', event: 'Wedding', review: 'They made our dream wedding come true! Every detail was perfect.' },
              { name: 'Sarah Mitchell', event: '50th Birthday', review: 'An absolutely magical celebration. Our guests are still talking about it!' },
              { name: 'Tech Corp Inc.', event: 'Annual Conference', review: 'Professional, creative, and flawless execution. Highly recommended!' }
            ].map((testimonial, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border-2 border-rose-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.review}"</p>
                <div className="border-t border-rose-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-rose-600">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-rose-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">✨</div>
            <h2 className="text-5xl font-bold mb-6">Let's Plan Something Amazing</h2>
            <p className="text-2xl mb-12 text-rose-100">
              Ready to create unforgettable memories? Get in touch today for a complimentary consultation.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-10 py-5 bg-white text-rose-700 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-2xl">
                Schedule Consultation
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition">
                Call (555) 456-7890
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-rose-400 transition">
            ← Back to All Templates
          </Link>
          <p className="text-gray-500 text-sm mt-6">© 2025 Enchanted Events. Creating Magic, One Event at a Time.</p>
        </div>
      </footer>
    </div>
  );
}
