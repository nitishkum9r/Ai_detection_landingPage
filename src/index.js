// index.js - Central export file for enhanced components

// Main sections
export { default as SolutionsSection } from './SolutionsSection';

// UI components
export { default as FluidBorder } from './FluidBorder';
export { default as SolutionCard } from './SolutionCard';

// Utilities
export { 
  useViewportTransition,
  useMousePosition,
  useSmoothTransition,
  getSpotlightStyle,
  sectionTransitionVariants,
  itemTransitionVariants,
  textHighlightVariants
} from './TransitionUtils';