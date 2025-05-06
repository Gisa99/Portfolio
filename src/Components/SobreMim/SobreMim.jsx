import SectionTitle from '../SectionTitle/SectionTitle'
import Texto from '../Texto/Texto'
import './SobreMim.scss'
import { CgGym } from "react-icons/cg";
import { GiSlicedBread } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";

const SobreMim = () =>{
    return(
        <section className='sobreMim'>
            <div className='container'>
                <SectionTitle texto="Sobre mim" />
                <div className='cardHobbies'>
                    <div className='card'>
                        <CgGym className='icon'/>
                    </div>
                    <div className='card'>
                        <GiSlicedBread  className='icon'/>
                    </div>
                    <div className='card'>
                        <FaBookReader className='icon'/>
                    </div>
                </div>
                <div className='texto'>
                    <p>Alguns dos meus hobbies favoritos fora da tela são: ler, assistir animes, ir à academia e colocar a mão na massa — literalmente! Fazer geleias e pães artesanais é uma das minhas formas preferidas de relaxar e "reiniciar" o cérebro rs </p>
                    <p>Tanto na programação quanto na cozinha as tarefas são quebradas e realizadas em etapas, e ver cada etapa sendo finalizada é muito satisfatório.</p>
                </div>
            </div>

        </section>
    )
}

export default SobreMim