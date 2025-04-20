import React, { useState } from 'react'
import tom from '../assets/tom.jpg'
import tom2 from '../assets/tom2.jpg'
import tom3 from '../assets/tom3.jpg'
import tom4 from '../assets/tom4.jpg'
import tom5 from '../assets/tom5.jpg'

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: "Thomas Wilson",
      position: "Marketing Director, TechSoft",
      image: tom,
      rating: 5,
      review: "The referral system has completely transformed our customer acquisition strategy. Within just two months, we saw a 43% increase in qualified leads coming directly from referrals. The dashboard makes it easy to track everything, and the team provided exceptional support during implementation.",
      date: "March 15, 2025"
    },
    {
      id: 2,
      name: "Samantha Reynolds",
      position: "CEO, GrowFast Solutions",
      image: tom2,
      rating: 5,
      review: "I was skeptical at first, but this referral system exceeded all my expectations. What impressed me most was how seamlessly it integrated with our existing CRM. Our customers love the incentive structure, and we've seen a 38% boost in referral conversions. Worth every penny!",
      date: "February 22, 2025"
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Sales Manager, InnovateCorp",
      image: tom3,
      rating: 4,
      review: "The analytics provided by this referral platform gave us insights we never had before. We can now see exactly which customer segments are most likely to refer others, allowing us to focus our incentive programs more effectively. Great tool for any growth-focused business.",
      date: "January 10, 2025"
    },
    {
      id: 4,
      name: "Priya Sharma",
      position: "Founder, EcoTech Startups",
      image: tom4,
      rating: 5,
      review: "As a startup with limited resources, we needed a cost-effective way to grow our customer base. This referral system delivered beyond our expectations. The implementation was straightforward, and the ROI has been fantastic - we're seeing a 4x return on our investment.",
      date: "April 1, 2025"
    },
    {
      id: 5,
      name: "James Peterson",
      position: "Growth Lead, FintechPro",
      image: tom5,
      rating: 4,
      review: "What sets this referral system apart is its flexibility. We were able to customize it to fit our unique business model and customer journey. The A/B testing features helped us optimize our referral messaging, resulting in a 27% higher conversion rate.",
      date: "March 28, 2025"
    }
  ];

  // Navigation functions
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Our Client <span className="text-indigo-600">Success Stories</span>
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          See how businesses like yours have achieved remarkable growth with our referral system.
        </p>
      </div>

      {/* Featured Testimonials Carousel */}
      <div className="max-w-4xl mx-auto mb-20 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Content */}
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex-shrink-0 mb-6 md:mb-0">
                <img 
                  src={reviews[activeIndex].image} 
                  alt={reviews[activeIndex].name} 
                  className="h-32 w-32 rounded-full object-cover mx-auto border-4 border-indigo-100"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <div className="flex mb-2">
                  {renderStars(reviews[activeIndex].rating)}
                </div>
                <p className="text-gray-600 italic mb-4 text-lg">"{reviews[activeIndex].review}"</p>
                <div className="font-medium text-lg text-gray-900">{reviews[activeIndex].name}</div>
                <div className="text-indigo-600">{reviews[activeIndex].position}</div>
                <div className="text-sm text-gray-500 mt-1">{reviews[activeIndex].date}</div>
              </div>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center pb-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToIndex(index)}
                className={`mx-1 w-3 h-3 rounded-full ${index === activeIndex ? 'bg-indigo-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Grid */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">More Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{review.name}</div>
                    <div className="text-sm text-indigo-600">{review.position}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-600 mb-3">{review.review}</p>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-20 text-center bg-indigo-700 rounded-xl shadow-xl px-6 py-10">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to grow your business with referrals?</h2>
        <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of successful businesses that have transformed their growth strategy with our referral system.
        </p>
        <button className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
          Request a Demo
        </button>
      </div>
    </div>
  );
};

export default Page;