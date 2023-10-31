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
const Boton = styled.button`
    align-items: center;
    border: none;;
    background: #11111f;
    border-radius: 20px;
    width: 200px;
    height: 50px;
    margin: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 1.4rem;
    cursor: pointer;
    transition: 0.5s all ease;

    
    &:hover { color: "#fff"; }


    @media (max-width: 550px) {
        width: 150px;
        height: 40px;
    }
`


const Reserva = () => {
    const [horaSeleccionada, setHoraSeleccionada] = useState(null);
    const [startDate, setStartDate] = useState(new Date());

    const handleSeleccionHora = (hora) => {
        setHoraSeleccionada(hora);
      };
    
    const horas = [
        '06:00 AM',
        '07:00 AM',
        '08:00 AM',
        '09:00 AM',
        '10:00 AM',
        '12:00 PM',
        '02:00 PM',
        '04:00 PM',
        '06:00 PM',
        '03:00 PM',
        '04:00 PM',
        '05:00 PM',
      ];
    
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
                    <h2>Seleccionar La Hora </h2>

                    <Contenedor1>
                    <div>
                        <select value={horaSeleccionada} onChange={(e) => handleSeleccionHora(e.target.value)}>
                            <option value={null}>Selecciona una hora</option>
                                {horas.map((hora, index) => (
                                    <option key={index} value={hora}>
                                    {hora}
                                    </option>
                                    ))}
                        </select>
                        {horaSeleccionada && <p>Has seleccionado: {horaSeleccionada}</p>}
                    </div>
               
                    </Contenedor1>
                    </div>
            

                </Mitad>  
                <Contenedor1> 
                    <Boton>{"Listo"}</Boton>
                </Contenedor1>
            </ContenedorSombra>
        </Layout>
    )
}

export default Reserva;
