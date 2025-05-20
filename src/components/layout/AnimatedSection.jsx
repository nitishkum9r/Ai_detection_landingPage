import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

// Ultra-futuristic pull-up effect with layered animations
export const futuristicPullUp = (delay = 0) => {
  return {
    hidden: {
      y: 150,
      opacity: 0,
      scale: 0.9,
      rotateX: 15,
      filter: "blur(10px)",
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
        mass: 0.8,
        delay,
        duration: 1.2,
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      scale: 0.9,
      rotateX: -15,
      filter: "blur(10px)",
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        duration: 0.8,
      },
    }
  };
};

// Cyber glitch effect variant
export const cyberGlitch = (delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.95,
      x: -20,
    },
    show: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delay,
        type: 'spring',
        stiffness: 100,
        damping: 10,
        // Add a small random offset to timing for a more glitchy feel
        duration: 0.8 + Math.random() * 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

// Holographic reveal effect
export const holographicReveal = (delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 60,
      rotateY: 20,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateY: 0,
      transition: {
        delay,
        type: 'spring',
        stiffness: 70,
        damping: 12,
        duration: 1.5,
      },
    },
  };
};

// Quantum fade effect - appears in multiple stages
export const quantumFade = (delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      scale: 1.1,
      y: 40,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay,
        duration: 1,
        // Multi-stage animation for quantum-like appearance
        opacity: { 
          duration: 0.8, 
          ease: [0.33, 1, 0.68, 1],
          times: [0, 0.3, 0.5, 0.8, 1], 
          values: [0, 0.6, 0.3, 0.8, 1] 
        },
        scale: { 
          duration: 1, 
          ease: [0.33, 1, 0.68, 1],
        },
        y: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }
      },
    },
  };
};

// Matrix-style digital rain effect (for text content)
export const matrixRain = (delay = 0) => {
  // This creates a staggered children effect for text
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren: 0.02,
        delayChildren: delay,
      }
    },
  };
};

// For individual characters in matrix rain effect
export const matrixCharacter = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 1.5,
    color: "#00ff00",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    color: "#ffffff",
    transition: {
      type: 'spring',
      damping: 12,
      duration: 0.5,
    }
  }
};

// Standard fade with improvements
export const fadeIn = (direction = 'up', delay = 0) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      opacity: 0,
      filter: "blur(5px)",
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: 'tween',
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

// Stagger container with improved timing
export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren: delayChildren || 0,
        staggerDirection: 1,
      },
    },
  };
};

// Enhanced zoom with 3D perspective
export const zoomIn3D = (delay, duration) => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
      z: -100,
      rotateX: 10,
    },
    show: {
      scale: 1,
      opacity: 1,
      z: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        delay,
        duration,
        stiffness: 50,
        damping: 12,
      },
    },
  };
};

// Neural network inspired animation that spreads from center
export const neuralSpread = (delay = 0) => {
  return {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        delay,
        type: 'spring',
        stiffness: 60,
        damping: 15,
        // Stagger children like neural network activation
        staggerChildren: 0.05,
        delayChildren: delay + 0.1,
      },
    },
  };
};

// Enhanced AnimatedSection component with ultra-futuristic effects
const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'futuristic-pull-up', // Many new animation options!
  delay = 0,
  duration = 0.8,
  once = false,
  threshold = 0.3,
  intensity = 1,
  textEffect = false, // Enable special text animations for text children
  perspective = false, // Enable 3D perspective for container
  glowOnEnter = false, // Add glow effect when entering viewport
  exitAnimation = false, // Enable exit animations
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // For dynamic scrolling effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Enhanced transform properties with spring physics for smoother movement
  const springConfig = { stiffness: 60, damping: 15, mass: 0.5 };
  
  // Basic transform values
  const yValue = useTransform(scrollYProgress, [0, 1], [150 * intensity, 0]);
  const y = useSpring(yValue, springConfig);
  
  const opacityValue = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const opacity = useSpring(opacityValue, { ...springConfig, stiffness: 100 });
  
  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const scale = useSpring(scaleValue, springConfig);
  
  // Advanced 3D transforms for futuristic feel
  const rotateXValue = useTransform(scrollYProgress, [0, 1], [15 * intensity, 0]);
  const rotateX = useSpring(rotateXValue, springConfig);
  
  const rotateYValue = useTransform(scrollYProgress, [0, 0.5, 1], [-2 * intensity, 5 * intensity, 0]);
  const rotateY = useSpring(rotateYValue, springConfig);
  
  const blurValue = useTransform(scrollYProgress, [0, 0.7], [10 * intensity, 0]);
  const blur = useSpring(blurValue, { ...springConfig, stiffness: 80 });
  
  // Glow effect values
  const glowIntensity = useMotionValue(0);
  const glow = useSpring(glowIntensity, { ...springConfig, stiffness: 50 });
  
  // Set animation variant based on the animation prop
  let variant;
  switch(animation) {
    case 'futuristic-pull-up':
      variant = futuristicPullUp(delay);
      break;
    case 'cyber-glitch':
      variant = cyberGlitch(delay);
      break;
    case 'holographic':
      variant = holographicReveal(delay);
      break;
    case 'quantum-fade':
      variant = quantumFade(delay);
      break;
    case 'matrix-rain':
      variant = matrixRain(delay);
      break;
    case 'neural-spread':
      variant = neuralSpread(delay);
      break;
    case 'zoom-3d':
      variant = zoomIn3D(delay, duration);
      break;
    case 'fade-up':
    case 'fade-down':
    case 'fade-left':
    case 'fade-right':
      const direction = animation.split('-')[1];
      variant = fadeIn(direction, delay);
      break;
    default:
      variant = futuristicPullUp(delay);
  }
  
  // Handle glow effect
  useEffect(() => {
    if (isInView && glowOnEnter) {
      glowIntensity.set(intensity * 3);
      const timer = setTimeout(() => {
        glowIntensity.set(0);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, glowOnEnter, intensity, glowIntensity]);
  
  // Track if animation has happened
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Special text animation renderer
  const renderTextEffect = (children) => {
    if (!textEffect || animation !== 'matrix-rain') return children;
    
    // Only apply to string children
    if (typeof children !== 'string') return children;
    
    return (
      <motion.span
        variants={matrixRain(delay)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        style={{ display: 'inline-block' }}
      >
        {children.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={matrixCharacter}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  };
  
  // Calculate style based on animation type
  const getAnimationStyle = () => {
    // For scroll-based animations
    const scrollStyle = {
      y,
      opacity,
      scale,
      filter: `blur(${blur.get()}px)`,
    };
    
    // Add 3D transforms for certain animations
    if (perspective || animation === 'holographic' || animation === 'futuristic-pull-up' || animation === 'zoom-3d') {
      scrollStyle.rotateX = rotateX;
      scrollStyle.rotateY = rotateY;
      scrollStyle.z = useTransform(scrollYProgress, [0, 1], [-50 * intensity, 0]);
    }
    
    // Add glow for certain animations
    if (glowOnEnter) {
      scrollStyle.boxShadow = glow.get() > 0 
        ? `0 0 ${glow.get() * 5}px rgba(255, 0, 0, ${glow.get() * 0.2})` 
        : 'none';
    }
    
    return scrollStyle;
  };

  return (
    <div 
      ref={ref} 
      className={`${className} ${perspective ? 'perspective-container' : ''}`}
      style={perspective ? { perspective: '1000px', transformStyle: 'preserve-3d' } : {}}
    >
      <AnimatePresence mode="wait">
        {(isInView || hasAnimated) && (
          animation === 'futuristic-pull-up' || 
          animation === 'holographic' || 
          animation === 'quantum-fade' || 
          animation === 'cyber-glitch' || 
          animation.includes('fade-') ||
          animation === 'zoom-3d' ? (
            <motion.div
              key={animation}
              variants={variant}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              exit={exitAnimation ? "exit" : undefined}
              style={{
                transformStyle: perspective ? 'preserve-3d' : 'flat',
                backfaceVisibility: 'hidden',
              }}
            >
              {textEffect ? renderTextEffect(children) : children}
            </motion.div>
          ) : (
            <motion.div
              key={animation}
              style={{
                ...getAnimationStyle(),
                transformStyle: perspective ? 'preserve-3d' : 'flat',
                backfaceVisibility: 'hidden',
              }}
              transition={{
                type: 'spring',
                stiffness: 60,
                damping: 15,
                delay: delay
              }}
            >
              {textEffect ? renderTextEffect(children) : children}
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};

// Add a styled component wrapper for AnimatedSection
export const TextScramble = ({ children, delay = 0, className = "", ...props }) => {
  return (
    <AnimatedSection 
      animation="matrix-rain" 
      delay={delay} 
      textEffect={true}
      className={className}
      {...props}
    >
      {children}
    </AnimatedSection>
  );
};

// Add a styled component for Holographic content
export const HolographicCard = ({ children, delay = 0, className = "", ...props }) => {
  return (
    <AnimatedSection 
      animation="holographic" 
      delay={delay} 
      perspective={true}
      glowOnEnter={true}
      className={`holographic-container ${className}`}
      {...props}
    >
      {children}
    </AnimatedSection>
  );
};

// Add a styled component for CyberGlitch content
export const GlitchElement = ({ children, delay = 0, className = "", ...props }) => {
  return (
    <AnimatedSection 
      animation="cyber-glitch" 
      delay={delay} 
      glowOnEnter={true}
      intensity={1.5}
      className={`glitch-container ${className}`}
      {...props}
    >
      {children}
    </AnimatedSection>
  );
};

export default AnimatedSection;