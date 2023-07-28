import React from 'react';
import { Link } from 'react-router-dom';

import './emergency.css';
   const Emergency=() => {
    return (

<>
  <title>Suicide Prevention</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    body {\n      font-family: Arial, sans-serif;\n      text-align: center;\n      background-color: black;\n      padding: 20px;\n    }\n\n    h1 {\n      color: #fff;\n      font-size: 48px;\n      margin-bottom: 20px;\n      font-weight: bold;\n    }\n\n    h2 {\n      color: #fff;\n      font-size: 36px;\n      margin-bottom: 20px;\n    }\n\n    p {\n      color: #fff;\n      font-size: 18px;\n      margin-bottom: 20px;\n    }\n\n    .button-container {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      margin-bottom: 30px;\n    }\n\n    .button {\n      display: inline-block;\n      padding: 15px 30px;\n      background-color: #333;\n      color: #fff;\n      text-decoration: none;\n      border-radius: 4px;\n      margin: 10px;\n      font-size: 18px;\n      font-weight: bold;\n      border: none;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n      transition: background-color 0.3s ease;\n    }\n\n    .button:hover {\n      background-color: #555;\n    }\n  "
    }}
  />
  <h1>If you're in emergency, call now:</h1>
  <br></br>
  <h1 className="emergency-number">+1-800-273-TALK (8255)</h1>

  <p>Call one of the local help hotlines in your country or region:</p>
  <div className="button-container">
    <a
      href="https://en.wikipedia.org/wiki/List_of_suicide_crisis_lines"
      className="button"
    >
      Local help 
    </a>
  </div>
  <h2>Contacts</h2>
  <p>Here are some organizations that provide support and resources:</p>
  <div className="button-container">
   
    <a
      href="https://www.crisistextline.org/"
      
      className="button"
    >
      Crisis Text Line
    </a>
    <a href="https://www.sprc.org/"  className="button">
      Emergency Prevention Resource Center
    </a>
    <a href="https://teenlifeline.org/" className="button">
      Teen Lifeline
    </a>
  </div>
</>

  )
   };
   export default Emergency;
