import Link from 'next/link';
import { categories } from '@/lib/categories';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Modern Landing Page
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Templates
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our collection of beautifully crafted, modern landing pages across various industries
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/demo/${category.id}`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 border border-slate-700/50"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <div className="relative mb-4 text-5xl">{category.icon}</div>
              
              {/* Content */}
              <div className="relative">
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {category.name}
                </h2>
                <p className="text-gray-400 mb-4">{category.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-6 flex items-center text-purple-400 group-hover:text-pink-400 transition-colors">
                  <span className="text-sm font-semibold">View Demo</span>
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-gray-400">
          <p className="text-sm">
            Click any category to explore a modern, uncommon demo design
          </p>
        </div>
      </div>
    </main>
  );
}
