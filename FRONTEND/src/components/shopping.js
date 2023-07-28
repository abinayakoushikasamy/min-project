import React from 'react';
import { Link } from 'react-router-dom';

import './shopping.css';
   const Shopping=() => {
    return (


<>
<div className="world"></div>
  <div className="listing-section">
    <div className="product">
      <div className="image-box">
        <div className="images" id="image-1" />
      </div>
      <div className="text-box">
        <h2 className="item">TABLE</h2>
        <h3 className="price">$4.99</h3>
        <label htmlFor="item-1-quantity">Quantity:</label>
        <input
          type="text"
          name="item-1-quantity"
          id="item-1-quantity"
          defaultValue={1}
        />
        <button type="button" name="item-1-button" id="item-1-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="product">
      <div className="image-box">
        <div className="images" id="image-2" />
      </div>
      <div className="text-box">
        <h2 className="item">BED </h2>
        <h3 className="price">$4.99</h3>
        <label htmlFor="item-2-quantity">Quantity:</label>
        <input
          type="text"
          name="item-2-quantity"
          id="item-2-quantity"
          defaultValue={1}
        />
        <button type="button" name="item-2-button" id="item-2-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="product">
      <div className="image-box">
        <div className="images" id="image-3" />
      </div>
      <div className="text-box">
        <h2 className="item">WOODEN DOOR</h2>
        <h3 className="price">$4.99</h3>

        <label htmlFor="item-3-quantity">Quantity:</label>
        <input
          type="text"
          name="item-3-quantity"
          id="item-3-quantity"
          defaultValue={1}
        />
        <button type="button" name="item-3-button" id="item-3-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="product">
      <div className="image-box">
        <div className="images" id="image-4" />
      </div>
      <div className="text-box">
        <h2 className="item">SHOPPING BAG</h2>
        <h3 className="price">$4.99</h3>
        <label htmlFor="item-4-quantity">Quantity:</label>
        <input
          type="text"
          name="item-4-quantity"
          id="item-4-quantity"
          defaultValue={1}
        />
        <button type="button" name="item-4-button" id="item-4-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="product">
      <div className="image-box">
        <div className="images" id="image-5" />
      </div>
      <div className="text-box">
        <h2 className="item">CORNER TABLE</h2>
        <h3 className="price">$4.99</h3>

        <label htmlFor="item-5-quantity">Quantity:</label>
        <input
          type="text"
          name="item-5-quantity"
          id="item-5-quantity"
          defaultValue={1}
        />
        <button type="button" name="item-5-button" id="item-5-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="product">
      <div className="image-box">
        <div className="images" id="image-6" />
      </div>
      <div className="text-box">
        <h2 className="item">MIRROR</h2>
        <h3 className="price">$4.99</h3>

        <label htmlFor="item-6-quantity">Quantity:</label>
        <input
          type="text"
          name="item-6-quantity"
          id="item-6-quantity"
          defaultValue={1}
        />
        <button type="button" name="item-6-button" id="item-6-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="product">
      <div className="image-box">
        <div className="images" id="image-7" />
      </div>
      <div className="text-box">
        <h2 className="item">FRIUT</h2>
        <h3 className="price">$4.99</h3>

        <label htmlFor="item-7-quantity">Quantity:</label>
        <input
          type="text"
          name="item-7-quantity"
          id="item-7-quantity"
          defaultValue={1}
        />
        <button type="button" name="item-7-button" id="item-7-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="product">
      <div className="image-box">
        <div className="images" id="image-8" />
      </div>
      <div className="text-box">
        <h2 className="item">STUDYTABLE</h2>
        <h3 className="price">$4.99</h3>
        <label htmlFor="item-8-quantity">Quantity:</label>
        <input
          type="text"
          name="item-8-quantity"
          id="item-8-quantity"
          defaultValue={1}
        />
        <button type="button" name="item-8-button" id="item-8-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="product">
      <div className="image-box">
        <div className="images" id="image-9" />
      </div>
      <div className="text-box">
        <h2 className="item">SCREEN CLOTHES</h2>
        <h3 className="price">$4.99</h3>

        <label htmlFor="item-9-quantity">Quantity:</label>
        <input
          type="text"
          name="item-9-quantity"
          id="item-9-quantity"
          defaultValue={1}
        />
        <button type="button" name="item-9-button" id="item-9-button">
          Add to Cart
        </button>
      </div>
    </div>
    <div className="product">
      <div className="image-box">
        <div className="images" id="image-10" />
      </div>
      <div className="text-box">
        <h2 className="item">BAG</h2>
        <h3 className="price">$4.99</h3>

        <label htmlFor="item-10-quantity">Quantity:</label>
        <input
          type="text"
          name="item-10-quantity"
          id="item-10-quantity"
          defaultValue={1}
        />
        <button type="button" name="item-10-button" id="item-10-button">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  <div className="cart-section">
    <div className="table-heading">
      <h2 className="cart-product">Product</h2>
      <h2 className="cart-price">Price</h2>
      <h2 className="cart-quantity">Quantity</h2>
      <h2 className="cart-total">Total</h2>
    </div>
    <div className="table-content">
      <div className="cart-product">
        <div className="cart-image-box">
          <div className="cart-images" id="image-10" />
        </div>
        <h2 className="cart-item">Lemon</h2>
        <p className="cart-description">A bag of lemons</p>
      </div>
      <div className="cart-price">
        <h3 className="price">$4.99</h3>
      </div>
      <div className="cart-quantity">
        <input
          type="text"
          name="cart-1-quantity"
          id="cart-1-quantity"
          defaultValue={1}
        />
      </div>
      <div className="cart-total">
        <h3 className="price">$4.99</h3>
        <button type="button" className="remove" name="remove-1" id="remove-1">
          x
        </button>
      </div>
    </div>
    <div className="table-content">
      <div className="cart-product">
        <div className="cart-image-box">
          <div className="cart-images" id="image-7" />
        </div>
        <h2 className="cart-item">Banana</h2>
        <p className="cart-description">A bag of bananas</p>
      </div>
      <div className="cart-price">
        <h3 className="price">$4.99</h3>
      </div>
      <div className="cart-quantity">
        <input
          type="text"
          name="cart-1-quantity"
          id="cart-1-quantity"
          defaultValue={1}
        />
      </div>
      <div className="cart-total">
        <h3 className="price">$4.99</h3>
        <button type="button" className="remove" name="remove-2" id="remove-2">
          x
        </button>
      </div>
    </div>
    <div className="table-content">
      <div className="cart-product">
        <div className="cart-image-box">
          <div className="cart-images" id="image-3" />
        </div>
        <h2 className="cart-item">Passionfruit</h2>
        <p className="cart-description">A bag of passionfruit</p>
      </div>
      <div className="cart-price">
        <h3 className="price">$4.99</h3>
      </div>
      <div className="cart-quantity">
        <input
          type="text"
          name="cart-1-quantity"
          id="cart-1-quantity"
          defaultValue={1}
        />
      </div>
      <div className="cart-total">
        <h3 className="price">$4.99</h3>
        <button type="button" className="remove" name="remove-3" id="remove-3">
          x
        </button>
      </div>
    </div>
    <div className="coupon">
      <input type="text" name="coupon" id="coupon" placeholder="COUPON CODE" />
      <button type="button" name="coupon" id="coupon">
        Submit
      </button>
    </div>
    <div className="checkout">
      <button type="button" name="update" id="update">
        Update
      </button>
      <button type="button" name="checkout" id="checkout">
        Checkout
      </button>
      <div className="final-cart-total">
        <h3 className="price">$14.97</h3>
      </div>
    </div>
    <div className="keep-shopping">
      <button type="button" name="keep-shopping" id="keep-shopping">
        Keep Shopping
      </button>
    </div>
  </div>
</>


    )
   };
   export default Shopping;