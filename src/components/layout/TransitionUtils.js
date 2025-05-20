import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Custom hook for creating smooth scroll-based transitions
export const useSmoothTransition = (
  ref, 
  { 
    inputRange = [0, 1], 
    outputRange = [0, 1], 
    springConfig = { stiffness: 60, damping: 20, mass: 0.5 },
    offsetStart = "start end",
    offsetEnd = "end start"
  } = {}
) => {
  // Get scroll progress for the referenced element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [offsetStart, offsetEnd]
  });
  
  // Create transform value
  const transformValue = useTransform(scrollYProgress, inputRange, outputRange);
  
  // Return smooth spring-based value
  return useSpring(transformValue, springConfig);
};

// Custom hook to trigger transition when element comes into view
export const useViewportTransition = (threshold = 0.2, options = {}) => {
    const { once = false, rootMargin = "0px" } = options;
    const [isInView, setIsInView] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);
    
    useEffect(() => {
      if (!ref.current) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (once) {
              setHasAnimated(true);
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsInView(false);
          }
        },
        { 
          threshold,
          rootMargin 
        }
      );
      
      observer.observe(ref.current);
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [threshold, once, rootMargin]);
    
    return { ref, isInView, hasAnimated };
  };

// Custom hook to track mouse position relative to an element
export const useMousePosition = (ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, xPercentage: 0, yPercentage: 0 });
  
  useEffect(() => {
    if (!ref.current) return;
    
    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({
        x,
        y,
        xPercentage: x / rect.width,
        yPercentage: y / rect.height
      });
    };
    
    const element = ref.current;
    element.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [ref]);
  
  return mousePosition;
};

// Scale transform for mouse hover spotlight effect
export const getSpotlightStyle = (mousePosition, size = 200, intensity = 0.15) => {
  if (!mousePosition.x && !mousePosition.y) {
    return {
      background: 'radial-gradient(circle at 50% 50%, rgba(255, 0, 0, 0), rgba(0, 0, 0, 0))',
    };
  }
  
  return {
    background: `radial-gradient(
      circle ${size}px at ${mousePosition.x}px ${mousePosition.y}px, 
      rgba(255, 0, 0, ${intensity}), 
      rgba(0, 0, 0, 0) 70%
    )`,
  };
};

// Animation variants for the black to white transition
export const sectionTransitionVariants = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Animation variants for individual items within the transition
export const itemTransitionVariants = {
  hidden: {
    y: 50,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Animation variants for text highlight effect
export const textHighlightVariants = {
  initial: {
    textShadow: "0 0 0px rgba(255, 0, 0, 0)",
    color: "rgba(255, 255, 255, 0.7)"
  },
  hover: {
    textShadow: "0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)",
    color: "rgba(255, 255, 255, 1)"
  }
};