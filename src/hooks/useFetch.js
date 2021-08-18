import { useState, useEffect } from 'react';

export default function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // abort controller
  const abortContoller = new AbortController();

  const { REACT_APP_API_KEY } = process.env;

  const urlWithApiKey = `${url}?api_key=${REACT_APP_API_KEY}`
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(urlWithApiKey, {
          ...options,
          signal: abortContoller.signal,
        });
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      abortContoller.abort();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    error,
    loading,
  };
};
