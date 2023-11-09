import { useEffect, useState } from "react";
import Layout from "./Layout";
import styled from "styled-components";
import { ContenedorSombra, Formulario, Input, Mitad } from "../styles/varios";
import SelectAliados from "../elements/SelectAliados";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useUser, UserContextProvider } from "../context/userContext"



const Historial = () => {


    return(
        <Layout  paginaActual="Historial">
            <ContenedorSombra>

            </ContenedorSombra>
        </Layout>

    )
}

export default Historial;