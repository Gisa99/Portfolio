import ButtonLink from '../ButtonLink/ButtonLink';
import Texto from '../Texto/Texto';
import './Mockup.scss'

const Mockup = ({ imagem, texto, texto2, link, children }) => (
    <div className="mockup">
      <img src={imagem} alt="mockup" className="mockup-img" />
      <div className='detalhes'>
        <div className='text'>
          <Texto>{texto}</Texto>
          <Texto>{texto2}</Texto>
        </div>
        <ButtonLink 
          link={link}
          children={children}
        />
      </div>
    </div>
  );
  
  export default Mockup;