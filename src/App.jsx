import { Routes, Route } from 'react-router-dom'
import HeaderMenu from './components/HeaderMenu/HeaderMenu.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import CharecterList from './pages/CharecterList/CharecterList.jsx'
import AboutCompany from './pages/AboutCompany/AboutCompany.jsx'
import Registration from './pages/Registration/Registration.jsx'
import './App.css'

function App() {
  return (
    <>
      <HeaderMenu />

      <main id="center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/charecters" element={<CharecterList />} />
          <Route path="/about" element={<AboutCompany />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <section id="spacer" />

      <Footer />
    </>
  )
}

export default App
