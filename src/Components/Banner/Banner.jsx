import './Banner.scss';

const Banner = ({ imagens }) => (
    <div className="banner">
      {imagens.map((img, i) => (
        <img key={i} src={img.src} alt={img.alt} className="banner-img" />
      ))}
    </div>
  );
  
  export default Banner;