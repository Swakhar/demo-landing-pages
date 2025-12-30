import Link from 'next/link';

export default function AgencyCorporate() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-900 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">APEX</span>
            </Link>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#services" className="text-gray-700 hover:text-blue-900 transition font-medium">Services</a>
              <a href="#expertise" className="text-gray-700 hover:text-blue-900 transition font-medium">Expertise</a>
              <a href="#insights" className="text-gray-700 hover:text-blue-900 transition font-medium">Insights</a>
              <button className="px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              Trusted by Fortune 500 Companies
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Strategic Excellence
              <span className="block text-blue-400">Delivered</span>
            </h1>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl">
              Transform your business with data-driven consulting solutions. We combine industry expertise 
              with innovative strategies to drive measurable results.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-blue-900 rounded font-bold hover:bg-blue-50 transition shadow-lg">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded font-bold hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Clients Served' },
              { value: '$2B+', label: 'Value Created' },
              { value: '98%', label: 'Client Retention' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions tailored to your business objectives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📊',
                title: 'Strategic Consulting',
                desc: 'Market analysis, competitive positioning, and growth strategies',
                features: ['Market Research', 'Strategy Development', 'Implementation']
              },
              {
                icon: '💼',
                title: 'Financial Advisory',
                desc: 'CFO services, M&A advisory, and financial optimization',
                features: ['Financial Planning', 'Risk Management', 'M&A Support']
              },
              {
                icon: '⚖️',
                title: 'Legal Compliance',
                desc: 'Regulatory compliance, risk mitigation, and legal strategy',
                features: ['Compliance Audit', 'Legal Strategy', 'Risk Assessment']
              }
            ].map((service, i) => (
              <div key={i} className="group">
                <div className="p-8 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-900 hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 text-center">Industry Expertise</h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              Deep domain knowledge across multiple sectors
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Financial Services',
                'Healthcare & Life Sciences',
                'Technology & Software',
                'Manufacturing',
                'Retail & Consumer Goods',
                'Energy & Utilities'
              ].map((industry, i) => (
                <div key={i} className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-900 transition cursor-pointer flex items-center justify-between group">
                  <span className="font-semibold text-gray-900 group-hover:text-blue-900 transition">
                    {industry}
                  </span>
                  <svg className="w-5 h-5 text-blue-900 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Latest Insights</h2>
            <p className="text-xl text-gray-600">
              Expert perspectives on market trends and business strategy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Digital Transformation in 2025', category: 'Technology', date: 'Dec 28, 2025' },
              { title: 'Navigating Market Volatility', category: 'Finance', date: 'Dec 25, 2025' },
              { title: 'Sustainable Business Practices', category: 'Strategy', date: 'Dec 20, 2025' }
            ].map((article, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 to-slate-900 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />
                </div>
                <p className="text-sm text-blue-900 font-semibold mb-2">{article.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500">{article.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Schedule a consultation with our experts to discuss how we can help you achieve your goals.
          </p>
          <button className="px-10 py-5 bg-white text-blue-900 rounded font-bold text-lg hover:bg-blue-50 transition shadow-2xl">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition">
            ← Back to All Templates
          </Link>
          <p className="text-gray-500 text-sm mt-6">© 2025 Apex Consulting Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
