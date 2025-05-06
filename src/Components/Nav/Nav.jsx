import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import './Nav.scss'

const Nav = () => {
    return(
        <div className="redes">
                <a href="https://www.canva.com/design/DAE1vBI7JbU/IthgFotEH-iUVPAPtae3NA/view?utm_content=DAE1vBI7JbU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7947eff00b" target="_blank" className="curriculo">Currículo</a>
                <a href="https://github.com/Gisa99" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/giselefranca-devfrontend/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/watashi_gi/" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
            </div>
    )
}

export default Nav