import React, { useState } from "react";
import styled from "styled-components";
import EAFIT from "../images/aliados/eafit.png";
import EIA from "../images/aliados/eia.jpg";
import SANTAFE from "../images/aliados/santafe.png";
import UPB from "../images/aliados/upb.png";
import VIVA from "../images/aliados/viva.jpg";
import def from "../images/aliados/pp2.png";
import { ContenedorScroll } from "../styles/varios";


const Contenedor = styled.article`
    margin: 20px auto;
    width: 95%;

    h2 { 
        font-size: 1.1rem;
        text-align: center;
        margin-bottom: 5px;
    }
`
const ContenedorAliado = styled.img`
    cursor: pointer;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2.8px solid ${(props) => (props.isselected ? "#650099" : "#000")};
    margin: 0 5px;

    @media (max-width: 800px) {
        width: 60px;
        height: 60px;
    }
`;

const SelectAliados = () => {
    const [aliadoSeleccionado, setAliadoSeleccionado] = useState(null);
    const aliados = [def,def,def,def,def];
    const seleccionarAliado = (index) => {
        setAliadoSeleccionado(index);
    };


    return (
        <Contenedor>
            <ContenedorScroll size="full" $alineado="centro">
            {aliados.map((aliado, index) => {
                    const isselected = aliadoSeleccionado === index;
                    return (
                        <div key={index} onClick={() => seleccionarAliado(index)}>
                            <ContenedorAliado src={aliado} isselected={isselected} />
                        </div>
                    );
                })}
            </ContenedorScroll>
        </Contenedor>
    )
}

export default SelectAliados;