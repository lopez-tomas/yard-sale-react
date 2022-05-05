import React from 'react';
import '@styles/DesktopMenu.sass';

const DesktopMenu = () => {
  return (
    <div className="desktop-menu">
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>

        <li>
          <a href="/my-account.html">My account</a>
        </li>
        <hr />
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  )
}

export default DesktopMenu;
