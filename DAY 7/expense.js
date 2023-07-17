import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './expense.css';

const Expense=()=>{
    return(

<div className="gray-section-slanted">
  <div className="container-slanted container-slanted-center w-container">
    <h2 className="section-headline-green section-headline-green-center">
      PAYMENTS 
    </h2>
    <div className="value-pair w-row">
      <div className="w-col w-col-6">
        <div className="value-block value-block-3">
          <h3 className="value-title">GPAY</h3>
          <p className="value-description">
          
          </p>
        </div>
      </div>
      <div className="w-col w-col-6">
        <div className="value-block value-block-1">
          <h3 className="value-title">More stuff</h3>
          <p className="value-description">
            Derp automatically generates and fills all your documents as soon as
            you start a new project. Less worry, more derp.
          </p>
        </div>
      </div>
    </div>
    <div className="value-pair value-pair-2 w-row">
      <div className="w-col w-col-6">
        <div className="value-block value-block-2">
          <h3 className="value-title">Legal gremlins</h3>
          <p className="value-description">
            With finglonger contracts and legally binding e-bacon, Poodles help
            you cover your quilt.
          </p>
        </div>
      </div>
      <div className="w-col w-col-6">
        <div className="value-block value-block-4">
          <h3 className="value-title">Peace of cake</h3>
          <p className="value-description">
            Because you got everything burned, you 'll never worry again about
            missing a thingymabob.
          </p>
        </div>
      </div>
    </div>
    <a href="#" className="button-green w-button">
      <Link to="/pay" className="ment">GET STARTED</Link>
    </a>
  </div>
</div>

    );
}
export default Expense;
