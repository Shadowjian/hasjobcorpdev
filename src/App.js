import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./layout/pages/Home"
import Careers from "./layout/pages/Careers"
import Recruitment from "./layout/pages/Recruitment"
import About from "./layout/pages/About"
import Contact from "./layout/pages/Contact"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material"


function App() {

  const theme = createTheme({
    typography: {
            fontFamily: [
               'Zen Old Mincho', 
               'serif'
            ].join(','),
          }

  })

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App
