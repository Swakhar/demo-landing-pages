import Link from 'next/link';

export default function MedicalPractice() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">⚕️</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">HealthCare Plus</div>
                <div className="text-xs text-gray-500">Caring for Your Well-being</div>
              </div>
            </Link>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#services" className="text-gray-700 hover:text-teal-600 transition font-medium">Services</a>
              <a href="#doctors" className="text-gray-700 hover:text-teal-600 transition font-medium">Our Team</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition font-medium">Contact</a>
              <button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-semibold">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                Accepting New Patients
              </div>
              
              <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Health,
                <span className="block text-teal-600">Our Priority</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience compassionate, comprehensive healthcare with our team of board-certified physicians 
                dedicated to your well-being.
              </p>

              <div className="flex gap-4 mb-12">
                <button className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-xl">
                  Schedule Visit
                </button>
                <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-lg font-semibold hover:border-teal-600 transition">
                  Call Us
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-4xl font-bold text-teal-600 mb-1">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-600 mb-1">50K+</div>
                  <div className="text-sm text-gray-600">Patients Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-600 mb-1">4.9★</div>
                  <div className="text-sm text-gray-600">Patient Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-teal-200 to-blue-200 rounded-3xl flex items-center justify-center">
                <div className="text-9xl">🏥</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive healthcare services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '👨‍⚕️', title: 'Primary Care', desc: 'Routine checkups, preventive care, and health screenings' },
              { icon: '🦷', title: 'Dental Care', desc: 'Complete dental services from cleanings to cosmetic procedures' },
              { icon: '💊', title: 'Specialty Care', desc: 'Access to specialists for complex medical conditions' },
              { icon: '🧪', title: 'Lab Services', desc: 'On-site laboratory for fast, accurate test results' },
              { icon: '📋', title: 'Health Screenings', desc: 'Comprehensive screenings and preventive health programs' },
              { icon: '🏥', title: 'Urgent Care', desc: 'Same-day appointments for non-emergency conditions' }
            ].map((service, i) => (
              <div key={i} className="group p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-teal-600 hover:shadow-xl transition-all duration-300">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Meet Our Doctors</h2>
            <p className="text-xl text-gray-600">
              Board-certified physicians committed to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Dr. Sarah Johnson', specialty: 'Family Medicine', exp: '15 years' },
              { name: 'Dr. Michael Chen', specialty: 'Internal Medicine', exp: '20 years' },
              { name: 'Dr. Emily Davis', specialty: 'Pediatrics', exp: '12 years' }
            ].map((doctor, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="aspect-square bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
                  <div className="text-8xl">👨‍⚕️</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                  <p className="text-teal-600 font-semibold mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mb-4">{doctor.exp} experience</p>
                  <button className="w-full py-3 bg-teal-50 text-teal-700 rounded-lg font-semibold hover:bg-teal-100 transition">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Patient Testimonials</h2>
            <p className="text-xl text-gray-600">
              Hear from our satisfied patients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'John Smith', review: 'Outstanding care and compassionate staff. Highly recommend!' },
              { name: 'Maria Garcia', review: 'Dr. Johnson took the time to listen and explain everything clearly.' },
              { name: 'Robert Lee', review: 'Clean facility, friendly staff, and excellent medical care.' }
            ].map((testimonial, i) => (
              <div key={i} className="p-8 bg-white border-2 border-gray-200 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Schedule your appointment today and take the first step towards better health.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-10 py-5 bg-white text-teal-700 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-2xl">
              Book Online
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-teal-400 transition">
            ← Back to All Templates
          </Link>
          <p className="text-gray-500 text-sm mt-6">© 2025 HealthCare Plus. Your Health, Our Mission.</p>
        </div>
      </footer>
    </div>
  );
}
