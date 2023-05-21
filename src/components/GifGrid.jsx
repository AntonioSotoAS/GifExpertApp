import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { getGifts } from "../helpers/getGifs";
import { Card, Col, Container, Row } from "react-bootstrap";


export const GifGrid = ({ category }) => {
  const { images, isLoading, setImages, setIsLoading } = useFetchGifs(category);
  const [limit, setLimit] = useState(10);
  const montoIncrementado = 10;
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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

      <Container className={`gif-container ${darkMode ? 'dark-container' : ''}`}>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} className={`g-4 ${darkMode ? 'dark-row' : ''}`}>
            {images.map((image) => (
              <Col key={image.id} className={`gif-col ${darkMode ? 'dark-col' : ''}`}>
                <GifItem {...image} />
              </Col>
            ))}
          </Row>
        </Container>
    </>
  );
};

export default GifGrid;
