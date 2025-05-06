import Banner from "../Components/Banner/Banner"
import ButtonBack from "../Components/ButtonBack/ButtonBack"
import SectionTitle from "../Components/SectionTitle/SectionTitle"
import mockup from "../../public/images/mockupBatalha.png"
import Mockup from "../Components/Mockup/Mockup"
import Footer from "../Components/Footer/Footer"
import '../styles/paginas.scss'
import Projetos from "../Components/Projetos/Projetos"
import Nav from "../Components/Nav/Nav"



const BatalhaBandas = () => {
    const banners = [
        { src: '/images/Batalha.png', alt: 'Banner Batalha de Bandas' }
      ]
  
    return(
        <section className="section-paginas">
            <div className="header">
                <Nav />
            </div>
            <SectionTitle texto="Projeto Batalha de Bandas" />
            <Banner imagens={banners}/>
            <Mockup
                imagem={mockup}
                texto="O projeto é responsivo e possui uma tela para celular, desktop e tablet."
                texto2="Além das telas iniciais, trouxe uma tela em caso de sucesso na incrição, e outra para possíveis falhas."
                link="https://www.figma.com/design/BWXchxBtaymGwfLBTyWDmc/Battle-of-Bands?t=fXE4clnBKdbrUHSX-0"
                children="Ver projeto no Figma"            
            />
            <ButtonBack />
            <Footer />
        </section>
    )
}

export default BatalhaBandas 