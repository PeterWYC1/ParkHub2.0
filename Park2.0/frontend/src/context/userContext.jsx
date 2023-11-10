import axios from "axios";

import { createContext, useContext, useState } from "react";
import { validarEmail, validarPassword } from "../functions/Formularios";
import { TbAxisX } from "react-icons/tb";
 
const API_BASE_URL = 'http://localhost:8000';
const userContext = createContext();

export const useUser = () => {
    const context = useContext(userContext)
    if(!context) throw new Error("No hay un provider")
    return context
}

export const UserContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [nombreUsuario, setNombreUsuario] = useState(localStorage.getItem("nombreUsuario") || "Anonymous");

    const actualizarStorage = (usuario) => {
        localStorage.setItem("userData", usuario.id);
        localStorage.setItem("nombreUsuario", usuario.name)
        setUser(usuario?.usuario);
    }

    const getUser = async () => {
        try {
            const return_id = localStorage.getItem("userData");
            const response = await axios.get(`${API_BASE_URL}/users/${return_id}`);
            return response.data;
        } catch (error) {
            console.error(error)
            return false
        }
    }
    
    const login = async ({ email, password }) => {
        try {
            if (!validarEmail(email)) return "Email no valido";
            if (!validarPassword(password)) return "La contraseña debe contener: \n Al menos 8 caracteres \n Al menos 1 letra mayúscula \n Al menos 1 letra minuscula \n Al menos 1 número \n Al menos un caracter especial";

            const response = await axios.post(
                                `${API_BASE_URL}/login`,
                                { email, password }
            );
            
            if (response.data==null)  return "Email o contraseña incorrectos";

            const usuario = response.data;
            actualizarStorage(usuario);

            return usuario;
        } catch (error) {
            console.log(error)
            throw new Error("Intentelo más tarde");
        }
    }

    const signUp = async ({ name, email, password, confirmPassword }) => {
        try {
            if (!validarEmail(email)) return "Email no valido";
            if (!validarPassword(password)) return "La contraseña debe contener: Al menos 8 caracteres, Al menos 1 letra mayúscula, Al menos 1 letra minuscula, Al menos 1 número, Al menos un caracter especial";
            if (password != confirmPassword) return "Las contraseñas no coinciden";

            const response = await axios.post(`${API_BASE_URL}/signup`, {
                name,
                email,
                password
            });

            if (response.data == null)  return "Correo existente";

            const usuario = response.data;
            actualizarStorage(usuario);

            return usuario;
        } catch (error) {
            console.log(error)
            throw new Error("Intentelo más tarde");         
        }
    }

    const change_password = async ({ email, old_password, new_password, confirmPassword }) => {
        try {
            if (!validarPassword(new_password)) return "La contraseña debe contener: Al menos 8 caracteres, Al menos 1 letra mayúscula, Al menos 1 letra minuscula, Al menos 1 número,  Al menos un caracter especial";
            if (new_password != confirmPassword) return "Las contraseñas no coinciden";

            const response = await axios.put(
                                `${API_BASE_URL}/change_password`,
                                { email, old_password, new_password }
            );
            
            if (response.data==null)  return "Email o contraseña incorrectos";

            console.log(response.data)
            const usuario = response.data;
            actualizarStorage(usuario);

            return usuario;
        } catch (error) {
            console.log(error)
            throw new Error("Intentelo más tarde");
        }
    }

    const addBooking = async ({ date, hour }) => {
        try {
            const return_id = localStorage.getItem("userData");

            const response = await axios.post(`${API_BASE_URL}/add_booking`, {
                "user_id" : return_id,
                "company_id": "2e66a0ee-2215-41db-adcf-af92ed46fa94",
                date, 
                hour
            });

            if (response.data == true) return "Ya tienes una reserva hecha para esta fecha"
            if (response.data == null) return "No hay parqueaderos disponibles"

            return response.data;
        } catch (error) {
            console.log(error)
            throw new Error("Intentelo más tarde");         
        }
    }

    const get_historial = async () => {
        try {
            const user_id = localStorage.getItem("userData");
            const response = await axios.get(`${API_BASE_URL}/get_bookings/${user_id}`);
            return response.data;
        } catch (error) {
            console.error(error)
            return null
        }
    }

    return (
        <userContext.Provider
            value={{
                user,
                getUser,
                login,
                setUser,
                signUp,
                addBooking,
                change_password,
                nombreUsuario,
                setNombreUsuario,
                get_historial,
            }}

        >
            {props.children}
        </userContext.Provider>
    )
}