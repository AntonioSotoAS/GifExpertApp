import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { getGifts } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading, setImages, setIsLoading } = useFetchGifs(category);
  const [limit, setLimit] = useState(10);
  const montoIncrementado = 10;

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        setLimit((limitePrevio) => limitePrevio + montoIncrementado);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const getImages = async (limit) => {
      const newImages = await getGifts(category, limit);
      setImages(newImages);
      setIsLoading(false);
    };

    getImages(limit); // Llama a getImages con el valor actual de 'limit'
  }, [limit, category]);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className="container-grid">
        <div className="card-grid">
          {images.slice(0, limit).map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GifGrid;
