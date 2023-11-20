import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useUser } from "./context/userContext"


import Historial from './components/Historial';
import Organizacion from './components/Organizacion';
import Principal from './components/Principal';
import Reserva from "./components/Reserva";
import Sesion from './components/Sesion';
import CambioC from './components/CambioC';

const Ruteo = () => {
    // const { user, getStorage } = useUser();

    useEffect(() => {
        const savedUserData = localStorage.getItem('userData');
        if (savedUserData) {
          localStorage.setItem('userData', savedUserData);
        }
      }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Principal />} />
                <Route path='/sesion' element={<Sesion />} />
                <Route path='/reserva' element={<Reserva />} />
                <Route path='/historial' element={<Historial />} />
                <Route path='/Organizacion' element={<Organizacion />} />
                <Route path='/cambio' element={<CambioC/>} />

            </Routes>
        </BrowserRouter>
    )
}

export default Ruteo;
