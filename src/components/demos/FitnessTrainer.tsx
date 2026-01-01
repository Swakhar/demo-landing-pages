'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function FitnessTrainer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="text-3xl font-black text-gray-900">
                SOLE<span className="text-orange-600">STEP</span>
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition font-semibold">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition font-semibold">About</a>
              <a href="#services" className="text-gray-700 hover:text-orange-600 transition font-semibold">Services</a>
              <a href="#programs" className="text-gray-700 hover:text-orange-600 transition font-semibold">Programs</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition font-semibold">Testimonials</a>
              <a href="#contact" className="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition font-bold shadow-lg">
                Get Started
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
                <a href="#home" className="text-gray-700 hover:text-orange-600 transition">Home</a>
                <a href="#about" className="text-gray-700 hover:text-orange-600 transition">About</a>
                <a href="#services" className="text-gray-700 hover:text-orange-600 transition">Services</a>
                <a href="#programs" className="text-gray-700 hover:text-orange-600 transition">Programs</a>
                <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition">Testimonials</a>
                <a href="#contact" className="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition text-center">Get Started</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=1920&h=1080&fit=crop"
            alt="Fitness Training"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange-600 text-white font-bold text-sm rounded-full">
                PROFESSIONAL TRAINER
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              Transform Your
              <span className="block text-orange-600">Body & Mind</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
              Personal training programs designed to help you achieve your fitness goals with expert guidance and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-block px-10 py-5 bg-orange-600 text-white rounded-full font-bold text-lg hover:bg-orange-700 transition-all transform hover:scale-105 shadow-xl text-center">
                Start Training
              </a>
              <a href="#programs" className="inline-block px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all text-center">
                View Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1000&fit=crop"
                  alt="Personal Trainer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-orange-600 rounded-3xl -z-10"></div>
            </div>
            
            <div>
              <h2 className="text-5xl font-black text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Hi, I&apos;m Marcus Johnson, a certified personal trainer with over 10 years of experience 
                helping clients achieve their fitness goals. My approach combines science-based training 
                methods with personalized nutrition guidance to deliver real, sustainable results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Whether you&apos;re looking to lose weight, build muscle, or improve your overall health, 
                I&apos;ll create a customized program tailored to your specific needs and lifestyle.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-orange-50 rounded-2xl">
                  <div className="text-4xl font-black text-orange-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600 font-semibold">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-2xl">
                  <div className="text-4xl font-black text-orange-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600 font-semibold">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-2xl">
                  <div className="text-4xl font-black text-orange-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600 font-semibold">Certifications</div>
                </div>
              </div>

              <a href="#contact" className="inline-block px-8 py-4 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg font-bold">
                Work With Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">My Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive fitness solutions tailored to your goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Personal Training',
                description: 'One-on-one training sessions customized to your fitness level and goals',
                icon: '💪',
                image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop'
              },
              {
                title: 'Nutrition Coaching',
                description: 'Personalized meal plans and dietary guidance for optimal results',
                icon: '🥗',
                image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop'
              },
              {
                title: 'Online Training',
                description: 'Flexible virtual sessions with workout plans you can do anywhere',
                icon: '📱',
                image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop'
              },
              {
                title: 'Group Classes',
                description: 'Motivating group workouts for all fitness levels',
                icon: '👥',
                image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop'
              },
              {
                title: 'Strength Training',
                description: 'Build muscle and increase power with progressive resistance programs',
                icon: '🏋️',
                image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=400&fit=crop'
              },
              {
                title: 'HIIT Workouts',
                description: 'High-intensity interval training for maximum calorie burn',
                icon: '🔥',
                image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=600&h=400&fit=crop'
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
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the program that fits your lifestyle and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '49',
                duration: 'per month',
                features: [
                  '2 Training Sessions/Week',
                  'Basic Meal Plan',
                  'Email Support',
                  'Progress Tracking',
                  'Workout Videos'
                ],
                popular: false
              },
              {
                name: 'Pro',
                price: '99',
                duration: 'per month',
                features: [
                  '4 Training Sessions/Week',
                  'Custom Meal Plan',
                  '24/7 Chat Support',
                  'Advanced Analytics',
                  'Supplement Guide',
                  'Monthly Assessment'
                ],
                popular: true
              },
              {
                name: 'Elite',
                price: '149',
                duration: 'per month',
                features: [
                  'Unlimited Training Sessions',
                  'Premium Meal Plans',
                  'Priority Support',
                  'Full Body Assessment',
                  'Recovery Programs',
                  'Weekly Video Calls',
                  'Exclusive Community'
                ],
                popular: false
              }
            ].map((program, i) => (
              <div key={i} className={`relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all ${program.popular ? 'ring-4 ring-orange-600 transform scale-105' : ''}`}>
                {program.popular && (
                  <div className="absolute top-0 right-0 bg-orange-600 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-3xl font-black text-gray-900 mb-4">{program.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-black text-orange-600">${program.price}</span>
                    <span className="text-gray-600 ml-2">{program.duration}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {program.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 ${
                    program.popular 
                      ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real people
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Sarah Martinez',
                result: 'Lost 35 lbs in 4 months',
                text: 'Marcus completely changed my life! His personalized approach and constant support helped me achieve goals I never thought possible. I feel stronger and more confident than ever.',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
                before: '185 lbs',
                after: '150 lbs'
              },
              {
                name: 'David Chen',
                result: 'Gained 20 lbs of muscle',
                text: 'The customized strength training program was exactly what I needed. Marcus pushed me beyond my limits and the results speak for themselves. Best investment I&apos;ve made in myself.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
                before: '165 lbs',
                after: '185 lbs'
              },
              {
                name: 'Emily Johnson',
                result: 'Completed first marathon',
                text: 'I never thought I could run a marathon, but Marcus believed in me when I didn&apos;t believe in myself. His training program prepared me perfectly for race day!',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
                before: '0 miles',
                after: '26.2 miles'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-black text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-orange-600 font-bold">{testimonial.result}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Before</div>
                    <div className="font-bold text-gray-900">{testimonial.before}</div>
                  </div>
                  <div className="text-orange-600 text-2xl">→</div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">After</div>
                    <div className="font-bold text-orange-600">{testimonial.after}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light">
            Take the first step towards a healthier, stronger you. Book your free consultation today!
          </p>
          
          <div className="max-w-2xl mx-auto mb-16">
            <form className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition text-gray-900"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition text-gray-900"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition text-gray-900"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-6">
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition text-gray-900">
                  <option>Select Your Goal</option>
                  <option>Weight Loss</option>
                  <option>Muscle Building</option>
                  <option>Strength Training</option>
                  <option>General Fitness</option>
                  <option>Sports Performance</option>
                </select>
              </div>
              <div className="mb-6">
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none text-gray-900"
                  placeholder="Tell me about your fitness goals..."
                ></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-4 bg-orange-600 text-white rounded-full font-black text-lg hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg">
                Book Free Consultation
              </button>
            </form>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Call Me</h3>
              <p className="text-orange-100">+1 (555) 123-4567</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Email Me</h3>
              <p className="text-orange-100">marcus@solestep.com</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold">Visit Me</h3>
              <p className="text-orange-100">123 Fitness St, LA, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-black mb-4">
                SOLE<span className="text-orange-600">STEP</span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Professional personal training services dedicated to helping you achieve 
                your fitness goals and live a healthier lifestyle.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition">
                  <span className="text-sm">📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition">
                  <span className="text-sm">t</span>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition">
                  <span className="text-sm">in</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#services" className="hover:text-white transition">Services</a></li>
                <li><a href="#programs" className="hover:text-white transition">Programs</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Personal Training</li>
                <li>Nutrition Coaching</li>
                <li>Online Training</li>
                <li>Group Classes</li>
                <li>HIIT Workouts</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2026 SoleStep Fitness. All rights reserved.
            </p>
            <Link href="/demo" className="text-orange-600 hover:text-orange-500 transition text-sm font-semibold">
              ← Back to All Templates
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
