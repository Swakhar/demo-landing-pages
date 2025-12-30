import Link from 'next/link';

export default function AgencyCreative() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black">PULSE</Link>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#work" className="hover:opacity-60 transition">Work</a>
            <a href="#services" className="hover:opacity-60 transition">Services</a>
            <a href="#contact" className="hover:opacity-60 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[128px] opacity-30 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-[128px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <h1 className="text-8xl md:text-9xl font-black mb-8 leading-none">
              We Create
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                Bold Brands
              </span>
            </h1>
            <p className="text-2xl text-gray-400 max-w-2xl mb-12">
              Pushing creative boundaries to craft unforgettable brand experiences that resonate and inspire.
            </p>
            <div className="flex gap-4">
              <button className="group relative px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden">
                <span className="relative z-10">See Our Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  See Our Work
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-black mb-20">Selected Projects</h2>
          
          <div className="space-y-32">
            {[
              { title: 'NEON DREAMS', category: 'Branding', color: 'from-purple-600 to-pink-600' },
              { title: 'TECH HORIZON', category: 'Digital', color: 'from-blue-600 to-cyan-600' },
              { title: 'URBAN PULSE', category: 'Campaign', color: 'from-orange-600 to-red-600' }
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} rounded-2xl relative overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-black opacity-20 group-hover:opacity-40 transition-opacity">
                        {project.title}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-2 tracking-widest uppercase">{project.category}</p>
                    <h3 className="text-5xl font-black mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-lg mb-6">
                      A revolutionary approach to brand identity that challenges conventions and captures imagination.
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 text-white group-hover:gap-4 transition-all">
                      <span>View Case Study</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-black mb-20 text-center">What We Do</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '🎨', title: 'Brand Design', desc: 'Visual identities that make an impact' },
              { icon: '📱', title: 'Digital Experiences', desc: 'Websites and apps that engage' },
              { icon: '🚀', title: 'Creative Strategy', desc: 'Bold ideas that drive results' }
            ].map((service, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="p-10 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-7xl md:text-8xl font-black mb-8">
            Let's Create
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Something Bold
            </span>
          </h2>
          <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to transform your brand? Let's talk about your next project.
          </p>
          <button className="px-12 py-6 bg-white text-black font-bold text-xl rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
            Start a Project
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-white transition">
            ← Back to All Templates
          </Link>
          <p className="text-gray-600 text-sm mt-6">© 2025 Pulse Creative Agency</p>
        </div>
      </footer>
    </div>
  );
}
