import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
/*width:30px;
                            height:30px;*/


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

function About() {
    const {width, height} = useViewportSize();
    return width>1200 ? (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className = "aboutCenter">Meet The Team!</h1>
            <br></br>
            <div className = "nameContainer">
                <div className = "teamFlex">
                    
                    <img src="./images/Kevin.png" width="300px" height="auto"></img>
                    <div className = "teamText">
                        <div> 
                            <h2>Kevin Dang</h2>
                            <div style = {{width: '30px'}}></div>
                            
                            <a href="https://www.linkedin.com/in/kevin-dang-a922712ab" className="aboutIcon" ><FontAwesomeIcon icon={faLinkedin}className="innerAboutIcon"   /></a>
                            <a href="mailto:kevin.dang.0007@gmail.com" className="aboutIcon"><FontAwesomeIcon icon={faEnvelope} className="innerAboutIcon" /></a>
                        </div>
                        <h3>Hardware Teacher, Co-Founder, Finance Manager</h3>
                        <br></br>
                        <p>Kevin Dang is an aspiring mechanical engineer and passionate 12th grade student Vincent Massey Secondary School. He has won numerous engineering awards such as 1st place at MasseyHacks, Finalist at Hack The North, and Global Nominee at NASA Space Apps. His skills have led him to be accepted into the University of Waterloo, the most competitive and rigorous engineering school in Canada.</p>
                    </div>
                </div>
            </div>

            <div className = "nameContainer">
                <div className = "teamFlex">
                    
                    <img src="./images/Jad.JPG" width="300px" height="auto"></img>
                    <div className = "teamText">
                        <div> 
                            <h2>Jad Menkara</h2>
                            <div style = {{width: '30px'}}></div>
                            <a href="https://www.linkedin.com/in/jad-menkara-1593942aa/" className="aboutIcon" ><FontAwesomeIcon icon={faLinkedin} className="innerAboutIcon"/></a>
                            <a href="mailto:jadmenkara@email.com" className="aboutIcon"><FontAwesomeIcon icon={faEnvelope} className="innerAboutIcon"/></a>
                        </div>
                        <h3>Hardware Teacher, Co-Founder, Logistics</h3>
                        <br></br>
                        <p>Jad Menkara is a grade 11 student passionate about robotics and engineering. He conducts surgical robotics research with the University of Calgary, developing innovative solutions for neurosurgical applications. As a multi-time national science fair finalist, Jad has been recognized for his advanced engineering projects, including an adaptive AI prosthetic. He also serves as the president of Hack Club at Vincent Massey S.S., leading a community of student innovators. With a strong focus on pushing technological boundaries, Jad combines his expertise in hardware with his dedication to creating impactful solutions in healthcare and beyond.</p>
                   
                    </div>
                </div>
            </div>
        </div>
        
    ) : (
        <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 className = "aboutCenter">Meet The Team!</h1>
        <br></br>
        <div className = "nameContainer">
            <div className = "teamFlex2">
                <div className="imrunningoutofnames"> 
                        <h2 style = {{width: '100%'}}>Kevin Dang</h2>
                        <div style = {{width: '100%'}}></div>
                        
                        <a href="https://www.linkedin.com/in/kevin-dang-a922712ab" className="aboutIcon" ><FontAwesomeIcon icon={faLinkedin}className="innerAboutIcon"   /></a>
                        <a href="mailto:kevin.dang.0007@gmail.com" className="aboutIcon"><FontAwesomeIcon icon={faEnvelope} className="innerAboutIcon" /></a>
                    </div>
                <img src="./images/Kevin.png" width="100%" height="auto"></img>
                    
                    <h3>Hardware Teacher, Co-Founder, Finance Manager</h3>
                    <br></br>
                    <p>Kevin Dang is an aspiring mechanical engineer and passionate 12th grade student Vincent Massey Secondary School. He has won numerous engineering awards such as 1st place at MasseyHacks, Finalist at Hack The North, and Global Nominee at NASA Space Apps. His skills have led him to be accepted into the University of Waterloo, the most competitive and rigorous engineering school in Canada.</p>
            </div>
        </div>

        <div className = "nameContainer">
            <div className = "teamFlex2">
                
                <div className="imrunningoutofnames"> 
                    <h2>Jad Menkara</h2>
                    <div style = {{width: '100%'}}></div>
                    <a href="https://www.linkedin.com/in/jad-menkara-1593942aa/" className="aboutIcon" ><FontAwesomeIcon icon={faLinkedin} className="innerAboutIcon"/></a>
                    <a href="mailto:jadmenkara@email.com" className="aboutIcon"><FontAwesomeIcon icon={faEnvelope} className="innerAboutIcon"/></a>
                </div>
                <img src="./images/Jad.JPG" width="100%" height="auto"></img>
                
                <h3>Hardware Teacher, Co-Founder, Logistics</h3>
                <br></br>
                <p>Jad Menkara is a grade 11 student passionate about robotics and engineering. He conducts surgical robotics research with the University of Calgary, developing innovative solutions for neurosurgical applications. As a multi-time national science fair finalist, Jad has been recognized for his advanced engineering projects, including an adaptive AI prosthetic. He also serves as the president of Hack Club at Vincent Massey S.S., leading a community of student innovators. With a strong focus on pushing technological boundaries, Jad combines his expertise in hardware with his dedication to creating impactful solutions in healthcare and beyond.</p>
               
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>   
    </div>
    


    )
  }
  
  export default About
  