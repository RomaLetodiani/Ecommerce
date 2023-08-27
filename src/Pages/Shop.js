import React from 'react';
import { useData } from '../Contexts/DataContext';
import Item from '../Components/Item';
import { Link } from 'react-router-dom';

const Shop = () => {
  const { data } = useData();
  return (
    <div className="text-[#fff] text-center pt-40 pb-20">
      <h1 className="font-bold uppercase text-4xl py-5">Our Plants</h1>
      <p className="text-xl py-5 max-w-[90%] m-auto">
        In the gentle embrace of nature's creations, we find solace and harmony.
      </p>
      <div className="flex flex-wrap p-4 md:p-12 justify-center items-center gap-16 text-center text-[#fff]">
        {data.map((plant) => (
          <div key={plant.id} className="max-w-[350px] w-full cursor-pointer">
            <Link to={`${plant.id}`}>
              <Item plant={plant} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
