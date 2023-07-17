import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './contact.css';
const Contact=()=>{
    return(
        <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Video home work 24 1-2</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
            <div className="menue-IMG">
              <a href="#">
                <img
                  src="https://www.developerachem.com/exam-1//image/lfwf-white-logo-removebg-preview.png"
                  alt=""
                />
              </a>
            </div>    
        <div className="CONTACT" id="hire">
          <div className="education width-website clearfix">
            <div className="education-seciond extra ">
              <h3>CONTACT</h3>
              <h1>
                We're here to help you level up!!
              </h1>
            </div>
          </div>
          <div className="form-section">
            <div className="width-section width-website">
              <div className="hire-icon clearfix">
                <div className="heir-icon-main">
                  <span>
                    <i className="fas fa-phone-alt" />
                  </span>
                  <span>
                    <a href="tel:01710774837">000421113</a>
                  </span>
                  <span>
                    <a href="tel:01710774837">000421114</a>
                  </span>
                </div>
                <div className="heir-icon-main2">
                  <span>
                    <i className="fas fa-map-marker-alt" />
                  </span>
                  <span>1/153M Raja street,Coimbatore</span>
                </div>
                <div className="heir-icon-main3">
                  <span>
                    <i className="fas fa-envelope" />
                  </span>
                  <span>
                    <a href="mailto:homehelper@gmail.com">
                      homehelper@gmail.com
                    </a>
                  </span>
                  <span>
                    <a href="mailto:homehelper1@gmail.com">
                      homehelper1@gmail.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="form-heir-me clearfix">
                <div className="form-input-name">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Phone" />
                  <input type="date" name="begin" 
        placeholder="Dates" value=""
        min="1997-01-01" max="2030-12-31"></input>
    
                </div>
                <div className="form-input-textara">
                  <textarea
                    name=""
                    id=""
                    cols={20}
                    rows={14}
                    placeholder="Work Details"
                    defaultValue={""}
                  />
                </div>
                <div className="heirme-button">
                  <a href="#">SEND MASSAGE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="width-website">
            <div className="secoal-menue">
             
              <a href="https://www.instagram.com/a_bi_n_aya/?__coig_restricted=1">   <img style={{marginRight: '15px',marginLeft: '10px',width: '25px'}}src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png"/>

</a>
              <a href="https://github.com/abinayakoushikasamy">   <img style={{marginRight: '15px',marginLeft: '10px',width: '25px'}}src="https://cdn-icons-png.flaticon.com/128/10124/10124439.png"/>

        </a>
            
              <a href="https://www.linkedin.com/in/abinaya-p-057544269/">   <img style={{marginRight: '15px',marginLeft: '10px',width: '25px'}}src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"/>

</a>
              
              <a href="https://www.youtube.com/channel/UCOZzzL6a4eN9124Pp-177xg">   <img style={{marginRight: '15px',marginLeft: '10px',width: '25px'}}src="https://cdn-icons-png.flaticon.com/128/152/152810.png"/>

</a>
            </div>
            <div className="footer-tex" id="">
              <h4>
                © 2023 by <span>DeveloprAbi@</span>
              </h4>
            </div>
          </div>
        </div>
      </>
      
  
                  
        
    )
    };
export default Contact; 