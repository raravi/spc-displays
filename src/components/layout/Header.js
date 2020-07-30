import React from 'react';

export const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__title">
        <a className="header__item-link" href="/">Unic Displays</a>
      </h1>
      <ul className="header__list">
        <li className="header__list-item">
          <a className="header__item-link" href="/products">Products</a>
        </li>
        <li className="header__list-item">
          <a className="header__item-link" href="/about">About Us</a>
        </li>
      </ul>
    </header>
  )
}