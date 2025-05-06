import './Carreira.scss'
import carreira from '../../../public/images/UI-UX design-amico.svg'
import SectionTitle from '../SectionTitle/SectionTitle'
import Texto from '../Texto/Texto'
const Carreira = () =>{
    return(
       <section className='carreira'>
        <SectionTitle texto="Carreira Futura" />

        <div className='conteudo'>
            <div className='imagem'><img src={carreira} alt="Ilustração UI/UX" /></div>
            <div className='texto'>
                <Texto> Gostaria de seguir na área de UI/UX, pois me identifico muito com esse universo e com a ideia de criar soluções que facilitem o dia a dia das pessoas ao utilizarem produtos digitais. 
                </Texto>
                <Texto>No entanto, também tenho grande interesse na parte de desenvolvimento front-end, pois acredito que unir a visão do design com a implementação prática das interfaces pode tornar a experiência do usuário ainda mais completa e eficiente.</Texto>
                </div>
        </div>



       </section>
    )
}

export default Carreira 