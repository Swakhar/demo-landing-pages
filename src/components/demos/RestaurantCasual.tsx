'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function RestaurantCasual() {
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
    <div className="min-h-screen bg-stone-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-orange-900/30">
        <div className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="text-4xl">🔥</div>
              <div>
                <div className="text-2xl font-black text-orange-500 tracking-wider">FLAVO</div>
                <div className="text-xs text-orange-300 tracking-widest">BBQ & GRILL</div>
              </div>
            </Link>
            <div className="hidden md:flex gap-8 items-center text-sm font-medium">
              <a href="#menu" className="text-gray-300 hover:text-orange-500 transition-colors">MENU</a>
              <a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">ABOUT</a>
              <a href="#gallery" className="text-gray-300 hover:text-orange-500 transition-colors">GALLERY</a>
              <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors">CONTACT</a>
              <a href="#reservation" className="px-6 py-2.5 bg-orange-600 text-white hover:bg-orange-700 transition-colors font-semibold">
                BOOK TABLE
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80"
            alt="BBQ grill with flames"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block px-6 py-2 border-2 border-orange-500 text-orange-500 font-bold tracking-widest text-sm mb-6">
              SINCE 1995
            </div>
          </div>
          <h1 className="font-black text-6xl md:text-8xl mb-6 tracking-tight leading-none animate-fade-in-up">
            AUTHENTIC BBQ
            <span className="block text-orange-500 mt-3">EXPERIENCE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            Slow-smoked perfection served with passion. Where every bite tells a story of flavor and tradition.
          </p>
          <div className="flex gap-5 justify-center animate-fade-in-up animation-delay-400">
            <a href="#menu" className="px-10 py-4 bg-orange-600 text-white font-bold hover:bg-orange-700 transition-all transform hover:scale-105">
              VIEW MENU
            </a>
            <a href="#reservation" className="px-10 py-4 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-all">
              RESERVE TABLE
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-stone-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <div className="text-6xl mb-6">🔥</div>
            <h2 className="text-5xl font-black mb-6 text-orange-500">Welcome to Flavo</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              For over 25 years, we've been serving up the finest BBQ and grilled specialties. 
              Our secret? Premium cuts, traditional smoking techniques, and a whole lot of love.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="scroll-reveal animation-delay-200">
                <div className="text-5xl font-black text-orange-500 mb-2">25+</div>
                <div className="text-gray-500 uppercase tracking-wider text-sm">Years Experience</div>
              </div>
              <div className="scroll-reveal animation-delay-300">
                <div className="text-5xl font-black text-orange-500 mb-2">50K+</div>
                <div className="text-gray-500 uppercase tracking-wider text-sm">Happy Customers</div>
              </div>
              <div className="scroll-reveal animation-delay-400">
                <div className="text-5xl font-black text-orange-500 mb-2">100%</div>
                <div className="text-gray-500 uppercase tracking-wider text-sm">Quality Meat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 bg-stone-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 scroll-reveal">
            <div className="text-orange-500 tracking-widest text-sm mb-4">OUR SPECIALTIES</div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Signature Dishes</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: 'Smoked Brisket',
                desc: '12-hour slow smoked Texas style brisket with our signature rub',
                price: '$28',
                image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80'
              },
              {
                name: 'BBQ Ribs Platter',
                desc: 'Fall-off-the-bone baby back ribs glazed with smoky BBQ sauce',
                price: '$32',
                image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80'
              },
              {
                name: 'Pulled Pork Sandwich',
                desc: 'Slow-roasted pulled pork with coleslaw on a toasted bun',
                price: '$18',
                image: 'https://images.unsplash.com/photo-1619221882018-b5a56fc8589e?w=600&q=80'
              },
              {
                name: 'Grilled Chicken Wings',
                desc: 'Charcoal grilled wings with choice of buffalo or honey BBQ',
                price: '$16',
                image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&q=80'
              },
              {
                name: 'Beef Short Ribs',
                desc: 'Korean-style marinated beef ribs grilled to perfection',
                price: '$35',
                image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80'
              },
              {
                name: 'Combo Platter',
                desc: 'Brisket, ribs, pulled pork with sides and cornbread',
                price: '$42',
                image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80'
              }
            ].map((dish, i) => (
              <div key={i} className="group cursor-pointer scroll-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="relative h-72 mb-6 overflow-hidden bg-stone-800">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 right-4 px-4 py-2 bg-orange-600 text-white font-black text-xl">
                    {dish.price}
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3 group-hover:text-orange-500 transition-colors">{dish.name}</h3>
                <p className="text-gray-400 leading-relaxed">{dish.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 scroll-reveal">
            <a href="#" className="inline-block px-12 py-4 border-2 border-orange-600 text-orange-600 font-bold hover:bg-orange-600 hover:text-white transition-all">
              VIEW FULL MENU
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-stone-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="scroll-reveal">
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                  alt="BBQ chef grilling"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="scroll-reveal animation-delay-200">
              <div className="text-orange-500 tracking-widest text-sm mb-4">ABOUT FLAVO</div>
              <h2 className="text-5xl font-black mb-6">
                Masters of the
                <span className="block text-orange-500 mt-2">Grill & Smoke</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                What started as a small backyard BBQ passion has grown into one of the city's 
                most beloved grillhouses. Our pitmasters have perfected the art of smoking meats 
                to tender, juicy perfection.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Every dish is crafted with premium cuts, house-made rubs, and traditional techniques 
                passed down through generations. We don't just serve food – we serve experiences.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-orange-900/30">
                <div>
                  <div className="text-4xl font-black text-orange-500 mb-2">12h</div>
                  <div className="text-gray-500 text-sm uppercase tracking-wider">Smoke Time</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-orange-500 mb-2">Premium</div>
                  <div className="text-gray-500 text-sm uppercase tracking-wider">Quality Cuts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-stone-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 scroll-reveal">
            <div className="text-orange-500 tracking-widest text-sm mb-4">GALLERY</div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">Feast Your Eyes</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Take a visual journey through our mouthwatering creations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
              'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80',
              'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
              'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80',
              'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80',
              'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
              'https://images.unsplash.com/photo-1619221882018-b5a56fc8589e?w=600&q=80',
              'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&q=80'
            ].map((image, i) => (
              <div key={i} className="relative h-64 overflow-hidden group cursor-pointer scroll-reveal" style={{ animationDelay: `${i * 50}ms` }}>
                <Image
                  src={image}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/30 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-24 bg-stone-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <div className="text-orange-500 tracking-widest text-sm mb-4">RESERVE YOUR SPOT</div>
              <h2 className="text-5xl md:text-6xl font-black mb-6">Book a Table</h2>
              <p className="text-gray-400 text-xl">
                Secure your seat at the grill. Walk-ins welcome, reservations recommended.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 scroll-reveal animation-delay-200">
              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-500 mb-3">Name</label>
                <input 
                  type="text" 
                  className="w-full px-5 py-4 bg-stone-800 border border-stone-700 focus:border-orange-600 focus:outline-none transition text-white"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-500 mb-3">Email</label>
                <input 
                  type="email" 
                  className="w-full px-5 py-4 bg-stone-800 border border-stone-700 focus:border-orange-600 focus:outline-none transition text-white"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-500 mb-3">Date</label>
                <input 
                  type="date" 
                  className="w-full px-5 py-4 bg-stone-800 border border-stone-700 focus:border-orange-600 focus:outline-none transition text-white"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-500 mb-3">Time</label>
                <select className="w-full px-5 py-4 bg-stone-800 border border-stone-700 focus:border-orange-600 focus:outline-none transition text-white">
                  <option value="" className="bg-stone-800">Select time</option>
                  <option value="17:00" className="bg-stone-800">5:00 PM</option>
                  <option value="18:00" className="bg-stone-800">6:00 PM</option>
                  <option value="19:00" className="bg-stone-800">7:00 PM</option>
                  <option value="20:00" className="bg-stone-800">8:00 PM</option>
                  <option value="21:00" className="bg-stone-800">9:00 PM</option>
                </select>
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-500 mb-3">Guests</label>
                <select className="w-full px-5 py-4 bg-stone-800 border border-stone-700 focus:border-orange-600 focus:outline-none transition text-white">
                  <option value="" className="bg-stone-800">Number of guests</option>
                  <option value="1" className="bg-stone-800">1 Person</option>
                  <option value="2" className="bg-stone-800">2 People</option>
                  <option value="3" className="bg-stone-800">3 People</option>
                  <option value="4" className="bg-stone-800">4 People</option>
                  <option value="5+" className="bg-stone-800">5+ People</option>
                </select>
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider text-gray-500 mb-3">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-5 py-4 bg-stone-800 border border-stone-700 focus:border-orange-600 focus:outline-none transition text-white"
                />
              </div>
            </div>

            <div className="mt-8 scroll-reveal animation-delay-300">
              <label className="block text-sm uppercase tracking-wider text-gray-500 mb-3">Special Requests</label>
              <textarea 
                rows={4}
                className="w-full px-5 py-4 bg-stone-800 border border-stone-700 focus:border-orange-600 focus:outline-none transition text-white resize-none"
                placeholder="Any dietary restrictions or special occasions?"
              />
            </div>

            <div className="text-center mt-10 scroll-reveal animation-delay-400">
              <button className="px-16 py-5 bg-orange-600 text-white font-bold hover:bg-orange-700 transition-all transform hover:scale-105">
                CONFIRM BOOKING
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-950 border-t border-orange-900/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center scroll-reveal">
            <div>
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3 text-orange-500">LOCATION</h3>
              <p className="text-gray-400">456 Smoke House Lane</p>
              <p className="text-gray-400">Downtown District</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🕐</div>
              <h3 className="text-xl font-bold mb-3 text-orange-500">HOURS</h3>
              <p className="text-gray-400">Monday - Thursday: 5PM - 11PM</p>
              <p className="text-gray-400">Friday - Sunday: 12PM - 12AM</p>
            </div>
            <div>
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-3 text-orange-500">CONTACT</h3>
              <p className="text-gray-400">(555) BBQ-GRILL</p>
              <p className="text-gray-400">info@flavobbq.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-orange-900/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="text-sm text-gray-500 hover:text-orange-500 transition tracking-wider">
              ← BACK TO TEMPLATES
            </Link>
            <div className="text-center">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl">🔥</div>
                <div className="text-xl font-black text-orange-500">FLAVO</div>
              </div>
              <p className="text-xs text-gray-600">© 2025 Flavo BBQ & Grill. All rights reserved.</p>
            </div>
            <div className="flex gap-6 text-sm tracking-wider text-gray-500">
              <a href="#" className="hover:text-orange-500 transition">INSTAGRAM</a>
              <a href="#" className="hover:text-orange-500 transition">FACEBOOK</a>
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
