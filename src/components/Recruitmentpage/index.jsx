import { Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import React from "react"

const RecruitmentPage = () => {
  return (
    <Container sx={{ overflow: "hidden"}}>
      <Box  sx={{ marginTop: "50px" }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ fontSize: { xs: "25px", md: "60px" } }}
        >
          Recruitment Information
        </Typography>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontSize: { xs: "22px", md: "60px" } }}
        >
          Job Information
        </Typography>
        <Box data-aos="fade-up"
   data-aos-duration="3000"

          sx={{
            margin: { md: "50px 0px", xs: "20px 0", sm: "30px 0" },
            backgroundColor: "#D8AE5E",
            padding: { md: "50px", xs: "10px" },
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
          }}
        >
          <Typography variant="h5">清掃員の仕事</Typography>
          <Typography ml="20px" mb="10px">
            住宅やオフィスビル周辺の基本的な清掃全般をお任せします。
            床と部屋を掃除します。
            ほこりの拭き取り、湿った拭き取り、掃き掃除、掃除機かけ、ほこり取り、床から大きな物体の拾い上げ、ガラスや窓のスポットクリーニングが含まれます。
          </Typography>
          <Typography fontWeight="bold" ml="20px">
            クリーナーの責任には以下が含まれます。
          </Typography>
          <Box  ml="30px">
            <Typography>
              🔘指定された施設エリアの清掃、備蓄、供給
              (ほこり取り、掃き掃除、掃除機、モップ掛け、天井の換気口の清掃、トイレの清掃など)
            </Typography>
            <Typography>🔘定期的な検査と保守活動の実施と文書化。</Typography>
            <Typography>🔘大掃除や特別なプロジェクトを実行します。</Typography>
          </Box>
        </Box>
        <Box data-aos="fade-right"
     data-aos-duration="3000"
          sx={{
            margin: { md: "50px 0px", xs: "20px 0", sm: "30px 0" },
            backgroundColor: "#D8AE5E",
            padding: { md: "50px", xs: "10px" },
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
          }}
        >
          <Typography variant="h5">倉庫スタッフの仕事</Typography>
          <Typography ml="20px" mb="10px">
            倉庫作業員は、注文や製品を保管および処理するビジネスの不可欠な部分である専門家です。
            彼らは、入荷した在庫の受け取りと処理、倉庫在庫からの注文のピッキングと管理を監督します。
          </Typography>
          <Typography fontWeight="bold" ml="20px">
            倉庫作業員の責任には以下が含まれます。
          </Typography>
          <Box ml="30px">
            <Typography>
              {" "}
              🔘スケジュールに従って配送または集荷するための倉庫注文の準備と完了
            </Typography>
            <Typography>🔘倉庫在庫商品の受取り・加工</Typography>
            <Typography>
              🔘倉庫の在庫管理を実施し、監査のために高い品質基準を維持します。
            </Typography>
          </Box>
        </Box>
        <Box data-aos="fade-left"
   data-aos-duration="3000"
          sx={{
            margin: { md: "50px 0px", xs: "20px 0", sm: "30px 0" },
            backgroundColor: "#D8AE5E",
            padding: { md: "50px", xs: "10px" },
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
          }}
        >
          <Typography variant="h5">工場スタッフの仕事</Typography>
          <Typography ml="20px" mb="10px">
      
            工場労働者は、適切な機械や設備を使用して製品を製造する責任があります。
            工場労働者の義務には、必要な数量と仕様に基づいて製品を処理すること、商品にラベルを付けて安全に梱包すること、流通前に商品に欠陥がないことを確認すること、供給在庫を監視すること、欠陥のある機械や設備を報告すること、および清潔さを維持することが含まれます。
            産地の。
            工場労働者は、特定の時間枠内で高品質の製品を生産するための優れた時間管理スキルを備えている必要があります。
          </Typography>
        </Box>
        <Box data-aos="fade-up"
   data-aos-duration="3000"
          sx={{
            margin: { md: "50px 0px", xs: "20px 0", sm: "30px 0" },
            backgroundColor: "#D8AE5E",
            padding: { md: "50px", xs: "10px" },
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
          }}
        >
          <Typography variant="h5">介護者</Typography>
          <Typography ml="20px" mb="10px">
            入浴、着替え、身だしなみ、トイレ、移動、移動、移動、食事など、入居者の日常生活を個別のサービスプランに沿って支援します。
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default RecruitmentPage
