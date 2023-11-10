import { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from "styled-components";
import { UserContextProvider, useUser } from "../context/userContext";
import CarruselOrg from "../elements/CarruselOrg";
import SelectAliados from "../elements/SelectAliados";
import colores from "../styles/colores";
import { ContenedorSombra, Formulario, Input, Mitad } from "../styles/varios";
import Layout from "./Layout";
import InfoEquipo from "../elements/InfoEquipo";

const ContenedorInfo = styled.article`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    z-index: 1;

    > p {
        margin-top: 60px;
        font-size: 18px;
        font-weight: bold;
    }

    div { 
        display: flex;

        div:hover {
            transition: background-color 0.3s;
            background-color: ${colores.moradoClaro};
        }
    }

    @media (max-width: 800px) {
        > p {
            margin-top: 30px;
            margin-bottom: 20px;
        }
        > div { flex-direction: column; }
    }
`

const Organizacion = () => {



    return(
        <Layout  paginaActual="Organizacion">
            <CarruselOrg/>
        </Layout>

    )
}

export default Organizacion;