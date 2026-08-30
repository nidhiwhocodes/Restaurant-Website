import React from "react";
import "./Header.css";
import mealsImage from "../../assets/meals.png";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header-content">
          <h1>ReactMeals</h1>
          <HeaderCartButton onClick={props.onShowCart} cartItemCount={props.cartItemCount} />

          {/* <button className="cart-button" onClick={props.onShowCart}>
            <span className="cart-icon">🛒</span>
            <span>Your Cart</span>
            <span className="cart-badge">{props.cartItemCount || 0}</span>
          </button> */}
        </div>
      </header>

      <div className="hero">
        <img src={mealsImage} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;