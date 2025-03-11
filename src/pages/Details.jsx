import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench} from '@fortawesome/free-solid-svg-icons';
/*width:30px;
                            height:30px;*/
function Details() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className = "aboutCenter">Frequently Asked Questions</h1>
            <br></br>

            <div className = "fullFaqContainer">



                <div className = "FaqFullContainer">

                    <div style ={{display:"flex"}}>
                        <div className ="Faq">
                            <FontAwesomeIcon icon={faWrench} className="FaqIcon" />
                            What is BotBuilders?
                            <div className = "FaqAnswer">
                                <p>BotBuilders is a non-profit afterschool program for students in grades 7-8 focused on teaching robotics and engineering through hands on projects</p>
                            </div>
                            
                        </div>
                        <div className ="Faq">
                            <FontAwesomeIcon icon={faWrench} className="FaqIcon" />
                            Who can attend BotBuilders?

                            <p className = "FaqAnswer">BotBuilder's curriculum is designed for older students grades 7-8.  All students must complete an application form.</p>
                        </div>
                    </div>


                    <div style ={{display:"flex"}}>
                            <div className ="Faq">
                                <FontAwesomeIcon icon={faWrench} className="FaqIcon" /> 
                                How much does the program cost?
                                <p className = "FaqAnswer">BotBuilders is completely free for all students.</p>
                            </div>
                            <div className ="Faq">
                                <FontAwesomeIcon icon={faWrench} className="FaqIcon" />
                                What will I get from BotBuilders?
                                <p className = "FaqAnswer">You get to bring home a programmable robot car alongside a lifelong love of robotics!</p>
                            </div>
                    </div>



                    <div style ={{display:"flex"}}>
                        <div className ="Faq">
                            <FontAwesomeIcon icon={faWrench} className="FaqIcon" />
                            When/Where is the program held?
                            <p className = "FaqAnswer">BotBuilders is held at Vincent Massey Secondary School, located at 1800 Liberty St, Windsor, ON. It takes place from 3:40 to 4:45 every Wednesday, starting April 9th and ending May 28th.</p>
                        </div>
                        <div className ="Faq">
                                <FontAwesomeIcon icon={faWrench} className="FaqIcon" />
                                Who teaches BotBuilders?
                                <p className = "FaqAnswer">BotBuilders is taught by Jad Menkara and Kevin Dang, ambitious high school engineers looking to jumpstart a passion for engineering in the next generation. For more details, please navigate to the About section.</p>
                            </div>
                    </div>
                    <div style ={{display:"flex"}}>
                        <div className ="Faq">
                            <FontAwesomeIcon icon={faWrench} className="FaqIcon" /> 
                            When are applications due?
                            <p className = "FaqAnswer">Applications are due Wednesday, April 2nd, 2025.</p>
                        </div>
                        <div className ="Faq">
                            <FontAwesomeIcon icon={faWrench} className="FaqIcon" />
                            Is this program approved?
                            <p className = "FaqAnswer">BotBuilders has been approved by the Greater Essex District School Board. It is supervised by Ms. Beiko, a teacher at Massey Secondary School. </p>
                        </div>
                    </div>
                        
                   

                    
                </div>
            </div>
           
            
            
        </div>
        
    )
  }
  
  export default Details
  