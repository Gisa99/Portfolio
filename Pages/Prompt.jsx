import Banner from "../Components/Banner/Banner"
import ButtonBack from "../Components/ButtonBack/ButtonBack"
import ButtonLink from "../Components/ButtonLink/ButtonLink"
import Footer from "../Components/Footer/Footer"
import SectionTitle from "../Components/SectionTitle/SectionTitle"
import Texto from "../Components/Texto/Texto"
import Projetos from "../Components/Projetos/Projetos"
import '../styles/paginas.scss'
import Nav from "../Components/Nav/Nav"

const Prompt = () => {
    const banners = [
        { src: 'images/PromptBanner.png', alt: 'Banner Pay Prompt' }
      ]
    return(
        <section className="section-paginas">
            <div className="header">
                <Nav />
            </div>
            <SectionTitle texto="Desafio Daily #002 - Pay Prompt" />
            <Banner imagens={banners}/>
            <div className="text-button">
                <Texto>No desafio #002 do Daily Ui, a proposta era fazer um prompt para pagamentos com cartão</Texto>
                <ButtonLink
                    link="https://www.figma.com/design/sW0vXLauB6F0K7QKEAVfts/Prompt-Pay-Card?t=fXE4clnBKdbrUHSX-0"
                    children="Ver projeto no Figma"
                />
            </div>
            <ButtonBack />
            <Footer />
        </section>
    )
}

export default Prompt 