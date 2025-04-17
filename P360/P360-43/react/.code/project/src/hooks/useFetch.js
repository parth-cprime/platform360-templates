import { useEffect, useState } from 'react';
import api from '../services/api';

// Custom hook to fetch data
const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await api(url, options);
        setResponse(res.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { response, error, isLoading };
};

export default useFetch;