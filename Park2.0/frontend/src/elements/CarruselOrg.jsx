import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { TbCalendarPlus } from "react-icons/tb";
import { FaHistory } from "react-icons/fa";
import parqueadero1 from "../images/carrusel/parqueadero1.png"
import parqueadero2 from "../images/carrusel/parqueadero2.jpg"
import colores from "../styles/colores";

const CarruselContenedor = styled.div`
    position: relative;
`
const ContenedorImagen = styled.article`
    height: 600px;
    width: 100%;

    img { 
        opacity: 0.6;
        width: 100%;
    }

    @media (max-width: 800px) { height: 300px; }
    @media (max-width: 500px) { height: 250px; }
`

const Carrusel = () => {
    const navigate = useNavigate();
    const imagenes = [parqueadero1, parqueadero2]

    return (
        <CarruselContenedor>
            <Carousel
                infiniteLoop={true}
                showIndicators={true}
                showThumbs={false}
                showStatus={false}
                thumbWidth={60}
                autoPlay={true}
                interval={5000}
            >
                {imagenes.map((imagen, i) => (
                    <ContenedorImagen key={i}>
                        <img src={imagen} />
                    </ContenedorImagen>
                ))}
            </Carousel>
        </CarruselContenedor>
    )
}

export default Carrusel;