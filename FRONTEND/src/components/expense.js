import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './expense.css';

const Expense=()=>{
    return(

<div className="gray-section-slanted">
  <div className="container-slanted container-slanted-center w-container">
    <h2 className="section-headline-green section-headline-green-center">
      PAYMENT
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
          <h3 className="value-title">CASH ENTRY</h3>
        </div>
      </div>
    </div>
    <div className="value-pair value-pair-2 w-row">
      <div className="w-col w-col-6">
        <div className="value-block value-block-2">
          <h3 className="value-title">RECEIPT</h3>
        </div>
      </div>
      <div className="w-col w-col-6">
        <div className="value-block value-block-4">
          <h3 className="value-title">LIST OF PAYMENTS </h3>
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
