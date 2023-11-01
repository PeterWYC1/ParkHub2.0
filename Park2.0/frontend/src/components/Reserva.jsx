import { useEffect, useState } from "react";
import Layout from "./Layout";
import styled from "styled-components";
import { ContenedorSombra, Formulario, Input, Mitad } from "../styles/varios";
import SelectAliados from "../elements/SelectAliados";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useUser, UserContextProvider } from "../context/userContext"


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

const ContenedorBotones = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 20px;

    button {
        width: 200px;
        height: 50px;
        margin: 20px;
        border: none;
        border-radius: 20px;
        color: #fff;
        background-color: #650099;
        font-size: 1.4rem;
        cursor: pointer;
        transition: 0.5s all ease;

        &:hover { background-color: #43A854 ; }
        
    @media (max-width: 550px) {
        width: 150px;
        height: 40px;
    }

    }


`
const Boton = styled.button`
    align-items: center;
    border: none;
    background: '#650099';
    border-radius: 20px;
    width: 200px;
    height: 50px;
    margin: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 1.4rem;
    cursor: pointer;
    transition: 0.5s all ease;

    


    @media (max-width: 550px) {
        width: 150px;
        height: 40px;
    }
`


const Reserva = () => {
<<<<<<< HEAD
    const [horaSeleccionada, setHoraSeleccionada] = useState(null);
    const [startDate, setStartDate] = useState(new Date());

    const handleSeleccionHora = (hora) => {
        setHoraSeleccionada(hora);
      };

    const handleReservar = async () => {
=======
    const [hour, setHoraSeleccionada] = useState(null);
    const [date, setStartDate] = useState(new Date());



    const handleSeleccionHora = (hora) => {
        setHoraSeleccionada(hora);
    };

    const handleReserva = async () => {
>>>>>>> TomasL

        try {
            const response = await reservar({
                username: nombre,
                phone: telefono,
                address: direccion,
            })
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }
    
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
<<<<<<< HEAD
      ];
=======
    ];
    
    const empresas = ["Universidad EIA", "Universidad EAFIT", "Universidad UPB", "Centro Comercial Santafe", "Centro Comercial Viva"]
>>>>>>> TomasL
    
    return(
        <Layout>
            <ContenedorSombra>
                <Contenedor1><h2>Elija El Destino </h2></Contenedor1>
                <SelectAliados/>
                <Mitad> 
                    <div>
                    <h2>Seleccionar Fecha</h2>
                    <Contenedor1>
                    <DatePicker selected={date} onChange={(date) => setStartDate(date)} />
                    </Contenedor1>
                    </div>
                    <div>
                    <h2>Seleccionar La Hora </h2>

                    <Contenedor1>
                    <div>
<<<<<<< HEAD
                        <select value={horaSeleccionada} onChange={(e) => handleSeleccionHora(e.target.value)}>
=======
                        <select value={hour} onChange={(e) => handleSeleccionHora(e.target.value)}>
>>>>>>> TomasL
                            <option value={null}>Selecciona una hora</option>
                                {horas.map((hora, index) => (
                                    <option key={index} value={hora}>
                                    {hora}
                                    </option>
                                    ))}
                        </select>
<<<<<<< HEAD
                        {horaSeleccionada && <p>Has seleccionado: {horaSeleccionada}</p>}
=======
                        {hour && <p>Has seleccionado: {hour}</p>}
>>>>>>> TomasL
                    </div>
               
                    </Contenedor1>
                    </div>
            

                </Mitad>  
<<<<<<< HEAD
                <ContenedorBotones>
                <button className="reserva" onClick={handleReserva}>Listo</button>
                </ContenedorBotones>
            
=======
                <Contenedor1> 
                <button className="reserva" onClick={handleReserva}>Listo</button>
                </Contenedor1>
>>>>>>> TomasL
            </ContenedorSombra>
        </Layout>
    )
}

export default Reserva;
