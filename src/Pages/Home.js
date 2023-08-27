import styled from '@emotion/styled';
import { Button } from '../Components/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Banner = styled.div`
  background-image: url('https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860294-ZW36VSRKLLBG3A4K2KAU/Header_02_022-copy.jpg?format=2500w');
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  padding: 20px;

  h1 {
    font-size: clamp(25px, 6vw, 50px);
    font-weight: bold;
    margin-bottom: 50px;
    max-width: 750px;
  }
`;

const Banner2 = styled.div`
  background-image: url('https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860349-HKXFVXFJOL0J8C1UMRCY/Texture_12_003-1-copy.jpg?format=2500w');
  width: 100%;
  padding: 30px;
  min-height: 60vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  gap: 20px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;

  h1 {
    font-size: 30px;
  }
  p {
    margin-bottom: 30px;
  }
  input {
    margin-bottom: 20px;
    padding: 10px;
    color: #000;
    width: 250px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
`;

const Home = () => {
  const [inputVal, setInputVal] = useState('');

  return (
    <div>
      <Banner className="sm:min-h-screen min-h-[70vh]">
        <div className="flex flex-col">
          <h1>Make your house look more beautiful with our plants</h1>
          <div className="flex gap-5">
            <Link to="/shop">
              <Button>Shop Now</Button>
            </Link>
            <Link to="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </Banner>
      <div className=" border-y-2 flex md:flex-row flex-col pt-24 p-16 justify-center items-center gap-10 text-[#fff] text-center">
        <div className="max-w-[500px] flex-1">
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860334-9DLEMOHNZRZ2D2H6Q53Z/plant_2_optimized.gif?format=2500w"
              alt="Flowers gif"
              className="w-full"
            />
          </div>
          <h2 className="md:text-2xl text-1xl my-5">
            Is It Flowers You're After?
          </h2>
          <p className="h-[100px] text-xs md:text-base">
            Flowering plants are stunning, but require a bit more work than
            their non-flowering brethren. Learn how to keep them happy.
          </p>
          <Link to="/shop">
            <Button>Shop Now</Button>
          </Link>
        </div>
        <div className="max-w-[500px] flex-1">
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/624b3c6dbfcb28795baabd33/1649097860340-MCULH1GW7GYGP5X3SZW8/plant_1_optimized.gif?format=2500w"
              alt="Succulents gif"
              className="w-full"
            />
          </div>
          <h2 className="md:text-2xl text-1xl my-5">
            Searching for Succulents?
          </h2>
          <p className="h-[100px] text-xs md:text-base">
            If you have a sunny windowsill, you can be a succulent owner. These
            hardy and beautiful plants are as easy as they come.
          </p>
          <Link to="/shop">
            <Button>Shop Now</Button>
          </Link>
        </div>
      </div>
      <Banner2>
        <h1>They grow up so fast.</h1>
        <p>Don't miss a thing. Sign up to receive news and updates.</p>
        <input
          key="email-input"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          type="email"
          placeholder="Email Address"
        />
        <Button onClick={() => setInputVal('')}>Sign Up</Button>
      </Banner2>
    </div>
  );
};

export default Home;
