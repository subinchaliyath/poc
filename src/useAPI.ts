import { useState, useEffect, useCallback } from "react";

interface APIState<T> {
  loading: boolean;
  data: T | null;
  error: string | null;
}

/**
 * Custom hook to handle API requests (GET, POST, PUT, DELETE)
 * @param apiFunction - The API function that returns a Promise
 * @param dependencies - Dependencies that trigger a re-fetch
 */
export function useAPIRequest<T>(
  apiFunction: (...args: any[]) => Promise<T>, 
  dependencies: any[] = []
): APIState<T> {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Memoize API function call to prevent unnecessary re-fetching
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiFunction();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, dependencies);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, data, error };
}
