import { useState } from "react";

import styled from "styled-components";
import colores from "../styles/colores";
import { AiOutlineClose } from "react-icons/ai";
import { FaHome, FaHistory, FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbCalendarPlus } from "react-icons/tb";
import Estacionamiento from "../images/estacionamiento.png" 

const BotonMenu = styled.span`
    @media (min-width: 800px) {
        display: none;
    }

    svg {
        width: 30px;
        height: 30px;
        color: #fff;
        cursor: pointer;
    }
`
const Contenedor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 180px;
    height: 100vh;
    background-color: ${colores.moradoClaro};
    padding: 15px 10px;
    z-index: 10;
`
const Navegar = styled.nav`
    margin: 20px 10px;

    > div {
        width: 100%;
        border-bottom: 1px dashed #fff;
        margin: 30px 0 20px 0;
    }

    .active {
        color: #fff;
    }
`
const Link = styled.section`
    display: flex;
    align-items: center;
    color: ${colores.gris};
    font-size: 14px;
    font-weight: lighter;
    margin-bottom: 20px;

    img, svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
`


const Menu = ({ paginaActual }) => {
    const [visible, cambiarVisible] = useState(false);

    return (
        <BotonMenu>
            {visible ?
                <Contenedor>
                    <AiOutlineClose onClick={() => cambiarVisible(false)} />
                    <Navegar>
                        <Link className={paginaActual==="Principal" ? "active" : ""}>
                            <FaHome />Principal
                        </Link>
                        <Link className={paginaActual==="Reservar" ? "active" : ""}>
                            <TbCalendarPlus />Reservar
                        </Link>
                        <Link className={paginaActual==="Historial" ? "active" : ""}>
                            <FaHistory />Historial
                        </Link>
                        <Link className={paginaActual==="Organización" ? "active" : ""}>
                            <img src={Estacionamiento} alt="Organización" />Organización
                        </Link>
                        <div />
                        <Link>
                            <FaUserCircle />Perfil
                        </Link>
                    </Navegar>
                </Contenedor>
            :
                <GiHamburgerMenu onClick={() => cambiarVisible(true)} />
            }
        </BotonMenu>
    )
}

export default Menu;