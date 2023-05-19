import { useEffect, useState } from 'react';
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImages = async (limit) => {
      const newImages = await getGifts(category, limit);
      setImages(newImages);
      setIsLoading(false);
    };

    getImages(10); // Llama a getImages con el límite inicial
  }, [category]);

  return {
    images,
    isLoading,
    setImages,
    setIsLoading,
  };
};
