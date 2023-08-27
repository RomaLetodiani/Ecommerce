import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/plants')
      .then((res) => setData(res.data))
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
