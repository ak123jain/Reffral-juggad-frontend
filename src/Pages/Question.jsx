import React, { useState } from 'react';

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "How does the referral system work?",
      answer: "Our referral system works in three simple steps: 1) Your customers share a unique referral link with their network, 2) When someone uses that link to sign up or make a purchase, we track it automatically, 3) Both the referrer and the new customer receive their rewards based on your customized incentive structure. The entire process is automated and seamlessly integrated with your existing systems."
    },
    {
      id: 2,
      question: "What kind of incentives can I offer through the referral program?",
      answer: "You can offer a wide range of incentives: cash rewards, discount coupons, store credits, free products/services, loyalty points, tiered rewards, or even charitable donations. Our platform allows you to customize and test different incentive structures to find what works best for your specific audience and business model."
    },
    {
      id: 3,
      question: "How will I know if the referral program is working?",
      answer: "Our comprehensive analytics dashboard provides real-time metrics on all aspects of your referral program. You can track key performance indicators such as number of referrals, conversion rates, revenue generated from referrals, most active referrers, and ROI. You can also set up custom reports to be delivered to your email at specified intervals."
    },
    {
      id: 4,
      question: "Can I integrate the referral system with my existing CRM or e-commerce platform?",
      answer: "Yes, our referral system integrates seamlessly with most popular CRM, e-commerce, and marketing platforms including Salesforce, HubSpot, Shopify, WooCommerce, Magento, Mailchimp, and more. We also provide an API for custom integrations with your proprietary systems. Our technical team will assist you throughout the integration process."
    },
    {
      id: 5,
      question: "How long does it take to set up the referral system?",
      answer: "Most businesses can get their referral program up and running within 1-2 weeks. The basic setup can be completed in just a few days, while integrations with existing systems and customizations might take a bit longer depending on your specific requirements. Our dedicated implementation team will guide you through every step of the process."
    },
    {
      id: 6,
      question: "How do you prevent fraud and abuse in the referral program?",
      answer: "Our system includes multiple fraud prevention features: duplicate account detection, unusual pattern recognition, IP tracking, referral limits, verification requirements, and time-delayed rewards. We continuously monitor all referral activities and provide alerts for suspicious behavior. Our fraud prevention mechanisms are customizable based on your risk tolerance."
    },
    {
      id: 7,
      question: "Is the referral platform mobile-friendly?",
      answer: "Absolutely! Our referral platform is fully responsive and works seamlessly across all devices including smartphones, tablets, and desktops. We also offer social sharing options optimized for mobile users, making it easy for your customers to share referrals via WhatsApp, SMS, and other mobile-centric channels."
    },
    {
      id: 8,
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including: 24/7 technical assistance, a dedicated account manager, regular strategy consultations, implementation guidance, and access to our knowledge base and video tutorials. Enterprise clients also receive priority support and quarterly business reviews to ensure optimal performance of their referral programs."
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-900 sm:text-5xl sm:tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-blue-700">
            Everything you need to know about our referral system
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-20 bg-blue-500 rounded"></div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6 mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left focus:outline-none flex justify-between items-center"
              >
                <span className="text-lg font-medium text-blue-800">{faq.question}</span>
                <div className={`text-blue-600 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-blue-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className="bg-blue-700 rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-blue-100 mb-6">
            Our team is ready to help you implement the perfect referral strategy for your business
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 font-medium py-3 px-6 rounded-full hover:bg-blue-50 transition duration-300">
              Contact Support
            </button>
            <button className="bg-blue-800 text-white font-medium py-3 px-6 rounded-full hover:bg-blue-900 transition duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-blue-900 mb-2">Getting Started</h3>
            <p className="text-blue-700 mb-4">Quick guides to set up your first referral campaign</p>
            <button className="text-blue-600 font-medium hover:text-blue-800">
              View Guides →
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-blue-900 mb-2">Best Practices</h3>
            <p className="text-blue-700 mb-4">Learn strategies from our most successful clients</p>
            <button className="text-blue-600 font-medium hover:text-blue-800">
              Read Case Studies →
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-blue-900 mb-2">Webinars</h3>
            <p className="text-blue-700 mb-4">Register for our upcoming events and workshops</p>
            <button className="text-blue-600 font-medium hover:text-blue-800">
              View Schedule →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;