import Link from 'next/link';

export default function RealEstateAgent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              PRIME <span className="text-blue-600">ESTATES</span>
            </Link>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#properties" className="text-gray-700 hover:text-blue-600 transition font-medium">Properties</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">Contact</a>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                List Property
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Find Your Dream Home
              <span className="block text-blue-200">In Paradise</span>
            </h1>
            <p className="text-2xl mb-12 text-blue-100">
              Luxury properties in the most sought-after locations. Your perfect home awaits.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-3xl mx-auto">
              <div className="grid md:grid-cols-4 gap-4">
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900"
                />
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900">
                  <option>Property Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-gray-900">
                  <option>Price Range</option>
                  <option>$0 - $500K</option>
                  <option>$500K - $1M</option>
                  <option>$1M+</option>
                </select>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600">Handpicked selections from our premium portfolio</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { price: '$2,500,000', title: 'Modern Villa', location: 'Beverly Hills, CA', beds: 5, baths: 4, sqft: '4,200' },
              { price: '$1,800,000', title: 'Luxury Penthouse', location: 'Manhattan, NY', beds: 3, baths: 3, sqft: '2,800' },
              { price: '$3,200,000', title: 'Beachfront Estate', location: 'Malibu, CA', beds: 6, baths: 5, sqft: '5,500' }
            ].map((property, i) => (
              <div key={i} className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-200 to-indigo-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                    🏠
                  </div>
                  <div className="absolute top-4 left-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-bold">
                    Featured
                  </div>
                  <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition">
                    <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{property.price}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {property.location}
                  </p>
                  
                  <div className="flex justify-between pt-4 border-t border-gray-200 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      {property.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      🚿 {property.baths} Baths
                    </span>
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Agent */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center">
                <div className="text-9xl">👨‍💼</div>
              </div>
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-6">Meet Your Agent</h2>
                <h3 className="text-2xl text-blue-600 font-semibold mb-4">Michael Anderson</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  With over 15 years of experience in luxury real estate, I've helped hundreds of clients 
                  find their perfect homes. My commitment to excellence and personalized service ensures 
                  you get the best deals in the market.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Properties Sold</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-1">$500M+</div>
                    <div className="text-sm text-gray-600">Total Sales Volume</div>
                  </div>
                </div>
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto text-blue-100">
            Let's work together to find the perfect property that matches your lifestyle and budget.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-10 py-5 bg-white text-blue-700 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-2xl">
              Get Started
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition">
              Call (555) 789-0123
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-blue-400 transition">
            ← Back to All Templates
          </Link>
          <p className="text-gray-500 text-sm mt-6">© 2025 Prime Estates. Your Dream Home Awaits.</p>
        </div>
      </footer>
    </div>
  );
}
