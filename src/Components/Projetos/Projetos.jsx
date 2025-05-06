import SectionTitle from '../SectionTitle/SectionTitle';
import './Projetos.scss';
import { useNavigate } from 'react-router-dom';

const Projetos = ({titulo, subtitulo}) => {
    const navigate = useNavigate();

    const fotos = [
        {src: '/images/batalha de bandas.png', alt: 'batalha', titulo:'Batalha de Bandas', Descricao: 'Desafio do Daily #001, a proposta era montar um formulário utilizando o figma', rota: '/batalha-bandas' },
        {src: '/images/Redesign Apass.png', alt: 'Redesign Site APASS', titulo: 'Redesign APASS', Descricao:'Redesign que busca valorizar uma comunicação mais clara, e um visual mais atrativo.', rota: '/redesign-apass'},
        {src: '/images/daily003.png', alt: 'Prompt Pagamento', titulo: 'Prompt Pagamento', Descricao:'Desafio Daily #002, a proposta era criar um prompt para pagamentos utilizando o figma.', rota: '/prompt-pagamento'},
        {src: '/images/wallpaper the ghost of the navigator.png', alt: 'Wallpaper The ghost of the Navigator', titulo: 'The Ghost of the Navigator', Descricao:'Composição de imagens utilizando Photoshop.', rota: '/ghost-navigator'},
        {src: '/images/pink diver.png', alt: 'Pink Diver', titulo: 'Pink Diver', Descricao:'Composição de imagens utilizando Photoshop', rota: '/pink-diver'},
    ];

    return(
        <section className='Projetos'>
            <SectionTitle texto={titulo} subtitulo={subtitulo}/>
            <div className='cards'>
                {fotos.map((foto, index) => (
                    <div key={index} className='card'>
                        <img src={foto.src} alt={foto.alt} />
                        <h4>{foto.titulo}</h4>
                        <p className='descricao'>{foto.Descricao}</p>
                        <button onClick={() => navigate(foto.rota)}>Ver mais</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projetos;
