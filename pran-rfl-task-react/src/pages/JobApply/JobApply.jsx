import React from 'react'
//import { useParams } from 'react-router-dom';

const JobApply = () => {
    //const { id } = useParams(); // Get job ID

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      {/* Sidebar Tabs */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0 mr-4">
        <div className="space-y-2">
          {[
            "Applicant Information",
            "Address Information",
            "Education",
            "Employment",
            "Skills and Others",
            "Upload Files"
          ].map((item, index) => (
            <div
              key={index}
              className={`px-4 py-2 border rounded cursor-pointer ${
                index === 0 ? 'bg-blue-100 font-semibold' : 'hover:bg-gray-100'
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Form Area */}
      <div className="w-full md:w-3/4 bg-white rounded-lg shadow p-6">
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Name*</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Father's Name*</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Mother's Name*</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Contact No*</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Emergency Contact No</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email*</label>
            <input type="email" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Date Of Birth*</label>
            <input type="date" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Gender*</label>
            <select className="w-full border px-3 py-2 rounded">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Marital Status*</label>
            <select className="w-full border px-3 py-2 rounded">
              <option>Single</option>
              <option>Married</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Blood Group*</label>
            <select className="w-full border px-3 py-2 rounded">
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">National ID</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Birth Registration No</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Religion*</label>
            <select className="w-full border px-3 py-2 rounded">
              <option>Islam</option>
              <option>Hindu</option>
              <option>Christian</option>
              <option>Buddhist</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Nationality*</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>
        </form>

        <div className="mt-6">
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
            SAVE
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobApply