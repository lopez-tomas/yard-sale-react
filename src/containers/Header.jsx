import React from 'react';
import '@styles/Header.sass';
import Figure from '@components/Figure';
import Categories from '@containers/Categories';
import menuIcon from '@icons/icon_menu.svg';
import miniLogo from '@logos/favicon_yard_sale.svg';
import arrow from '@icons/flechita.svg';
import cart from '@icons/icon_shopping_cart_notification.svg';

const Header = () => {
  return (
    <nav className="menu">
      <Figure figureClass="menu-icon__container" imageClass="menu-icon" src={menuIcon} alt="Menu icon" />

      <div className="menu-left">
        <Figure logo />

        <Figure figureClass="mini-logo__container" imageClass="mini-logo" src={miniLogo} alt="Yard Sale logo" />

        <Categories />
      </div>

      <div className="menu-right">
        <div className="account" onclick="rotateArrow()">
          <p className="email">tomaslopez@gmail.com</p>

          <img className="arrow" src={arrow} alt="Rigth arrow" />
        </div>

        <Figure figureClass="cart__container" imageClass="cart" src={cart} alt="Shopping cart icon" />
      </div>
    </nav>
  )
}

export default Header;