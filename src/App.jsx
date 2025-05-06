import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Tecnologias from './Components/Tecnologias/Tecnologias';
import Projetos from './Components/Projetos/Projetos';
import Carreira from './Components/Carreira/Carreira';
import Footer from './Components/Footer/Footer';

// Import das páginas
import BatalhaBandas from './Pages/BatalhaBandas';
import Redesign from './Pages/Redesing';
import Prompt from './Pages/Prompt';
import Ghost from './Pages/Ghost';
import PinkDiver from './Pages/PinkDiver';
import SobreMim from './Components/SobreMim/SobreMim';

function App() {
  return (
  
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <SobreMim />
              <Tecnologias />
              <Projetos titulo="Projetos"/>
              <Carreira />
              <Footer />
            </>
          }
        />
        
        {/* Rotas para os projetos */}
        <Route path="/batalha-bandas" element={<BatalhaBandas />} />
        <Route path="/redesign-apass" element={<Redesign />} />
        <Route path="/prompt-pagamento" element={<Prompt />} />
        <Route path="/ghost-navigator" element={<Ghost />} />
        <Route path="/pink-diver" element={<PinkDiver />} />
      </Routes>
     
  );
}

export default App;