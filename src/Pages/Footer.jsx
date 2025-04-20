import React from 'react';

const Footer = () => {
  return (
    <footer className="relative mt-24">
      {/* Rounded top curve overlay */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-16 h-24 overflow-hidden">
        <div className="w-full h-24 bg-blue-900 rounded-t-full scale-150"></div>
      </div>
      
      <div className=" bg-[#0a192f] pt-12 pb-8 relative">
        {/* Content container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top section with logo and company info */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Company info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="mr-3">
                  <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.9999 2C6.47774 2 2.00002 6.47767 2.00002 12C2.00002 17.5223 6.47774 22 11.9999 22C17.5222 22 21.9999 17.5223 21.9999 12C21.9999 6.47767 17.5222 2 11.9999 2ZM16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51471 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51471 7.50001 12 7.50001C14.4853 7.50001 16.5 9.51472 16.5 12ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3432 10.3431 9.00001 12 9.00001C13.6569 9.00001 15 10.3432 15 12Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Referral Juggad</h3>
              </div>
              <p className="text-blue-200 mb-4">
                The most powerful and customizable referral marketing platform for growing businesses. Automate, track, and scale your word-of-mouth marketing.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-300 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 14-7.497 14-13.986 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.09-.745.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.509 11.509 0 0112 6.29c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.577C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Features</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Pricing</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Testimonials</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">FAQ</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Case Studies</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Webinars</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">API Docs</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-blue-200">123 Tech Avenue, Startup Hub, 12345</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-blue-200">support@referraljuggad.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-blue-200">+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-blue-800 pt-8 pb-4">
            <div className="max-w-md mx-auto">
              <h4 className="text-lg font-semibold text-white text-center mb-4">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Floating elements for visual effect */}
          <div className="absolute top-12 left-8 w-16 h-16 rounded-full bg-blue-800 opacity-30 animate-pulse"></div>
          <div className="absolute bottom-24 right-16 w-20 h-20 rounded-full bg-blue-800 opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-36 right-32 w-10 h-10 rounded-full bg-blue-800 opacity-30 animate-pulse" style={{ animationDelay: "1.5s" }}></div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-blue-300 text-sm">
              © {new Date().getFullYear()} Referral Juggad. All rights reserved.
            </p>
            <div className="mt-2 flex justify-center space-x-4 text-xs text-blue-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;