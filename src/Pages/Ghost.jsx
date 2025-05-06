import Banner from "../Components/Banner/Banner"
import ButtonBack from "../Components/ButtonBack/ButtonBack"
import Footer from "../Components/Footer/Footer"
import Mockup from "../Components/Mockup/Mockup"
import Projetos from "../Components/Projetos/Projetos"
import SectionTitle from "../Components/SectionTitle/SectionTitle"
import '../styles/paginas.scss'
import mockup from '../../public/images/ghost-mockup.png'
import Nav from "../Components/Nav/Nav"

const Ghost = () => {
    const banner = [
        {src: '/images/banner-ghost.png', alt:'Banner The Ghost of teh Navigator'}
    ]
    return(
        <section className="section-paginas">
            <div className="header">
                <Nav />
            </div>
            <SectionTitle texto="Projeto The Ghost of the Navigator" />
            <Banner imagens={banner} />
            <Mockup
                imagem={mockup}
                texto='Composição "The Ghost of the Navigator" criada no Photoshop utilizando máscaras de camadas e ajustes de matiz e saturação a partir de imagens individuais (assets). Inspirada na canção "Ghost of the Navigator - Iron Maiden"'
                link="https://www.behance.net/gallery/214004167/Navegadores-Fantasmas"
                children="Ver projeto no Behance"
            />
            <Projetos subtitulo="Outros projetos"/>
            <ButtonBack />
            <Footer />
        </section>
    )
}

export default Ghost 