import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import parqueadero1 from "../images/carrusel/parqueadero1.png";
import parqueadero2 from "../images/carrusel/parqueadero2.jpg";
import { ContenedorSombra, Formulario, Input, Mitad } from "../styles/varios";

const CarruselContenedor = styled.div`
  position: relative;
`;

const ContenedorImagen = styled.article`
  height: 600px;
  width: 100%;
  background-color: #f2f2f2; /* Fondo de imagen */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ContenedorInfo = styled.article`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff; /* Color del texto */
  background-color: rgba(0, 0, 0, 0.6); /* Fondo semitransparente */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75); /* Sombreado */
  margin-bottom: 20px; /* Separación entre contenedores de información */
  width: 80%; /* Ancho del contenedor */
`;
const Titulo = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  
  @media (max-width: 800px) {
      font-size: 20px;
  }
`
;

const Parrafo = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;

@media (max-width: 800px) {
    font-size: 16px;
}
`;

const CarruselOrg= () => {
  const imagenes = [parqueadero1, parqueadero2];

  
  const contenido = [
    {
      titulo: "Título 1",
      parrafo: "Contenido del párrafo 1.",
    },
    {
      titulo: "Título 2",
      parrafo: "Contenido del párrafo 2.",
    },
    // Agrega más objetos según sea necesario
  ];

  return (
    <CarruselContenedor>
      <Carousel
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={10000} // Intervalo de 10 segundos entre imágenes
      >
        {imagenes.map((imagen, i) => (
          <ContenedorImagen key={i}>
            <img src={imagen} alt={`Parqueadero ${i + 1}`} />
          </ContenedorImagen>
        ))}
      </Carousel>


      {contenido.map((item, index) => (
        <ContenedorInfo key={index}>
          <Titulo>{item.titulo}</Titulo>
          <Parrafo>{item.parrafo}</Parrafo>
        </ContenedorInfo>
      ))}
    </CarruselContenedor>
  );
};
export default CarruselOrg;