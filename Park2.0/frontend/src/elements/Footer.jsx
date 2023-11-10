import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/logoM.png";
import colores from "../styles/colores";

const ContenedorFooter = styled.footer`
    background-color: ${colores.oscuro};
    padding: 20px 50px 10px 50px;

    > p {
        color: #fff;
        font-size: 0.8rem;
        width: 100%;
        text-align: center;
    }

    @media (max-width: 800px) {
        padding: 15px;

        > p { margin-top: 10px; }
    }
`
const Contenedor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px dashed ${colores.gris};
    padding-bottom: 20px;
    margin-bottom: 10px;

    @media (max-width: 800px) {
        flex-direction: column;
        padding-bottom: 0px;
        margin-bottom: 0px;
    }
`
const Info = styled.div`
    img { height: 50px; }

    p {
        color: #fff;
        font-size: 0.9rem;
        font-weight: lighter;
        width: 350px;
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px dashed ${colores.gris};
        padding-bottom: 15px;

        img {
            height: 40px;
            margin-bottom: 10px;
        }

        p {
            width: 100%;
            text-align: center;
        }
    }
`
const Links = styled.div`
    p {
        color: #fff;
        font-weight: lighter;
        margin: 5px;
        cursor: pointer;
        transition: all 0.5s ease;
    }

    p:hover { color: ${colores.moradoClaro}; }

    > p {
        color: ${colores.moradoClaro};
        margin-bottom: 5px;
        font-size: 1.1rem;
        cursor: auto;
    }

    @media (max-width: 800px) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 15px 0;
        border-bottom: 1px dashed ${colores.gris};
    }
`
const Contacto = styled.div`
    p {
        color: ${colores.moradoClaro};
        margin-bottom: 10px;
        font-size: 1.1rem;
        cursor: auto;
    }

    div { display: flex; }

    @media (max-width: 800px) {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        padding: 15px 0;
    }
`
const RedSocial = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    transition: background-color 0.5s;
    cursor: pointer;

    svg {
        width: 50%;
        height: 50%;
    }

    &:hover {
        background-color: ${colores.moradoClaro};
        color: #fff;
    }

    @media (max-width: 800px) {
        width: 30px;
        height: 30px;
    }
`


const Footer = () => {
    const navigate = useNavigate();
    return (
        <ContenedorFooter>
            <Contenedor>
                <Info>
                    <img src={Logo} alt="Logo ParkHub" />
                    <p>Somos Park Hub, tu solución de estacionamiento confiable. Simplificamos la reserva de parqueaderos para que tu día sea más fácil. Encuentra tu espacio sin complicaciones con nosotros.</p>
                </Info>

                <Links>
                    <p>Links útiles</p>
                    <div>
                        <p onClick={() => navigate("/")}>Principal</p>
                        <p onClick={() => navigate("/reserva")} >Reservar</p>
                        <p onClick={() => navigate("/historial")} >Historial</p>
                        <p onClick={() => navigate("/organizacion")}>Organización</p>
                    </div>
                </Links>

                <Contacto>
                    <p>Contactenos</p>
                    <div>
                        <RedSocial  onClick={() => window.open("mailto:parkub100@gmail.com")}> <AiOutlineMail /> </RedSocial>

                        <RedSocial onClick={() => window.open("https://wa.me/+573016140593")}><BsWhatsapp /> </RedSocial>

                        <RedSocial onClick={() => window.open("https://www.instagram.com/parkhub__/")}> <AiOutlineInstagram /> </RedSocial>
                    </div>
                </Contacto>

            </Contenedor>
            <p>© Todos los derechos reservados</p>
        </ContenedorFooter>
    )
}

export default Footer;