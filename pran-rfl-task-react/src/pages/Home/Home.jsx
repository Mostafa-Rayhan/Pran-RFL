import React from 'react'
import { useNavigate } from 'react-router-dom';

const categories = [
    { name: "IT", count: 2 },
    { name: "HR", count: 1 },
    { name: "SALES", count: 0 },
    { name: "ACCOUNTS", count: 0 },
  ];

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (categoryName) => {
    navigate(`/jobs/${categoryName.toLowerCase()}`);
  };
  
  return (

    <div
      style={{
        backgroundImage: "url('/src/assets/jobs.avif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
      }}
    >
        <div className='container mx-auto flex flex-col h-full text-center'>
            <h1 className='text-4xl font-bold text-gray-700 pt-32'>Explore Job Categories</h1>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(category.name)}
                        className="bg-white rounded-xl shadow-md p-6 border border-gray-200 text-center"
                    >
                        <h2 className="text-xl font-semibold text-blue-800">{category.name}</h2>
                        <p className="text-gray-500 mt-2">{category.count} job(s)</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
    

  )
}

export default Home