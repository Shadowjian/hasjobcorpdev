import { useNavigation } from "react-router-dom"
import Loader from "../../components/loader"
import RecruitmentPage from "../../components/Recruitmentpage"

const Recruitment = () => {
  const navigation = useNavigation()
  if (navigation.state === "loading") return <Loader />
  return <RecruitmentPage />
}

export default Recruitment
