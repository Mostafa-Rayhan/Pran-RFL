import React from 'react'
import { FaBuilding, FaMapMarkerAlt, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const jobs = [
  {
    id: 1,
    title: "Senior Programmer",
    subtitle: "Programmer",
    category: "IT",
    department: "COMMON SERVICE",
    location: "HO-PRAN",
    education: "BSc",
    deadline: "29/07/2025",
  },
  {
    id: 2,
    title: "Assistant Programmer",
    subtitle: "Programmer",
    category: "IT",
    department: "COMMON SERVICE",
    location: "HO-PRAN",
    education: "BSc",
    deadline: "29/07/2025",
  },
  {
    id: 3,
    title: "HR Officer",
    subtitle: "HR",
    category: "HR",
    department: "HRM",
    location: "HO-PRAN",
    education: "MBA",
    deadline: "30/07/2025",
  },
];

const Jobs = () => {
    const navigate = useNavigate();
    const { category } = useParams();

    const filteredJobs = category
        ? jobs.filter((job) => job.category.toLowerCase() === category.toLowerCase())
        : jobs;

    const handleDetails = (id) => {
        navigate(`/jobs/details/${id}`);
    };

    return (
        <div
            style={{
                backgroundImage: "url('/src/assets/job-list.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                color: 'white',
            }}
        >
            <div className='bg-black/30 backdrop-blur-none'>
                {/* <h1 className="text-3xl font-bold mb-6">
                    {category ? `Jobs in ${category.toUpperCase()}` : 'All Jobs'}
                </h1> */}

                {filteredJobs.length === 0 ? (
                    <p>No jobs available in this category.</p>
                ) : (
                    <div className="container mx-auto px-4 py-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {filteredJobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition"
                            >
                                <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
                                <h4 className="text-sm italic text-gray-800 mb-4">{job.subtitle}</h4>

                                <div className="space-y-2 text-sm text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <FaBuilding className="text-blue-600" />
                                        <span><strong>Department:</strong> {job.department}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-red-600" />
                                        <span><strong>Location:</strong> {job.location}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FaGraduationCap className="text-green-600" />
                                        <span><strong>Education:</strong> {job.education}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-yellow-600" />
                                        <span><strong>Deadline:</strong> {job.deadline}</span>
                                    </div>
                                </div>

                                <button 
                                    onClick={() => handleDetails(job.id)}
                                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                                >
                                    Show Details
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Jobs