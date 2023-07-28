import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './payment.css';
const Payment=()=>{
return(

    <main className="page-content">

    <header className="form-header">
      <h1 className="form-header__slogan">Payment Form</h1>
    </header>
    <form action="" className="payment-form">
      <div className="payment-form__group payment-form__group-medium">
        <label htmlFor="owner" className="payment-form__label">
          Name :
        </label>
        <input type="text" id="owner" className="payment-form__input" />
      </div>
      <div className="payment-form__group payment-form__group-small">
        <label htmlFor="cvv" className="payment-form__label">
          CVV Number : 
        </label>
        <input type="text" id="cvv" className="payment-form__input" />
      </div>
      <div className="payment-form__group payment-form__group-large">
        <label htmlFor="card-number" className="payment-form__label">
          Card Number : 
        </label>
        <input type="text" id="card-number" className="payment-form__input" />
      </div>
      <div className="payment-form__group payment-form__group-normal">
        <label className="payment-form__label">Expiration Date : </label>
        <select name="mounth" className="payment-form__select">
          <option>January</option>
          <option >February </option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option >July</option>
          <option >August</option>
          <option >September</option>
          <option >October</option>
          <option >November</option>
          <option >December</option>
        </select>
        <select name="year" className="payment-form__select">
          <option value={16}> 2016</option>
          <option value={17}> 2017</option>
          <option value={18}> 2018</option>
          <option value={19}> 2019</option>
          <option value={20}> 2020</option>
          <option value={21}> 2021</option>
          <option value={21}> 2022</option>
          <option value={21}> 2023</option>
          <option value={21}> 2024</option>
          <option value={21}> 2025</option>
          <option value={21}> 2026</option>
          <option value={21}> 2027</option>

        </select>
      </div>
      <div className="payment-form__group payment-form__group-normal payment-form__pic-container">
        <img
          src="data:image/png;base64,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"
          alt="VISA"
          className="payment-form__pic"
        />
        <img
          src="data:image/png;base64,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"
          alt="MasterCard"
          className="payment-form__pic"
        />
        <img
          src="data:image/png;base64,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"
          alt="AMEX"
          className="payment-form__pic"
        />
      </div>
      <div className="payment-form__group payment-form__group-large">
        <button type="submit" className="payment-form__button">
          Confirm
        </button>
      </div>
    </form>

</main>

      
 )
};
export default Payment;
