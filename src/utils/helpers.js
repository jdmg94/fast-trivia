import useSwr from "swr";

const fetcher = (...args) => fetch(...args).then(response => response.json());

export const useSuspense = (path, options) => useSwr(path, fetcher, { ...options, useSuspense: true });

export const toQueryParams = data => {
  const params = new URLSearchParams();

  Object.entries(data).map(([key, value]) => {
    params.append(key, value);
    
    return null;
  });

  return `?${params.toString()}`;
};
