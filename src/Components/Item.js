import React, { useState } from 'react';

const Item = ({ plant }) => {
  const [isHovered, setIsHovered] = useState(false);

  let hoverTimeout;

  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => {
      setIsHovered(true);
    }, 300); // Adjust the delay time as needed (in milliseconds)
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setIsHovered(false);
  };
  return (
    <>
      <div
        className=" text-2xl w-full h-[350px] md:h-[500px] relative rounded-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="w-full h-full object-cover absolute"
          src={isHovered ? plant.img2 : plant.img1}
          alt={plant.title}
        />
        {isHovered && (
          <div className="absolute bg-[#00000052] w-full h-full flex justify-center items-center text-3xl">
            <h1 className="rounded-full border-2 p-2 w-3/4">See Details</h1>
          </div>
        )}
      </div>
      <div>
        <h2 className="text-2xl my-5">{plant.title}</h2>
        <p className="text-2xl">${plant.price}</p>
      </div>
    </>
  );
};

export default Item;
