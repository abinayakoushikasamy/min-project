import React from "react";
import './home.css';
import {SocialIcon} from 'react-social-icons';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Home=()=>{
  const username = useSelector((state=>state.user.username))
    return(
         
      <div className="wrapper">
      <div className="top_navbar">
        <div className="logo">
          <a href="#">HOMEHELPER</a>
          
        </div>
        <div className="top_menu">
          <div className="home_link">
            <a href="#">
              <span className="icon">
                <i className="fas fa-home" />
              </span>
              <span>Hello {username}</span>
              <img style={{marginRight: '15px',marginLeft: '10px',width: '17px'}}src="https://cdn-icons-png.flaticon.com/128/1946/1946433.png"/>
            </a>
          </div>
          <div className="right_info">
            <div className="icon_wrap">
              <div className="icon">
                <i className="About" />
                <Link to="/ab" className="tu">FeedForm</Link>
                <img style={{marginRight: '15px',marginLeft: '10px',width: '17px'}}src="https://cdn-icons-png.flaticon.com/128/8627/8627237.png"/>
              </div>
            </div>
          <div className="right_info">
            <div className="icon_wrap">
              <div className="icon">
                <i className="About" />
                <Link to="/con" className="at">Contact</Link>
                <img style={{marginRight: '15px',marginLeft: '10px',width: '17px'}}src="https://cdn-icons-png.flaticon.com/128/9195/9195785.png"/>
              </div>
            </div>
            <div className="icon_wrap">
              <div className="icon">
                <i className="logout" />
                <Link to="/log" className="out">Logout</Link>
                <img style={{marginRight: '15px',marginLeft: '10px',width: '20px'}}src="https://cdn-icons-png.flaticon.com/128/10233/10233766.png"/>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="main_body">
        <div className="sidebar_menu">
          <div className="inner__sidebar_menu">
            <ul>
              <li>
                
                  <span className="icon">
                    <i className="fas fa-border-all" />
                  </span>
                  <Link to="/dash" className="da">DASHBOARD</Link>
                
              </li>
             
              <li>
                
                  <span className="icon">
                    <i className="fas fa-address-book" />
                  </span>
                  <Link to="/hello" className="hi">SERVICES</Link>
              
              </li>
              <li>
                
                  <span className="icon">
                    <i className="fas fa-address-card" />
                  </span>
                  <Link to="/exp" className="nse">EXPENSE</Link>
               
              </li>
              <li>
                
                  <span className="icon">
                    <i className="fas fa-map-marked-alt" />
                  </span>
                  <Link to="/sec" className="ity">WORK FORM</Link>
              
              </li>
              <li>
                
                <span className="icon">
                  <i className="fas fa-border-all" />
                </span>
                <Link to="/dash" className="out">ABOUT</Link>
              
            </li>
            <li>
                
                <span className="icon">
                  <i className="fas fa-border-all" />
                </span>
                <Link to="/abt" className="da">SHOPPING</Link>
              
            </li>
            <li>
                
                <span className="icon">
                  <i className="fas fa-border-all" />
                </span>
                <Link to="/emr" className="gency">EMERGENCY</Link>
              
            </li>
            
            </ul>
            <div className="hamburger">
              <div className="inner_hamburger">
                <span className="arrow">
                  <i className="fas fa-long-arrow-alt-left" />
                  <i className="fas fa-long-arrow-alt-right" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="item_wrap">
            
            <main>
    <section className="timeline" id="news">
      <h2 id="animated">
        <i className="fas fa-newspaper" /> 
      </h2>
      <div className="cardArea">
        <div className="card">
          
         
            <img style={{marginRight: '15px',marginLeft: '10px',width: '17px'}}src="https://cdn-icons-png.flaticon.com/128/75/75739.png"/>
         
          <p>
          "The best way to find out if you can trust somebody is to trust them." - Ernest Hemingway
"The only way to do great work is to love what you do." - Steve Jobs
          </p>
        </div>
        <div className="card">
        <img style={{marginRight: '15px',marginLeft: '10px',width: '17px',color:'white'}}src="https://cdn-icons-png.flaticon.com/128/75/75739.png"/>
         
          <p>
          "If you want to live a happy life, tie it to a goal, not to people or things." - Albert Einstein
"If you can't handle me at my worst, then you sure as hell don't deserve me at my best." - Marilyn Monroe
          </p>
        </div>
        <div className="card">
        <img style={{marginRight: '15px',marginLeft: '10px',width: '17px'}}src="https://cdn-icons-png.flaticon.com/128/75/75739.png"/>
         
          <p>
          "I can't change the direction of the wind, but I can adjust my sails to always reach my destination." - Jimmy Dean
"The only Limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt
          </p>
        </div>
      </div>
    </section>
    <hr />
    </main>
    </div>
    </div>
    <li>
    <a href="#">
    <div className="main-footer">
    <div className="row">
      {/* Column1 */}
      <div className="col">
        <ul className="list-unstyled">
          <h4>COMPANY</h4>
          <li className='fot'>About us</li>
          <li className='fot'>Team</li>
          <li className='fot'>Careers</li>
          <li className='fot'>Blog</li>
        </ul>
      </div>
      {/* Column2 */}
      <div className="col">
        <ul className="list-unstyled">
          <h4>CONTACT</h4>
          <li className='fot'>Help and Support</li>
          <li className='fot'>Partner with us</li>
          <li className='fot'>Ride with us </li>
        </ul>
      </div>
      {/* Column3 */}
      <div className="col">
        <ul className="list-unstyled">
          <h4>LEGAL</h4>
          <li className='fot'>Terms & Conditions</li>
          <li className='fot'>Privacy Policy</li>
          <li className='fot'>Cookie Policy</li>
          <li className='fot'>Security</li>
          <li className='fot'>Sitemap</li>
        </ul>
      </div>
      <div className="col">
        <ul className="list-unstyled">
          <h4>SOCIAL LINKS </h4>
          <li className='fot1'><SocialIcon  url="https://twitter.com/jaketrent"/></li>
          <li className='fot1'><SocialIcon url="https://www.instagram.com/a_bi_n_aya/?__coig_restricted=1"/></li>
          <li className='fot1'><SocialIcon url="https://www.linkedin.com/in/abinaya-p-057544269/"/></li>
          <li className='fot1'><SocialIcon url="https://facebook.com/jaketrent"/></li>
          <li className='fot1'><SocialIcon url="https://www.youtube.com/channel/UCOZzzL6a4eN9124Pp-177xg"/></li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="row_sm">
      <p className="col-sm">
      By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © LET'S Foody™ Ltd. All rights reserved.
      </p>
    </div>
</div>
                  <span className="icon">
                    <i className="fas fa-map-marked-alt" />
                  </span>
                  <Link to="/con" className="act">CONTACT</Link>
                </a>
              </li>

          </div>
       </div>
       
    
        
  
      
    )
};
export default Home;
