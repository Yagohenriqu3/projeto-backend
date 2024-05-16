import { HashRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './componentes/Header'
import Footer from './componentes/Footer'

import Cursos from './componentes/pages/Cursos'
import Artigos from './componentes/pages/Artigos'
import Login from './componentes/pages/Login'
import Home from './componentes/pages/Home'
import Cadastro from './componentes/pages/Cadastro'


function App() {
  return (
    <div>
      <Router>
        <header>
          <Header/>
        </header>
        <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/cursos' element={<Cursos/>}/>
          <Route path='/artigos' element={<Artigos/>}/>
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
