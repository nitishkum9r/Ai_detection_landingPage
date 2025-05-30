import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      {/* Main footer content */}
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Top section with logo and columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo and about section - spans 4 columns */}
          <div className="lg:col-span-4">
            <img src="/company.png" alt="companyVision" className="h-8 mb-6" />
            <p className="text-gray-400 mb-6 font-sub-heading text-sm leading-relaxed">
              Pioneering the future with advanced computer vision and AI solutions for business transformation.
            </p>
            <div className="flex space-x-6">
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
            </div>
          </div>
          
          {/* Navigation links - spans 8 columns total, with 3 equal sections */}
          <div className="lg:col-span-2 md:col-span-4">
            <h3 className="text-lg font-alt-heading font-semibold tracking-wider mb-6 uppercase">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-sub-heading transition-colors duration-200">Packaging</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-sub-heading transition-colors duration-200">Security & Surveillance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-sub-heading transition-colors duration-200">Bottling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-sub-heading transition-colors duration-200">Healthcare</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-sub-heading transition-colors duration-200">Transportation</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2 md:col-span-4">
            <h3 className="text-lg font-alt-heading font-semibold tracking-wider mb-6 uppercase">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-sub-heading transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-sub-heading transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-sub-heading transition-colors duration-200">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-sub-heading transition-colors duration-200">Webinars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm font-sub-heading transition-colors duration-200">Services</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-4 md:col-span-4">
            <h3 className="text-lg font-alt-heading font-semibold tracking-wider mb-6 uppercase">Contact Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-gray-400 text-sm font-sub-heading">
                  <span className="text-gray-500 font-medium block">Email:</span>
                  hello@companyvision.ai
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 text-sm font-sub-heading">
                  <span className="text-gray-500 font-medium block">Phone:</span>
                  USA +1 855-585-7344
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 text-sm font-sub-heading">
                  <span className="text-gray-500 font-medium block">Address:</span>
                  123 Tech Boulevard<br />
                  San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom section with copyright and links */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6 max-w-7xl flex flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-sub-heading mb-4 lg:mb-0">
            &copy; {new Date().getFullYear()} companyVision.ai. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-white text-sm font-sub-heading transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm font-sub-heading transition-colors duration-200">Terms of Use</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm font-sub-heading transition-colors duration-200">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;