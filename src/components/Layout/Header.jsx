import React from "react";
import "./Header.css";
import mealsImage from "../../assets/meals.png";


const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header-content">
          <h1>ReactMeals</h1>

          <button className="cart-button" onClick={props.onShowCart}>
            <span className="cart-icon">🛒</span>
            <span>Your Cart</span>
            <span className="cart-badge">{props.cartItemCount || 0}</span>
          </button>
        </div>
      </header>

      <div className="hero">
        <img src={mealsImage} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;