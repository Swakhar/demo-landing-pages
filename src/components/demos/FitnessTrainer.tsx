import Link from 'next/link';

export default function FitnessTrainer() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-red-900/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <span className="text-2xl font-black">POWERFIT</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center font-bold text-sm">
            <a href="#programs" className="hover:text-red-500 transition">PROGRAMS</a>
            <a href="#results" className="hover:text-red-500 transition">RESULTS</a>
            <a href="#pricing" className="hover:text-red-500 transition">PRICING</a>
            <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-full hover:shadow-lg hover:shadow-red-500/50 transition">
              JOIN NOW
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-orange-900/30" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600 rounded-full filter blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full mb-8">
              <span className="text-2xl">🔥</span>
              <span className="font-bold">LIMITED SPOTS AVAILABLE</span>
            </div>
            
            <h1 className="text-8xl md:text-9xl font-black mb-6 leading-none">
              UNLEASH
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                YOUR POWER
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl">
              Transform your body in 12 weeks with personalized training, nutrition plans, and 24/7 support.
            </p>

            <div className="flex gap-4">
              <button className="px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-black text-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all transform hover:scale-105">
                START FREE TRIAL
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-black text-lg hover:bg-white/20 transition">
                VIEW PROGRAMS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-32 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-4">TRAINING PROGRAMS</h2>
            <p className="text-2xl text-gray-400">Choose your path to greatness</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { name: 'STRENGTH', emoji: '💪', desc: 'Build muscle and raw power', duration: '12 weeks' },
              { name: 'CARDIO', emoji: '🏃', desc: 'Burn fat and boost endurance', duration: '8 weeks' },
              { name: 'YOGA', emoji: '🧘', desc: 'Flexibility and mindfulness', duration: '6 weeks' }
            ].map((program, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 hover:border-red-600 transition-all duration-300 p-8">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full filter blur-3xl group-hover:bg-red-600/20 transition-all" />
                  
                  <div className="relative">
                    <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform">
                      {program.emoji}
                    </div>
                    <h3 className="text-3xl font-black mb-4 group-hover:text-red-500 transition">
                      {program.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{program.desc}</p>
                    <div className="flex items-center gap-2 text-sm text-red-500 font-bold">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {program.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-4">REAL TRANSFORMATIONS</h2>
            <p className="text-2xl text-gray-400">Results that speak for themselves</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Mike R.', result: 'Lost 30 lbs in 12 weeks', rating: 5 },
              { name: 'Sarah K.', result: 'Gained 10 lbs of muscle', rating: 5 },
              { name: 'James T.', result: 'Ran first marathon', rating: 5 }
            ].map((testimonial, i) => (
              <div key={i} className="p-8 bg-zinc-950 rounded-2xl border border-zinc-800">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-xl font-bold mb-4 text-red-500">{testimonial.result}</p>
                <p className="text-gray-400">"Best decision I ever made. The personalized approach made all the difference."</p>
                <p className="text-sm text-gray-500 mt-4 font-bold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="p-12 bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-3xl border-2 border-red-600/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10" />
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h2 className="text-5xl font-black mb-4">PREMIUM MEMBERSHIP</h2>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-6xl font-black">$99</span>
                    <span className="text-2xl text-gray-400">/month</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    'Personalized Training Plans',
                    'Custom Nutrition Guide',
                    '24/7 Coach Support',
                    'Progress Tracking App',
                    'Weekly Video Check-ins',
                    'Private Community Access'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-bold">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-6 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl font-black text-xl hover:shadow-2xl hover:shadow-red-500/50 transition-all transform hover:scale-105">
                  START YOUR TRANSFORMATION
                </button>
                <p className="text-center text-sm text-gray-400 mt-4">7-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="text-sm text-gray-600 hover:text-red-500 transition">
            ← Back to All Templates
          </Link>
          <p className="text-gray-700 text-sm mt-6">© 2025 PowerFit. Transform Your Body, Transform Your Life.</p>
        </div>
      </footer>
    </div>
  );
}
