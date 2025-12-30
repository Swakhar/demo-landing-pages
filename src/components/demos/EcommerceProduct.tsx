import Link from 'next/link';

export default function EcommerceProduct() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">ZENITH</Link>
          <div className="flex gap-6 items-center">
            <button className="text-gray-700 hover:text-black transition">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Product */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative text-9xl">🎧</div>
              </div>
              <div className="absolute -top-6 -right-6 px-6 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg">
                30% OFF
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
                New Release
              </div>
              <h1 className="text-6xl font-black text-gray-900 mb-6">
                Zenith Pro
                <span className="block text-4xl text-gray-500 font-normal mt-2">Wireless Headphones</span>
              </h1>
              
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-bold text-gray-900">$199</span>
                <span className="text-2xl text-gray-400 line-through">$299</span>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience crystal-clear audio with our premium noise-canceling headphones. 
                40-hour battery life, superior comfort, and studio-quality sound.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '🔋', label: '40h Battery' },
                  { icon: '🎵', label: 'Hi-Fi Audio' },
                  { icon: '🔇', label: 'Noise Canceling' },
                  { icon: '⚡', label: 'Fast Charging' }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="font-semibold text-gray-900">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-gray-900 mb-3">Color</p>
                <div className="flex gap-3">
                  {['bg-black', 'bg-gray-300', 'bg-indigo-600'].map((color, i) => (
                    <button key={i} className={`w-12 h-12 ${color} rounded-full border-4 border-transparent hover:border-gray-300 transition ${i === 0 ? 'ring-2 ring-black ring-offset-2' : ''}`} />
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <button className="flex-1 px-8 py-5 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Add to Cart
                </button>
                <button className="px-6 py-5 border-2 border-gray-300 rounded-xl hover:border-indigo-600 transition">
                  <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Customers Say</h2>
              <p className="text-xl text-gray-600">4.9/5 from 2,847 reviews</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Sarah M.', review: 'Best headphones I\'ve ever owned. The sound quality is incredible!' },
                { name: 'James K.', review: 'Battery life is amazing. Perfect for long flights.' },
                { name: 'Emma L.', review: 'Super comfortable, I can wear them all day without any issues.' }
              ].map((review, i) => (
                <div key={i} className="p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{review.review}</p>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Premium Features</h2>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {[
              {
                title: 'Active Noise Cancellation',
                desc: 'Block out the world and immerse yourself in pure sound with our advanced ANC technology.',
                icon: '🔇'
              },
              {
                title: 'Studio-Quality Audio',
                desc: 'Professional-grade drivers deliver crystal-clear highs and deep, powerful bass.',
                icon: '🎵'
              },
              {
                title: 'All-Day Comfort',
                desc: 'Premium memory foam cushions and adjustable headband for extended listening sessions.',
                icon: '😌'
              },
              {
                title: 'Multi-Device Pairing',
                desc: 'Seamlessly switch between your phone, tablet, and laptop with one tap.',
                icon: '📱'
              }
            ].map((feature, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="text-sm text-gray-600 hover:text-black transition">
            ← Back to All Templates
          </Link>
          <p className="text-gray-500 text-sm mt-6">© 2025 Zenith Audio. Premium Sound.</p>
        </div>
      </footer>
    </div>
  );
}
