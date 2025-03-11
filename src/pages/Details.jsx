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
                            <p></p>
                        </div>
                    </div>


                    <div style ={{display:"flex"}}>
                            <div className ="Faq">
                                <FontAwesomeIcon icon={faWrench} className="FaqIcon" /> 
                                How much does the program cost?
                                <p></p>
                            </div>
                            <div className ="Faq">
                                <FontAwesomeIcon icon={faWrench} className="FaqIcon" />
                                What will I get from BotBuilders?
                                <p></p>
                            </div>
                    </div>



                    <div style ={{display:"flex"}}>
                        <div className ="Faq">
                            <FontAwesomeIcon icon={faWrench} className="FaqIcon" />
                            When/Where is the program held?
                            <p></p>
                        </div>
                        <div className ="Faq">
                                <FontAwesomeIcon icon={faWrench} className="FaqIcon" />
                                Who teaches BotBuilders?
                                <p></p>
                            </div>
                    </div>
                    <div style ={{display:"flex"}}>
                        <div className ="Faq">
                            <FontAwesomeIcon icon={faWrench} className="FaqIcon" /> 
                            When are applications due?
                            <p></p>
                        </div>
                        <div className ="Faq">
                            <FontAwesomeIcon icon={faWrench} className="FaqIcon" />
                            Is this program approved?
                            <p></p>
                        </div>
                    </div>
                        
                   

                    
                </div>
            </div>
           
            
            
        </div>
        
    )
  }
  
  export default Details
  