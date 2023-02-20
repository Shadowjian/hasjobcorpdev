import React from "react"
import { useNavigation } from "react-router-dom"
import EmployersInfoPage from "../../components/Employerspage"
import Loader from "../../components/loader"

const EmployersInfo = () => {
  const navigation = useNavigation()
  if (navigation.state === "loading") return <Loader />
  return <EmployersInfoPage />
}

export default EmployersInfo
