import Link from 'next/link';

export default function SaasLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg" />
            <span className="text-xl font-bold">FlowStack</span>
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#features" className="hover:text-cyan-400 transition">Features</a>
            <a href="#pricing" className="hover:text-cyan-400 transition">Pricing</a>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full filter blur-[128px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-400">Join 50,000+ teams already using FlowStack</span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
              Project Management
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Reimagined
              </span>
            </h1>
            
            <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              The all-in-one platform that brings your team, tasks, and tools together. 
              Ship faster. Collaborate better. Achieve more.
            </p>

            <div className="flex justify-center gap-4 mb-16">
              <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1">
                Get Started Free
              </button>
              <button className="px-10 py-5 bg-slate-800 rounded-xl font-bold text-lg hover:bg-slate-700 transition flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
              <div className="aspect-[16/9] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                <div className="p-6">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-12 bg-slate-700/50 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-4">Everything You Need</h2>
            <p className="text-2xl text-gray-400">Powerful features to supercharge your workflow</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Instant sync across all your devices in real-time' },
              { icon: '🔒', title: 'Secure & Private', desc: 'Enterprise-grade security with end-to-end encryption' },
              { icon: '🤝', title: 'Team Collaboration', desc: 'Work together seamlessly with your entire team' },
              { icon: '📊', title: 'Analytics Dashboard', desc: 'Gain insights with powerful reporting and metrics' },
              { icon: '🔄', title: 'Integrations', desc: 'Connect with 1000+ tools you already use' },
              { icon: '🎯', title: 'Goal Tracking', desc: 'Set, track, and achieve your objectives effortlessly' }
            ].map((feature, i) => (
              <div key={i} className="group p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-4">Simple Pricing</h2>
            <p className="text-2xl text-gray-400">Choose the plan that's right for you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Starter', price: '$9', features: ['Up to 5 team members', '10 GB storage', 'Basic integrations', 'Email support'] },
              { name: 'Pro', price: '$29', features: ['Up to 25 team members', '100 GB storage', 'Advanced integrations', 'Priority support'], highlight: true },
              { name: 'Enterprise', price: '$99', features: ['Unlimited team members', 'Unlimited storage', 'Custom integrations', '24/7 phone support'] }
            ].map((plan, i) => (
              <div key={i} className={`relative p-8 rounded-2xl ${plan.highlight ? 'bg-gradient-to-br from-cyan-500 to-blue-600' : 'bg-slate-800'}`}>
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-slate-900 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-lg font-bold ${plan.highlight ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-slate-700 hover:bg-slate-600'} transition`}>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl font-black mb-6">
            Ready to Transform
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Your Workflow?
            </span>
          </h2>
          <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of teams already using FlowStack to work smarter and ship faster.
          </p>
          <button className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1">
            Start Your Free Trial
          </button>
          <p className="text-gray-500 text-sm mt-6">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-cyan-400 transition">
            ← Back to All Templates
          </Link>
          <p className="text-gray-600 text-sm mt-6">© 2025 FlowStack. Built for Modern Teams.</p>
        </div>
      </footer>
    </div>
  );
}
