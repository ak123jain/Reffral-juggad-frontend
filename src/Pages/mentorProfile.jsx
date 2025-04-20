 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MentorProfile = () => {
    const { mentorId } = useParams();
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMentors = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/mentor/getmentor/${mentorId}`);
                setData(response.data.data.mentor);
            } catch (error) {
                console.error("Error fetching mentor:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMentors();
    }, [mentorId]);

    const mentor = data || null;

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200">
            {/* Header */}
            <header className="bg-gray-800 py-6 shadow-md">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center text-gray-100">Mentor Profile</h1>
                </div>
            </header>

            {/* Content */}
            <div className="container mx-auto py-12 px-4">
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-500"></div>
                    </div>
                ) : mentor ? (
                    <div className="max-w-5xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-lg">
                        <div className="md:flex">
                            {/* Image Section */}
                            <div className="md:w-1/3">
                                <img
                                    src={mentor.avatar || "/api/placeholder/400/400"}
                                    alt={mentor.fullname}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Details Section */}
                            <div className="md:w-2/3 p-8">
                                <h2 className="text-3xl font-bold text-gray-100 mb-4">{mentor.fullname}</h2>
                                <div className="bg-gray-700 px-4 py-2 rounded-lg mb-6">
                                    <p className="text-gray-300 font-semibold">{mentor.jobtitle} at {mentor.company}</p>
                                    <p className="text-gray-400">{mentor.designation}</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-300 mb-2">Contact</h3>
                                        <p className="text-gray-400 flex items-center mb-1">
                                            <span className="mr-2">📧</span> {mentor.email}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-300 mb-2">Experience</h3>
                                        <p className="text-gray-400 flex items-center mb-1">
                                            <span className="mr-2">⏱️</span> {mentor.experience} years
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-300 mb-2">Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {mentor.skills && mentor.skills.split(',').map((skill, index) => (
                                            <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                                                {skill.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-300 mb-2">About</h3>
                                    <p className="text-gray-400">{mentor.about}</p>
                                </div>

                                <div className="mt-6 flex items-center">
                                    <span className={`inline-block w-3 h-3 rounded-full mr-2 ${mentor.availableForReferral ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    <span className="text-gray-300 font-medium">
                                        {mentor.availableForReferral ? 'Available for Referral' : 'Not Available for Referral'}
                                    </span>
                                </div>

                                <div className="mt-8 flex gap-4">
                                     <Link to={`/messege/${mentor._id}`}>
                                     <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 shadow-md">
                                        Contact Mentor
                                    </button>
                                     </Link>

                                      <Link to={`/premium/${mentor._id}`} > 
                                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 shadow-md">
                                            🔥 Premium
                                        </button>
                                      </Link>



                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center p-12 bg-gray-800 rounded-lg shadow-md">
                        <p className="mt-4 text-xl text-gray-300">No mentor data available.</p>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-2">&copy; 2025 Referral-juggad</p>
                    <p className="text-gray-400 text-sm">Connect with industry mentors for referrals</p>
                </div>
            </footer>
        </div>
    );
};

export default MentorProfile;