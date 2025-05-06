import { useNavigate } from 'react-router-dom';
import './ButtonBack.scss'; 

const ButtonBack = ({ rota = '/' }) => {
    const navigate = useNavigate();

    return (
        <div className='ButtonBack'>
            <button className="botao-voltar" onClick={() => navigate(rota)}>
                ← Voltar
            </button>
        </div>
    );
};

export default ButtonBack;
