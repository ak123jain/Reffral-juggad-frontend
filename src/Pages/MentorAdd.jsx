// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";  // ✅ Importing useNavigate

// const MentorAdd = () => {  // ✅ Fixed function name (uppercase)

//     const navigate = useNavigate();  // ✅ Initialize useNavigate

//   const [fullname, setFullname] = useState("");
//   const [email, setEmail] = useState("");
//   const [company, setCompany] = useState("");
//   const [designation, setDesignation] = useState("");
//   const [about, setAbout] = useState("");
//   const [experience, setExperience] = useState("");
//   const [skills, setSkills] = useState("");
//   const [linkedin, setLinkedin] = useState("");
//   const [jobtitle, setJobtitle] = useState("");
//   const [availableForReferral, setAvailableForReferral] = useState(false);
//   const [avatar, setAvatar] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const formdata = new FormData();
//       formdata.append("fullname", fullname);
//       formdata.append("email", email);
//       formdata.append("company", company);
//       formdata.append("designation", designation);
//       formdata.append("about", about);
//       formdata.append("experience", experience);
//       formdata.append("skills", skills);
//       formdata.append("linkedin", linkedin);
//       formdata.append("jobtitle", jobtitle);
//       formdata.append("availableForReferral", availableForReferral);
//       formdata.append("avatar", avatar);

//       const response = await axios.post(
//         "http://localhost:8000/mentor/addmentor",
//         formdata,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       console.log("Mentor added successfully 1:", response.data);
//       console.log("Mentor added successfully: 2", response.data.data);
//       console.log("Mentor added successfully: 2", response.data.message.data);
//       console.log("Mentor added successfully: 2", response.data.message.data);
      
      
 
//       setMessage(response.data.message.data);
//       navigate("/displaymentor", {
//         state: { message: response.data.data }
//       });

//     } catch (error) {
//       setMessage(error.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-800 text-white rounded-lg max-w-lg mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Add a Mentor</h2>
//       {message && <p className="mb-4">{message}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} required className="w-full p-2 bg-gray-700 rounded"/>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 bg-gray-700 rounded"/>
//         <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} required className="w-full p-2 bg-gray-700 rounded"/>
//         <input type="text" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} required className="w-full p-2 bg-gray-700 rounded"/>
//         <input type="text" placeholder="Job Title" value={jobtitle} onChange={(e) => setJobtitle(e.target.value)} required className="w-full p-2 bg-gray-700 rounded"/>
//         <textarea placeholder="About" value={about} onChange={(e) => setAbout(e.target.value)} required className="w-full p-2 bg-gray-700 rounded"></textarea>
//         <input type="number" placeholder="Experience (Years)" value={experience} onChange={(e) => setExperience(e.target.value)} required className="w-full p-2 bg-gray-700 rounded"/>
//         <input type="text" placeholder="Skills (comma separated)" value={skills} onChange={(e) => setSkills(e.target.value)} required className="w-full p-2 bg-gray-700 rounded"/>
//         <input type="text" placeholder="LinkedIn Profile" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} required className="w-full p-2 bg-gray-700 rounded"/>
        
//         <label className="flex items-center space-x-2">
//           <input type="checkbox" checked={availableForReferral} onChange={(e) => setAvailableForReferral(e.target.checked)} />
//           <span>Available for Referrals</span>
//         </label>

//         <input type="file" accept="image/*" onChange={(e) => setAvatar(e.target.files[0])} required className="w-full p-2 bg-gray-700 rounded"/>

//         <button type="submit" disabled={loading} className="w-full bg-blue-500 p-2 rounded hover:bg-blue-700">
//           {loading ? "Adding Mentor..." : "Add Mentor"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default MentorAdd;  // ✅ Exporting correctly


import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MentorAdd = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    company: "",
    designation: "",
    about: "",
    experience: "",
    skills: "",
    linkedin: "",
    jobtitle: "",
    availableForReferral: false
  });
  
  // UI state
  const [avatar, setAvatar] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  // Handle all input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    
    // Basic validation
    if (!formData.fullname.trim()) newErrors.fullname = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    
    if (currentStep === 1) {
      if (!formData.company.trim()) newErrors.company = "Company is required";
      if (!formData.designation.trim()) newErrors.designation = "Designation is required";
      if (!formData.jobtitle.trim()) newErrors.jobtitle = "Job title is required";
    } else if (currentStep === 2) {
      if (!formData.about.trim()) newErrors.about = "About section is required";
      if (!formData.experience.trim()) newErrors.experience = "Experience is required";
      if (!formData.skills.trim()) newErrors.skills = "Skills are required";
      if (!formData.linkedin.trim()) newErrors.linkedin = "LinkedIn profile is required";
      if (!avatar) newErrors.avatar = "Profile photo is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Advance to next step
  const nextStep = () => {
    if (validateForm()) {
      setCurrentStep(2);
      window.scrollTo(0, 0);
    }
  };

  // Go back to previous step
  const prevStep = () => {
    setCurrentStep(1);
    window.scrollTo(0, 0);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setMessage("");
    setMessageType("");

    try {
      const formDataObj = new FormData();
      Object.keys(formData).forEach(key => {
        formDataObj.append(key, formData[key]);
      });
      formDataObj.append("avatar", avatar);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/mentor/addmentor`,
        formDataObj,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Mentor added successfully:", response.data);
      setMessage("Mentor profile created successfully!");
      setMessageType("success");
      
      // Navigate after short delay to show success message
      setTimeout(() => {
        navigate("/displaymentor", {
          state: { message: response.data.data }
        });
      }, 1500);

    } catch (error) {
      console.error("Error adding mentor:", error);
      setMessage(error.response?.data?.message || "Something went wrong. Please try again.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-900 p-6">
          <h2 className="text-2xl font-bold text-white text-center">
            {currentStep === 1 ? "Join Our Mentor Network" : "Complete Your Profile"}
          </h2>
          <p className="text-blue-200 text-center mt-2">
            Help students navigate their career path through your expertise
          </p>
          
          {/* Progress Indicator */}
          <div className="mt-6 flex justify-center">
            <div className="w-2/3 flex items-center">
              <div className={`h-1 flex-1 ${currentStep >= 1 ? "bg-blue-400" : "bg-gray-600"}`}></div>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                currentStep >= 1 ? "bg-blue-400 text-white" : "bg-gray-600 text-gray-400"
              }`}>1</div>
              <div className={`h-1 flex-1 ${currentStep >= 2 ? "bg-blue-400" : "bg-gray-600"}`}></div>
              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                currentStep >= 2 ? "bg-blue-400 text-white" : "bg-gray-600 text-gray-400"
              }`}>2</div>
              <div className={`h-1 flex-1 ${currentStep > 2 ? "bg-blue-400" : "bg-gray-600"}`}></div>
            </div>
          </div>
        </div>
        
        {/* Notification Message */}
        {message && (
          <div className={`p-4 ${messageType === "success" ? "bg-green-600" : "bg-red-600"} text-white text-center`}>
            {message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="p-6">
          {currentStep === 1 && (
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-white mb-4">Basic Information</h3>
              
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-medium">Full Name</label>
                <input 
                  type="text" 
                  name="fullname"
                  placeholder="Your full name" 
                  value={formData.fullname} 
                  onChange={handleChange}
                  className={`w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                    errors.fullname ? "border border-red-500" : ""
                  }`}
                />
                {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-medium">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your email address" 
                  value={formData.email} 
                  onChange={handleChange}
                  className={`w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                    errors.email ? "border border-red-500" : ""
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-gray-300 text-sm font-medium">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    placeholder="Your company" 
                    value={formData.company} 
                    onChange={handleChange}
                    className={`w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                      errors.company ? "border border-red-500" : ""
                    }`}
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="block text-gray-300 text-sm font-medium">Designation</label>
                  <input 
                    type="text" 
                    name="designation"
                    placeholder="Your role/designation" 
                    value={formData.designation} 
                    onChange={handleChange}
                    className={`w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                      errors.designation ? "border border-red-500" : ""
                    }`}
                  />
                  {errors.designation && <p className="text-red-500 text-sm mt-1">{errors.designation}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-medium">Job Title</label>
                <input 
                  type="text" 
                  name="jobtitle"
                  placeholder="Specific job title" 
                  value={formData.jobtitle} 
                  onChange={handleChange}
                  className={`w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                    errors.jobtitle ? "border border-red-500" : ""
                  }`}
                />
                {errors.jobtitle && <p className="text-red-500 text-sm mt-1">{errors.jobtitle}</p>}
              </div>
              
              <div className="pt-6">
                <button 
                  type="button" 
                  onClick={nextStep}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition duration-200 font-medium"
                >
                  Continue to Profile Details
                </button>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-white mb-4">Profile Details</h3>
              
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div 
                    className={`h-32 w-32 rounded-full flex items-center justify-center overflow-hidden border-4 border-gray-600 ${
                      errors.avatar ? "border-red-500" : ""
                    }`}
                    style={{ background: previewUrl ? 'none' : '#4B5563' }}
                  >
                    {previewUrl ? (
                      <img src={previewUrl} alt="Profile preview" className="h-full w-full object-cover" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <button 
                    type="button" 
                    onClick={() => fileInputRef.current.click()}
                    className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 h-8 w-8 rounded-full flex items-center justify-center transition duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>
              {errors.avatar && <p className="text-red-500 text-sm text-center">{errors.avatar}</p>}
              
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-medium">About You</label>
                <textarea 
                  name="about"
                  placeholder="Share a bit about your professional journey, expertise and how you can help students" 
                  value={formData.about} 
                  onChange={handleChange}
                  rows="4"
                  className={`w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                    errors.about ? "border border-red-500" : ""
                  }`}
                ></textarea>
                {errors.about && <p className="text-red-500 text-sm mt-1">{errors.about}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-medium">Experience (Years)</label>
                <input 
                  type="number" 
                  name="experience"
                  placeholder="Years of experience" 
                  value={formData.experience} 
                  onChange={handleChange}
                  min="0"
                  className={`w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                    errors.experience ? "border border-red-500" : ""
                  }`}
                />
                {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-medium">Skills</label>
                <input 
                  type="text" 
                  name="skills"
                  placeholder="e.g. React, Node.js, Product Management (comma separated)" 
                  value={formData.skills} 
                  onChange={handleChange}
                  className={`w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                    errors.skills ? "border border-red-500" : ""
                  }`}
                />
                {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-medium">LinkedIn Profile</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    name="linkedin"
                    placeholder="https://linkedin.com/in/yourprofile" 
                    value={formData.linkedin} 
                    onChange={handleChange}
                    className={`w-full p-3 pl-10 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                      errors.linkedin ? "border border-red-500" : ""
                    }`}
                  />
                </div>
                {errors.linkedin && <p className="text-red-500 text-sm mt-1">{errors.linkedin}</p>}
              </div>
              
              <div className="pt-2">
                <label className="flex items-center space-x-3 mb-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      name="availableForReferral"
                      checked={formData.availableForReferral}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`block ${formData.availableForReferral ? 'bg-blue-600' : 'bg-gray-600'} w-14 h-8 rounded-full transition`}></div>
                    <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform ${formData.availableForReferral ? 'translate-x-6' : ''}`}></div>
                  </div>
                  <span className="text-gray-300 font-medium">Available for Job Referrals</span>
                </label>
              </div>
              
              <div className="pt-6 flex flex-wrap gap-4">
                <button 
                  type="button" 
                  onClick={prevStep}
                  className="flex-1 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white p-3 rounded-lg transition duration-200 font-medium"
                >
                  Back
                </button>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition duration-200 font-medium flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Profile...
                    </>
                  ) : "Join as Mentor"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default MentorAdd;