import { useState, useEffect } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

// Import CSS for fullpage effects
import './fullpage-effects.css'

// Components - Import only what you've created so far
import Navbar from './components/layout/Navbar'
import CustomCursor from './components/layout/CustomCursor'
import Footer from './components/layout/Footer'

// Sections - Import only what you've created so far
import HeroSection from './components/sections/HeroSection'
import SolutionsSection from './components/sections/SolutionsSection'

// Fullpage.js license key (use empty string for non-commercial or add your key)
const FULLPAGE_LICENSE_KEY = '';

function App() {
  // Ensure cursor visibility on mounted components
  useEffect(() => {
    // Add a class to the body to indicate cursor is enabled
    document.body.classList.add('custom-cursor-enabled');
    
    // Make sure all links and buttons have cursor styling
    const updateCursorTargets = () => {
      const clickables = document.querySelectorAll('a, button, [role="button"]');
      clickables.forEach(element => {
        element.classList.add('cursor-target');
      });
    };
    
    // Initial update
    updateCursorTargets();
    
    // Set up a mutation observer to handle dynamically added elements
    const observer = new MutationObserver(updateCursorTargets);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    // Cleanup
    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      observer.disconnect();
    };
  }, []);

  // Fullpage.js callbacks
  const afterLoad = (origin, destination, direction) => {
    // You can add any specific logic after a section loads
    console.log(`Loaded section ${destination.index + 1}`);
  };

  const onLeave = (origin, destination, direction) => {
    // Add drop effect classes when leaving a section
    if (direction === 'down') {
      origin.item.classList.add('drop-up');
    } else {
      origin.item.classList.add('drop-down');
    }
    
    // Remove classes after animation completes
    setTimeout(() => {
      origin.item.classList.remove('drop-up', 'drop-down');
    }, 800);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Add noise overlay for texture */}
      <div className="noise-overlay"></div>
      
      {/* CustomCursor component placed at the top level for global access */}
      <CustomCursor />
      
      <Navbar />
      
      <ReactFullpage
        licenseKey={FULLPAGE_LICENSE_KEY}
        scrollingSpeed={1000}
        navigation={true}
        navigationPosition="right"
        navigationTooltips={['Home', 'Solutions']}
        showActiveTooltip={true}
        css3={true}
        anchors={['home', 'solutions']}
        afterLoad={afterLoad}
        onLeave={onLeave}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section section-hero">
                <div className="section-content">
                  <HeroSection />
                </div>
              </div>
              
              <div className="section section-solutions">
                <div className="section-content">
                  <SolutionsSection />
                </div>
              </div>
              
              {/* Uncomment these as you create them
              <div className="section section-features">
                <div className="section-content">
                  <FeaturesSection />
                </div>
              </div>
              
              <div className="section section-process">
                <div className="section-content">
                  <ProcessSection />
                </div>
              </div>
              
              <div className="section section-technologies">
                <div className="section-content">
                  <TechnologiesSection />
                </div>
              </div>
              
              <div className="section section-blog">
                <div className="section-content">
                  <BlogSection />
                </div>
              </div>
              
              <div className="section section-cta">
                <div className="section-content">
                  <CTASection />
                </div>
              </div>
              */}
              
              <div className="section fp-auto-height">
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  )
}

export default App