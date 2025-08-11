import React from 'react'
import Footer from '../commonComponents/Footer/Footer'
import AllArticleCard from './AllArticles'
import FeaturedArticleCard from './FeaturedArticles'
import ResourcesHero from './ResourcesHero'

function Resources() {
  const categories = [
    { name: "All Posts", count: 5, active: true },
    { name: "Startup Guide", count: 1 },
    { name: "Tax Compliance", count: 2 },
    { name: "Business Finance", count: 1 },
    { name: "Legal Requirements", count: 1 }
  ]

  const downloads = [
    {
      title: "Business Registration Checklist",
      description: "Complete checklist for company registration with required documents.",
      type: "PDF Download",
      icon: "B",
      color: "bg-green-500"
    },
    {
      title: "GST Rate Chart 2024",
      description: "Updated GST rates for all products and services.",
      type: "PDF Download",
      icon: "G",
      color: "bg-blue-500"
    },
    {
      title: "Tax Calendar 2024",
      description: "Important tax filing dates and deadlines.",
      type: "PDF Download",
      icon: "T",
      color: "bg-purple-500"
    },
    {
      title: "Startup Financial Template",
      description: "Financial planning and projections template.",
      type: "Excel Download",
      icon: "S",
      color: "bg-orange-500"
    }
  ]

  return (
    <>
      <ResourcesHero />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="w-64 flex-shrink-0">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className={`flex items-center justify-between p-2 rounded-md transition-colors ${
                          category.active
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className={`text-sm ${category.active ? 'text-blue-200' : 'text-gray-500'}`}>
                          ({category.count})
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Free Downloads */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Free Downloads</h3>
                <div className="space-y-4">
                  {downloads.map((download, index) => (
                    <div key={index} className="flex items-start gap-3 border-1 rounded-[8px] border-gray-200 p-4">
                      <div className={`w-8 h-8 ${download.color} rounded-full flex items-center justify-center text-white text-sm font-semibold`}>
                        {download.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 mb-1">{download.title}</h4>
                        <p className="text-xs text-gray-600 mb-2">{download.description}</p>
                        <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                          {download.type}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Featured Articles */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <FeaturedArticleCard
                    category="Startup Guide"
                    readTime="8 min read"
                    title="Complete Startup Checklist 2024: Don't Miss These 15 Essential Steps"
                    description="A comprehensive guide covering all legal, financial, and operational requirements for starting your business in India."
                    date="1/15/2024"
                    categoryColor="bg-green-500"
                  />
                  <FeaturedArticleCard
                    category="Tax Compliance"
                    readTime="5 min read"
                    title="GST Filing Deadlines 2024: Complete Calendar for Businesses"
                    description="Never miss a GST deadline again with our comprehensive filing calendar and automated reminder system."
                    date="1/10/2024"
                    categoryColor="bg-blue-500"
                  />
                </div>
              </div>

              {/* All Articles */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
                <div className="space-y-6">
                  <AllArticleCard
                    category="Startup Guide"
                    readTime="8 min read"
                    title="Complete Startup Checklist 2024: Don't Miss These 15 Essential Steps"
                    description="A comprehensive guide covering all legal, financial, and operational requirements for starting your business in India."
                    date="01/15/2024"
                    tags={["Company Registration", "GST", "Legal Requirements"]}
                    categoryColor="bg-green-500"
                  />
                  <AllArticleCard
                    category="Tax Compliance"
                    readTime="5 min read"
                    title="GST Filing Deadlines 2024: Complete Calendar for Businesses"
                    description="Never miss a GST deadline again with our comprehensive filing calendar and automated reminder system."
                    date="01/10/2024"
                    tags={["GST", "Tax Filing", "Compliance"]}
                    categoryColor="bg-blue-500"
                  />
                  <AllArticleCard
                    category="Tax Compliance"
                    readTime="6 min read"
                    title="Top 10 Tax Saving Tips for Small Businesses in India"
                    description="Maximize your tax savings with these essential tips tailored for small businesses in India."
                    date="01/05/2024"
                    tags={["Tax Saving", "Business Finance", "Planning"]}
                    categoryColor="bg-blue-500"
                  />
                  <AllArticleCard
                    category="Tax Compliance"
                    readTime="5 min read"
                    title="GST Filing Deadlines 2024: Complete Calendar for Businesses"
                    description="Never miss a GST deadline again with our comprehensive filing calendar and automated reminder system."
                    date="01/10/2024"
                    tags={["GST", "Tax Filing", "Compliance"]}
                    categoryColor="bg-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Resources