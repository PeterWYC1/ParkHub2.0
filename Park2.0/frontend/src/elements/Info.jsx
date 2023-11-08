import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Imagen from "../images/carrusel/parqueadero1.png";

const Contenedor = styled.article`
    display: flex;
    margin: 20px;

    img { height: 160px; }

    .ocultar { display: none; }
    .mostrar { max-height: none !important; }

    @media (max-width: 800px) {
        margin: 20px 10px;

        img { 
            height: 160px;
            width: 120px;
            object-fit: cover;
        }
    }
`
const Texto = styled.div`
    display: flex;

    p {
        width: 50%;
        padding: 15px;
        text-align: justify;
    }

    .primero { border-right: 1px dashed #000; }

    @media (max-width: 800px) {
        margin-left: 10px;
        flex-direction: column;
        max-height: 160px;
        overflow: hidden;
        
        p {
            width: 100%;
            padding: 0;
        }

        .primero { 
            border: none;
            margin-bottom: 10px;
        }
    }
`
const SeguirLeyendo = styled.article`
    display: none;
    margin-left: 10px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        text-align: center;
        border-radius: 5px;
        font-weight: lighter;
        cursor: pointer;
    }

    svg {
        margin-left: 10px;
        width: 10px;
        height: 10px;
    }

    @media (max-width: 559px) {
        display: block;
    }
`


const Info = () => {
    const navigate = useNavigate();
    const [seguirLeyendo, setSeguirLeyendo] = useState(false)
    
    const handleClick = () => {
        setSeguirLeyendo(true)
    }

    return (
        <Contenedor>
            <img src={Imagen} />
            <div>
                <Texto className={seguirLeyendo ? 'mostrar' : ''}>
                    <p className="primero">Somos Park Hub, tu socio confiable en la búsqueda de estacionamiento conveniente y sin complicaciones. Nuestra misión es simplificar tu vida diaria al brindarte acceso rápido y seguro a espacios de estacionamiento en tu universidad.</p>
                    <p>Con una plataforma intuitiva y una red de socios de confianza, te ofrecemos la tranquilidad de saber que tu lugar de estacionamiento está reservado y listo para ti. Confía en Park Hub para hacer que encontrar un lugar para estacionar sea una experiencia sin estrés. ¡Únete a nosotros en nuestro viaje hacia un estacionamiento más inteligente y eficiente!</p>
                </Texto>
                <SeguirLeyendo onClick={handleClick} className={seguirLeyendo ? 'ocultar' : ''}>
                    <div>Seguir leyendo<AiOutlineArrowDown /></div>
                </SeguirLeyendo>
            </div>
        </Contenedor>
    )
}

export default Info;