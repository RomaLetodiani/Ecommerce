import React from 'react';

import { Button } from '../Components/Button';
import CartItem from '../Components/CartItem';
import { useCartData } from '../Contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartData, total } = useCartData();
  return (
    <div className="mt-[10vh] min-h-[60vh] p-10 sm:px-40 flex flex-col">
      {cartData.length === 0 ? (
        <div className="min-h-[60vh] gap-10 flex flex-col justify-center items-center text-center">
          <h1 className="text-[clamp(18px,5vw,28px)]">
            Shopping Cart Is Empty
          </h1>
          <Link to={'/shop'}>
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <>
          <div>
            <h1 className="text-2xl mb-10">Shopping Cart</h1>
            {cartData.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-10 flex flex-col self-end">
            <div className="flex justify-between gap-10 text-2xl mb-5">
              <p>Total : </p>
              <p className="w-[6ch]">${total}.00</p>
            </div>
            <Button className="self-end">Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
