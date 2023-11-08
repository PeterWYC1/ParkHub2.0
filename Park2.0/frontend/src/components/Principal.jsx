import Aliados from "../elements/Aliados";
import Carrusel from "../elements/Carrusel";
import Info from "../elements/Info";
import Layout from "./Layout";

import styled from "styled-components";
import colores from "../styles/colores";

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

    &:hover { background-color: ${colores.moradoClaro}; }
  }

  @media (max-width: 800px) {
    p { text-align: center; }
  }
`


const Principal = () => {
  return (
    <Layout paginaActual="Principal">
      <Carrusel />
      <Info />
      <ContenedorClick>
        <p>¿Deseas administrar de la mejor manera tu parqueadero?</p>
        <div>Clic aqui</div>
      </ContenedorClick>
      <Aliados />
    </Layout>
  )
}

export default Principal;
