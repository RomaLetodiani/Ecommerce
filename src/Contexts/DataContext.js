import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://romaletodiani.github.io/Ecommerce/db.json')
      .then((res) => setData(res.data.Plants))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const contextValue = {
    data,
    setData,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
