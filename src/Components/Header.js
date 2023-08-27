import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from './Hamburger';
import MobileNav from './MobileNav';
import { useCartData } from '../Contexts/CartContext';

const Header = () => {
  const { cartItemsTotal } = useCartData();
  const [isActive, setIsActive] = useState(false);
  const location = useLocation().pathname;
  return (
    <>
      <header
        className={` fixed z-10 w-full h-[10vh] border-b-2 bg-[#38383B] text-[#fff] flex items-center justify-between md:px-8 p-6`}
      >
        <Link to="/">
          <h1 className="text-[clamp(25px,3vw,35px)]">Green Harmony</h1>
        </Link>
        <nav className="md:block hidden">
          <ul className="flex justify-center items-center gap-10 font-bold text-xl">
            <li
              className={`py-2 ${
                location.includes('/shop') ? 'border-b-2' : ''
              }`}
            >
              <Link to="/shop">Shop</Link>
            </li>
            <li
              className={`py-2 ${
                location.includes('/contact') ? 'border-b-2' : ''
              }`}
            >
              <Link to="/contact">Contact</Link>
            </li>
            <li
              className={`py-2 ${
                location.includes('/cart') ? 'border-b-2' : ''
              }`}
            >
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden gap-10 md:flex ">
          <ul className="flex gap-5">
            <a href="https://www.facebook.com/LetodianiRoma/" target="__blank">
              <li>
                <FacebookIcon />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/letodiani-roma/"
              target="__blank"
            >
              <li>
                <LinkedInIcon />
              </li>
            </a>
            <a href="https://github.com/RomaLetodiani" target="__blank">
              <li>
                <GitHubIcon />
              </li>
            </a>
          </ul>
          <Link to="/cart">
            <div className="flex gap-3">
              <ShoppingCartIcon />
              <p className="w-[3ch]">{cartItemsTotal}</p>
            </div>
          </Link>
        </div>
        <Hamburger isActive={isActive} setIsActive={setIsActive} />
      </header>
      <MobileNav isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Header;
