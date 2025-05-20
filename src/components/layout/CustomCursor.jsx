// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isClicking, setIsClicking] = useState(false);
//   const [trailPositions, setTrailPositions] = useState([]);
//   const [cursorVisible, setCursorVisible] = useState(true);
  
//   useEffect(() => {
//     // Track mouse position with smooth lerping
//     let currentX = 0;
//     let currentY = 0;
//     let raf;
    
//     const mouseMove = (e) => {
//       // Target position
//       const targetX = e.clientX;
//       const targetY = e.clientY;
      
//       // Update trail positions
//       setTrailPositions(prev => {
//         const newPositions = [{ x: targetX, y: targetY }, ...prev.slice(0, 5)];
//         return newPositions;
//       });
      
//       // Smooth animation using requestAnimationFrame
//       const animateCursor = () => {
//         // Calculate distance to target
//         const dx = targetX - currentX;
//         const dy = targetY - currentY;
        
//         // Apply easing (0.2 = smooth follow, higher = faster)
//         currentX += dx * 0.2;
//         currentY += dy * 0.2;
        
//         // Update state with calculated position
//         setMousePosition({ x: currentX, y: currentY });
        
//         // Continue animation if not close enough to target
//         if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
//           raf = requestAnimationFrame(animateCursor);
//         }
//       };
      
//       cancelAnimationFrame(raf);
//       raf = requestAnimationFrame(animateCursor);
//     };
    
//     // Track when hovering over clickable elements
//     const mouseOver = (e) => {
//       if (
//         e.target.tagName === 'BUTTON' ||
//         e.target.tagName === 'A' ||
//         e.target.closest('button') ||
//         e.target.closest('a')
//       ) {
//         setIsHovering(true);
//       } else {
//         setIsHovering(false);
//       }
//     };
    
//     // Track mouse click events
//     const mouseDown = () => {
//       setIsClicking(true);
//       setTimeout(() => setIsClicking(false), 500);
//     };
    
//     // Hide cursor when mouse leaves window
//     const mouseLeave = () => {
//       setCursorVisible(false);
//     };
    
//     // Show cursor when mouse enters window
//     const mouseEnter = () => {
//       setCursorVisible(true);
//     };
    
//     // Add event listeners
//     window.addEventListener("mousemove", mouseMove);
//     document.addEventListener("mouseover", mouseOver);
//     document.addEventListener("mousedown", mouseDown);
//     document.addEventListener("mouseleave", mouseLeave);
//     document.addEventListener("mouseenter", mouseEnter);
    
//     // Clean up
//     return () => {
//       window.removeEventListener("mousemove", mouseMove);
//       document.removeEventListener("mouseover", mouseOver);
//       document.removeEventListener("mousedown", mouseDown);
//       document.removeEventListener("mouseleave", mouseLeave);
//       document.removeEventListener("mouseenter", mouseEnter);
//       cancelAnimationFrame(raf);
//     };
//   }, []);
  
//   return (
//     <div className="custom-cursor-container fixed top-0 left-0 w-full h-full pointer-events-none z-50">
//       {/* Cursor trails */}
//       {trailPositions.map((pos, index) => (
//         <motion.div
//           key={index}
//           className="cursor-trail"
//           initial={{ opacity: 0.7 }}
//           animate={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           style={{
//             position: 'absolute',
//             left: pos.x - 2.5,
//             top: pos.y - 2.5,
//             width: 5,
//             height: 5,
//             borderRadius: '50%',
//             backgroundColor: 'rgba(255, 0, 0, 0.5)',
//             zIndex: 9998,
//             filter: 'blur(2px)',
//             transform: `scale(${1 - index * 0.15})`,
//             pointerEvents: 'none'
//           }}
//         />
//       ))}
      
//       {/* Main cursor */}
//       <AnimatePresence>
//         {cursorVisible && (
//           <motion.div
//             className="custom-cursor" 
//             style={{
//               position: 'absolute',
//               left: mousePosition.x - 20,
//               top: mousePosition.y - 20,
//               width: 40,
//               height: 40,
//               zIndex: 9999,
//               pointerEvents: 'none'
//             }}
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{
//               scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
//               opacity: 1
//             }}
//             exit={{ opacity: 0, scale: 0.5 }}
//             transition={{
//               type: 'spring',
//               stiffness: 500,
//               damping: 28
//             }}
//           >
//             {/* Futuristic cursor design */}
//             <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <rect x="0" y="0" width="40" height="40" fill="transparent" />
              
//               {/* Outer frame - animated */}
//               <motion.g
//                 animate={{ 
//                   rotate: [0, 180, 360],
//                   scale: isHovering ? 1.1 : 1
//                 }}
//                 transition={{ 
//                   rotate: { duration: 10, repeat: Infinity, ease: "linear" },
//                   scale: { duration: 0.3 }
//                 }}
//               >
//                 <rect x="0" y="0" width="12" height="1.5" fill="red" />
//                 <rect x="0" y="0" width="1.5" height="12" fill="red" />
//                 <rect x="28" y="0" width="12" height="1.5" fill="red" />
//                 <rect x="38.5" y="0" width="1.5" height="12" fill="red" />
//                 <rect x="0" y="38.5" width="12" height="1.5" fill="red" />
//                 <rect x="0" y="28" width="1.5" height="12" fill="red" />
//                 <rect x="28" y="38.5" width="12" height="1.5" fill="red" />
//                 <rect x="38.5" y="28" width="1.5" height="12" fill="red" />
//               </motion.g>
              
//               {/* Inner rotating circle */}
//               <motion.circle 
//                 cx="20" 
//                 cy="20" 
//                 r="8"
//                 stroke="red"
//                 strokeWidth="1.5"
//                 strokeDasharray="25"
//                 strokeDashoffset="0"
//                 fill="transparent"
//                 animate={{ 
//                   strokeDashoffset: [0, 50],
//                   rotate: [0, -360]
//                 }}
//                 transition={{ 
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "linear"
//                 }}
//               />
              
//               {/* Center dot */}
//               <motion.circle 
//                 cx="20" 
//                 cy="20" 
//                 r="2"
//                 fill="red"
//                 animate={{ 
//                   scale: [1, 1.5, 1],
//                   opacity: [0.7, 1, 0.7]
//                 }}
//                 transition={{ 
//                   duration: 2,
//                   repeat: Infinity,
//                   ease: "easeInOut"
//                 }}
//               />
              
//               {/* Cross-hairs */}
//               <motion.g
//                 animate={{ 
//                   opacity: [0.5, 1, 0.5],
//                   scale: isHovering ? 1.2 : 1
//                 }}
//                 transition={{ 
//                   opacity: { duration: 2, repeat: Infinity },
//                   scale: { duration: 0.3 }
//                 }}
//               >
//                 <rect x="19.25" y="4" width="1.5" height="6" fill="red" />
//                 <rect x="19.25" y="30" width="1.5" height="6" fill="red" />
//                 <rect x="4" y="19.25" width="6" height="1.5" fill="red" />
//                 <rect x="30" y="19.25" width="6" height="1.5" fill="red" />
//               </motion.g>
//             </svg>
//           </motion.div>
//         )}
//       </AnimatePresence>
      
//       {/* "Detected" text on click */}
//       <AnimatePresence>
//         {isClicking && (
//           <motion.div
//             className="click-indicator font-main-heading text-red-600 font-bold tracking-widest"
//             initial={{ opacity: 0, y: 10, scale: 0.8 }}
//             animate={{ opacity: 1, y: -20, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             style={{
//               position: 'absolute',
//               left: mousePosition.x,
//               top: mousePosition.y,
//               transform: 'translate(-50%, -50%)',
//               zIndex: 9997,
//               pointerEvents: 'none',
//               textShadow: '0 0 5px rgba(255,0,0,0.5)'
//             }}
//           >
//             DETECTED
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default CustomCursor;




import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  useEffect(() => {
    // Track mouse position with smooth lerping
    let currentX = 0;
    let currentY = 0;
    let raf;
    
    const mouseMove = (e) => {
      // Target position
      const targetX = e.clientX;
      const targetY = e.clientY;
      
      // Smooth animation using requestAnimationFrame
      const animateCursor = () => {
        // Calculate distance to target
        const dx = targetX - currentX;
        const dy = targetY - currentY;
        
        // Apply easing (0.2 = smooth follow, higher = faster)
        currentX += dx * 0.2;
        currentY += dy * 0.2;
        
        // Update state with calculated position
        setMousePosition({ x: currentX, y: currentY });
        
        // Continue animation if not close enough to target
        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
          raf = requestAnimationFrame(animateCursor);
        }
      };
      
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(animateCursor);
    };
    
    // Track when hovering over clickable elements
    const mouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('cursor-target')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    // Track mouse click events
    const mouseDown = () => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 500);
    };
    
    // Hide cursor when mouse leaves window
    const mouseLeave = () => {
      setCursorVisible(false);
    };
    
    // Show cursor when mouse enters window
    const mouseEnter = () => {
      setCursorVisible(true);
    };
    
    // Add event listeners
    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseover", mouseOver);
    document.addEventListener("mousedown", mouseDown);
    document.addEventListener("mouseleave", mouseLeave);
    document.addEventListener("mouseenter", mouseEnter);
    
    // Clean up
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseover", mouseOver);
      document.removeEventListener("mousedown", mouseDown);
      document.removeEventListener("mouseleave", mouseLeave);
      document.removeEventListener("mouseenter", mouseEnter);
      cancelAnimationFrame(raf);
    };
  }, []);
  
  return (
    <div className="custom-cursor-container fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {/* Main cursor */}
      <AnimatePresence>
        {cursorVisible && (
          <motion.div
            className="custom-cursor" 
            style={{
              position: 'absolute',
              left: mousePosition.x - 20,
              top: mousePosition.y - 20,
              width: 40,
              height: 40,
              zIndex: 9999,
              pointerEvents: 'none'
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
              opacity: 1
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 28
            }}
          >
            {/* Futuristic cursor design */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="40" height="40" fill="transparent" />
              
              {/* Outer frame - animated */}
              <motion.g
                animate={{ 
                  rotate: [0, 180, 360],
                  scale: isHovering ? 1.1 : 1
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 0.3 }
                }}
              >
                <rect x="0" y="0" width="12" height="1.5" fill="red" />
                <rect x="0" y="0" width="1.5" height="12" fill="red" />
                <rect x="28" y="0" width="12" height="1.5" fill="red" />
                <rect x="38.5" y="0" width="1.5" height="12" fill="red" />
                <rect x="0" y="38.5" width="12" height="1.5" fill="red" />
                <rect x="0" y="28" width="1.5" height="12" fill="red" />
                <rect x="28" y="38.5" width="12" height="1.5" fill="red" />
                <rect x="38.5" y="28" width="1.5" height="12" fill="red" />
              </motion.g>
              
              {/* Inner rotating circle */}
              <motion.circle 
                cx="20" 
                cy="20" 
                r="8"
                stroke="red"
                strokeWidth="1.5"
                strokeDasharray="25"
                strokeDashoffset="0"
                fill="transparent"
                animate={{ 
                  strokeDashoffset: [0, 50],
                  rotate: [0, -360]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Center dot */}
              <motion.circle 
                cx="20" 
                cy="20" 
                r="2"
                fill="red"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* "Detected" text on click */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            className="click-indicator font-main-heading text-red-600 font-bold tracking-widest"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -20, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: 'absolute',
              left: mousePosition.x,
              top: mousePosition.y,
              transform: 'translate(-50%, -50%)',
              zIndex: 9997,
              pointerEvents: 'none',
              textShadow: '0 0 5px rgba(255,0,0,0.5)'
            }}
          >
            DETECTED
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCursor;