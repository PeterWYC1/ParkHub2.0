import { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from "styled-components";
import { UserContextProvider, useUser } from "../context/userContext";
import CarruselOrg from "../elements/CarruselOrg";
import SelectAliados from "../elements/SelectAliados";
import { ContenedorSombra, Formulario, Input, Mitad } from "../styles/varios";
import Layout from "./Layout";


const Organizacion = () => {



    return(
        <Layout  paginaActual="Organizacion">
            <CarruselOrg>
            </CarruselOrg>
            <div>
            <p>
                    <h1>Sobre Park Hub</h1>

                    Somos Park Hub, una empresa comprometida con la mejora de tu calidad de vida a través de soluciones de estacionamiento innovadoras y convenientes. Fundada con la visión de simplificar la experiencia de estacionamiento en tu universidad, nuestra misión es brindarte acceso rápido y seguro a espacios de estacionamiento, liberándote de la preocupación por encontrar un lugar disponible.

                    <h1>Nuestra Plataforma Intuitiva</h1>

                    Nuestra plataforma ha sido diseñada para ser intuitiva y fácil de usar. Con solo unos simples pasos, puedes reservar tu lugar de estacionamiento de manera eficiente y sin complicaciones. Además, te proporcionamos herramientas de gestión para que puedas modificar tus reservas en cualquier momento. Con Park Hub, tienes el control total sobre tu experiencia de estacionamiento.

                    <h1>Socios de Confianza</h1>

                    Trabajamos en estrecha colaboración con una red de socios confiables que comparten nuestra dedicación a la excelencia en el servicio. Nuestros socios son seleccionados cuidadosamente para garantizar que cada espacio de estacionamiento que ofrecemos cumple con los más altos estándares de calidad y seguridad. Puedes confiar en nosotros para proporcionarte un lugar seguro y conveniente para estacionar.

                    <h1>Tecnología de Vanguardia</h1>

                    En Park Hub, abrazamos la innovación y la tecnología de vanguardia. Utilizamos sistemas de reserva y gestión de estacionamiento de última generación para brindarte una experiencia sin igual. Nuestra plataforma está respaldada por algoritmos avanzados que optimizan la asignación de espacios, asegurando que siempre tengas un lugar disponible cuando lo necesites.

                    <h1>Un Estacionamiento para el Futuro</h1>

                    Estamos en una misión para transformar la forma en que las personas perciben y utilizan los espacios de estacionamiento. Creemos en un futuro donde el estacionamiento sea una parte eficiente e integrada de tu vida diaria. Al unirte a Park Hub, te unes a un movimiento que está dando forma a este futuro, haciendo que tu experiencia de estacionamiento sea más inteligente y eficiente.

                    <h1>Nuestra Comunidad</h1>

                    Park Hub no es solo una plataforma, es una comunidad de personas comprometidas con la simplificación de la vida diaria. Juntos, estamos cambiando la forma en que las personas se mueven y acceden a los espacios de estacionamiento. Únete a nosotros y sé parte de esta emocionante revolución en la forma en que experimentamos el estacionamiento.
                    </p>
            </div>
        </Layout>

    )
}

export default Organizacion;