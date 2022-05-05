import React from 'react';
import '@styles/Header.sass';

const Header = () => {
  return (
    <nav className="menu">
      <figure className="menu-icon__container">
        <img className="menu-icon" src="./icons/icon_menu.svg" alt="Menu icon" />
      </figure>

      <div className="menu-left">
        <figure className="logo__container">
          <img className="logo" src="./logos/logo_yard_sale.svg" alt="Yard Sale logo" />
        </figure>

        <figure className="mini-logo__container">
          <img className="mini-logo" src="./logos/favicon_yard_sale.svg" alt="Yard Sale logo" />
        </figure>

        <ul className="categories">
          <li>
            <a href="">All</a>
          </li>
          <li>
            <a href="">Clothes</a>
          </li>
          <li>
            <a href="">Electronics</a>
          </li>
          <li>
            <a href="">Furnitures</a>
          </li>
          <li>
            <a href="">Toys</a>
          </li>
          <li>
            <a href="">Others</a>
          </li>
        </ul>
      </div>

      <div className="menu-right">
        <div className="account" onclick="rotateArrow()">
          <p className="email">tomaslopez@gmail.com</p>

          <img className="arrow" src="./icons/flechita.svg" alt="Rigth arrow" />
        </div>

        <figure className="cart__container">
          {/*<img className="cart" src="./icons/icon_shopping_cart.svg" alt="Cart icon" >*/}
          <img className="cart" src="./icons/icon_shopping_cart_notification.svg" alt="Shopping cart icon" />
        </figure>
      </div>
    </nav>
  )
}

export default Header;