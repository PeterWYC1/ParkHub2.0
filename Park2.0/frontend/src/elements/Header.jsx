import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Menu from "../components/Menu";
import { useUser } from "../context/userContext";
import LogoB from "../images/logoB.png";
import colores from "../styles/colores";

const Contenedor = styled.div`
    background-color: ${colores.moradoClaro};
    height: 100px;
    width: 100vw;
    padding: 20px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 800px) {
        height: 60px;
        padding: 10px;
    }
`
const Navegar = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
`
const Logo = styled.img`
    height: 100%;
    cursor: pointer;
`
const Botones = styled.div`
    display: flex;
    margin-left: 20px;

    p {
        margin-right: 15px;
        cursor: pointer;
        color: ${colores.gris};
        transition: all 0.3s;
    }

    p:hover, p.active {
        color: #fff;
    }

    @media (max-width: 800px) {
        display: none;
    }
`
const Usuario = styled.div`
    display: flex;
    align-items: center;
    color: ${colores.gris};

    p {
        margin-right: 15px;
        cursor: pointer;
        color: ${colores.gris};
        transition: all 0.3s;
    }

    p:hover {
        color: #fff;
    }

    svg {
        height: 30px;
        width: 30px;
        cursor: pointer;
        color: #fff;
    }

    @media (max-width: 800px) {
        display: none;
    }
`


const Header = ({ paginaActual="" }) => {
    const navigate = useNavigate();
    const paginas = {
        "Principal": "/",
        "Reservar":"/reserva",
        "Historial": "/historial", 
        "Organización": "/organizacion"
    };
    const handleNavigation = (ruta) => {
        navigate(ruta);
    };
    // const { uuid, getStorage, getUser } = useUser()

    // const return_id = localStorage.getItem("userData");
    // const usuario = getUser(return_id)

    return (
        <Contenedor>
            <Menu paginaActual={paginaActual} />
            <Navegar>
                <Logo src={LogoB} alt="Logo ParkHub" onClick={() => navigate("/")} />
                <Botones>
                    {Object.keys(paginas).map((pagina) => (
                        <p 
                        key={pagina}
                        className={paginaActual === pagina ? "active" : ""}
                        onClick={() => handleNavigation(paginas[pagina])}
                    >{pagina} </p>
                    ))}
                </Botones>
            </Navegar>
            <Usuario>
                {/* <p>{usuario ?  usuario[1] : "Anonymous"}</p> */}
                <p 
                onClick={() => navigate("/perfil")}>Anonymous</p>
                <FaUserCircle />
            </Usuario>
        </Contenedor>
    )
}

export default Header;