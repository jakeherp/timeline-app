import React, { useEffect, useRef, useState } from 'react';
import { IPost } from './interfaces/post';

type IntervalFunction = () => (unknown | void)

export const useInterval = (callback: IntervalFunction, delay: number) => {
  const savedCallback = useRef<IntervalFunction | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      if (savedCallback.current !== null) {
        savedCallback.current()
      }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const useFetch = (url: string, options?: any) => {
  const [response, setResponse] = useState<IPost[] | null>(null)
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        if (!signal.aborted) {
          setResponse(json);
        }
      } catch (err) {
        if (!signal.aborted) {
          setError(err);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    doFetch();

    return () => {
      abortController.abort();
    };
  }, []);
  return { response, error, loading };
};