import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './services.css';
const Services=()=>{
    return(
      <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <h2>WORKS LISTS</h2>
                <img style={{marginRight: '15px',marginLeft: '10px',width: '35px'}}src="https://cdn-icons-png.flaticon.com/128/9747/9747033.png"/>
   
        <ul className="card-list">
  <li className="card">
  <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <h2>GARDENING</h2>
              </div>
            </div>
    <a
      className="card-image"
      href="https://michellezauner.bandcamp.com/album/psyhopomp-2"
      target="_blank"
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMz8HAeDHk08Iq0KLFRj4DgEyPWhaXpEl7w&usqp=CAU.jpg)"
      }}
      data-image-full="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMz8HAeDHk08Iq0KLFRj4DgEyPWhaXpEl7w&usqp=CAU.jpg"
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyMz8HAeDHk08Iq0KLFRj4DgEyPWhaXpEl7w&usqp=CAU.jpg"
        alt="Psychopomp"
      />
    </a>
    <a
      className="card-description"
      href="https://michellezauner.bandcamp.com/album/psychopomp-2"
      target="_blank"
    >
      
     
    </a>
  </li>
  <li className="card">
  <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <h2>HANDYMEN</h2>
              </div>
            </div>
    <a
      className="card-image"
      href="https://inlovewithaghost.bandcamp.com/album/lets-go"
      target="_blank"
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqtVktEE4axMIlPAd-EL5qYAArSjuj7eIWg&usqp=CAU.PNG)"
      }}
      data-image-full="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqtVktEE4axMIlPAd-EL5qYAArSjuj7eIWg&usqp=CAU.PNG"
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqtVktEE4axMIlPAd-EL5qYAArSjuj7eIWg&usqp=CAU.PNG"
        alt="let's go"
      />
    </a>
    <a
      className="card-description"
      href="https://inlovewithaghost.bandcamp.com/album/lets-go"
      target="_blank"
    >
 
    </a>
  </li>
  <li className="card">
  <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <h2>CLEANING</h2>
              </div>
            </div>
    <a
      className="card-image"
      href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhj9puRvglhi13h-1xlH4R_fTY6Pn3tju6MQ&usqp=CAU.PNG"
      target="_blank"
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhj9puRvglhi13h-1xlH4R_fTY6Pn3tju6MQ&usqp=CAU.PNG)"
      }}
      data-image-full="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhj9puRvglhi13h-1xlH4R_fTY6Pn3tju6MQ&usqp=CAU.PNG"
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhj9puRvglhi13h-1xlH4R_fTY6Pn3tju6MQ&usqp=CAU.PNG"
        alt="The Beautiful Game"
      />
    </a>
    <a
      className="card-description"
      href="https://vulfpeck.bandcamp.com/album/the-beautiful-game"
      target="_blank"
    >

    </a>
  </li>
  <li className="card">
  <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <h2>ELECTRICIANS</h2>
              </div>
            </div>
    <a
      className="card-image"
      href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4wGUM86o7jdoc-wcO70j3ZSf7A-XadwUF_w&usqp=CAU.PNG"
      target="_blank"
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4wGUM86o7jdoc-wcO70j3ZSf7A-XadwUF_w&usqp=CAU.PNG)"
      }}
      data-image-full="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4wGUM86o7jdoc-wcO70j3ZSf7A-XadwUF_w&usqp=CAU.PNG"
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4wGUM86o7jdoc-wcO70j3ZSf7A-XadwUF_w&usqp=CAU.PNG"
        alt="Jane Doe"
      />
    </a>
    <a
      className="card-description"
      href="https://convergecult.bandcamp.com/album/jane-doe"
      target="_blank"
    >
     
    </a>
  </li>
</ul>
</div></div>

    )
};
export default Services