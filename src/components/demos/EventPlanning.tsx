import Link from 'next/link';
import Image from 'next/image';

export default function EventPlanning() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-3xl">💕</div>
              <span className="text-2xl font-serif italic text-rose-600">
                Love Story
              </span>
            </Link>
            <div className="hidden lg:flex gap-8 items-center">
              <a href="#home" className="text-gray-700 hover:text-rose-600 transition font-medium">Home</a>
              <a href="#story" className="text-gray-700 hover:text-rose-600 transition font-medium">Our Story</a>
              <a href="#events" className="text-gray-700 hover:text-rose-600 transition font-medium">Events</a>
              <a href="#gallery" className="text-gray-700 hover:text-rose-600 transition font-medium">Gallery</a>
              <a href="#party" className="text-gray-700 hover:text-rose-600 transition font-medium">Wedding Party</a>
              <a href="#rsvp" className="text-gray-700 hover:text-rose-600 transition font-medium">RSVP</a>
              <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full hover:shadow-lg transition font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop"
            alt="Wedding"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 mb-6">
              WE'RE GETTING MARRIED
            </div>
          </div>
          
          <h1 className="font-serif text-7xl md:text-9xl mb-4 italic">
            Sarah & John
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-white/50" />
            <div className="text-2xl">💕</div>
            <div className="w-16 h-px bg-white/50" />
          </div>
          
          <p className="text-2xl md:text-3xl font-light mb-12 tracking-wider">
            June 15, 2026 • Sunset Gardens, California
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-6 mb-12">
            {[
              { value: '180', label: 'Days' },
              { value: '12', label: 'Hours' },
              { value: '45', label: 'Minutes' },
              { value: '30', label: 'Seconds' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 mb-2">
                  <span className="text-2xl md:text-3xl font-bold">{item.value}</span>
                </div>
                <div className="text-sm font-medium tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>

          <button className="px-10 py-4 bg-white text-rose-600 rounded-full font-semibold text-lg hover:bg-rose-50 transition-all shadow-2xl transform hover:scale-105">
            Save the Date
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-rose-600 text-6xl mb-6">💝</div>
            <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6 italic">
              Welcome to Our Wedding
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-8" />
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We are so excited to celebrate our special day with you! Join us as we begin our journey 
              together as husband and wife. Your presence will make our day complete.
            </p>
            <p className="text-lg text-gray-500 italic">
              "Love is composed of a single soul inhabiting two bodies." - Aristotle
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-24 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6 italic">Our Love Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every love story is beautiful, but ours is our favorite
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Center Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-400 to-pink-400 -translate-x-1/2" />

              {/* Timeline Items */}
              <div className="space-y-16">
                {[
                  {
                    date: 'May 2020',
                    title: 'First Met',
                    desc: 'We met at a coffee shop on a rainy Tuesday. It was love at first sight.',
                    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop',
                    side: 'left'
                  },
                  {
                    date: 'December 2020',
                    title: 'First Date',
                    desc: 'Our first official date at the botanical gardens. The flowers were beautiful, but not as beautiful as the company.',
                    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop',
                    side: 'right'
                  },
                  {
                    date: 'June 2023',
                    title: 'The Proposal',
                    desc: 'Under the stars on a beach in Hawaii, John got down on one knee and asked the most important question.',
                    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop',
                    side: 'left'
                  },
                  {
                    date: 'June 2026',
                    title: 'Our Wedding Day',
                    desc: 'And now, we invite you to celebrate with us as we say "I do" and begin our forever together.',
                    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop',
                    side: 'right'
                  }
                ].map((item, i) => (
                  <div key={i} className={`relative grid md:grid-cols-2 gap-8 items-center ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`${item.side === 'right' ? 'md:col-start-2 md:text-left' : 'md:text-right'}`}>
                      <div className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold mb-4">
                        {item.date}
                      </div>
                      <h3 className="text-3xl font-serif italic text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>

                    {/* Image */}
                    <div className={`${item.side === 'right' ? 'md:col-start-1 md:row-start-1' : ''}`}>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform" />
                        <img 
                          src={item.image}
                          alt={item.title}
                          className="relative rounded-2xl shadow-xl w-full h-64 object-cover"
                        />
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-rose-500 rounded-full border-4 border-white shadow-lg z-10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="events" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6 italic">When & Where</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-6" />
            <p className="text-xl text-gray-600">Join us for our special day</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Ceremony */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop"
                  alt="Ceremony"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-5xl mb-4">💒</div>
                  <h3 className="text-3xl font-serif italic mb-4">The Ceremony</h3>
                  <div className="space-y-2 text-lg">
                    <p className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      June 15, 2026 at 4:00 PM
                    </p>
                    <p className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Sunset Gardens Chapel
                    </p>
                    <p className="text-sm text-gray-300">123 Garden Lane, California 90210</p>
                  </div>
                  <button className="mt-6 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full hover:bg-white/30 transition text-sm font-semibold">
                    View on Map
                  </button>
                </div>
              </div>
            </div>

            {/* Reception */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop"
                  alt="Reception"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-5xl mb-4">🥂</div>
                  <h3 className="text-3xl font-serif italic mb-4">The Reception</h3>
                  <div className="space-y-2 text-lg">
                    <p className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      6:00 PM - 11:00 PM
                    </p>
                    <p className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Grand Ballroom, Sunset Resort
                    </p>
                    <p className="text-sm text-gray-300">456 Oceanview Drive, California 90210</p>
                  </div>
                  <button className="mt-6 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full hover:bg-white/30 transition text-sm font-semibold">
                    View on Map
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dress Code */}
          <div className="mt-16 text-center max-w-2xl mx-auto p-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl">
            <div className="text-4xl mb-4">👔</div>
            <h3 className="text-2xl font-serif italic text-gray-900 mb-3">Dress Code</h3>
            <p className="text-gray-600">
              Black Tie Optional • We want you to feel comfortable and confident. 
              Ladies in cocktail dresses and gentlemen in suits are perfect!
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6 italic">Photo Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-6" />
            <p className="text-xl text-gray-600">Capturing our beautiful moments together</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1594623930572-300a3011d9ae?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=400&fit=crop'
            ].map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer shadow-lg hover:shadow-2xl transition-all">
                <img 
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl transition-all">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Wedding Party Section */}
      <section id="party" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6 italic">Our Wedding Party</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-6" />
            <p className="text-xl text-gray-600">The amazing people standing with us on our big day</p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Bridesmaids */}
            <div className="mb-20">
              <h3 className="text-3xl font-serif italic text-center text-rose-600 mb-12">Bridesmaids</h3>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { name: 'Emma Wilson', role: 'Maid of Honor', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces' },
                  { name: 'Olivia Brown', role: 'Bridesmaid', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces' },
                  { name: 'Sophia Davis', role: 'Bridesmaid', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces' },
                  { name: 'Ava Martinez', role: 'Bridesmaid', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=faces' }
                ].map((person, i) => (
                  <div key={i} className="text-center group">
                    <div className="relative mb-6 mx-auto w-48 h-48">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full transform group-hover:scale-110 transition-transform" />
                      <img 
                        src={person.image}
                        alt={person.name}
                        className="relative rounded-full w-full h-full object-cover border-4 border-white shadow-xl transform group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{person.name}</h4>
                    <p className="text-rose-600 font-medium">{person.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Groomsmen */}
            <div>
              <h3 className="text-3xl font-serif italic text-center text-rose-600 mb-12">Groomsmen</h3>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { name: 'Michael Johnson', role: 'Best Man', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces' },
                  { name: 'David Smith', role: 'Groomsman', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces' },
                  { name: 'James Anderson', role: 'Groomsman', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces' },
                  { name: 'Robert Taylor', role: 'Groomsman', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces' }
                ].map((person, i) => (
                  <div key={i} className="text-center group">
                    <div className="relative mb-6 mx-auto w-48 h-48">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full transform group-hover:scale-110 transition-transform" />
                      <img 
                        src={person.image}
                        alt={person.name}
                        className="relative rounded-full w-full h-full object-cover border-4 border-white shadow-xl transform group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{person.name}</h4>
                    <p className="text-rose-600 font-medium">{person.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-24 bg-gradient-to-br from-rose-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center text-white mb-12">
              <div className="text-6xl mb-6">💌</div>
              <h2 className="font-serif text-5xl md:text-6xl mb-6 italic">Will You Join Us?</h2>
              <div className="w-24 h-1 bg-white/50 mx-auto mb-6" />
              <p className="text-xl text-rose-100">
                Please RSVP by May 15, 2026. We can't wait to celebrate with you!
              </p>
            </div>

            <form className="bg-white rounded-3xl p-10 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
                  placeholder="john.doe@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Will you be attending? *</label>
                <div className="grid grid-cols-2 gap-4">
                  <button type="button" className="px-6 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition">
                    ✓ Joyfully Accept
                  </button>
                  <button type="button" className="px-6 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition">
                    ✗ Regretfully Decline
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Guests</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Dietary Restrictions</label>
                <textarea 
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Please let us know of any dietary restrictions or allergies..."
                ></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Special Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Share your well wishes or any special requests..."
                ></textarea>
              </div>

              <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                Submit RSVP
              </button>

              <p className="text-center text-sm text-gray-500 mt-6">
                * Required fields
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Registry Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6 italic">Gift Registry</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your presence is the greatest gift, but if you wish to honor us with a gift, 
              we've registered at these fine retailers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Amazon', icon: '🛒', url: '#' },
              { name: 'Target', icon: '🎯', url: '#' },
              { name: 'Crate & Barrel', icon: '🏠', url: '#' }
            ].map((registry, i) => (
              <a key={i} href={registry.url} className="group block p-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl hover:shadow-xl transition-all border-2 border-rose-100 hover:border-rose-300">
                <div className="text-6xl mb-4 text-center transform group-hover:scale-110 transition-transform">
                  {registry.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">{registry.name}</h3>
                <div className="text-center">
                  <span className="inline-flex items-center gap-2 text-rose-600 font-semibold group-hover:gap-3 transition-all">
                    View Registry
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* Contact & Map Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-gray-900 mb-6 italic">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Questions about the celebration? We'd love to hear from you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="bg-white rounded-3xl p-10 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">👰</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Bride</h4>
                      <p className="text-gray-600">Sarah Johnson</p>
                      <a href="mailto:sarah@email.com" className="text-rose-600 hover:text-rose-700">sarah@email.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🤵</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Groom</h4>
                      <p className="text-gray-600">David Smith</p>
                      <a href="mailto:david@email.com" className="text-rose-600 hover:text-rose-700">david@email.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Venue</h4>
                      <p className="text-gray-600">Sunset Gardens Chapel</p>
                      <p className="text-gray-600">123 Romance Lane, Los Angeles, CA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">Follow Our Journey</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl hover:shadow-lg transition transform hover:-translate-y-1">
                      f
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl hover:shadow-lg transition transform hover:-translate-y-1">
                      📷
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl hover:shadow-lg transition transform hover:-translate-y-1">
                      t
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">#SarahAndDavidForever</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-full">
                <div className="h-full min-h-[500px] bg-gray-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.2976824939943!2d-118.24368492346143!3d34.05223597315419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '500px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="font-serif text-4xl mb-4 italic">Sarah & David</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Join us as we begin our journey together. Your presence at our wedding 
                will make our day complete.
              </p>
              <div className="flex gap-4 mb-6">
                <a href="#" className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center hover:bg-rose-700 transition transform hover:-translate-y-1">
                  f
                </a>
                <a href="#" className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center hover:bg-rose-700 transition transform hover:-translate-y-1">
                  📷
                </a>
                <a href="#" className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center hover:bg-rose-700 transition transform hover:-translate-y-1">
                  t
                </a>
                <a href="#" className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center hover:bg-rose-700 transition transform hover:-translate-y-1">
                  💌
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#home" className="hover:text-white transition hover:translate-x-1 inline-block">Home</a></li>
                <li><a href="#story" className="hover:text-white transition hover:translate-x-1 inline-block">Our Story</a></li>
                <li><a href="#when-where" className="hover:text-white transition hover:translate-x-1 inline-block">When & Where</a></li>
                <li><a href="#gallery" className="hover:text-white transition hover:translate-x-1 inline-block">Gallery</a></li>
                <li><a href="#rsvp" className="hover:text-white transition hover:translate-x-1 inline-block">RSVP</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Information</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <span className="block text-white font-semibold mb-1">Wedding Date</span>
                  July 20, 2026
                </li>
                <li>
                  <span className="block text-white font-semibold mb-1">Venue</span>
                  Sunset Gardens Chapel
                </li>
                <li>
                  <span className="block text-white font-semibold mb-1">Ceremony</span>
                  4:00 PM
                </li>
                <li>
                  <span className="block text-white font-semibold mb-1">RSVP By</span>
                  May 15, 2026
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Sarah & David. Made with 💕 for our special day.
            </p>
            <Link href="/demo" className="text-rose-400 hover:text-rose-300 transition text-sm font-semibold">
              ← Back to All Templates
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
