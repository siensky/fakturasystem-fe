import { useEffect, useState } from "react";
import apiClient from "../api/client";

function useFetch<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get(endpoint);
      setData(response.data);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return {
    refetch: fetchData,
    error,
    data,
    loading,
  };
}

export default useFetch;
