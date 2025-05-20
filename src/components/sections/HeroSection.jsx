import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  
  // Track mouse movement for parallax hover effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      setMousePosition({
        x: (clientX - windowWidth / 2) / 50,
        y: (clientY - windowHeight / 2) / 50,
      });
    };
    
    if (isInteracting) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isInteracting]);
  
  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
    >
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-black">
          <video
            className="w-full h-full object-cover absolute top-0 left-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/fire.mp4" type="video/mp4" />
            {/* Fallback image */}
            <img 
              src="/hero-fallback.jpg" 
              alt="Hero Background" 
              className="w-full h-full object-cover" 
            />
          </video>
        </div>
      </div>
      
      {/* Cyber overlay with scan line effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 overflow-hidden">
        {/* Scan lines */}
        <div className="scan-lines"></div>
      </div>
      
      {/* Content */}
      <motion.div 
  className="relative z-20 h-full flex items-center justify-center">
  <div className="text-center px-4">
    <motion.div>
      <h1 className="font-main-heading text-4xl md:text-6xl font-black text-white tracking-widest uppercase">
        Augment Your Vision, Empower Safety  <br className="hidden md:block" />
        <span className="text-red-600">Real-Time AI  </span> Fire & Smoke Detection
      </h1>
      
      <p className="font-sub-heading text-2xl text-gray-100 max-w-3xl mx-auto tracking-wide mt-6">
      Harness advanced computer vision to detect fire and smoke in real time — protect your people, property, ships and peace of mind.
      </p>
    </motion.div>
  </div>
</motion.div>
      
      {/* HUD elements */}
      <div className="absolute top-20 left-10 z-20 opacity-70">
  <motion.svg 
    width="180" 
    height="180" 
    viewBox="0 0 100 100" 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ delay: 1 }}
  >
    {/* Outer rotating ring */}
    <motion.circle 
      cx="50" 
      cy="50" 
      r="48" 
      fill="none" 
      stroke="rgba(255,0,0,0.3)" 
      strokeWidth="0.5" 
      strokeDasharray="301.6"
      strokeDashoffset="100"
      animate={{ 
        rotate: [0, 360],
      }}
      transition={{ 
        duration: 60, 
        repeat: Infinity,
        ease: "linear"
      }}
    />
    
    {/* Primary scanning circle */}
    <motion.circle 
      cx="50" 
      cy="50" 
      r="45" 
      fill="none" 
      stroke="rgba(255,0,0,0.6)" 
      strokeWidth="0.75" 
      strokeDasharray="283"
      animate={{ 
        strokeDashoffset: [283, 0],
        rotate: [0, 360] 
      }}
      transition={{ 
        duration: 15, 
        repeat: Infinity,
        ease: "linear"
      }}
    />
    
    {/* Secondary scanning circle */}
    <motion.circle 
      cx="50" 
      cy="50" 
      r="38" 
      fill="none" 
      stroke="rgba(255,0,0,0.4)" 
      strokeWidth="0.5" 
      strokeDasharray="238.8"
      animate={{ 
        strokeDashoffset: [0, 238.8],
        rotate: [360, 0] 
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity,
        ease: "linear"
      }}
    />
    
    {/* Inner circle with pulse */}
    <motion.circle 
      cx="50" 
      cy="50" 
      r="30" 
      fill="none" 
      stroke="rgba(255,0,0,0.5)" 
      strokeWidth="0.5"
      animate={{ 
        opacity: [0.2, 0.5, 0.2],
        scale: [0.95, 1, 0.95]
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    {/* Center scanning element */}
    <motion.circle 
      cx="50" 
      cy="50" 
      r="2" 
      fill="rgba(255,0,0,0.8)" 
      animate={{ 
        opacity: [0.6, 1, 0.6],
        r: [1.5, 2.5, 1.5] 
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    {/* Cross hairs */}
    <line x1="20" y1="50" x2="30" y2="50" stroke="rgba(255,0,0,0.8)" strokeWidth="0.5" />
    <line x1="70" y1="50" x2="80" y2="50" stroke="rgba(255,0,0,0.8)" strokeWidth="0.5" />
    <line x1="50" y1="20" x2="50" y2="30" stroke="rgba(255,0,0,0.8)" strokeWidth="0.5" />
    <line x1="50" y1="70" x2="50" y2="80" stroke="rgba(255,0,0,0.8)" strokeWidth="0.5" />
    
    {/* Corner brackets */}
    <path d="M 10,15 L 10,10 L 15,10" fill="none" stroke="rgba(255,0,0,0.8)" strokeWidth="0.75" />
    <path d="M 85,10 L 90,10 L 90,15" fill="none" stroke="rgba(255,0,0,0.8)" strokeWidth="0.75" />
    <path d="M 10,85 L 10,90 L 15,90" fill="none" stroke="rgba(255,0,0,0.8)" strokeWidth="0.75" />
    <path d="M 85,90 L 90,90 L 90,85" fill="none" stroke="rgba(255,0,0,0.8)" strokeWidth="0.75" />
    
    {/* AI Analysis data lines */}
    <motion.g
      animate={{
        opacity: [0.4, 0.8, 0.4]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {/* Small tick marks on outer ring */}
      <line x1="50" y1="5" x2="50" y2="8" stroke="rgba(255,0,0,0.6)" strokeWidth="0.5" />
      <line x1="50" y1="92" x2="50" y2="95" stroke="rgba(255,0,0,0.6)" strokeWidth="0.5" />
      <line x1="5" y1="50" x2="8" y2="50" stroke="rgba(255,0,0,0.6)" strokeWidth="0.5" />
      <line x1="92" y1="50" x2="95" y2="50" stroke="rgba(255,0,0,0.6)" strokeWidth="0.5" />
      
      {/* Diagonal tick marks */}
      <line x1="22.5" y1="22.5" x2="24.5" y2="24.5" stroke="rgba(255,0,0,0.6)" strokeWidth="0.5" />
      <line x1="75.5" y1="22.5" x2="77.5" y2="24.5" stroke="rgba(255,0,0,0.6)" strokeWidth="0.5" />
      <line x1="22.5" y1="77.5" x2="24.5" y2="75.5" stroke="rgba(255,0,0,0.6)" strokeWidth="0.5" />
      <line x1="77.5" y1="75.5" x2="75.5" y2="77.5" stroke="rgba(255,0,0,0.6)" strokeWidth="0.5" />
    </motion.g>
    
    {/* Scanning overlay effect */}
    <motion.rect
      x="0"
      y="0"
      width="100"
      height="100"
      fill="none"
      stroke="none"
      animate={{
        background: ["linear-gradient(180deg, rgba(255,0,0,0.1) 0%, transparent 10%, transparent 90%, rgba(255,0,0,0.1) 100%)",
                     "linear-gradient(180deg, rgba(255,0,0,0.1) 100%, transparent 100%, transparent 100%, rgba(255,0,0,0.1) 100%)"]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }}
    />
    
    {/* Data indicators */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      {/* Mini data bars */}
      <motion.rect 
        x="12" y="40" width="6" height="1" fill="rgba(255,0,0,0.8)"
        animate={{ height: [1, 3, 2, 4, 1] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.rect 
        x="12" y="44" width="4" height="1" fill="rgba(255,0,0,0.8)"
        animate={{ height: [1, 2, 5, 2, 1] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
      />
      <motion.rect 
        x="12" y="48" width="8" height="1" fill="rgba(255,0,0,0.8)"
        animate={{ height: [1, 4, 1, 3, 1] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      />
      
      {/* Right side data indicators */}
      <motion.rect 
        x="82" y="40" width="6" height="1" fill="rgba(255,0,0,0.8)"
        animate={{ height: [1, 5, 2, 3, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, repeatType: "reverse", delay: 0.7 }}
      />
      <motion.rect 
        x="82" y="44" width="4" height="1" fill="rgba(255,0,0,0.8)"
        animate={{ height: [1, 2, 4, 1, 3] }}
        transition={{ duration: 5.5, repeat: Infinity, repeatType: "reverse", delay: 1.2 }}
      />
      <motion.rect 
        x="82" y="48" width="8" height="1" fill="rgba(255,0,0,0.8)"
        animate={{ height: [1, 3, 1, 5, 1] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
      />
    </motion.g>
  </motion.svg>
  
  {/* Text indicators */}
  <motion.div 
    className="absolute text-red-600 text-xl font-mono top-0 right-0 mr-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2 }}
  >
    <motion.div 
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      SCANNING
    </motion.div>
    <motion.div className="text-xl font-mono mt-2">
      <motion.span
        animate={{
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          times: [0, 0.1, 0.9, 1]
        }}
      >
        TARGET DETECTED
      </motion.span>
    </motion.div>
  </motion.div>
</div>
      
      <div className="absolute top-20 right-10 z-20 opacity-80">
        <motion.div 
          className="text-red-600 font-mono text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div>SYSTEM: ONLINE</div>
          <div>STATUS: OPTIMAL</div>
          <motion.div 
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SCANNING...
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;