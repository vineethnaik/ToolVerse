import React, { useMemo, useState } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CategorySection from '../components/categories/CategorySection'
import SearchResults from '../components/search/SearchResults'
import { categories, tools } from '../data/mockTools'

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredTools = useMemo(() => {
    if (selectedCategory === 'all') return tools
    return tools.filter((tool) => tool.category === selectedCategory)
  }, [selectedCategory])

  const categoryName = categories.find((cat) => cat.id === selectedCategory)?.name || 'All Categories'

  return (
    <div className="min-h-screen bg-dark-base noise-overlay">
      <Navbar />
      <main className="relative z-10 px-4 pb-16 pt-28">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">Browse Categories</h1>
          <p className="mb-8 text-gray-400">Discover tools by category and explore what fits your workflow.</p>
        </div>
        <CategorySection selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <section className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-xl font-semibold text-white md:text-2xl">{categoryName} Tools</h2>
          <SearchResults
            tools={filteredTools}
            loading={false}
            searchQuery=""
            bookmarks={[]}
            onBookmark={() => {}}
            onViewDetails={() => {}}
            enableSpin={false}
            totalCount={filteredTools.length}
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default CategoriesPage
