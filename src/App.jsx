import { useState } from 'react'
import './App.css'

import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";


import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';

import Homepage from './pages/HomePage';
import About from './pages/About';
import Details from './pages/Details';

import BottomBar from "./components/BottomBar"
import ParticlesComponent from "./components/particles";

import BackgroundAnimation from './components/BackgroundAnimation';


const pageVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { y: -100, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } }
};

function AnimatedRoutes() {
  const location = useLocation(); // Correctly tracks the route location

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageVariants}
            >
              <Homepage />
            </motion.div>
          }
        />
        <Route
          path="/About"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageVariants}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/FAQ"
          element={
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={pageVariants}
            >
            <Details />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}






function App() {
  const [count, setCount] = useState(0)
  
  return (
    
    <>
    
    <Router className = "body">
      

      <div className="background"></div>
      <ParticlesComponent id = "particles"></ParticlesComponent>


      <BackgroundAnimation></BackgroundAnimation>
      <div id="everythingElse">
        <Navbar/>
        <AnimatedRoutes />
      </div>
      
      <BottomBar ></BottomBar>
    </Router>
    </>
  )
}

export default App
