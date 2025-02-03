import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PaybillsContainer, SearchContainer } from '../components';
import { createContext, useContext } from 'react';
import customFetch from '../utils/customFetch';

export const loader = async () => {
  try {
    const { data } = await customFetch.get('/paybills');
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllPaybillsContext = createContext();

const AllPaybills = () => {
  const { data } = useLoaderData();

  return (
    <AllPaybillsContext.Provider value={{ data }}>
      <SearchContainer />
      <PaybillsContainer />
    </AllPaybillsContext.Provider>
  );
};

export const useAllPaybillsContext = () => useContext(AllPaybillsContext);

export default AllPaybills;
