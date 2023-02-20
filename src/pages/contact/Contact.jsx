import React from "react"
import { useNavigation } from "react-router-dom"
import ContactPage from "../../components/Contactpage"
import Loader from "../../components/loader"

const Contact = () => {
  const navigation = useNavigation()
  if (navigation.state === "loading") return <Loader />
  return <ContactPage />
}

export default Contact
