import { useEffect, useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import styled from "styled-components";
import { UserContextProvider, useUser } from "../context/userContext";
import HistorialReservas from "../elements/HistorialReservas";
import { ContenedorSombra, Formulario, Input, Mitad } from "../styles/varios";
import Layout from "./Layout";




const Contenedor1 = styled.article`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;


h2 { 
    font-size: 24px;
    text-align: center;
    margin: 5px;
}
@media (max-width: 800px) {
    h2 { 
      font-size: 20px;
     }
  }
`
 

const Historial = () => {
    const { nombreUsuario } = useUser();

    return(
        <Layout  paginaActual="Historial">
            <ContenedorSombra>
                <Contenedor1><h2>Historial de reservas</h2> </Contenedor1>
                <Contenedor1><h3>{nombreUsuario}</h3></Contenedor1>
                <HistorialReservas/>
            </ContenedorSombra>
            
     
          
        </Layout>

    )
}

export default Historial;