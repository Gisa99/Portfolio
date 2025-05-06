import Banner from "../Components/Banner/Banner"
import ButtonBack from "../Components/ButtonBack/ButtonBack"
import Mockup from "../Components/Mockup/Mockup"
import SectionTitle from "../Components/SectionTitle/SectionTitle"
import '../styles/paginas.scss'
import mockup from '../../public/images/mockupApass.png'
import Footer from "../Components/Footer/Footer"
import Projetos from "../Components/Projetos/Projetos"
import Nav from "../Components/Nav/Nav"


const Redesign = () => {
    const banners = [
        { src: '/images/Apass.png', alt: 'Banner Apass' }
      ]
  
    return(
        <section className="section-paginas">
            <div className="header">
                <Nav />
            </div> 
            <SectionTitle texto="Redesign site APASS" />
            <Banner imagens={banners} />
            <Mockup 
                imagem={mockup} 
                texto="Além do banner principal da página, foram incluídas três seções: uma sobre a história da Apass, outra destacando alguns de seus produtos e uma terceira com um formulário de contato."
                link="https://www.figma.com/design/eXlKXR7Hs4QpMOPZLkYu2K/Redesign-APASS?t=QokrlCbQcKiMdqFW-0"
                children="Ver projeto no Figma"
                />
            <Projetos subtitulo="Outros projetos"/>
            <ButtonBack />
            <Footer />
        </section>
    )
}

export default Redesign 