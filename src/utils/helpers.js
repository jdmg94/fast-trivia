export const toQueryParams = data => {
  const params = new URLSearchParams();

  Object.entries(data).map(([key, value]) => {
    params.append(key, value);
    
    return null;
  });

  return `?${params.toString()}`;
};