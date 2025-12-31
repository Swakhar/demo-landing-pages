'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function AgencyCreative() {
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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-black">cunnet</Link>
            <div className="hidden md:flex gap-10 items-center text-sm font-medium">
              <a href="#about" className="text-gray-700 hover:text-black transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-black transition-colors">Services</a>
              <a href="#work" className="text-gray-700 hover:text-black transition-colors">Portfolio</a>
              <a href="#articles" className="text-gray-700 hover:text-black transition-colors">Blog</a>
              <a href="#contact" className="px-7 py-3 bg-black text-white hover:bg-gray-800 transition-colors font-semibold">
                Say Hello!
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <div className="mb-8 animate-fade-in">
                  <div className="inline-flex items-center gap-3 px-5 py-2 bg-gray-100 rounded-full text-sm font-semibold mb-8">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    CREATIVE AGENCY
                  </div>
                </div>
                <h1 className="text-7xl md:text-8xl font-black mb-8 leading-none animate-fade-in-up">
                  GLOBAL BRAND
                  <span className="block mt-3">INNOVATOR</span>
                  <span className="block mt-3 text-gray-300">AND STUDIO</span>
                </h1>
                <div className="flex items-center gap-4 mt-12 animate-fade-in-up animation-delay-200">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-lg">PLAY VIDEO</span>
                </div>
              </div>
              <div className="md:col-span-5 animate-fade-in-up animation-delay-300">
                <div className="relative aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
                    alt="Creative workspace"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="scroll-reveal">
                <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                  At cunnet, we don't just build website or campaigns we craft purpose-driven digital journeys.
                </h2>
                <a href="#" className="inline-flex items-center gap-3 text-lg font-semibold hover:gap-5 transition-all">
                  About Us
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <div className="scroll-reveal animation-delay-200">
                <div className="relative aspect-[4/5] mb-8">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                    alt="Team collaboration"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-20">
              <div className="scroll-reveal">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl mb-6">
                    ✦
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-4">Creative-First Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every design, app, or campaign starts with a bold idea rooted in originality and purpose.
                </p>
              </div>
              <div className="scroll-reveal animation-delay-200">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl mb-6">
                    ⚡
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-4">Tailored Digital Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every design, app, or campaign starts with a bold idea rooted in originality and purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-8 mb-20 scroll-reveal">
              <div className="flex-1 h-px bg-gray-300"></div>
              <h2 className="text-sm font-bold tracking-[0.3em] text-gray-400">WHAT WE DO</h2>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Branding', desc: 'Creating memorable brand identities that resonate with your audience and stand the test of time.', image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&q=80' },
                { title: 'Web Design', desc: 'Designing beautiful, user-friendly websites that engage visitors and drive conversions.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80' },
                { title: 'Development', desc: 'Building robust digital solutions with cutting-edge technology and seamless functionality.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80' }
              ].map((service, i) => (
                <div key={i} className="group cursor-pointer scroll-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="relative aspect-[4/5] mb-6 overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8">
                      <h3 className="text-3xl font-black text-white mb-2">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 scroll-reveal">
              <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
                <span className="text-gray-300">O u r</span> f e a t u r e d <span className="text-gray-300">w o r k</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  title: 'Storefront', 
                  tags: ['BRANDING', 'WEB DESIGN', 'WEB DEVELOPMENT'],
                  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
                },
                { 
                  title: 'Shophoria', 
                  tags: ['WEB DESIGN', 'WEB DEVELOPMENT'],
                  image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80'
                },
                { 
                  title: 'Marketly', 
                  tags: ['WEB DESIGN', 'WEB DEVELOPMENT'],
                  image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80'
                },
                { 
                  title: 'Shopline', 
                  tags: ['BRANDING', 'WEB DESIGN', 'WEB DEVELOPMENT'],
                  image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80'
                }
              ].map((project, i) => (
                <div key={i} className="group cursor-pointer scroll-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs font-bold text-gray-500 bg-gray-100 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-black group-hover:underline decoration-2 underline-offset-4">
                    {project.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="text-center mt-16 scroll-reveal">
              <a href="#" className="inline-flex items-center gap-3 px-10 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-colors">
                SEE ALL WORK
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 scroll-reveal">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Awards & recognitions
              </h2>
              <p className="text-2xl text-gray-400">that define excellence</p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {[
                { name: 'Awwwards', desc: 'The Best In Web Design.', year: '2024' },
                { name: 'Envato', desc: 'Creativity In UI/UX And Web Design.', year: '2023' },
                { name: 'CSS Winner', desc: 'Design Across Various Industries.', year: '2022' },
                { name: 'Behance', desc: 'Startups In Tech And Business.', year: '2021' },
                { name: 'Dribble', desc: 'Branding And Digital Design.', year: '2020' }
              ].map((award, i) => (
                <div key={i} className="text-center scroll-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-3xl font-black">
                      {award.name[0]}
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-2">{award.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{award.desc}</p>
                  <p className="text-sm font-bold text-gray-400">{award.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 scroll-reveal">
              <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
                <span className="text-gray-300">R e l a t e d</span> A r t i c l e s
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Your marketplace dreams we shape them.', 
                  category: 'BRANDING',
                  image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&q=80'
                },
                { 
                  title: 'Where design meets your platform becomes.', 
                  category: 'WEB DESIGN',
                  image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80'
                },
                { 
                  title: 'This isn\'t just design design makes reimagined.', 
                  category: 'DEVELOPMENT',
                  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80'
                }
              ].map((article, i) => (
                <div key={i} className="group cursor-pointer scroll-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="mb-3">
                    <span className="px-3 py-1 text-xs font-bold text-gray-500 bg-gray-100 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black leading-tight group-hover:underline decoration-2 underline-offset-4">
                    {article.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="text-center mt-16 scroll-reveal">
              <a href="#" className="inline-flex items-center gap-3 px-10 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-colors">
                ALL ARTICLES
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              Say Hello!
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Ready to transform your brand? Let's collaborate and create something extraordinary together.
            </p>
            <a href="#" className="inline-flex items-center gap-3 px-12 py-5 bg-white text-black font-bold hover:bg-gray-100 transition-colors text-lg">
              cunnet@gmail.com
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="md:col-span-1">
                <Link href="/" className="text-3xl font-black mb-6 block">cunnet</Link>
                <p className="text-gray-600 text-sm mb-6">
                  Powered by ThemePure
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v4a6 6 0 01-6 6H8a6 6 0 01-6-6v-4a6 6 0 016-6h8zm0-2H8a8 8 0 00-8 8v4a8 8 0 008 8h8a8 8 0 008-8v-4a8 8 0 00-8-8z"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4">Quick links</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="#" className="hover:text-black transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Who we are</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Services</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Projects</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-bold mb-4">Searching for exceptional talents?</h3>
                <a href="mailto:cunnet@gmail.com" className="text-2xl font-black hover:underline">
                  cunnet@gmail.com
                </a>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <Link href="/" className="text-sm text-gray-600 hover:text-black transition-colors">
                ← Back to All Templates
              </Link>
              <p className="text-sm text-gray-600">Copyright © 2025</p>
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
