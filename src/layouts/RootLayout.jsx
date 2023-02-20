import { Outlet, useNavigation } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout
