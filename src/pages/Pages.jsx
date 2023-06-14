import React from 'react' // Import the React library
import Home from './Home'; // Import the Home component
import Cuisine from './Cuisine'; // Import the Cuisine component
import Searched from './Searched'; // Import the Searched component
import Recipe from './Recipe'; // Import the Recipe component
import { Route, Routes, useLocation } from 'react-router-dom'; // Import Route, Routes, and useLocation from the react-router-dom library
import { AnimatePresence } from 'framer-motion'; // Import the AnimatePresence component from the framer-motion library

function Pages() {
  const location = useLocation(); // Get the current location using the useLocation hook

  return (
    <AnimatePresence mode='wait'> {/* Use AnimatePresence component to wrap the Routes */}
      <Routes Location={location} key={location.pathname}> {/* Render different components based on the current URL path */}
          <Route path='/' element={<Home />} /> {/* Render the Home component when the URL path is '/' */}
          <Route path='/cuisine/:type' element={<Cuisine />} /> {/* Render the Cuisine component when the URL path matches '/cuisine/:type', where :type is a variable */}
          <Route path='/Searched/:search' element={<Searched />} /> {/* Render the Searched component when the URL path matches '/Searched/:search', where :search is a variable */}
          <Route path='/recipe/:name' element={<Recipe />} /> {/* Render the Recipe component when the URL path matches '/recipe/:name', where :name is a variable */}
      </Routes>
    </AnimatePresence>
  );
}

export default Pages; // Export the Pages component as the default export
