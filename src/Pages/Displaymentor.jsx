// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const DisplayMentor = () => {
//   const location = useLocation();
//   const mentor = location.state;
//     console.log("Mentor data: '😁😁😁😁😁", mentor);

//   if (!mentor) {
//     return <p className="text-red-500 text-center mt-10">No mentor data available</p>;
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-10">
//       <h2 className="text-2xl font-bold text-center mb-4">Mentor Profile</h2>
//       <div className="flex flex-col items-center text-center">
//         <img src={mentor.message.avatar} alt={mentor.fullname} className="w-32 h-32 rounded-full mb-4 border-2 border-blue-500" />
//         <h3 className="text-xl font-semibold">{mentor.fullname}</h3>
//         <p className="text-gray-400">{mentor.designation} at {mentor.company}</p>
//         <p className="text-gray-300 mt-2">{mentor.about}</p>
//       </div>

//       <div className="mt-6">
//         <h4 className="text-lg font-semibold">Experience</h4>
//         <p>{mentor.experience} years</p>
//       </div>

//       <div className="mt-4">
//         <h4 className="text-lg font-semibold">Skills</h4>
//         <p>{mentor.skills}</p>
//       </div>

//       <div className="mt-4">
//         <h4 className="text-lg font-semibold">LinkedIn</h4>
//         <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
//           View Profile
//         </a>
//       </div>

//       {mentor.availableForReferral && (
//         <div className="mt-6 bg-green-700 p-3 rounded-lg text-center">
//           <p className="text-lg font-semibold">✅ Available for Job Referrals</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DisplayMentor;


import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DisplayMentor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state;
  const [showContactInfo, setShowContactInfo] = useState(false);
  
  console.log("Student data:", student);

  if (!student) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="text-xl font-bold text-white mb-2">No Student Data Available</h2>
          <p className="text-gray-400 mb-6">The student profile you're looking for cannot be found.</p>
          <button 
            onClick={() => navigate(-1)} 
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleConnect = () => {
    setShowContactInfo(!showContactInfo);
    // Here you could also implement functionality to track recruiter interest
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        {/* Header Banner */}
        <div className="bg-blue-900 h-32 relative">
          <div className="absolute bottom-0 left-0 w-full flex justify-between items-end px-6 transform translate-y-1/2">
            <div className="flex items-end">
              <img 
                src={student.message.avatar || "https://via.placeholder.com/150"}
                alt={student.message.fullname}
                className="w-24 h-24 rounded-full border-4 border-gray-800 object-cover shadow-lg" 
              />
              <div className="ml-4 pb-4">
                <h2 className="text-2xl font-bold text-white">{student.message.fullname}</h2>
                <p className="text-blue-300">{student.message.designation || "Student"}</p>
              </div>
            </div>
            <div className="pb-4">
              {student.availableForReferral && (
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Available for Hire
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="pt-16 px-6 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Basic Info */}
          <div className="md:col-span-2 text-white">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                About
              </h3>
              <p className="text-gray-300 leading-relaxed">{student.message.about || "No description available."}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Experience
              </h3>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <p className="text-lg text-white">{student.message.company || "Not specified"}</p>
                  <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded text-sm">
                    {student.message.experience ? `${student.message.experience} years` : "Experience N/A"}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-1">{student.designation || "Role not specified"}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Skills & Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {student.message.skills ?
                  student.message.skills.split(',').map((skill, index) => (
                    <span key={index} className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {skill.trim()}
                    </span>
                  )) : 
                  <p className="text-gray-400">No skills listed</p>
                }
              </div>
            </div>
          </div>

          {/* Right Column - Actions & Additional Info */}
          <div className="text-white">
            <div className="bg-gray-700 p-6 rounded-xl shadow-inner mb-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Recruiter Actions</h3>
              
              <button 
                onClick={handleConnect} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg mb-4 flex items-center justify-center transition duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
                {showContactInfo ? "Hide Contact Info" : "Contact Student"}
              </button>
              
              {student.availableForReferral && (
                <button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center transition duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Schedule Interview
                </button>
              )}
            </div>

            {showContactInfo && (
              <div className="bg-gray-700 p-6 rounded-xl shadow-inner mb-6 animate-fade-in">
                <h3 className="text-lg font-semibold mb-4 text-center">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-300">{student.email || "email@example.com"}</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-300">{student.phone || "+1 (555) 123-4567"}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gray-700 p-6 rounded-xl shadow-inner">
              <h3 className="text-lg font-semibold mb-4 text-center">Professional Links</h3>
              
              <a 
                href={student.message.linkedin}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-lg mb-3 flex items-center justify-center transition duration-200"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn Profile
              </a>
              
              {student.github && (
                <a 
                  href={student.message.github}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg mb-3 flex items-center justify-center transition duration-200"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Github Portfolio
                </a>
              )}
              
              {student.portfolio && (
                <a 
                  href={student.message.portfolio}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg flex items-center justify-center transition duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Portfolio Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayMentor;