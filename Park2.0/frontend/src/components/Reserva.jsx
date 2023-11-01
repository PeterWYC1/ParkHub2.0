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


const Reserva = () => {
    const [hour, setHoraSeleccionada] = useState(null);
    const [date, setStartDate] = useState(new Date());



    const handleSeleccionHora = (hora) => {
        setHoraSeleccionada(hora);
    };

    const handleReserva = async () => {

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
    ];
    
    const empresas = ["Universidad EIA", "Universidad EAFIT", "Universidad UPB", "Centro Comercial Santafe", "Centro Comercial Viva"]
    
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
                        <select value={hour} onChange={(e) => handleSeleccionHora(e.target.value)}>
                            <option value={null}>Selecciona una hora</option>
                                {horas.map((hora, index) => (
                                    <option key={index} value={hora}>
                                    {hora}
                                    </option>
                                    ))}
                        </select>
                        {hour && <p>Has seleccionado: {hour}</p>}
                    </div>
               
                    </Contenedor1>
                    </div>
            

                </Mitad>  
                <Contenedor1> 
                <button className="reserva" onClick={handleReserva}>Listo</button>
                </Contenedor1>
            </ContenedorSombra>
        </Layout>
    )
}

export default Reserva;
