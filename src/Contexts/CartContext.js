import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';

const CartContext = createContext();
export const useCartData = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const [quantity, setQuantity] = useState(1);

  const [total, setTotal] = useState(0);

  const [cartItemsTotal, setCartItemsTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const newTotal = cartData.reduce((t, item) => {
        return t + item.quantity * parseFloat(item.price);
      }, 0);
      setTotal(newTotal);
    };

    const getCartItemsTotal = () => {
      const newCartItemsTotal = cartData.reduce((t, item) => {
        return t + item.quantity;
      }, 0);
      setCartItemsTotal(newCartItemsTotal);
    };

    getCartItemsTotal();
    getTotal();
  }, [cartData]);

  const incrQuantity = (plant) => {
    const itemIndex = cartData.findIndex((item) => item.id === plant.id);

    const updatedCartData = [...cartData];
    updatedCartData[itemIndex].quantity++;
    setCartData(updatedCartData);
  };

  const decrQuantity = (plant) => {
    const itemIndex = cartData.findIndex((item) => item.id === plant.id);

    const updatedCartData = [...cartData];
    updatedCartData[itemIndex].quantity--;
    setCartData(updatedCartData);
  };

  const removeFromCart = (id) => {
    const updatedCartData = cartData.filter((item) => item.id !== id);
    setCartData(updatedCartData);
  };

  const addToCart = (plant, quantity) => {
    const existingItemIndex = cartData.findIndex(
      (item) => item.id === plant.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartData = [...cartData];
      updatedCartData[existingItemIndex].quantity += quantity;
      setCartData(updatedCartData);
    } else {
      setCartData([...cartData, { ...plant, quantity }]);
    }
  };

  const contextValue = {
    cartData,
    setCartData,
    addToCart,
    quantity,
    setQuantity,
    incrQuantity,
    decrQuantity,
    removeFromCart,
    total,
    cartItemsTotal,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
