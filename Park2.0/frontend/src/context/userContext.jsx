import axios from "axios"

import { createContext, useContext, useState } from "react"
import { validarEmail, validarPassword } from "../functions/Formularios";
 
const API_BASE_URL = 'http://localhost:8000';
const userContext = createContext();

export const useUser = () => {
    // Para usar el contexto de usuario como un hook
    const context = useContext(userContext)
    if(!context) throw new Error("No hay un provider")
    return context
}

export const UserContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [uuid, setUuid] = useState('');

    const actualizarStorage = (usuario) => {
        localStorage.setItem("userData", usuario.id);
        setUser(usuario?.usuario);
        setUuid(usuario.id)
    }

    const getStorage = async () => {
        try {
            id = localStorage.getItem("userData");
            setUuid(id)
            return id
        } catch (error) {
            console.error(error)
            console.log("No se pudo recuperar la informacion, vuelva a loguearse")
        }
    }

    const getUser = async (buscar) => {
        try {
            // Se puede obtener por id o por username
            const response = await axios.get(`${API_BASE_URL}/users/${buscar}`);
            return response?.data;
        } catch (error) {
            console.error(error)
            return false
        }
    }
    
    const login = async ({ email, password }) => {
        try {
            if (!validarPassword(password)) return "La contraseña no es valida";

            // SI ES NULL NO SE PUEDE
            const response = await axios.post(
                                `${API_BASE_URL}/login`,
                                { email, password }
            );
            
            if (response.data==null)  return "Usuario o contraseña incorrectos";

            const usuario = response.data;
            actualizarStorage(usuario);

            setUser(usuario)

            return usuario;
        } catch (error) {
            console.log(error)
            throw new Error("Intentelo más tarde");
        }
    }

    const signUp = async ({ name, email, password }) => {
        try {
            // if (!validarEmail(email)) return "Email no valido";
            if (!validarPassword(password)) return "La contraseña no es valida";

            console.log({ name, email, password })

            const response = await axios.post(`${API_BASE_URL}/signup`, {
                name,
                email,
                password
            });

            if (response.data == null)  return "Correo existente";

            const usuario = response.data;
            actualizarStorage(usuario);

            setUser(usuario)

            return usuario;
        } catch (error) {
            console.log(error)
            throw new Error("Intentelo más tarde");         
        }
    }

    const addBooking = async ({ user_id, company_id, date, hour }) => {
        try {

            const response = await axios.post(`${API_BASE_URL}/add_booking`, {
                uuid,
                company_id,
                date, 
                hour
            });

            if (response.data == null)  return "No hay parqueaderos disponibles";

            return response.data;
        } catch (error) {
            console.log(error)
            throw new Error("Intentelo más tarde");         
        }
    }

    return (
        <userContext.Provider
            value={{
                user,
                getUser,
                getStorage,
                login,
                setUser,
                signUp,
                addBooking,
            }}
        >
            {props.children}
        </userContext.Provider>
    )
}