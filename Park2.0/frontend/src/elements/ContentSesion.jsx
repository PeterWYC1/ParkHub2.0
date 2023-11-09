import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMessage } from "../context/messageContext";
import { useUser } from "../context/userContext";

import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import styled from "styled-components";
import LogoG from "../images/logoB.png";
import LogoP from "../images/logo_blanco.png";
import colores from "../styles/colores";
import { Formulario, Input } from "../styles/varios";

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
const ContenedorBotones = styled.div`
    display: flex;
    justify-content: space-between;
`;


const ContentSesion = ({ inLogin }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [name, cambiarUsername] = useState("");
    const [email, cambiarEmail] = useState("");
    const [password, cambiarPassword] = useState("");
    const [confirmPassword, confirmarPassword] = useState("");

    const { signUp, login, getUser, setNombreUsuario } = useUser(); 

    const { newMessage } = useMessage();

    const navigate = useNavigate();

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let respuesta;

        try {
            if (inLogin) {
                respuesta = await login({ 
                    email, 
                    password
                });
            } else {
                respuesta = await signUp({
                    name,
                    email,
                    password,
                    confirmPassword
                });
            }
            
            if (typeof respuesta === 'string') newMessage(respuesta, "error");
            else {
                setNombreUsuario(await getUser(respuesta["id"]));
                navigate("/")
            }
        } catch (error) {
            console.log(error)
            newMessage("Intentelo más tarde", "error");
        }
    }

    return (
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
                {!inLogin &&
                    <ContInput>
                        <Input 
                            required
                            name = "password"
                            type="password"
                            placeholder="Confirmar Contraseña"
                            value={confirmPassword}
                            onChange={(e) => confirmarPassword(e.target.value)}
                        />
                        <RiLockPasswordFill />
                    </ContInput>
                }   
                <ContenedorBotones>
                    {inLogin &&
                        <Boton onClick={() => navigate("/cambio")}>Cambiar contraseña</Boton>
                    } 
                    <Boton>{inLogin ? "Iniciar Sesión" : "Registrarse"}</Boton>
                </ContenedorBotones>
            </Formulario>
        </Contenedor>
    )
}

export default ContentSesion