import { useState } from "react";
import { useUser } from "../context/userContext";
import { AiOutlineClose } from "react-icons/ai";
import { FaHistory, FaHome, FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbCalendarPlus } from "react-icons/tb";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Estacionamiento from "../images/estacionamiento.png";
import colores from "../styles/colores";

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
const LinkS = styled(Link)`
    display: flex;
    align-items: center;
    color: ${colores.gris};
    font-size: 14px;
    font-weight: lighter;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;

    img,
    svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    &:hover {
        color: #fff;
    }
`;


const Menu = ({ paginaActual }) => {
    const [visible, cambiarVisible] = useState(false);
    const { nombreUsuario } = useUser();

    return (
        <BotonMenu>
            {visible ?
                <Contenedor>
                    <AiOutlineClose onClick={() => cambiarVisible(false)} />
                    <Navegar>
                        <LinkS to="/" 
                            className={paginaActual==="Principal" ? "active" : ""}>
                            <FaHome />Principal
                        </LinkS>
                        <LinkS to="/reserva" 
                             className={paginaActual==="Reserva" ? "active" : ""}>
                
                            <TbCalendarPlus />Reservar
                        </LinkS>
                        <LinkS to="/historial" 
                                className={paginaActual==="Historial" ? "active" : ""}>
                            <FaHistory />Historial
                        </LinkS>
                        <LinkS to="/organizacion"
                                className={paginaActual==="Organizacion" ? "active" : ""}>
                            <img src={Estacionamiento} alt="Organización" />Organización
                        </LinkS>
                        <div />
                        <LinkS>
                            <FaUserCircle />{nombreUsuario}
                        </LinkS>
                    </Navegar>
                </Contenedor>
            :
                <GiHamburgerMenu onClick={() => cambiarVisible(true)} />
            }
        </BotonMenu>
    )
}

export default Menu;