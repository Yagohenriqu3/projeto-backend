import { HashRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './componentes/Header'
import Footer from './componentes/Footer'

import Cursos from './componentes/pages/Cursos'
import Artigos from './componentes/pages/Artigos'
import Login from './componentes/pages/Login'
import Home from './componentes/pages/Home'
import Cadastro from './componentes/pages/Cadastro'
import ArtigoPsicologia from './componentes/pages/artigos/ArtigoPsicologia'
import ArtigoDireito from './componentes/pages/artigos/ArtigoDireito'
import ArtigoMedicina from './componentes/pages/artigos/ArtigoMedicina'

import ScrollToTop from './componentes/ScrollToTop'


function App() {
  return (
    <div>
      <Router>
      <ScrollToTop/>
        <header>
          <Header/>
        </header>
        <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/cursos' element={<Cursos/>}/>
          <Route path='/artigos' element={<Artigos/>}/>
          <Route path='/artigos/psicologia' element={<ArtigoPsicologia/>}/>
          <Route path='/artigos/direito' element={<ArtigoDireito/>}/>
          <Route path='/artigos/medicina' element={<ArtigoMedicina/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastro' element={<Cadastro/>}/>
        </Routes>
        </main>

        <footer>
          <Footer/>
        </footer>
      </Router>
    </div>
  )
}

export default App;
