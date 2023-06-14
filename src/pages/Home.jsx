// Importing the Veggie component from '../components/Veggie'
import Veggie from '../components/Veggie';

// Importing the Popular component from '../components/Popular'
import Popular from '../components/Popular';

// Importing the motion object from 'framer-motion' library
import { motion } from 'framer-motion';

// Importing the React object from 'react' library
import React from 'react';

// Declaring a function component named Home
function Home() {
  return (
    // Wrapping the content with the motion.div component for animation
    <motion.div
      animate={{ opacity: 1 }} // Animating the opacity to 1
      initial={{ opacity: 0 }} // Initial opacity set to 0
      exit={{ opacity: 0 }} // Exit animation with opacity 0
      transition={{ duration: 0.5 }} // Animation duration set to 0.5 seconds
    >
      <Veggie /> // Rendering the Veggie component
      <Popular /> // Rendering the Popular component
    </motion.div>
  );
}

// Exporting the Home component as the default export
export default Home;
