import { useEffect, useState } from "react";
import Layout from "./Layout";
import styled from "styled-components";
import { ContenedorSombra, Formulario, Input, Mitad } from "../styles/varios";
import SelectAliados from "../elements/SelectAliados";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const Contenedor1 = styled.article`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: 10px auto;

`


const Reserva = () => {
    const [startDate, setStartDate] = useState(new Date());

    return(
        <Layout>
            <ContenedorSombra>
                <Contenedor1><h2>Elija El Destino </h2></Contenedor1>
                <SelectAliados/>
                <Mitad> 
                    <div>
                    <h2>Seleccionar Fecha</h2>
                    <Contenedor1>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </Contenedor1>
                    </div>
                    <div>
                    <h2>Seleccionar La Hora</h2>
                    <Contenedor1>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </Contenedor1>
                    </div>
            
                </Mitad>  
            </ContenedorSombra>
        </Layout>
    )
}

export default Reserva;
