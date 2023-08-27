import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useCartData } from '../Contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CartItem = ({ item }) => {
  const navigate = useNavigate();

  const navigateClick = () => {
    navigate(`/shop/${item.id}`);
  };
  const { incrQuantity, decrQuantity, removeFromCart } = useCartData();
  return (
    <div className="flex justify-between border-b-2 border-[#646464] py-10">
      <div className="flex gap-5 sm:flex-row flex-col">
        <div className="w-[150px] h-[150px]">
          <img
            className="w-full h-full object-cover rounded-full"
            src={`${item.img1}`}
            alt={`${item.title}`}
          />
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <p
            onClick={navigateClick}
            className="text-2xl cursor-pointer sm:text-[clamp(15px,2vw,25px)]"
          >
            {item.title}
          </p>
          <div className="flex gap-5 sm:text-[clamp(15px,2vw,25px)]">
            <button onClick={() => item.quantity > 1 && decrQuantity(item)}>
              <RemoveIcon />
            </button>
            <p className="w-[3ch] text-center">{item.quantity}</p>
            <button onClick={() => incrQuantity(item)}>
              <AddIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end gap-5">
        <button onClick={() => removeFromCart(item.id)}>
          <CloseIcon />
        </button>
        <p>${item.price * item.quantity}.00</p>
      </div>
    </div>
  );
};

export default CartItem;
