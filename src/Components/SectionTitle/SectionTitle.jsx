import './SectionTitle.scss';

const SectionTitle = ({ texto, subtitulo }) => (
  <>
    <h2 className="sectionTitle">{texto}</h2>
    <h3 className='subtitulo'>{subtitulo}</h3>
    
  </>
  );
  
  export default SectionTitle;