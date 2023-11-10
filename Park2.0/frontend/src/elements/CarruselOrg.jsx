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

    img { 
      
        width: 100%;
    }

    @media (max-width: 800px) { height: 300px; }
    @media (max-width: 500px) { height: 250px; }
`


const ContenedorInfo = styled.article`
display: flex;
flex-direction: column;
border-radius: 20px;
word-wrap: break-word;
margin: 40px ;
padding: 10px 20px;
background-color: rgba(255, 255, 255, 0.9); 
box-shadow: -2px -2px 1px rgba(255, 255, 255, 0.9),
            2px 2px 5px  rgba(255, 255, 255, 0.9);

}
`;
const Titulo = styled.h1`
  font-size: 34px;
  font-weight: bold; /* Hace que el título esté en negrita */
  margin-bottom: 20px;

  @media (max-width: 800px) {
      font-size: 20px;
  }
`;

const Parrafo = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;
  color: black;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const ContenedorItems = styled.article`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
position: absolute;
top: 20px; 
border-radius: 10px;
`;
const ContenedorPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const Mitad1 = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: flex-start;

    > div { width: 50%; }

    @media (max-width: 800px) {
        flex-direction: column;
        > div { width: 100% 
        }
        
    }
`
const ContenedorScrollV = styled.article`
display: flex;
flex-direction: column; 
height: 100%; 
overflow-y: auto; 
`

const CarruselOrg= () => {
  const imagenes = [parqueadero1, parqueadero2];
  
  const contenido = [
    {
      titulo: " Sobre Park Hub:",
      parrafo: "Somos Park Hub, una empresa comprometida con la mejora de tu calidad de vida a través de soluciones de estacionamiento innovadoras y convenientes. Fundada con la visión de simplificar la experiencia de estacionamiento en tu universidad, nuestra misión es brindarte acceso rápido y seguro a espacios de estacionamiento, liberándote de la preocupación por encontrar un lugar disponible.",
    },
    {
      titulo: "Nuestra comunidad:",
      parrafo: "Park Hub no es solo una plataforma, es una comunidad de personas comprometidas con la simplificación de la vida diaria. Juntos, estamos cambiando la forma en que las personas se mueven y acceden a los espacios de estacionamiento. Únete a nosotros y sé parte de esta emocionante revolución en la forma en que experimentamos el estacionamiento.",
    },
    
  ];

  return (
    <ContenedorPrincipal>
    <CarruselContenedor>
      <Carousel
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={10000} 
      >
        {imagenes.map((imagen, i) => (
          <ContenedorImagen key={i}>
            <img src={imagen} alt={`Parqueadero ${i + 1}`} />
          </ContenedorImagen>
        ))}
      </Carousel>

      <ContenedorItems>
      
        <Mitad1>
            <div>
            <ContenedorInfo>
                <Titulo>{contenido[0].titulo}</Titulo>
                <Parrafo>{contenido[0].parrafo}</Parrafo>
            </ContenedorInfo>
            </div>
            <div>
            <ContenedorInfo>
                <Titulo>{contenido[1].titulo}</Titulo>
                <Parrafo>{contenido[1].parrafo}</Parrafo>
            </ContenedorInfo>
            </div> 
        </Mitad1>
        
      </ContenedorItems>
     
    </CarruselContenedor>
    </ContenedorPrincipal>
  );
};
export default CarruselOrg;