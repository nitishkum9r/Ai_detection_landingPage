import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState('websites');
  const carouselRef = useRef(null);
  const controls = useAnimation();

  // Carousel items data
  const carouselItems = [
    { id: 1, title: 'AI-Powered Fire & Smoke Detection', image: '/carousel1.jpg' },
    { id: 2, title: 'Real-Time Threat Monitoring with Smart Cameras', image: '/carousel2.jpg' },
    { id: 3, title: 'LLM-Driven Insights for Incident Analysis', image: '/carousel3.jpg' },
    { id: 4, title: 'Smart Sensors for Industrial Safety Automation', image: '/carousel4.jpg' },
    { id: 5, title: 'Voice-Enabled Safety Chatbots for Instant Assistance', image: '/carousel5.jpg' },
    { id: 6, title: 'Automated Alerts & Escalations Across Facilities', image: '/carousel6.jpg' },
    { id: 7, title: 'Edge & Cloud-Based AI Infrastructure', image: '/carousel7.jpg' },
    { id: 8, title: 'Centralized Dashboard for Risk Management', image: '/carousel8.jpg' },
    { id: 9, title: 'Seamless Integration with Existing Surveillance Systems', image: '/carousel9.jpg' },
    { id: 10, title: 'Data-Driven Decision Making with AI Analytics', image: '/carousel10.jpg' },
    { id: 11, title: 'Scalable Safety Solutions for Any Industry', image: '/carousel11.jpg' },
  ];
  

  // Split items into two rows
  const row1Items = carouselItems.slice(0, 6);
  const row2Items = carouselItems.slice(6);

  // Auto-scroll animation
  useEffect(() => {
    const duration = 20; // seconds per full loop

    const animateCarousel = async () => {
      await controls.start({
        x: ['0%', '-50%'],
        transition: { duration, ease: 'linear', repeat: Infinity }
      });

      await controls.start({
        x: ['50%', '0%'],
        transition: { duration, ease: 'linear', repeat: Infinity }
      });
    };

    animateCarousel();
  }, [controls]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background elements */}

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row min-h-screen items-center">
        {/* Left side - Carousel */}
        <div className="lg:w-1/2 relative h-[600px] lg:pr-8 overflow-hidden">
          {/* First row (right to left) */}
          <motion.div 
            className="absolute top-0 left-0 w-full flex space-x-8"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity
            }}
          >
            {[...row1Items, ...row1Items].map((item, index) => (
              <motion.div
                key={`row1-${item.id}-${index}`}
                className="relative w-64 h-64 rounded-2xl overflow-hidden flex-shrink-0"
                whileHover={{ scale: 1.05, zIndex: 20 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Second row (left to right) */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full flex space-x-8"
            animate={{
              x: ['-50%', '0%'],
            }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
              delay: 10
            }}
          >
            {[...row2Items, ...row2Items].map((item, index) => (
              <motion.div
                key={`row2-${item.id}-${index}`}
                className="relative w-64 h-64 rounded-2xl overflow-hidden flex-shrink-0"
                whileHover={{ scale: 1.05, zIndex: 20 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-red-500/10 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl" />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="lg:w-1/2 lg:pl-16 mt-16 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto lg:mx-0"
          >
            <h3 className="text-gray-400 uppercase tracking-wider mb-4 text-sm font-medium">
              From vision to growing company Vision
            </h3>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            One AI platform to<br />
            build, host, and scale<br />
            intelligent safety systems."
            </h2>
            
            <p className="text-gray-300 mb-8 text-lg">
            Integrate smart detection, ensure round-the-clock monitoring, and expand your protection with scalable AI technology.
            </p>
            
            {/* <div className="flex space-x-4 mb-8">
              <button 
                className={`px-6 py-2 rounded-full ${activeTab === 'websites' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
                onClick={() => setActiveTab('websites')}
              >
                Websites
              </button>
              <button 
                className={`px-6 py-2 rounded-full ${activeTab === 'solutions' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
                onClick={() => setActiveTab('solutions')}
              >
                Solutions
              </button>
            </div> */}
            
            <motion.button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-medium tracking-wide flex items-center text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Edge AI Infrastructure
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;