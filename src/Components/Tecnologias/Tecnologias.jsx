import './Tecnologia.scss'
import {
    FaHtml5, FaCss3, FaReact, FaSass,

  } from "react-icons/fa";
  import {  SiTailwindcss, SiCanva,  SiAdobephotoshop, SiFigma } from "react-icons/si";
  import { CgFigma } from "react-icons/cg";
  import { RiNextjsFill,  RiJavascriptFill } from "react-icons/ri";
import SectionTitle from '../SectionTitle/SectionTitle';
  
  export default function Tecnologias() {
    const tecnologiasIcon = [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3 /> },
      { name: "JavaScript", icon: < RiJavascriptFill /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Sass", icon: <FaSass /> },
      { name: "Photoshop", icon: <SiAdobephotoshop/> },
      { name: "Figma", icon: <CgFigma /> },
      { name: "Canva", icon: <SiCanva /> },
    ];
  
    return (
        <section className="tecnologias">
            <SectionTitle  texto="Tecnologias"/>
            <div className="cards">
            {tecnologiasIcon.map((tec, index) => (
                <div key={index} className="card">
                <div className="icon">{tec.icon}</div>
                <p className="name">{tec.name}</p>
                </div>
            ))}
            </div>
      </section>
    );
  }
  