import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Handle dropdown toggle
  const handleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle fullPage.js navigation
  const navigateToSection = (section) => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(section);
    }
  };
  
  return (
    <motion.nav 
      className={`fixed w-full z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="logo cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigateToSection('home')}
        >
          <img src="/company.png" alt="companyVision" className="h-12" />
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          <div className="font-nav text-white text-lg font-medium hover:text-primary transition-colors duration-200 tracking-wider cursor-pointer" onClick={() => navigateToSection('home')}>HOME</div>
          <div className="font-nav text-white text-lg font-medium hover:text-primary transition-colors duration-200 tracking-wider cursor-pointer" onClick={() => navigateToSection('solutions')}>SOLUTIONS</div>
          {/* Add more navigation items here as you create more sections */}
        </div>
        
        {/* Contact Button */}
        <motion.button 
          className="font-nav bg-red-600 text-white px-4 py-2 rounded-md hidden lg:block tracking-wider"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          CONTACT US
        </motion.button>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="lg:hidden bg-black bg-opacity-95 absolute top-16 left-0 w-full py-4 px-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <div className="font-nav text-white text-lg font-medium tracking-wider cursor-pointer" onClick={() => {
                navigateToSection('home');
                setIsMobileMenuOpen(false);
              }}>HOME</div>
              <div className="font-nav text-white text-lg font-medium tracking-wider cursor-pointer" onClick={() => {
                navigateToSection('solutions');
                setIsMobileMenuOpen(false);
              }}>SOLUTIONS</div>
              {/* Add more mobile navigation items here as you create more sections */}
              <button className="font-nav bg-red-600 text-white px-4 py-2 rounded-md self-start tracking-wider">
                CONTACT US
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;