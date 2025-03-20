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





  function BottomBar() {

    const { width, height } = useViewportSize();
    const [count, setCount] = useState(0)
    
    return width>900 ? (
        <div className = "bottomBar">
          <div id="full-span"></div>
          <h3>For more information, contact us at <a href = "mailto:botbuildersroboticsprogram@gmail.com">botbuildersroboticsprogram@gmail.com</a></h3>

        </div>
      ) 
      : (
        <div className = "bottomBar">
          <div id="full-span"></div>
          <h3>For more information, contact us at <a href = "mailto:botbuildersroboticsprogram@gmail.com">botbuildersroboticsprogram@gmail.com</a></h3>

        </div>
        )
    }
    
    export default BottomBar
    