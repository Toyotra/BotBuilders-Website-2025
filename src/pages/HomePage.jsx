import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDiscord} from '@fortawesome/free-brands-svg-icons';
import { faRectangleList} from '@fortawesome/free-regular-svg-icons';
import "./HomePage.css"



function HomePage() {
    return (
        <div className = "homeClass">
            
            <div className = "homeText">
                <h1>BotBuilders is Windsor, Ontario's</h1>
                <h1>premier non-profit robotics program for middle school students.</h1>
                <br></br>
                <h4><span class="highlight">Ran entirely by high school students</span>, BotBuilders aims to <span class="highlight">break social norms placed on young students.</span> We strive to ensure every student has <span class="highlight">equal oppoortunities</span> to be introduced into the robotics field, <span class="highlight">no matter their age, socioeconomic status, etc.</span></h4>
                <div className="homeButtons">
                    <a><button><FontAwesomeIcon icon={faRectangleList} className ="spacedIcon"/>Apply Now </button></a>
                    <a><button><FontAwesomeIcon icon={faDiscord} className ="spacedIcon"/>Discord </button></a>
                    <a><button><FontAwesomeIcon icon={faInstagram} className ="spacedIcon"/>Instagram </button></a>
                </div>
            
            </div>  
            <div id="smallSpacer"></div>
            <img src = "public/images/BotBuilders Logo High Rez.png" width="600px" className="homeImage"></img>
        </div>
    )
  }
  
  export default HomePage
  