import Banner from "../Components/Banner/Banner"
import ButtonBack from "../Components/ButtonBack/ButtonBack"
import Mockup from "../Components/Mockup/Mockup"
import Projetos from "../Components/Projetos/Projetos"
import SectionTitle from "../Components/SectionTitle/SectionTitle"
import imagem from "../../public/images/mockup-pink.png"
import Footer from "../Components/Footer/Footer"
import '../styles/paginas.scss'
import Nav from "../Components/Nav/Nav"


const PinkDiver = () => {
    const banner = [
        {src: '/images/pink-banner.png', alt:'Banner Pink Diver'}
    ]
    return(
        <section className="section-paginas">
            <div className="header">
                <Nav />
            </div>
            <SectionTitle texto="Projeto Pink Diver" />
            <Banner imagens={banner} />
            <Mockup 
                imagem={imagem}
                texto='Composição de imagens "Pink Diver", foi criada no Photoshop utilizando máscaras de camadas, ajustes de matiz e saturação a partir de imagens individuai. Também foi utilizada a IA do Photoshop para criar elementos como as nuvens, a roupa e os óculos da mergulhadora. '
                link="https://www.behance.net/gallery/216190709/Pink-Diver"
                children="Ver projeto no Behance"
            />
            <ButtonBack />
            <Footer />
            
        </section>
    )
}

export default PinkDiver 