import { useEffect } from 'react';

const initialData = {
  posts: false,
  groups: false,
  notifications: false,
};

export const getIsCached = () => {
  const data = localStorage.getItem('isCached');
  return data ? JSON.parse(data) : null;
};

export const setIsCached = (key, isValue = true) => {
  const data = getIsCached();
  if (!data) return;
  data[key] = isValue;
  localStorage.setItem('isCached', JSON.stringify(data));
};

const useLocalStorage = () => {
  useEffect(() => {
    localStorage.setItem('isCached', JSON.stringify(initialData));
  }, []);

  return [];
};

export default useLocalStorage;
