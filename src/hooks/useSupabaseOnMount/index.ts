import {useEffect, useState} from 'react';

export const useSupabaseOnMount = <T>(
  fetcher: (...args: unknown[]) => Promise<{data: T}>,
  args: Parameters<typeof fetcher> = [],
) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const getData = async () => {
      const {data: response} = await fetcher(...args);

      if (response) {
        setData(response);
      }
    };

    getData();
  }, []);

  return {data};
};
