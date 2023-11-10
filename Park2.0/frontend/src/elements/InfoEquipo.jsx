import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/logoM.png";
import colores from "../styles/colores";

const ContenedorEq = styled.footer`
    background-color: white;
    padding: 20px 50px 10px 50px;

    > p {
        color: #fff;
        font-size: 0.8rem;
        width: 100%;
        text-align: center;
    }

    @media (max-width: 800px) {
        padding: 15px;

        > p { margin-top: 10px; }
    }
`

const InfoEquipo = () => {
 const navigate = useNavigate();
 return(
  <ContenedorEq>

  </ContenedorEq>
 )
}

export default InfoEquipo;