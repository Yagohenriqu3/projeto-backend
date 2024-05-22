import { HashRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './componentes/Header'
import Footer from './componentes/Footer'

import Cursos from './componentes/pages/Cursos'
import Artigos from './componentes/pages/Artigos'
import Login from './componentes/pages/Login'
import Home from './componentes/pages/Home'

import ArtigoPsicologia from './componentes/pages/artigos/ArtigoPsicologia'
import ArtigoDireito from './componentes/pages/artigos/ArtigoDireito'
import ArtigoMedicina from './componentes/pages/artigos/ArtigoMedicina'

import ScrollToTop from './componentes/ScrollToTop'
import CursoMedicina from './componentes/pages/cursos/CursoMedicina'
import CursoDireito from './componentes/pages/cursos/CursoDireito'
import CursoPsicologia from './componentes/pages/cursos/CursoPsicologia'
import Bolsas from './componentes/pages/Bolsas'

import Cadastro from './componentes/pages/Cadastro'
import Usuario from './componentes/user/Usuario'
import BuscarUsuario from './componentes/user/BuscarUsuario'
import TrocarSenhaUsuario from './componentes/pages/TrocarSenhaUsuario'
import Autenticacao2FA from './componentes/pages/Autenticacao2FA'
import TeladeLog from './componentes/user/TeladeLog'
import ListarUsuarios from './componentes/user/ListarUsuarios'


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
          <Route path='/cursos/medicina' element={<CursoMedicina/>}/>
          <Route path='/cursos/direito' element={<CursoDireito/>}/>
          <Route path='/cursos/psicologia' element={<CursoPsicologia/>}/>

          <Route path='/artigos' element={<Artigos/>}/>
          <Route path='/artigos/psicologia' element={<ArtigoPsicologia/>}/>
          <Route path='/artigos/direito' element={<ArtigoDireito/>}/>
          <Route path='/artigos/medicina' element={<ArtigoMedicina/>}/>
          
          <Route path='/bolsas' element={<Bolsas/>}/>
          
          <Route path='/usuario' element={<Usuario/>}/>
          <Route path='/usuario/buscarusuario' element={<BuscarUsuario/>}/>
          <Route path='/usuario/telalog' element={<TeladeLog/>}/>
          <Route path='/usuario/listarusuario' element={<ListarUsuarios/>}/>

          <Route path='/login' element={<Login/>}/>
          <Route path='/login/cadastro' element={<Cadastro/>}/>
          <Route path='/login/autenticacao2fa' element={<Autenticacao2FA/>}/>
          <Route path='/login/trocarsenhausuario' element={<TrocarSenhaUsuario/>}/>
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
