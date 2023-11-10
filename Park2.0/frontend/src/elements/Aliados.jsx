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
        font-size: 1.35rem;
        text-align: center;
        margin-bottom: 5px;
    }
`
const ContenedorAliado = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid #000;
    margin: 0 5px;

    @media (max-width: 800px) {
        width: 60px;
        height: 60px;
    }
`

const Aliados = () => {
    const aliados = [def,def,def,def];

    return (
        <Contenedor>
            <h2>Aliados de ParkHub</h2>
            <ContenedorScroll size="full" $alineado="centro">
                {aliados.map((aliado,index) => {
                    return (
                        <div key={index}>
                            <ContenedorAliado src={aliado} />
                        </div>
                    )
                })}
            </ContenedorScroll>
        </Contenedor>
    )
}

export default Aliados;