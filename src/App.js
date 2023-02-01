import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./layout/pages/Home"
import Careers from "./layout/pages/Careers"
import Recruitment from "./layout/pages/Recruitment"
import About from "./layout/pages/About"
import Contact from "./layout/pages/Contact"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="careers" element={<Careers />} />
        <Route path="recruitment" element={<Recruitment />} />
        <Route path="about" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
