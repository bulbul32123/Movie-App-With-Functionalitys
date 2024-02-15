import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../api/api";

export default function useFetch(endpoints) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetchDataFromApi(endpoints);
        setData(response);
        setError(null);
      } catch (err) {
        setError("Something went wrong!");
        setLoading(false)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoints]);

  return { data, loading,setLoading, error };
}
