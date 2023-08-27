import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCartData } from '../Contexts/CartContext';

const ProductDetails = () => {
  const [plant, setPlant] = useState(null);
  const params = useParams();
  const { addToCart, quantity, setQuantity } = useCartData();
  const [adding, setAdding] = useState(false);

  console.log(params);

  const handleAdd = () => {
    if (quantity >= 1) {
      addToCart(plant, quantity);
      setQuantity(1);
      setAdding(true);
      setTimeout(() => {
        setAdding(false);
      }, 1000);
    } else {
      setQuantity('');
    }
  };

  const handleInputChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  useEffect(() => {
    axios
      .get(`https://romaletodiani.github.io/Ecommerce/db.json`)
      .then((res) => {
        setPlant(res.data.Plants[params.id - 1]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [params.id]);

  return (
    <div className="pt-40 p-10 flex justify-center items-center min-h-screen text-[#fff]">
      {plant ? (
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:w-3/4">
          <div className="flex-1 w-1/2 max-w-[450px] rounded-full overflow-hidden">
            <img className="w-full " src={plant.img1} alt={plant.title} />
          </div>
          <div className="flex-1 text-center flex flex-col gap-3 justify-center items-center">
            <h1 className="text-[clamp(25px,5vw,50px)]">{plant.title}</h1>
            <p className="text-[clamp(25px,3vw,35px)]">${plant.price}</p>
            <p className="text-[clamp(15px,1vw,25px)] md:max-w-[85%]">
              {plant.description}
            </p>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex justify-center items-center gap-10">
                <p className="text-xl">Quantity:</p>
                <input
                  min={1}
                  type="number"
                  name="quantity"
                  value={quantity}
                  onChange={handleInputChange}
                  className="bg-transparent w-16 outline-none border-2 rounded-xl p-3"
                />
              </div>
              <button
                onClick={handleAdd}
                className="p-5 transition hover:bg-[#fff] bg-transparent hover:text-[#38383B] w-[160px] border-2 mt-5 rounded-3xl outline-none font-bold text-xl "
              >
                {adding ? 'Adding...' : 'Add To Cart'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="text-4xl flex justify-center items-center">
            <p className="border-dashed border-2 p-10 rounded-full">
              loading...
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
