'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function RestaurantElegant() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(element => {
      observer.observe(element);
    });

    // Handle smooth scrolling for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/60 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-serif tracking-wider text-amber-400">CHÂTEAU</Link>
          <div className="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase">
            <a href="#experience" className="hover:text-amber-400 transition-colors cursor-pointer">Experience</a>
            <a href="#cuisine" className="hover:text-amber-400 transition-colors cursor-pointer">Cuisine</a>
            <a href="#ambiance" className="hover:text-amber-400 transition-colors cursor-pointer">Ambiance</a>
            <a href="#reserve" className="hover:text-amber-400 transition-colors cursor-pointer">Reservations</a>
          </div>
          <a href="#reserve" className="hidden md:block px-6 py-2 border border-amber-400 text-amber-400 text-xs tracking-widest hover:bg-amber-400 hover:text-black transition-all">
            BOOK TABLE
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Fine dining restaurant interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-px h-16 bg-amber-400 mx-auto mb-8" />
            <p className="text-xs tracking-[0.3em] uppercase text-amber-400 mb-4">Est. 1892</p>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl mb-8 tracking-tight leading-tight animate-fade-in-up">
            Une Expérience
            <span className="block text-amber-400 italic mt-2">Gastronomique</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up animation-delay-200">
            Indulge in the artistry of French haute cuisine, where every dish tells a story 
            of passion, tradition, and culinary excellence
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up animation-delay-400">
            <a href="#reserve" className="px-10 py-4 bg-amber-400 text-black font-semibold text-sm tracking-widest hover:bg-amber-500 transition-all">
              RESERVE NOW
            </a>
            <a href="#cuisine" className="px-10 py-4 border border-white/30 text-white font-semibold text-sm tracking-widest hover:bg-white/10 transition-all">
              EXPLORE MENU
            </a>
          </div>
        </div>

        {/* Scroll Indicator - Repositioned to bottom right */}
        <div className="absolute bottom-12 right-12 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-amber-400">
            <span className="text-xs tracking-widest rotate-90 origin-center">SCROLL</span>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto scroll-reveal">
            <div className="relative h-[600px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
                alt="Chef preparing food"
                fill
                className="object-cover rounded-sm hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="scroll-reveal animation-delay-200">
              <p className="text-xs tracking-[0.3em] uppercase text-amber-400 mb-6">Our Philosophy</p>
              <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
                Where Tradition
                <span className="block text-amber-400 italic">Meets Innovation</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                For over a century, Château has been the pinnacle of fine dining excellence. 
                Our commitment to sourcing the finest ingredients and honoring classical techniques 
                while embracing modern creativity has earned us three Michelin stars.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Every plate is a masterpiece, every evening an unforgettable journey through 
                the senses. This is more than a meal—it's an experience.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-4xl font-serif text-amber-400 mb-2">★★★</div>
                  <p className="text-xs text-gray-500 tracking-wider">MICHELIN STARS</p>
                </div>
                <div>
                  <div className="text-4xl font-serif text-amber-400 mb-2">130+</div>
                  <p className="text-xs text-gray-500 tracking-wider">YEARS LEGACY</p>
                </div>
                <div>
                  <div className="text-4xl font-serif text-amber-400 mb-2">50K+</div>
                  <p className="text-xs text-gray-500 tracking-wider">GUESTS YEARLY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuisine Showcase */}
      <section id="cuisine" className="py-32 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto scroll-reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-amber-400 mb-6">Signature Creations</p>
            <h2 className="font-serif text-5xl md:text-6xl mb-6">Culinary Artistry</h2>
            <div className="w-24 h-px bg-amber-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { 
                name: 'Foie Gras Terrine', 
                desc: 'Black truffle, brioche, aged balsamic', 
                price: '58',
                image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80'
              },
              { 
                name: 'Lobster Thermidor', 
                desc: 'Cognac cream, gruyère, caviar pearls', 
                price: '92',
                image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80'
              },
              { 
                name: 'Wagyu Rossini', 
                desc: 'A5 wagyu, foie gras, truffle jus', 
                price: '145',
                image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80'
              },
              { 
                name: 'Dover Sole Meunière', 
                desc: 'Brown butter, capers, lemon', 
                price: '78',
                image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80'
              },
              { 
                name: 'Lamb Wellington', 
                desc: 'Herb crust, duxelles, red wine reduction', 
                price: '86',
                image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&q=80'
              },
              { 
                name: 'Chocolate Soufflé', 
                desc: 'Valrhona 70%, vanilla anglaise', 
                price: '32',
                image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80'
              }
            ].map((dish, i) => (
              <div key={i} className="group cursor-pointer scroll-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="relative h-80 mb-6 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-2xl group-hover:text-amber-400 transition-colors">{dish.name}</h3>
                  <span className="text-amber-400 font-serif text-xl">${dish.price}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{dish.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 scroll-reveal">
            <a href="#" className="inline-block px-10 py-4 border border-amber-400 text-amber-400 text-sm tracking-widest hover:bg-amber-400 hover:text-black transition-all">
              VIEW FULL MENU
            </a>
          </div>
        </div>
      </section>

      {/* Ambiance Gallery */}
      <section id="ambiance" className="py-32 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto scroll-reveal">
            <p className="text-xs tracking-[0.3em] uppercase text-amber-400 mb-6">The Setting</p>
            <h2 className="font-serif text-5xl md:text-6xl mb-6">Refined Elegance</h2>
            <p className="text-gray-400 text-lg">
              Step into an atmosphere of timeless sophistication where every detail has been 
              carefully curated to enhance your dining experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto scroll-reveal">
            <div className="relative h-96 md:h-[600px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Restaurant interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="relative h-48 md:h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80"
                  alt="Bar area"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative h-48 md:h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80"
                  alt="Private dining"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserve" className="py-32 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <p className="text-xs tracking-[0.3em] uppercase text-amber-400 mb-6">Join Us</p>
              <h2 className="font-serif text-5xl md:text-6xl mb-6">Reserve Your Table</h2>
              <p className="text-gray-400 text-lg">
                Limited seating. Advanced reservations recommended.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12 scroll-reveal animation-delay-200">
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-500 mb-3">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-amber-400 focus:outline-none transition text-white"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-500 mb-3">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-amber-400 focus:outline-none transition text-white"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-500 mb-3">Date</label>
                <input 
                  type="date" 
                  className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-amber-400 focus:outline-none transition text-white"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-500 mb-3">Time</label>
                <select className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-amber-400 focus:outline-none transition text-white">
                  <option value="" className="bg-zinc-900">Select time</option>
                  <option value="18:00" className="bg-zinc-900">18:00</option>
                  <option value="19:00" className="bg-zinc-900">19:00</option>
                  <option value="20:00" className="bg-zinc-900">20:00</option>
                  <option value="21:00" className="bg-zinc-900">21:00</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-500 mb-3">Guests</label>
                <select className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-amber-400 focus:outline-none transition text-white">
                  <option value="" className="bg-zinc-900">Number of guests</option>
                  <option value="1" className="bg-zinc-900">1 Guest</option>
                  <option value="2" className="bg-zinc-900">2 Guests</option>
                  <option value="3" className="bg-zinc-900">3 Guests</option>
                  <option value="4" className="bg-zinc-900">4 Guests</option>
                  <option value="5+" className="bg-zinc-900">5+ Guests</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-500 mb-3">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-amber-400 focus:outline-none transition text-white"
                />
              </div>
            </div>

            <div className="mb-12 scroll-reveal animation-delay-300">
              <label className="block text-xs tracking-widest uppercase text-gray-500 mb-3">Special Requests</label>
              <textarea 
                rows={4}
                className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-amber-400 focus:outline-none transition text-white resize-none"
                placeholder="Dietary restrictions, celebrations, etc."
              />
            </div>

            <div className="text-center scroll-reveal animation-delay-400">
              <button className="px-16 py-5 bg-amber-400 text-black font-semibold text-sm tracking-widest hover:bg-amber-500 transition-all">
                CONFIRM RESERVATION
              </button>
              <p className="text-xs text-gray-500 mt-6">
                You will receive a confirmation email within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-zinc-950 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center scroll-reveal">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">Location</p>
              <p className="text-gray-300">123 Avenue des Champs-Élysées</p>
              <p className="text-gray-300">Paris, France 75008</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">Hours</p>
              <p className="text-gray-300">Tuesday - Saturday</p>
              <p className="text-gray-300">18:00 - 23:00</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">Contact</p>
              <p className="text-gray-300">+33 1 23 45 67 89</p>
              <p className="text-gray-300">reserve@chateau.paris</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="text-sm text-gray-500 hover:text-amber-400 transition tracking-wider">
              ← BACK TO TEMPLATES
            </Link>
            <p className="text-xs text-gray-600 tracking-widest">© 2025 CHÂTEAU. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6 text-xs tracking-widest text-gray-500">
              <a href="#" className="hover:text-amber-400 transition">INSTAGRAM</a>
              <a href="#" className="hover:text-amber-400 transition">FACEBOOK</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
          animation-fill-mode: both;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
