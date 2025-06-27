import React from "react";
import { useParams } from "react-router-dom";

const jobData = [
  {
    id: 1,
    title: "Senior Programmer",
    department: "MIS",
    location: "COMMON SERVICE • HO-PRAN",
    education: "BSc",
    ageRange: "20 - 40 yrs",
    gender: "Any",
    jobType: "Full-Time",
    deadline: "29/07/2025",
    description: [
      "OOP Clear Concept",
      "Design Pattern Clear Knowledge",
      "Oracle Advanced Stored Procedure Knowledge",
      ".NET Core Framework Implementation Skill",
      "Agile Sprint, Scrum Policy",
    ],
    skills: [".NET Core", "Oracle", "Javascript"],
    category: "Programmer",
  },
  // Add other jobs if needed
];

const JobDetails = () => {
  const { id } = useParams();
  const job = jobData.find((j) => j.id === parseInt(id));

  if (!job) {
    return <p className="text-center mt-10 text-red-500">Job not found!</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow overflow-hidden rounded-lg">
        {/* Job Header */}
        <div className="px-6 py-5 border-b border-gray-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
              <p className="text-gray-600 mt-1">{job.location}</p>
            </div>
            <div className="bg-red-50 px-3 py-1 rounded-md">
              <p className="text-red-600 font-medium flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Deadline: {job.deadline}
              </p>
            </div>
          </div>
        </div>

        {/* Job Meta Information */}
        <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">Department:</span>{" "}
              {job.department}
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Education:</span> {job.education}
            </p>
          </div>
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">Age:</span> {job.ageRange}
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Gender:</span> {job.gender}
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Job Type:</span> {job.jobType}
            </p>
          </div>
        </div>

        {/* Job Description */}
        <div className="px-6 py-4 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Job Description:
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {job.description.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div className="px-6 py-4 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Skills:</h2>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Remarks */}
        <div className="px-6 py-4 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Remarks:</h2>
          <p className="text-gray-700 font-medium">{job.category}</p>
        </div>

        {/* Apply Button */}
        <div className="px-6 py-4 bg-gray-50 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            APPLY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
