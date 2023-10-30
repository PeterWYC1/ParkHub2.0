import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useUser } from "./context/userContext"

import Principal from './components/Principal';
import Sesion from './components/Sesion';
import Perfil from './components/Perfil';

const Ruteo = () => {
    const { user, getStorage } = useUser();

    useEffect(() => {
        if (!user) {
            getStorage();
        }
      }, [user, getStorage]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Principal />} />
                <Route path='/sesion' element={<Sesion />} />
                <Route path='/perfil' element={<Perfil />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Ruteo;