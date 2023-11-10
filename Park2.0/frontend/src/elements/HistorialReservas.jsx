import { useEffect, useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import styled from "styled-components";
import { UserContextProvider, useUser } from "../context/userContext";
import colores from "../styles/colores";
import { ContenedorSombra, Formulario, Input, Mitad } from "../styles/varios";
import { useMessage } from "../context/messageContext";


const ContenedorScrollV = styled.article`
display: flex;
flex-direction: column; 
height: 100%; 
overflow-y: auto; 
`
const Links = styled.div`
    p {
        color: #fff;
        font-weight: lighter;
        margin: 5px;
        font-size: 1.1rem;

    }

    h2 { 
     font-weight: lighter;
     color: #fff;
     margin: 5px;
     font-size: 1.2rem;
 }

    @media (max-width: 800px) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 15px ;
       
    }
`
const ContenedorReserva = styled.div`
display: flex;
flex-direction: column;
width: 90%;
max-width: 1000px;
border-radius: 20px;
margin: 40px auto;
padding: 10px 20px;
background-color: ${colores.moradoClaro};
box-shadow: -5px -5px 10px #cecece,
            10px 10px 10px #ffffff;

h2 {
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
    margin-bottom: 20px;
}

@media (max-width: 800px) {
    margin: 20px auto;
}
`
const HistorialReservas = () => {
    const { get_historial } = useUser()
    const { newMessage } = useMessage();
    const [reservas, setReservas] = useState([])

    useEffect(() => {
        const obtenerReservas = async () => {
            try {
                const reservasObtenidas = await get_historial();
                console.log(reservasObtenidas)
                if (reservasObtenidas == null) newMessage("No hay reservas existentes", "error");
                else setReservas(reservasObtenidas);
            } catch (error) {
                newMessage("Inténtelo más tarde", "error");
            }
        }
        obtenerReservas();
    }, [get_historial]);

    return( 
            
        <ContenedorScrollV>
            {reservas.map((reserva, index) => (
                <ContenedorReserva>
                    <Mitad>
                    <Links>
                        <div key={index}>
                            <h2>Fecha de reserva: {reserva.date}</h2>
                        </div>
                    </Links>
                    <Links>
                        <div key={index}>
                            <p>Numero de parqueadero: {reserva.parking_lot_number}</p>
                            <p>Hora: {reserva.hour}</p>
                            <p>Fecha de creación: {reserva.date_created}</p>
                        </div>
                    </Links>
                    </Mitad>
                </ContenedorReserva>
            ))}
        </ContenedorScrollV>
    

 )
}

export default HistorialReservas;