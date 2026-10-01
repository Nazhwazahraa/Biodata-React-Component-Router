import './App.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import HeaderComponen from './components/header'
import FooterComponen from './components/footer'

import Home from './pages/home'
import About from './pages/about'
import Documentation from './pages/documentation'
import Contact from './pages/contact'

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