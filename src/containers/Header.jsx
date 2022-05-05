import React from 'react';
import '@styles/Header.sass';
import Figure from '@components/Figure';
import Categories from '@containers/Categories';

const Header = () => {
  return (
    <nav className="menu">
      <Figure figureClass="menu-icon__container" imageClass="menu-icon" src="./icons/icon_menu.svg" alt="Menu icon" />

      <div className="menu-left">
        <Figure logo={true} />

        <Figure figureClass="mini-logo__container" imageClass="mini-logo" src="./logos/favicon_yard_sale.svg" alt="Yard Sale logo" />

        <Categories />
      </div>

      <div className="menu-right">
        <div className="account" onclick="rotateArrow()">
          <p className="email">tomaslopez@gmail.com</p>

          <img className="arrow" src="./icons/flechita.svg" alt="Rigth arrow" />
        </div>

        <Figure figureClass="cart__container" imageClass="cart" src="./icons/icon_shopping_cart_notification.svg" alt="Shopping cart icon" />
      </div>
    </nav>
  )
}

export default Header;