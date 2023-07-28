import React from 'react';
import { Link } from 'react-router-dom';

import './security.css';
   const Security=() => {
     return (
   

       <div className="row">
       <section className="section">
         <header>
           <h3>Work Deatils</h3>
           <h4>Please fill your information bellow</h4>
         </header>
         <main>
           <form>
             <div className="form-item box-item">
               <input type="text" name="name" placeholder="Name" data-required="" />
               <small className="errorReq">
                 <i className="fa fa-asterisk" aria-hidden="true" /> required field
               </small>
             </div>
             <div className="form-item box-item">
               <input
                 type="email"
                 name="email"
                 placeholder="Email"
                 data-email=""
                 data-required=""
               />
               <small className="errorReq">
                 <i className="fa fa-asterisk" aria-hidden="true" /> required field
               </small>
               <small className="errorEmail">
                 <i className="fa fa-asterisk" aria-hidden="true" /> email is not
                 valid
               </small>
             </div>
             <div className="form-item box-item">
               <div className="form-item-triple">
                 <div className="radio-label">
                   <label className="label">Gender</label>
                 </div>
                 <div className="form-item">
                   <input
                     id="Male"
                     type="radio"
                     name="gender"
                     defaultValue="Male"
                     data-once=""
                   />
                   <label htmlFor="Male">Male</label>
                 </div>
                 <div className="form-item">
                   <input
                     id="Female"
                     type="radio"
                     name="gender"
                     defaultValue="Female"
                     data-once=""
                   />
                   <label htmlFor="Female">Female</label>
                 </div>
               </div>
               <small className="errorOnce">
                 <i className="fa fa-asterisk" aria-hidden="true" /> choose at least
                 one
               </small>
             </div>
             <div className="form-item box-item">
               <div className="form-item-triple">
                 <div className="radio-label">
                   <label className="label">Type</label>
                 </div>
                 <div className="form-item">
                   <input
                     id="sponsored"
                     type="radio"
                     name="gender2"
                     defaultValue="sponsored"
                     data-once=""
                   />
                   <label htmlFor="sponsored">Individual</label>
                 </div>
                 <div className="form-item">
                   <input
                     id="paid"
                     type="radio"
                     name="gender2"
                     defaultValue="paid"
                     data-once=""
                   />
                   <label htmlFor="paid">Company</label>
                 </div>
               </div>
               <small className="errorOnce">
                 <i className="fa fa-asterisk" aria-hidden="true" /> choose at least
                 one
               </small>
             </div>
             <div className="form-item box-item">
               <input
                 type="text"
                 name="address"
                 placeholder="Address"
                 data-required=""
               />
               <small className="errorReq">
                 <i className="fa fa-asterisk" aria-hidden="true" /> required field
               </small>
             </div>
             <div className="form-item-double box-item">
               <div className="form-item ">
                 <input
                   type="text"
                   name="strNumber"
                   placeholder="Str Number"
                   data-required=""
                   data-number=""
                 />
                 <small className="errorReq">
                   <i className="fa fa-asterisk" aria-hidden="true" /> required field
                 </small>
                 <small className="errorNum">
                   <i className="fa fa-asterisk" aria-hidden="true" /> must be a
                   number
                 </small>
               </div>
               {/* <div className="form-item">
                 <input
                   type="text"
                   name="zCode"
                   placeholder="Zip Code"
                   data-required=""
                   data-number=""
                 />
                 <small className="errorReq">
                   <i className="fa fa-asterisk" aria-hidden="true" /> required field
                 </small>
                 <small className="errorNum">
                   <i className="fa fa-asterisk" aria-hidden="true" /> must be a
                   number
                 </small>
               </div> */}
             </div>
             <div className="form-item box-item">
               <input
                 type="text"
                 name="phone"
                 placeholder="Phone"
                 data-required=""
                 data-number=""
                 data-count={10}
               />
               <small className="errorReq">
                 <i className="fa fa-asterisk" aria-hidden="true" /> required field
               </small>
               <small className="errorNum">
                 <i className="fa fa-asterisk" aria-hidden="true" /> must be a number
               </small>
               <small className="errorChar">
                 <i className="fa fa-asterisk" aria-hidden="true" /> must be 10
                 digits
               </small>
             </div>
             <centre>
             <div className="form-item">
               <span id="submit" className="submit">
                   <centre>
                 Submit
                 </centre>
               </span>
             </div>
             </centre>
           </form>
         </main>
        
         <i className="wave" />
       </section>
     </div>
     
         
        );
         }
       
export default Security;