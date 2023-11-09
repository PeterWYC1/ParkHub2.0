import { useEffect, useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import styled from "styled-components";
import { UserContextProvider, useUser } from "../context/userContext";
import colores from "../styles/colores";
import { ContenedorSombra, Formulario, Input, Mitad } from "../styles/varios";


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


 return( 
        
      <ContenedorScrollV>
          <ContenedorReserva>
            <Mitad>
               <Links>
               <div>
               <h2>Reserva día: ()</h2>
               </div>
               </Links> 
               <Links>
               <div>
                  <p>Numero de parqueadero: () </p>
                  <p>Hora: () </p>
                  <p>Fecha de creación ()</p>
                  </div>
               </Links>
            </Mitad>
          </ContenedorReserva>
       </ContenedorScrollV>
 

 )
}

export default HistorialReservas;