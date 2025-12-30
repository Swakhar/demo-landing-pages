import Link from 'next/link';

export default function PhotographerPortfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl tracking-widest">LENS & LIGHT</Link>
          <button className="text-sm tracking-widest hover:opacity-60 transition">MENU</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-zinc-900 opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAwIDAgTCAwIDAgMCAyMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE4MTgxOCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-8xl md:text-9xl font-light mb-8 tracking-tighter">
            Visual
            <span className="block font-extralight italic">Stories</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto tracking-wide">
            Capturing moments that transcend time through the art of photography
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-zinc-500">
          <span className="text-sm tracking-widest rotate-90">SCROLL</span>
          <div className="w-px h-24 bg-zinc-700" />
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { height: 'aspect-[3/4]', emoji: '🌆' },
              { height: 'aspect-square', emoji: '👤' },
              { height: 'aspect-square', emoji: '🌿' },
              { height: 'aspect-[3/4]', emoji: '🏔️' },
              { height: 'aspect-[4/3]', emoji: '🌊' },
              { height: 'aspect-[4/3]', emoji: '🌅' }
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden bg-zinc-900 hover:bg-zinc-800 transition-colors duration-500">
                <div className={`${item.height} flex items-center justify-center`}>
                  <div className="text-8xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">
                    {item.emoji}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-sm tracking-widest">VIEW PROJECT</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="aspect-square bg-zinc-800 rounded flex items-center justify-center">
                <div className="text-9xl">📷</div>
              </div>
              <div>
                <h2 className="text-5xl font-light mb-6 tracking-tight">About My Work</h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  I specialize in editorial, landscape, and portrait photography. Each project is 
                  approached with a unique vision, combining technical precision with artistic expression.
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  My work has been featured in international publications and exhibited in galleries 
                  across three continents.
                </p>
                <div className="flex gap-8 text-sm tracking-widest">
                  <div>
                    <div className="text-4xl font-light mb-2">500+</div>
                    <div className="text-zinc-500">Projects</div>
                  </div>
                  <div>
                    <div className="text-4xl font-light mb-2">15+</div>
                    <div className="text-zinc-500">Years</div>
                  </div>
                  <div>
                    <div className="text-4xl font-light mb-2">50+</div>
                    <div className="text-zinc-500">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-light mb-20 text-center tracking-tight">Services</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: 'Editorial', desc: 'Magazine features, campaigns, and commercial work' },
                { title: 'Portraits', desc: 'Personal, corporate, and creative portraiture' },
                { title: 'Landscapes', desc: 'Fine art prints and location photography' }
              ].map((service, i) => (
                <div key={i} className="text-center group cursor-pointer">
                  <div className="aspect-square bg-zinc-900 rounded mb-6 group-hover:bg-zinc-800 transition-colors duration-500" />
                  <h3 className="text-2xl font-light mb-3 tracking-wide">{service.title}</h3>
                  <p className="text-zinc-500">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 bg-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl font-light mb-8 tracking-tight">Let's Create Together</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Available for commissions, collaborations, and creative projects worldwide
          </p>
          <button className="px-12 py-5 bg-white text-black font-light text-lg tracking-widest hover:bg-zinc-200 transition">
            GET IN TOUCH
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="text-sm text-zinc-600 hover:text-white transition tracking-widest">
            ← BACK TO ALL TEMPLATES
          </Link>
          <p className="text-zinc-700 text-sm mt-6 tracking-widest">© 2025 LENS & LIGHT</p>
        </div>
      </footer>
    </div>
  );
}
