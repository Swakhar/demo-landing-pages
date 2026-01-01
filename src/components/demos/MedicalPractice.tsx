'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function MedicalPractice() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-emerald-700 text-white py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:5551234567" className="flex items-center gap-2 hover:text-emerald-200 transition">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              555-123-4567
            </a>
            <a href="mailto:info@listener.com" className="flex items-center gap-2 hover:text-emerald-200 transition">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@listener.com
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="hover:text-emerald-200 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-emerald-200 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-emerald-200 transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Listener
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition font-medium">About</a>
              <a href="#therapists" className="text-gray-700 hover:text-emerald-600 transition font-medium">Therapists</a>
              <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition font-medium">Testimonials</a>
              <a href="#contact" className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition font-semibold shadow-lg">
                Book a Session
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-gray-700 hover:text-emerald-600 transition">Home</a>
                <a href="#services" className="text-gray-700 hover:text-emerald-600 transition">Services</a>
                <a href="#about" className="text-gray-700 hover:text-emerald-600 transition">About</a>
                <a href="#therapists" className="text-gray-700 hover:text-emerald-600 transition">Therapists</a>
                <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition">Testimonials</a>
                <a href="#contact" className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition text-center">Book a Session</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&h=1080&fit=crop"
            alt="Family Counseling"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/90 to-teal-50/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-32 text-center">
          <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-8 leading-tight tracking-wide">
            Family support
            <span className="block font-normal">begins here</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-3xl mx-auto font-light">
            Grow closer as a family now
          </p>
          <a href="#contact" className="inline-block px-10 py-4 bg-emerald-600 text-white rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-xl">
            Book a Session
          </a>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-600 animate-bounce">
            <span className="text-sm uppercase tracking-wider">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Journeys Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Journeys of hope and growth
            </h2>
            <button className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-600 hover:text-white transition-all font-semibold">
              View More
            </button>
          </div>

          {/* Rotating Text Banner */}
          <div className="overflow-hidden py-8 bg-gradient-to-r from-emerald-600 to-teal-600">
            <div className="whitespace-nowrap animate-marquee">
              <span className="text-white text-2xl md:text-3xl font-light mx-8">We support & guide your mental health path</span>
              <span className="text-white text-2xl md:text-3xl font-light mx-8">We support & guide your mental health path</span>
              <span className="text-white text-2xl md:text-3xl font-light mx-8">We support & guide your mental health path</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mental health support tailored to your family&apos;s unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Family Counseling',
                description: 'Strengthen family bonds through guided communication and understanding',
                icon: '👨‍👩‍👧‍👦',
                image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop'
              },
              {
                title: 'Couples Therapy',
                description: 'Rebuild and nurture your relationship with professional guidance',
                icon: '💑',
                image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop'
              },
              {
                title: 'Individual Therapy',
                description: 'Personal growth and healing in a safe, supportive environment',
                icon: '🧘',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop'
              },
              {
                title: 'Child Psychology',
                description: 'Specialized care for children\'s emotional and behavioral needs',
                icon: '👶',
                image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop'
              },
              {
                title: 'Teen Counseling',
                description: 'Supporting adolescents through life transitions and challenges',
                icon: '👦',
                image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&h=400&fit=crop'
              },
              {
                title: 'Group Sessions',
                description: 'Connect with others facing similar challenges in supportive group settings',
                icon: '👥',
                image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop'
              }
            ].map((service, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-5xl">{service.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <button className="mt-4 text-emerald-600 font-semibold hover:text-emerald-700 transition flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop"
                  alt="About Us"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-emerald-600 rounded-3xl -z-10"></div>
            </div>
            
            <div>
              <h2 className="text-5xl font-light text-gray-900 mb-6">About Our Practice</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Listener, we believe that every family deserves a supportive space to heal, grow, 
                and thrive together. Our team of experienced therapists is dedicated to providing 
                compassionate, evidence-based care tailored to your unique needs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With over 25 years of combined experience, we\'ve helped thousands of families navigate 
                life\'s challenges and build stronger, healthier relationships. Our holistic approach 
                combines traditional therapy techniques with modern, innovative methods.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-emerald-50 rounded-2xl">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">5,000+</div>
                  <div className="text-sm text-gray-600">Families Helped</div>
                </div>
                <div className="text-center p-6 bg-emerald-50 rounded-2xl">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-emerald-50 rounded-2xl">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center p-6 bg-emerald-50 rounded-2xl">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">4.9★</div>
                  <div className="text-sm text-gray-600">Client Rating</div>
                </div>
              </div>

              <a href="#contact" className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg font-semibold">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Therapists Section */}
      <section id="therapists" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">Our Therapists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of licensed, compassionate professionals dedicated to your well-being
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Dr. Sarah Mitchell',
                title: 'Licensed Family Therapist',
                specialty: 'Family Dynamics & Communication',
                experience: '15 years',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop'
              },
              {
                name: 'Dr. Michael Chen',
                title: 'Child Psychologist',
                specialty: 'Child & Adolescent Therapy',
                experience: '12 years',
                image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop'
              },
              {
                name: 'Dr. Emily Rodriguez',
                title: 'Marriage Counselor',
                specialty: 'Couples & Relationship Therapy',
                experience: '18 years',
                image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=600&fit=crop'
              }
            ].map((therapist, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={therapist.image}
                    alt={therapist.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{therapist.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-2">{therapist.title}</p>
                  <p className="text-gray-600 mb-2">{therapist.specialty}</p>
                  <p className="text-sm text-gray-500 mb-4">{therapist.experience} of experience</p>
                  <button className="w-full py-3 bg-emerald-50 text-emerald-700 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">Client Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from families we&apos;ve had the privilege to support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Jennifer & Mark Thompson',
                role: 'Parents of Three',
                text: 'The family counseling sessions transformed our home. We learned to communicate better and understand each other\'s perspectives. Our children are happier, and so are we.',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
              },
              {
                name: 'Maria Garcia',
                role: 'Single Mother',
                text: 'Dr. Mitchell helped me navigate single parenthood with confidence. Her guidance has been invaluable in creating a nurturing environment for my children.',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
              },
              {
                name: 'David & Lisa Chen',
                role: 'Married 12 Years',
                text: 'Couples therapy saved our marriage. We were on the brink of separation, but Dr. Rodriguez helped us rediscover why we fell in love. Forever grateful.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-light mb-6">Ready to begin your journey?</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 font-light">
            Take the first step towards a healthier, happier family. Book your session today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <a href="#" className="px-10 py-5 bg-white text-emerald-700 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
              Book a Session
            </a>
            <a href="tel:5551234567" className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Call (555) 123-4567
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Visit Us</h3>
              <p className="text-emerald-100">123 Wellness Ave, Suite 200<br />San Francisco, CA 94102</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Call Us</h3>
              <p className="text-emerald-100">Office: (555) 123-4567<br />Emergency: (555) 987-6543</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Office Hours</h3>
              <p className="text-emerald-100">Mon-Fri: 8AM - 8PM<br />Sat-Sun: 10AM - 6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
                Listener
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Professional family counseling and mental health services. 
                Supporting families on their journey to wellness and growth.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition">
                  <span className="text-sm">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition">
                  <span className="text-sm">📷</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#therapists" className="hover:text-white transition">Our Team</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Family Counseling</li>
                <li>Couples Therapy</li>
                <li>Individual Therapy</li>
                <li>Child Psychology</li>
                <li>Teen Counseling</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2026 Listener Family Counseling. All rights reserved.
            </p>
            <Link href="/demo" className="text-emerald-400 hover:text-emerald-300 transition text-sm font-semibold">
              ← Back to All Templates
            </Link>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
