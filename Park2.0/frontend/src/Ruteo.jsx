import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useUser } from "./context/userContext"


import Reserva from "./components/Reserva";
import Principal from './components/Principal';
import Sesion from './components/Sesion';
import Perfil from './components/Perfil';
import Historial from './components/Historial';
import Organizacion from './components/Organizacion';

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
                <Route path='/perfil' element={<Perfil />} />
                <Route path='/reserva' element={<Reserva />} />
                <Route path='/historial' element={<Historial />} />
                <Route path='/Organizacion' element={<Organizacion />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Ruteo;
