import { useEffect, useState } from "react";
import Layout from "./Layout";
import CarruselOrg from "../elements/CarruselOrg";
import styled from "styled-components";
import { ContenedorSombra, Formulario, Input, Mitad } from "../styles/varios";
import SelectAliados from "../elements/SelectAliados";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useUser, UserContextProvider } from "../context/userContext"


const Organizacion = () => {



    return(
        <Layout>
            <CarruselOrg>

            </CarruselOrg>
        </Layout>

    )
}

export default Organizacion;