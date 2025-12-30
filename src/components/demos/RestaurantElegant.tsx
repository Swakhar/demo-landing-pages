import Link from 'next/link';

export default function RestaurantElegant() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-900/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif italic text-amber-500">La Maison</Link>
          <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
            <a href="#menu" className="hover:text-amber-500 transition">Menu</a>
            <a href="#chef" className="hover:text-amber-500 transition">Chef</a>
            <a href="#reserve" className="hover:text-amber-500 transition">Reserve</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/30 to-black z-10" />
        <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzExMTExMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] bg-repeat"></div>
        </div>
        
        <div className="relative z-20 text-center px-4">
          <div className="mb-6 text-amber-500">
            <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h1 className="font-serif text-7xl md:text-8xl mb-6 tracking-tight">
            L'Art de la
            <span className="block text-amber-500 italic">Gastronomie</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Experience the pinnacle of French-Italian fusion cuisine in an atmosphere of refined elegance
          </p>
          <button className="group relative px-12 py-4 bg-amber-600 hover:bg-amber-500 transition-all duration-300 font-serif text-lg tracking-wider">
            <span className="relative z-10">Reserve Your Table</span>
            <div className="absolute inset-0 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Featured Dishes */}
      <section id="menu" className="py-32 bg-gradient-to-b from-black to-amber-950/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl mb-4">Signature Selections</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              { name: 'Truffle Risotto', desc: 'Arborio rice, black truffle, parmesan', price: '$48' },
              { name: 'Seared Scallops', desc: 'Cauliflower purée, caviar, microgreens', price: '$62' },
              { name: 'Wagyu Tenderloin', desc: 'Red wine reduction, seasonal vegetables', price: '$89' }
            ].map((dish, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-amber-900/20 to-black rounded-lg mb-6 relative overflow-hidden border border-amber-900/30">
                  <div className="absolute inset-0 bg-amber-500/10 transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                </div>
                <h3 className="font-serif text-2xl mb-2 group-hover:text-amber-500 transition">{dish.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{dish.desc}</p>
                <p className="text-amber-500 font-semibold text-xl">{dish.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section id="chef" className="py-32 bg-amber-950/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-amber-500 text-sm tracking-widest uppercase mb-4">Executive Chef</p>
            <h2 className="font-serif text-6xl mb-6">Jean-Pierre Rousseau</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              With three Michelin stars and over 25 years of culinary excellence, Chef Rousseau brings 
              the finest traditions of French and Italian cuisine to your table, crafting each dish as 
              a masterpiece of flavor and artistry.
            </p>
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <span>🌟 3 Michelin Stars</span>
              <span>•</span>
              <span>📚 James Beard Award</span>
              <span>•</span>
              <span>🏆 Best Chef 2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section id="reserve" className="py-32 bg-gradient-to-t from-black to-amber-950/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl mb-6">Reserve Your Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            Limited seating available. Book your table and embark on an unforgettable culinary journey.
          </p>
          <div className="max-w-md mx-auto space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-white/5 border border-amber-900/30 rounded focus:border-amber-500 focus:outline-none transition" />
            <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-white/5 border border-amber-900/30 rounded focus:border-amber-500 focus:outline-none transition" />
            <input type="date" className="w-full px-6 py-4 bg-white/5 border border-amber-900/30 rounded focus:border-amber-500 focus:outline-none transition" />
            <button className="w-full px-6 py-4 bg-amber-600 hover:bg-amber-500 transition font-serif text-lg tracking-wider">
              Confirm Reservation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-900/20 py-12 bg-black">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-amber-500 transition">
            ← Back to All Templates
          </Link>
          <p className="text-gray-600 text-sm mt-6">© 2025 La Maison. Fine Dining Excellence.</p>
        </div>
      </footer>
    </div>
  );
}
