import { FaHistory } from "react-icons/fa";
import { TbCalendarPlus } from "react-icons/tb";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import parqueadero1 from "../images/carrusel/parqueadero1.png";
import parqueadero2 from "../images/carrusel/parqueadero2.jpg";
import colores from "../styles/colores";
import { useUser } from "../context/userContext";

const CarruselContenedor = styled.div`
    position: relative;
`
const ContenedorImagen = styled.article`
    height: 400px;
    width: 100%;

    img { 
        opacity: 0.6;
        width: 100%;
    }

    @media (max-width: 800px) { height: 300px; }
    @media (max-width: 500px) { height: 250px; }
`

const ContenedorInfo = styled.article`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    z-index: 1;

    > p {
        margin-top: 60px;
        font-size: 18px;
        font-weight: bold;
    }

    div { 
        display: flex;

        div:hover {
            transition: background-color 0.3s;
            background-color: ${colores.moradoClaro};
        }
    }

    @media (max-width: 800px) {
        > p {
            margin-top: 30px;
            margin-bottom: 20px;
        }
        > div { flex-direction: column; }
    }
`

const Boton = styled.div`
    width: 250px;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 60px;
    border-radius: 20px;
    background-color: ${colores.moradoOscuro};
    cursor: pointer;

    p {
        font-size: 16px;
        color: #fff;
        font-weight: bold;
    }

    svg {
        width: 20px;
        height: 20px;
        color: #fff;
    }

    @media (max-width: 800px) {
        width: 70vw;
        max-width: 300px;
        height: 40px;
        margin: 10px;

        p { font-size: 14px; }

        svg {
            width: 15px;
            height: 15px;
        }
    }
`

const Contenedor1 = styled.article`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: 10px auto;


> p {
    margin-top: 60px;
    font-size: 26px;
    font-weight: bold;
}

@media (max-width: 800px) {
 
    p { font-size: 20px; }
`


const Carrusel = () => {
    const navigate = useNavigate();
    const imagenes = [parqueadero1, parqueadero2]
    const { nombreUsuario } = useUser();

    return (
        <CarruselContenedor>
            <ContenedorInfo>
                <Contenedor1><p>Bienvenido {nombreUsuario}</p></Contenedor1>
                <div>
                    <Boton>
                        <TbCalendarPlus />
                        <p onClick={() => navigate("/reserva")}>Reservar</p>
                        <TbCalendarPlus />
                    </Boton>
                    <Boton>
                        <FaHistory />
                        <p onClick={() => navigate("/historial")}>Historial</p>
                        <FaHistory />
                    </Boton>
                </div>
            </ContenedorInfo>
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