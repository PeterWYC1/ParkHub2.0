import { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from "styled-components";
import { UserContextProvider, useUser } from "../context/userContext";
import CarruselOrg from "../elements/CarruselOrg";
import SelectAliados from "../elements/SelectAliados";
import { ContenedorSombra, Formulario, Input, Mitad } from "../styles/varios";
import Layout from "./Layout";


const Organizacion = () => {



    return(
        <Layout  paginaActual="Organizacion">
            <CarruselOrg>

            </CarruselOrg>
        </Layout>

    )
}

export default Organizacion;