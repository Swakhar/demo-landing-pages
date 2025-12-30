import Link from 'next/link';

export default function RestaurantCasual() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-black text-orange-600">BREWS & BITES</Link>
            <div className="hidden md:flex gap-6 items-center">
              <a href="#menu" className="text-gray-700 hover:text-orange-600 font-medium transition">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium transition">About</a>
              <a href="#location" className="text-gray-700 hover:text-orange-600 font-medium transition">Location</a>
              <button className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition font-semibold">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-100 to-yellow-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-bold mb-6">
                ✨ Fresh & Fast Since 2020
              </div>
              <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Great Food,
                <span className="block text-orange-600">Better Vibes</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your neighborhood spot for craft coffee, gourmet burgers, and good times. 
                Come hungry, leave happy!
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  View Menu
                </button>
                <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-50 transition border-2 border-gray-200">
                  Find Us
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-orange-300 rounded-3xl rotate-6 absolute inset-0 opacity-50" />
              <div className="aspect-square bg-orange-600 rounded-3xl -rotate-3 relative flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-8xl mb-4">🍔</div>
                  <p className="text-2xl font-bold">Signature Burger</p>
                  <p className="text-orange-200">The crowd favorite!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">Fan Favorites</h2>
            <p className="text-xl text-gray-600">The dishes everyone can't stop talking about</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { emoji: '🍔', name: 'Classic Burger', price: '$12', tag: 'Bestseller' },
              { emoji: '🌮', name: 'Spicy Tacos', price: '$10', tag: 'Spicy!' },
              { emoji: '☕', name: 'Cold Brew', price: '$5', tag: 'New' },
              { emoji: '🍰', name: 'Cheesecake', price: '$8', tag: 'Sweet' }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">
                    {item.tag}
                  </div>
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-2xl font-black text-orange-600">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-6">More Than Just Food</h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              We're a community hub where neighbors become friends over amazing food and drinks. 
              Every dish is made with love, every cup poured with care, and every guest treated like family.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl font-black mb-2">5k+</div>
                <div className="text-orange-200">Happy Customers</div>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">4.9★</div>
                <div className="text-orange-200">Average Rating</div>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">100%</div>
                <div className="text-orange-200">Fresh Ingredients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-6">Come Visit Us!</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    <span>123 Main Street, Downtown</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">⏰</span>
                    <span>Mon-Sun: 8AM - 10PM</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <span>(555) 123-4567</span>
                  </p>
                </div>
                <button className="mt-8 px-8 py-4 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition">
                  Get Directions
                </button>
              </div>
              <div className="aspect-square bg-gray-200 rounded-3xl flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="font-semibold">Interactive Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-orange-500 transition">
            ← Back to All Templates
          </Link>
          <p className="text-gray-500 text-sm mt-6">© 2025 Brews & Bites. Made with ❤️</p>
        </div>
      </footer>
    </div>
  );
}
