import React, {useState , useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDiscord} from '@fortawesome/free-brands-svg-icons';
import { faRectangleList} from '@fortawesome/free-regular-svg-icons';
import "./HomePage.css"

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

function HomePage() {
    const { width, height } = useViewportSize();
    return width>1200 ? (
        <div className = "homeClass">
            
            <div className = "homeText">
                <h1>BotBuilders is Windsor, Ontario's</h1>
                <h1>premier non-profit robotics program for middle school students.</h1>
                <br></br>
                <h4><span className="highlight">Ran entirely by high school students</span>, BotBuilders aims to <span className="highlight">break social norms placed on young students.</span> We strive to ensure every student has <span className="highlight">equal oppoortunities</span> to be introduced into the robotics field, <span className
                ="highlight">no matter their age, socioeconomic status, etc.</span></h4>
                <div className="homeButtons">
                    <a href ="https://forms.gle/3i5yjHrrjg6YyeETA" ><button><FontAwesomeIcon icon={faRectangleList} className ="spacedIcon"/>Apply Now </button></a>
                    <a href = "https://discord.gg/m9BJBJNZQ8"><button><FontAwesomeIcon icon={faDiscord} className ="spacedIcon"/>Discord </button></a>
                    <a href ="https://www.instagram.com/botbuilders.roboticsprogram/"><button><FontAwesomeIcon icon={faInstagram} className ="spacedIcon"/>Instagram </button></a>
                </div>
                <br></br>
                <h2 >Last May, we taught over 25 students the fundamentals of robotics for free! To respect the privacy of our students, especially those under 18, we chose   not publicly share photos from the program.</h2>
            
            </div>  
            <div id="smallSpacer"></div>
            <img src = "images/BotBuilders-Logo-High-Rez.png" width="600px" className="homeImage"></img>
        </div>
    )
    : (
        <div className = "homeClass1">
            
            <div className = "homeTextSmall">
                <h1 >BotBuilders is Windsor, Ontario's</h1>
                <h1 >premier non-profit robotics program for middle school students.</h1>
                <br></br>
                <h4><span className="highlight">Ran entirely by high school students</span>, BotBuilders aims to <span className="highlight">break social norms placed on young students.</span> We strive to ensure every student has <span className="highlight">equal oppoortunities</span> to be introduced into the robotics field, <span className="highlight">no matter their age, socioeconomic status, etc.</span></h4>
                <div className="homeButtons">
                    <a href ="https://forms.gle/3i5yjHrrjg6YyeETA" ><button><FontAwesomeIcon icon={faRectangleList} className ="spacedIcon"/>Apply Now </button></a>
                    <a href = "https://discord.gg/m9BJBJNZQ8"><button><FontAwesomeIcon icon={faDiscord} className ="spacedIcon"/>Discord </button></a>
                    <a href ="https://www.instagram.com/botbuilders.roboticsprogram/"><button><FontAwesomeIcon icon={faInstagram} className ="spacedIcon"/>Instagram </button></a>
                </div>
                <br></br>
                <br></br>
                <h2 >Last May, we taught over 25 students the fundamentals of robotics for free!</h2>
                
            </div>  
            <img src = "images/BotBuilders-Logo-High-Rez.png" width="250px" className="homeImage2"></img>
        </div>
    )
  }
  
  export default HomePage
  