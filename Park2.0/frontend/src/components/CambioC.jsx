import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMessage } from "../context/messageContext";
import { useUser } from "../context/userContext";

import Imagen from "../images/carrusel/parqueadero2.jpg";
import colores from "../styles/colores";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import styled from "styled-components";
import LogoG from "../images/logoB.png";
import LogoP from "../images/logo_blanco.png";
import { Formulario, Input } from "../styles/varios";

const Fondo = styled.div`
    background-image: url(${Imagen});
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    width: 100vw;
    height: 100vh;
    padding: 80px;

    @media (max-width: 800px) { padding: 30px; }
`;
const Contenedor1 = styled.div`
    margin: auto;
    max-width: 1000px;
    width: 100%;
`;
const ContenedorHeader = styled.div`
    height: 60px;
    display: flex;

    @media (max-width: 800px) { height: 40px; }
`;
const Header = styled.button`
    background-color: ${props => (props.$inLogin ? colores.moradoClaro : colores.oscuro)};
    cursor: ${props => (props.$inLogin ? "auto" : "pointer")};
    width: 50%;
    height: 100%;
    border: none;
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: bold;
    color: #fff;
`;


const Contenedor = styled.div`
    background-color: ${colores.moradoClaro};
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 0 0 20px 20px;

    > form { align-items: center; }
`;
const Logo = styled.img`
    width: 300px;
    margin: 10px auto;

    @media (max-width: 550px) {
        width: 150px;
    }
`;
const ContInput = styled.div`
    width: 400px;
    height: 40px;
    margin: 10px;
    position: relative;

    input { padding-left: 40px; }

    svg {
        position: absolute;
        height: 30px;
        width: 30px;
        top: 5px;
        left: 5px;
    }

    @media (max-width: 550px) {
        width: 100%;
        height: 100%;
    }
`
const Boton = styled.button`
    border: none;;
    background: #11111f;
    border-radius: 10px;
    width: 200px;
    height: 50px;
    margin: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover { color: ${colores.moradoClaro}; }

    @media (max-width: 550px) {
        width: 150px;
        height: 40px;
    }
`


const CambioC = ({ inLogin }) => {
 const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 
 const handleSubmit = async (e) => {
  e.preventDefault();
  let respuesta;

  try {
      if (inLogin) {
          // ** Pestaña de login ** //
          respuesta = await login({ 
              email, 
              password
          });
      } else {
          // ** Pestaña de sign Up ** //

          // Crear usuario
          respuesta = await signUp({
              name,
              email,
              password
          });
      }
      console.log(respuesta)
      if (typeof respuesta === 'string') newMessage(respuesta, "error");
      else navigate("/")
  } catch (error) {
      console.log(error)
      newMessage("Intentelo más tarde", "error");
  }
}
 
 const handleResize = () => {
  setWindowWidth(window.innerWidth);
};
  
    return (
     <Fondo> 
        <Contenedor>
            <Logo src={windowWidth>550 ? LogoG : LogoP} alt="Logo ParkHub" />
            <Formulario  onSubmit={handleSubmit}>
                {!inLogin &&
                    <ContInput>
                    
                        <Input 
                            required
                            name = "name"
                            type="text"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => cambiarUsername(e.target.value)}
                        />
                        <FaUserCircle />
                    </ContInput>
                }       
                <ContInput>
                    <Input 
                        required
                        name = "email"
                        type="email"
                        placeholder="Correo Electronico"
                        value={email}
                        onChange={(e) => cambiarEmail(e.target.value)}
                    />
                    <MdEmail />
                </ContInput>
                <ContInput>
                    <Input 
                        required
                        name = "password"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => cambiarPassword(e.target.value)}
                    />
                    <RiLockPasswordFill />
                </ContInput>
                <Boton>{inLogin ? "Iniciar Sesión" : "Registrarse"}</Boton>
            </Formulario>
        </Contenedor>
        </Fondo>
    )
}

export default CambioC;