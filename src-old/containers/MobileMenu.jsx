import React from 'react';
import '@styles/MobileMenu.sass';

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <ul className="top">
        <li className="top-title">Categories</li>

        <li>
          <a href="/">All</a>
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

      <ul className="mid">
        <li>
          <a href="">My orders</a>
        </li>
        <li>
          <a href="/my-account.html">My account</a>
        </li>
      </ul>

      <ul className="bottom">
        <li className="email">tomaslopez@gmail.com</li>
        <li>
          <a className="sign-out" href="/mobile-menu-2.html">Sign out</a>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu;
