'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function AgencyCorporate() {
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
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-blue-950 text-white py-3">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-6">
              <span>📧 info@rexbiz.com</span>
              <span>📞 +123 456 7890</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-300 transition">Facebook</a>
              <a href="#" className="hover:text-blue-300 transition">Twitter</a>
              <a href="#" className="hover:text-blue-300 transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-2xl">R</span>
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900">REXBIZ</div>
                <div className="text-xs text-gray-500">Corporate Agency</div>
              </div>
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition font-semibold">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-semibold">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition font-semibold">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition font-semibold">Projects</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 transition font-semibold">Team</a>
              <a href="#contact" className="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 transition font-bold rounded">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Corporate building"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/80" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl text-white">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-5 py-2 bg-blue-500/30 backdrop-blur-sm rounded-full text-sm font-semibold border border-blue-400/50">
                Welcome to Rexbiz
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-fade-in-up">
              Innovative Business
              <span className="block text-blue-300">Solutions Provider</span>
            </h1>
            <p className="text-xl mb-10 leading-relaxed text-blue-100 animate-fade-in-up animation-delay-200">
              We deliver cutting-edge corporate solutions that drive growth, enhance efficiency, 
              and transform businesses in the digital era.
            </p>
            <div className="flex gap-4 animate-fade-in-up animation-delay-400">
              <a href="#services" className="px-10 py-4 bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-xl">
                Our Services
              </a>
              <a href="#contact" className="px-10 py-4 bg-white text-blue-600 font-bold hover:bg-gray-100 transition">
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="scroll-reveal">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                    alt="Business meeting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-600 rounded-2xl flex flex-col items-center justify-center text-white">
                  <div className="text-5xl font-black">25+</div>
                  <div className="text-sm font-semibold">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div className="scroll-reveal animation-delay-200">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold">
                  ABOUT US
                </span>
              </div>
              <h2 className="text-5xl font-black mb-6 text-gray-900 leading-tight">
                Leading Corporate
                <span className="block text-blue-600">Solutions Partner</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Since 1999, Rexbiz has been at the forefront of corporate innovation, delivering 
                exceptional business solutions that empower organizations to achieve their full potential.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our team of experts combines industry knowledge with cutting-edge technology to 
                provide tailored solutions that drive measurable results for our clients worldwide.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Expert Team</div>
                      <div className="text-sm text-gray-600">Certified Professionals</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">★</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Quality Service</div>
                      <div className="text-sm text-gray-600">99% Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">
                OUR SERVICES
              </span>
              <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive business solutions tailored to your organization's unique needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '💼',
                  title: 'Business Consulting',
                  desc: 'Strategic planning and execution support to drive your business forward with data-driven insights.',
                  features: ['Market Analysis', 'Growth Strategy', 'Process Optimization']
                },
                {
                  icon: '📊',
                  title: 'Financial Advisory',
                  desc: 'Expert financial guidance to optimize your capital structure and maximize shareholder value.',
                  features: ['Financial Planning', 'Risk Management', 'Investment Strategy']
                },
                {
                  icon: '🚀',
                  title: 'Digital Transformation',
                  desc: 'Modernize your operations with cutting-edge technology and digital innovation solutions.',
                  features: ['Cloud Migration', 'Process Automation', 'Digital Strategy']
                },
                {
                  icon: '⚖️',
                  title: 'Legal Compliance',
                  desc: 'Comprehensive compliance solutions to navigate complex regulatory landscapes with confidence.',
                  features: ['Regulatory Audit', 'Compliance Strategy', 'Risk Assessment']
                },
                {
                  icon: '👥',
                  title: 'HR Solutions',
                  desc: 'Transform your workforce with innovative talent management and organizational development.',
                  features: ['Talent Acquisition', 'Training Programs', 'Culture Building']
                },
                {
                  icon: '📈',
                  title: 'Marketing Strategy',
                  desc: 'Data-driven marketing solutions that enhance brand visibility and drive customer engagement.',
                  features: ['Brand Strategy', 'Digital Marketing', 'Market Research']
                }
              ].map((service, i) => (
                <div key={i} className="group scroll-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="text-6xl mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-gray-700">
                          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
            {[
              { value: '850+', label: 'Completed Projects', icon: '✓' },
              { value: '500+', label: 'Happy Clients', icon: '😊' },
              { value: '98%', label: 'Success Rate', icon: '📈' },
              { value: '25+', label: 'Years Experience', icon: '⭐' }
            ].map((stat, i) => (
              <div key={i} className="scroll-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-blue-100 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">
                OUR PORTFOLIO
              </span>
              <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
                Recent Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our successful project implementations across various industries
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Corporate Restructuring',
                  category: 'Finance',
                  image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
                },
                {
                  title: 'Digital Transformation',
                  category: 'Technology',
                  image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80'
                },
                {
                  title: 'Market Expansion',
                  category: 'Strategy',
                  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
                },
                {
                  title: 'Process Automation',
                  category: 'Operations',
                  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
                },
                {
                  title: 'Brand Repositioning',
                  category: 'Marketing',
                  image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80'
                },
                {
                  title: 'Compliance Framework',
                  category: 'Legal',
                  image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80'
                }
              ].map((project, i) => (
                <div key={i} className="group cursor-pointer scroll-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-white">
                        <div className="text-sm font-semibold text-blue-300 mb-2">{project.category}</div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="px-2">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">
                OUR TEAM
              </span>
              <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
                Meet The Experts
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experienced professionals dedicated to your success
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: 'John Anderson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
                { name: 'Sarah Mitchell', role: 'Chief Strategy Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
                { name: 'Michael Chen', role: 'Head of Finance', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
                { name: 'Emily Rodriguez', role: 'Director of Operations', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' }
              ].map((member, i) => (
                <div key={i} className="group scroll-reveal" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-5">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="scroll-reveal">
                <span className="inline-block px-4 py-2 bg-blue-500/30 backdrop-blur-sm rounded-full text-sm font-bold mb-6 border border-blue-400/50">
                  GET IN TOUCH
                </span>
                <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                  Let's Discuss Your
                  <span className="block text-blue-300">Business Goals</span>
                </h2>
                <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                  Ready to transform your business? Our team of experts is here to help you achieve exceptional results.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-500/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <div className="text-sm text-blue-300 mb-1">Call Us</div>
                      <div className="text-xl font-bold">+123 456 7890</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-500/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <div className="text-sm text-blue-300 mb-1">Email Us</div>
                      <div className="text-xl font-bold">info@rexbiz.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-500/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <div className="text-sm text-blue-300 mb-1">Visit Us</div>
                      <div className="text-xl font-bold">123 Business Ave, New York, NY 10001</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="scroll-reveal animation-delay-200">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-black text-gray-900 mb-6">Send us a message</h3>
                  <form className="space-y-5">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition text-gray-900"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition text-gray-900"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Subject"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition text-gray-900"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={5}
                        placeholder="Your Message"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition resize-none text-gray-900"
                      />
                    </div>
                    <button className="w-full px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-black text-2xl">R</span>
                  </div>
                  <div>
                    <div className="text-2xl font-black">REXBIZ</div>
                    <div className="text-xs text-gray-400">Corporate Agency</div>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Leading corporate solutions provider delivering excellence since 1999.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                  <li><a href="#services" className="hover:text-white transition">Services</a></li>
                  <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                  <li><a href="#team" className="hover:text-white transition">Team</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-6">Services</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-white transition">Business Consulting</a></li>
                  <li><a href="#" className="hover:text-white transition">Financial Advisory</a></li>
                  <li><a href="#" className="hover:text-white transition">Digital Transformation</a></li>
                  <li><a href="#" className="hover:text-white transition">Legal Compliance</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-6">Newsletter</h3>
                <p className="text-gray-400 mb-4">Subscribe to get the latest news and updates.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:border-blue-600 focus:outline-none text-white"
                  />
                  <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition">
                    →
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <Link href="/" className="text-sm text-gray-400 hover:text-white transition">
                ← Back to All Templates
              </Link>
              <p className="text-gray-500 text-sm">© 2025 Rexbiz. All rights reserved.</p>
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
