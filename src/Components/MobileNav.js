import { Button } from './Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const MobNavDiv = styled.div`
  @media (max-width: 768px) {
    ${(props) =>
      props.isActive &&
      `
        right:0;
    `}
  }

  position: fixed;
  z-index: 9;
  background-color: #fff;
  box-shadow: 0px 0px 50px 30px rgba(0, 0, 0);
  border-radius: 0 0 0 50px;
  top: 10vh;
  right: -100%;
  width: 200px;
  padding: 30px;
  color: #38383b;
  transition: right 0.5s ease-in-out;

  Button {
    border: 1px solid #38383b;
    box-shadow: -5px 5px 0px rgb(56, 56, 59);
    padding: 10px 30px;
    width: 120px;
    transition: all 0.2s ease-in-out;
  }
  Button:hover {
    transform: scale(1.2);
  }
`;

const MobileNav = ({ isActive, setIsActive }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <MobNavDiv
      className="flex flex-col justify-center items-center gap-5"
      isActive={isActive}
    >
      <Button
        onClick={() => {
          navigate('/shop');
          handleClick();
        }}
      >
        Shop
      </Button>
      <Button
        onClick={() => {
          navigate('/contact');
          handleClick();
        }}
      >
        Contact
      </Button>
      <Button
        onClick={() => {
          navigate('/cart');
          handleClick();
        }}
      >
        Cart
      </Button>
    </MobNavDiv>
  );
};

export default MobileNav;
