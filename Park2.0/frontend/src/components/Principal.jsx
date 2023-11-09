import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Aliados from "../elements/Aliados";
import Carrusel from "../elements/Carrusel";
import Info from "../elements/Info";
import colores from "../styles/colores";
import Layout from "./Layout";
import nombreUsuario from "../elements/ContentSesion";

const ContenedorClick = styled.article`
  background-color: ${colores.oscuro};
  padding: 10px;
  color: #fff;
  transition: all 0.5s ease;
  

  div {
    background-color: ${colores.moradoOscuro};
    margin: 10px auto;
    border-radius: 20px;
    width: 100px;
    padding: 8px 0;
    text-align: center;
    cursor: pointer;
    transition: 0.3s  ease;

    &:hover {
      background-color: ${colores.moradoClaro};
    }
  }

  p {
    font-size: 15px;
    color: #fff;
 
}

  @media (max-width: 800px) {
    p { text-align: center;
      font-size: 14px;
     }
  }
`


const Boton = styled.div`
    width: 200px;
    height: 35px;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    background-color: ${colores.moradoOscuro};
    cursor: pointer;
  

    p {
        font-size: 16px;
        color: #fff;
     
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



const Principal = () => {
  const navigate = useNavigate();
  return (
    <Layout paginaActual="Principal">
      <Carrusel />
        <Info />
            <ContenedorClick>
              <p>¿Deseas administrar de la mejor manera tu parqueadero?</p>
              <Boton>
                <p onClick={() => navigate("/organizacion")}>Click aquí</p>
              </Boton>
            </ContenedorClick>
          <Aliados />
    </Layout>
  )
}

export default Principal;
