  //import React, { useState } from 'react'

  import { Link } from 'react-router-dom'

  import { useState, useEffect } from "react";

  const useViewportSize = () => {
    const [size, setSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return size;
  };





  function Navbar() {

    const { width, height } = useViewportSize();
    const [count, setCount] = useState(0)
    
    return width>1200 ? (
          <div id="navbar">
            <div id="navLeft">
                <img src = "images/builderbots-logo.png" width="60px" className ="shaker"></img>
                
            </div>
            <h2 id ="title">BotBuilders Robotics Program</h2>
    
            <div id="spacer"></div>
            <Link to="/"><button className= "navButton">Home</button></Link>
            <Link to="/About"><button className= "navButton">About</button></Link>
            <a href = "https://forms.gle/3i5yjHrrjg6YyeETA" target="_blank" rel="noopener noreferrer"><button className= "navButton">Sign Up</button></a>
            <Link to="/FAQ"><button className= "navButton">FAQ</button></Link>
          </div>
      ) 
      : (
        <div id="navbar">
          <div id="navLeft">
              <img src = "images/builderbots-logo.png" width="35px" className ="shaker"></img>
              
          </div>
          <h2 id ="titleMini">BotBuilders Robotics Program</h2>
  
          <div id="spacer"></div>
          <Link to="/"><button className= "navButtonMini">Home</button></Link>
          <Link to="/About"><button className= "navButtonMini">About</button></Link>
          <a href = "https://forms.gle/3i5yjHrrjg6YyeETA" target="_blank" rel="noopener noreferrer"><button className= "navButtonMini">Sign Up</button></a>
          <Link to="/FAQ"><button className= "navButtonMini">FAQ</button></Link>
        </div>
    )
    }
    
    export default Navbar
    