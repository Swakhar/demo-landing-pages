import Link from 'next/link';

export default function EcommerceProduct() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-3xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            ZENITH
          </Link>
          <div className="flex gap-8 items-center">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Features</a>
            <a href="#reviews" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Reviews</a>
            <button className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-75 transition" />
              <div className="relative px-4 py-2 bg-white rounded-full">
                <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Product */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Product Image */}
            <div className="relative group">
              {/* Main Product Card */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                <div className="relative aspect-square bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-[3rem] flex items-center justify-center overflow-hidden border border-white/50 shadow-2xl">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-40" />
                    <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-40 delay-300" />
                    <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-40 delay-700" />
                  </div>
                  
                  {/* Product emoji with shadow */}
                  <div className="relative z-10 text-[12rem] transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 filter drop-shadow-2xl">
                    🎧
                  </div>
                  
                  {/* Reflection effect */}
                  <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-white/60 to-transparent" />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-8 -right-8 group/badge">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 rounded-full blur-lg opacity-50 group-hover/badge:opacity-75 transition" />
                <div className="relative px-8 py-4 bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl transform group-hover/badge:scale-110 group-hover/badge:rotate-12 transition-transform">
                  <div className="text-center">
                    <div className="text-2xl font-black">30% OFF</div>
                    <div className="text-xs opacity-90">Limited Time</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Info Cards */}
              <div className="absolute -bottom-6 -left-6 px-6 py-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-2xl">
                    ✓
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">In Stock</div>
                    <div className="font-bold text-gray-900">Free Shipping</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl">
                    ⭐
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">2.8K Reviews</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                New Release 2025
              </div>
              
              <h1 className="text-7xl lg:text-8xl font-black mb-4">
                <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
                  Zenith Pro
                </span>
              </h1>
              <p className="text-3xl text-gray-600 font-light mb-8">Premium Wireless Headphones</p>
              
              {/* Price */}
              <div className="flex items-end gap-6 mb-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Special Price</div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-6xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">$199</span>
                    <span className="text-3xl text-gray-400 line-through font-medium">$299</span>
                  </div>
                </div>
                <div className="px-4 py-2 bg-green-100 text-green-700 rounded-xl font-bold text-sm mb-2">
                  Save $100
                </div>
              </div>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Immerse yourself in studio-quality sound with industry-leading noise cancellation, 
                40-hour battery life, and cloud-like comfort. The future of audio is here.
              </p>

              {/* Quick Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: '🔋', label: '40h Battery', detail: 'Ultra-long life' },
                  { icon: '🎵', label: 'Hi-Res Audio', detail: 'Studio quality' },
                  { icon: '🔇', label: 'ANC Pro', detail: 'Adaptive mode' },
                  { icon: '⚡', label: 'Quick Charge', detail: '5min = 3hrs' }
                ].map((feature, i) => (
                  <div key={i} className="group relative p-5 bg-white rounded-2xl border border-gray-100 hover:border-indigo-200 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center gap-4">
                      <span className="text-4xl transform group-hover:scale-110 transition-transform">{feature.icon}</span>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{feature.label}</div>
                        <div className="text-sm text-gray-500">{feature.detail}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Color Selection */}
              <div className="mb-10">
                <p className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>Choose Color</span>
                  <span className="text-sm font-normal text-gray-500">• 3 Options</span>
                </p>
                <div className="flex gap-4">
                  {[
                    { color: 'bg-gradient-to-br from-gray-900 to-black', name: 'Midnight', active: true },
                    { color: 'bg-gradient-to-br from-gray-200 to-gray-300', name: 'Silver', active: false },
                    { color: 'bg-gradient-to-br from-indigo-600 to-purple-600', name: 'Cosmic', active: false }
                  ].map((item, i) => (
                    <button key={i} className="group/color relative">
                      <div className={`absolute inset-0 ${item.color} rounded-2xl blur-md opacity-0 group-hover/color:opacity-50 transition-opacity`} />
                      <div className={`relative w-16 h-16 ${item.color} rounded-2xl border-4 transition-all ${item.active ? 'border-gray-900 scale-110' : 'border-transparent hover:border-gray-300'} shadow-lg`} />
                      <div className="text-xs text-gray-600 mt-2 font-medium">{item.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <button className="group relative flex-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-transform group-hover:scale-105" 
                       style={{ borderRadius: '1.5rem' }} />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                       style={{ borderRadius: '1.5rem' }} />
                  <div className="relative px-10 py-6 text-white rounded-3xl font-bold text-xl flex items-center justify-center gap-3">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Add to Cart
                  </div>
                </button>
                <button className="group relative px-8 py-6 border-2 border-gray-200 rounded-3xl hover:border-indigo-300 transition-all bg-white hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50">
                  <svg className="w-7 h-7 text-gray-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              {/* Trust Badges */}
              <div className="flex items-center gap-8 mt-10 pt-10 border-t border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">2-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                  <span className="text-sm font-medium">Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-gray-900 mb-4">Technical Specifications</h2>
              <p className="text-xl text-gray-600">Engineered for perfection</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: 'Audio',
                  specs: [
                    { label: 'Driver Size', value: '40mm Dynamic' },
                    { label: 'Frequency', value: '20Hz - 40kHz' },
                    { label: 'Impedance', value: '32 Ohm' },
                    { label: 'Sensitivity', value: '110dB' }
                  ]
                },
                {
                  category: 'Battery & Charging',
                  specs: [
                    { label: 'Playback Time', value: '40 hours' },
                    { label: 'Charge Time', value: '2 hours' },
                    { label: 'Quick Charge', value: '5min = 3hrs' },
                    { label: 'Port', value: 'USB-C' }
                  ]
                },
                {
                  category: 'Connectivity',
                  specs: [
                    { label: 'Bluetooth', value: '5.3' },
                    { label: 'Range', value: '10 meters' },
                    { label: 'Codecs', value: 'AAC, LDAC' },
                    { label: 'Multi-Point', value: 'Yes' }
                  ]
                }
              ].map((section, i) => (
                <div key={i} className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">{section.category}</h3>
                  <div className="space-y-4">
                    {section.specs.map((spec, j) => (
                      <div key={j} className="flex justify-between items-center">
                        <span className="text-gray-600">{spec.label}</span>
                        <span className="font-bold text-gray-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="flex justify-center items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-10 h-10 text-yellow-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-4">Loved by Audiophiles</h2>
              <p className="text-2xl text-gray-600">4.9 out of 5 from 2,847 verified reviews</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Sarah Mitchell', review: 'Absolutely mind-blowing sound quality! The noise cancellation is so good I can finally focus on my work. Best purchase this year!', rating: 5, verified: true },
                { name: 'James Chen', review: 'Battery life is incredible - I charged them once last week and still going strong. Perfect for my daily commute and long flights.', rating: 5, verified: true },
                { name: 'Emma Rodriguez', review: 'Super comfortable even after 8+ hours of wear. The build quality feels premium and they look amazing. Worth every penny!', rating: 5, verified: true }
              ].map((review, i) => (
                <div key={i} className="group p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-indigo-200 transition-all duration-300">
                  <div className="flex gap-1 mb-5">
                    {[...Array(review.rating)].map((_, j) => (
                      <svg key={j} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{review.review}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="font-bold text-gray-900">{review.name}</p>
                      {review.verified && (
                        <p className="text-sm text-green-600 flex items-center gap-1 mt-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Verified Purchase
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Proof Stats */}
            <div className="grid md:grid-cols-4 gap-8 mt-20 p-10 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '4.9/5', label: 'Average Rating' },
                { value: '98%', label: 'Would Recommend' },
                { value: '24/7', label: 'Support Available' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black text-gray-900 mb-4 text-center">Premium Features</h2>
            <p className="text-xl text-gray-600 text-center mb-20">Technology that sets us apart</p>
            
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: 'Active Noise Cancellation Pro',
                  desc: 'Industry-leading ANC technology with adaptive modes that automatically adjust to your environment. Block out the world or let ambient sound in with a single touch.',
                  icon: '🔇',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Studio-Quality Audio',
                  desc: 'Premium 40mm dynamic drivers deliver crystal-clear highs, rich mids, and deep, powerful bass. Support for high-res audio codecs ensures every note is perfect.',
                  icon: '🎵',
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Cloud-Like Comfort',
                  desc: 'Premium memory foam ear cushions and ultra-lightweight design mean you can wear them all day without fatigue. Adjustable headband fits all head sizes perfectly.',
                  icon: '😌',
                  gradient: 'from-green-500 to-emerald-500'
                },
                {
                  title: 'Smart Multi-Device',
                  desc: 'Seamlessly switch between your phone, tablet, and laptop. Advanced Bluetooth 5.3 ensures stable connection up to 10 meters with minimal latency.',
                  icon: '📱',
                  gradient: 'from-orange-500 to-red-500'
                }
              ].map((feature, i) => (
                <div key={i} className="group flex gap-6 p-8 rounded-3xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-indigo-50/30 transition-all duration-300">
                  <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-6xl font-black mb-6">Ready to Experience Audio Perfection?</h2>
            <p className="text-2xl mb-10 opacity-90">Limited time offer - 30% off + Free Shipping</p>
            <div className="flex gap-6 justify-center">
              <button className="group px-12 py-6 bg-white text-indigo-600 rounded-3xl font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
                <span className="flex items-center gap-3">
                  Shop Now
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="px-12 py-6 border-2 border-white text-white rounded-3xl font-bold text-xl hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
            <p className="mt-8 text-sm opacity-75">🔒 Secure checkout • 💳 Easy returns • 🚚 Ships in 24 hours</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <h3 className="font-black text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">ZENITH</h3>
                <p className="text-gray-600">Premium audio equipment for discerning listeners.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Products</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-indigo-600 transition">Headphones</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition">Earbuds</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition">Speakers</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition">Accessories</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Support</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-indigo-600 transition">Help Center</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition">Warranty</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition">Shipping</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition">Returns</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Company</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-indigo-600 transition">About Us</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition">Careers</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition">Press</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <Link href="/" className="text-sm text-gray-600 hover:text-indigo-600 transition flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Templates
              </Link>
              <p className="text-gray-500 text-sm">© 2025 Zenith Audio. Crafted with passion for perfect sound.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
