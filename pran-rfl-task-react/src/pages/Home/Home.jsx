import React from 'react'

const Home = () => {
     const categories = [
    { name: "IT", count: 2 },
    { name: "HR", count: 1 },
    { name: "SALES", count: 2 },
    { name: "ACCOUNTS", count: 1 },
  ];
  return (
    
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Explore Job Categories</h1>
        
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li key={index} className="flex justify-between items-center p-3 hover:bg-gray-100 rounded-md transition-colors">
              <span className="font-medium text-gray-700">{category.name}</span>
              <span className="text-sm bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                {category.count} job(s)
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home