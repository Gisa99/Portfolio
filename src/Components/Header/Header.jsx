import React from "react";
import './Header.scss';
import pattern from '../../../public/images/pattern.png'
import perfil from '../../../public/images/perfil.png'
import Nav from "../Nav/Nav";


const Header = () =>{
    return(
        <section>
            <div className="right_bar">
                <img src={pattern} className="pattern1" alt="Decoração" />
                <div className="menu-cabecalho">
                    <Nav />
                </div>
            </div>
            <div className="meio">
                <div className="perfil">
                    <img src={perfil}/>
                </div>
                <p className="saudacao">Olá, eu sou a Gisele 👋</p>
                <h1 className="titulo">Design Gráfico| UI Design| Front-End</h1>
                <p className="texto">Sou estudante de Design Gráfico com foco em 
                UI Design e Tecnologias Front-End.</p>
            </div>
            <div className="left_sidebar">
                <div className="menu-cabecalho">
                    <Nav />
                </div>
            
                <img src={pattern} className="pattern2" alt="Decoração" />
            </div>
        </section>
    )
}

export default Header;