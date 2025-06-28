import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const JobApply = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const jobTitle = location.state?.jobTitle || "Job Position";

  // State for active tab
  const [activeTab, setActiveTab] = useState("applicant");

  // Form state
  const [formData, setFormData] = useState({
    // Applicant Information
    name: "",
    contactNo: "",
    dateOfBirth: "",
    fathersName: "",
    emergencyContactNo: "",
    gender: "",
    nationalId: "",
    nationality: "",
    mothersName: "",
    email: "",
    maritalStatus: "",
    birthRegistrationNo: "",
    bloodGroup: "",
    religion: "",

    // Address Information
    presentAddress: "",
    permanentAddress: "",
    district: "",
    thana: "",
    postCode: "",

    // Education
    education: [
      {
        level: "",
        examDegree: "",
        board: "",
        group: "",
        passingYear: "",
        grade: "",
        outOf: "",
      },
    ],

    // Employment
    employment: [
      {
        companyName: "",
        currentlyWorking: false,
        designation: "",
        startDate: "",
        toDate: "",
      },
    ],

    // Skills
    skills: [],
    noticePeriod: "",

    // Files
    cv: null,
    photo: null,
    signature: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (section, index, field, value) => {
    const updatedArray = [...formData[section]];
    updatedArray[index][field] = value;
    setFormData((prev) => ({ ...prev, [section]: updatedArray }));
  };

  const handleAddItem = (section, template) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], template],
    }));
  };

  const handleRemoveItem = (section, index) => {
    const updatedArray = formData[section].filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, [section]: updatedArray }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/application-success", {
      state: {
        applicantName: formData.name,
        trackingNo: "29484",
        jobTitle: jobTitle,
      },
    });
  };

  // Render current tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "applicant":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact No<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date Of Birth<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Blood Group<span className="text-red-500">*</span>
                </label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Religion<span className="text-red-500">*</span>
                </label>
                <select
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Religion</option>
                  <option value="islam">Islam</option>
                  <option value="hindu">Hindu</option>
                  <option value="christian">Christian</option>
                  <option value="buddhist">Buddhist</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Father's Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fathersName"
                  value={formData.fathersName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency Contact No
                </label>
                <input
                  type="tel"
                  name="emergencyContactNo"
                  value={formData.emergencyContactNo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender<span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  National Id
                </label>
                <input
                  type="text"
                  name="nationalId"
                  value={formData.nationalId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nationality<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mother's Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="mothersName"
                  value={formData.mothersName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Marital Status<span className="text-red-500">*</span>
                </label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Birth Registration No
                </label>
                <input
                  type="text"
                  name="birthRegistrationNo"
                  value={formData.birthRegistrationNo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        );

      case "address":
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Present Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="presentAddress"
                  value={formData.presentAddress}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                ></input>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  District<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Thana/Upazila<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="thana"
                  value={formData.thana}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="mt-4 mb-6">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Same as present address
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Permanent Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                ></input>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  District<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Thana/Upazila<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="thana"
                  value={formData.thana}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div></div>
            </div>

            <div className="space-y-4"></div>
          </div>
        );

      case "education":
        return (
          <div>
            <div className="mb-6 p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Add Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Level of Education<span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.education[0].level}
                    onChange={(e) =>
                      handleArrayChange("education", 0, "level", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="SSC">SSC</option>
                    <option value="HSC">HSC</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Masters">Masters</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Exam/Degree Title<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.education[0].examDegree}
                    onChange={(e) =>
                      handleArrayChange(
                        "education",
                        0,
                        "examDegree",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Board/University<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.education[0].board}
                    onChange={(e) =>
                      handleArrayChange("education", 0, "board", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Group/Major<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.education[0].group}
                    onChange={(e) =>
                      handleArrayChange("education", 0, "group", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Passing Year<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.education[0].passingYear}
                    onChange={(e) =>
                      handleArrayChange(
                        "education",
                        0,
                        "passingYear",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Grade/GPA<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.education[0].grade}
                    onChange={(e) =>
                      handleArrayChange("education", 0, "grade", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Out Of
                  </label>
                  <input
                    type="text"
                    value={formData.education[0].outOf}
                    onChange={(e) =>
                      handleArrayChange("education", 0, "outOf", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  handleAddItem("education", {
                    level: "",
                    examDegree: "",
                    board: "",
                    group: "",
                    passingYear: "",
                    grade: "",
                    outOf: "",
                  })
                }
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
              >
                ADD
              </button>
            </div>

            {/* Education History Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Exam Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Board/Institute
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Passing Year
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      GPA
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Out Of
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {formData.education.map((edu, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {edu.level}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {edu.board}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {edu.group}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {edu.passingYear}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {edu.grade}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {edu.outOf}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() => handleRemoveItem("education", index)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination (simplified) */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Rows per page:</span>
                <select className="border border-gray-300 rounded text-sm">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
              </div>
              <div className="text-sm text-gray-700">
                {formData.education.length} items
              </div>
            </div>
          </div>
        );

      case "employment":
        return (
          <div>
            <div className="mb-6 p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Add Employment</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.employment[0].companyName}
                    onChange={(e) =>
                      handleArrayChange(
                        "employment",
                        0,
                        "companyName",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Designation<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.employment[0].designation}
                    onChange={(e) =>
                      handleArrayChange(
                        "employment",
                        0,
                        "designation",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.employment[0].startDate}
                    onChange={(e) =>
                      handleArrayChange(
                        "employment",
                        0,
                        "startDate",
                        e.target.value
                      )
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="currentlyWorking"
                    checked={formData.employment[0].currentlyWorking}
                    onChange={(e) =>
                      handleArrayChange(
                        "employment",
                        0,
                        "currentlyWorking",
                        e.target.checked
                      )
                    }
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="currentlyWorking"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Currently Working
                  </label>
                </div>

                {!formData.employment[0].currentlyWorking && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      To Date
                    </label>
                    <input
                      type="date"
                      value={formData.employment[0].toDate}
                      onChange={(e) =>
                        handleArrayChange(
                          "employment",
                          0,
                          "toDate",
                          e.target.value
                        )
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() =>
                  handleAddItem("employment", {
                    companyName: "",
                    designation: "",
                    currentlyWorking: false,
                    startDate: "",
                    toDate: "",
                  })
                }
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
              >
                ADD
              </button>
            </div>

            {/* Employment History Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Designation
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      From Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      To Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {formData.employment.map((emp, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {emp.companyName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {emp.designation}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {emp.startDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {emp.currentlyWorking ? "Present" : emp.toDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() => handleRemoveItem("employment", index)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination (simplified) */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Rows per page:</span>
                <select className="border border-gray-300 rounded text-sm">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
              </div>
              <div className="text-sm text-gray-700">
                {formData.employment.length} items
              </div>
            </div>
          </div>
        );

      case "skills":
        return (
          <div>
            <div className="mb-6 p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Key Skills</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Add Skills (comma separated)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. .NET Core, Oracle, JavaScript"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === ",") {
                        e.preventDefault();
                        const skill = e.target.value.trim();
                        if (skill) {
                          setFormData((prev) => ({
                            ...prev,
                            skills: [...prev.skills, skill],
                          }));
                          e.target.value = "";
                        }
                      }
                    }}
                  />
                </div>

                <div className="">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notice Period (Months)
                  </label>
                  <input
                    type="number"
                    name="noticePeriod"
                    value={formData.noticePeriod}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Display Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {formData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm"
                >
                  {skill}
                  <button
                    onClick={() => {
                      const updatedSkills = formData.skills.filter(
                        (_, i) => i !== index
                      );
                      setFormData((prev) => ({
                        ...prev,
                        skills: updatedSkills,
                      }));
                    }}
                    className="ml-2 text-blue-600 hover:text-blue-900"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="text-lg font-medium">{formData.name}</div>
          </div>
        );

      case "files":
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Upload CV</h3>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX (MAX. 5MB)
                      </p>
                    </div>
                    <input
                      id="cv-upload"
                      type="file"
                      name="cv"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                    />
                  </label>
                </div>
                {formData.cv && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected: {formData.cv.name}
                  </p>
                )}
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Upload Photo</h3>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        JPG, PNG (MAX. 2MB)
                      </p>
                    </div>
                    <input
                      id="photo-upload"
                      type="file"
                      name="photo"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".jpg,.jpeg,.png"
                    />
                  </label>
                </div>
                {formData.photo && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected: {formData.photo.name}
                  </p>
                )}
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Upload Signature</h3>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        JPG, PNG (MAX. 2MB)
                      </p>
                    </div>
                    <input
                      id="signature-upload"
                      type="file"
                      name="signature"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".jpg,.jpeg,.png"
                    />
                  </label>
                </div>
                {formData.signature && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected: {formData.signature.name}
                  </p>
                )}
              </div>
            </div>

            {formData.photo && (
              <div className="mt-4 p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Uploaded Files</h3>
                <p className="text-sm text-gray-600">29484_Photo.jpg</p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Form Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab("applicant")}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === "applicant"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Applicant Information
              </button>
              <button
                onClick={() => setActiveTab("address")}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === "address"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Address Information
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === "education"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab("employment")}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === "employment"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Employment
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === "skills"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Skills and Others
              </button>
              <button
                onClick={() => setActiveTab("files")}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === "files"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Upload Files
              </button>
            </nav>
          </div>

          {/* Form Content */}
          <div className="px-6 py-4">
            <form onSubmit={handleSubmit}>
              {renderTabContent()}

              {/* Form Actions */}
              <div className="mt-8 flex justify-between">
                {activeTab !== "applicant" && (
                  <button
                    type="button"
                    onClick={() => {
                      const tabs = [
                        "applicant",
                        "address",
                        "education",
                        "employment",
                        "skills",
                        "files",
                      ];
                      const currentIndex = tabs.indexOf(activeTab);
                      if (currentIndex > 0) {
                        setActiveTab(tabs[currentIndex - 1]);
                      }
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Previous
                  </button>
                )}

                <div className="ml-auto">
                  {activeTab !== "files" ? (
                    <button
                      type="button"
                      onClick={() => {
                        const tabs = [
                          "applicant",
                          "address",
                          "education",
                          "employment",
                          "skills",
                          "files",
                        ];
                        const currentIndex = tabs.indexOf(activeTab);
                        if (currentIndex < tabs.length - 1) {
                          setActiveTab(tabs[currentIndex + 1]);
                        }
                      }}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      SAVE
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
