import { useEffect, useState } from "react";
import { Mitad } from "../styles/varios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Contenedor1 = styled.article`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: 10px auto;

`



const SelectFecha = () => {
  const [startDate, setStartDate] = useState(new Date());

  return(
      <Mitad> 
            <div>
              <h2>Seleccionar Fecha</h2>
              <Contenedor1>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </Contenedor1>
            </div>
            
      </Mitad>          
  )
}

export default SelectFecha;