import './App.css'

import { BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import HeaderComponen from './components/Header'
import FooterComponen from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Documentation from './pages/Documentation'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>

      <HeaderComponen />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/documentation"
          element={<Documentation />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      <FooterComponen />

    </BrowserRouter>
  )
}

export default App