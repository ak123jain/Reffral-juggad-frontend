import axios from 'axios';
import { Linkedin } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GetMentor = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const fetchMentors = async () => {
            setLoading(true);
            try {

                const token = localStorage.getItem('accessToken');

 
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/mentor/getmentor` , {
                     headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }); // Adjust API endpoint as needed
                console.log(response.data.data.mentors);
                setData(response.data.data.mentors);
            } catch (error) {
                console.error("Error fetching mentors:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMentors();
    }, []);

    const filterButtons = [
        { id: 'all', label: 'All Mentors' },
        { id: 'experienced', label: '5+ Years Experience' },
        { id: 'technical', label: 'Technical' },
        { id: 'management', label: 'Management' }
    ];

    const filteredMentors = data.filter(mentor => {
        if (filter === 'all') return true;
        if (filter === 'experienced') return mentor.experience >= 5;
        if (filter === 'technical') return mentor.skills.toLowerCase().includes('coding') || 
                                          mentor.skills.toLowerCase().includes('development') || 
                                          mentor.skills.toLowerCase().includes('engineering');
        if (filter === 'management') return mentor.skills.toLowerCase().includes('management') || 
                                           mentor.skills.toLowerCase().includes('leadership');
        return true;
    });

    const CardHover = ({ children }) => {
        return (
            <div className="group transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 rounded-2xl">
                {children}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-primary p-6 md:p-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">🌟 Connect with Expert Mentors 🌟</h2>
                <p className="text-center text-blue-200 mb-8">Get personalized guidance and career advice from industry professionals</p>
                
                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {filterButtons.map(btn => (
                        <button
                            key={btn.id}
                            onClick={() => setFilter(btn.id)}
                            className={`px-4 py-2 rounded-full transition-all ${
                                filter === btn.id 
                                ? 'bg-blue-600 text-white shadow-lg' 
                                : 'bg-blue-900 text-blue-100 hover:bg-blue-800'
                            }`}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
                
                {loading ? (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 border-4 border-blue-400 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
                        <p className="mt-4 text-blue-200">Loading mentors...</p>
                    </div>
                ) : filteredMentors.length === 0 ? (
                    <div className="text-center py-10 bg-blue-900 bg-opacity-30 rounded-xl">
                        <h3 className="text-2xl text-white mb-2">No Mentors Found</h3>
                        <p className="text-blue-200">Try changing your filter or check back later</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {filteredMentors.map((mentor) => (
                            <a 
                                key={mentor._id} 
                                href={mentor.linkedin.startsWith("http") ? mentor.linkedin : `https://${mentor.linkedin}`}
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="block"
                            >
                                <CardHover>
                                    <div className="bg-secondary shadow-lg rounded-2xl p-6 border border-blue-100 dark:border-blue-800 overflow-hidden relative h-full">
                                        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-blue-600 to-indigo-600 -mt-6"></div>
                                        
                                        <div className="mt-2 mb-4 relative z-10">
                                            <div className="relative w-24 h-24 mx-auto">
                                                <img 
                                                    src={mentor.avatar || "/api/placeholder/100/100"} 
                                                    alt={mentor.fullname} 
                                                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                                                />
                                                <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                                                    <span className="text-white text-xs">✓</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="text-center z-10 relative">
                                            <div className='flex justify-center items-center gap-2 mb-2'>
                                                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300">{mentor.fullname}</h3>
                                                <Linkedin className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 font-medium">{mentor.jobtitle}</p>
                                            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{mentor.company}</p>
                                        </div>
                                        
                                        <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                                            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                                                <p className="text-xs text-gray-600 dark:text-gray-400">Experience</p>
                                                <p className="font-bold text-blue-800 dark:text-blue-300">{mentor.experience} Years</p>
                                            </div>
                                            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                                                <p className="text-xs text-gray-600 dark:text-gray-400">Referrals</p>
                                                <p className="font-bold text-blue-800 dark:text-blue-300">{Math.floor(Math.random() * 50) + 10}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4">
                                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Top Skills:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {mentor.skills.split(',').slice(0, 3).map((skill, idx) => (
                                                    <span 
                                                        key={idx} 
                                                        className="bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full"
                                                    >
                                                        {skill.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="mt-5">
                                             <Link to={`/mentorprofile/${mentor._id}`} >
                                             <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all">
                                                Connect & Get Referral
                                            </button>
                                             </Link>
                                        </div>
                                    </div>
                                </CardHover>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GetMentor;
