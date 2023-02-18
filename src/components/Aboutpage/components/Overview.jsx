import styled from "@emotion/styled"

import { Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import React from "react"

const StyledTypography = styled(Typography)({
  fontSize: "20px"
})
const TitleTypography = styled(Typography)({
  fontSize: "40px"
})

const Overview = () => {
  return (
    <Container
      sx={{
        margin: { md: "50px 0px", xs: "20px 0", sm: "30px 0" },
        backgroundColor: "#D8AE5E",
        padding: { md: "50px", xs: "10px" },
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      }}
    >
      <Box mb="50px" data-aos="fade-up" data-aos-duration="500">
        <Typography variant="h2" align="center">
          概要
        </Typography>
        <StyledTypography>私たちは,「HAソリューション」です。</StyledTypography>
        <StyledTypography>
          私たちは、素晴らしい雇用者とその分野のお仕事を探している人々との間を取り持つ会社です。
        </StyledTypography>
        <StyledTypography>
          私たちは、そのような両者を可能な限りシームレスでストレスフリーなプロセスの中で結び付けることを目標にしています。
        </StyledTypography>
        <StyledTypography>
          私たちは、クライアントの皆様のニーズを、私たちの多種多様な雇用サービスによって実現致します。
        </StyledTypography>
        <StyledTypography>
          私たちは、どのような形態（短期、長期、契約）の雇用であっても、適切な人材をご紹介致します。
        </StyledTypography>
        <StyledTypography>
          私たちには、クライアントの皆様と一緒に活動できる、経験豊かなリクルーターを有するチームもございます。
        </StyledTypography>
        <StyledTypography>「人々を繋ぐ、笑顔と幸福を創る」</StyledTypography>
        <StyledTypography>
          あなたを満足させる人材を供給できる、あなたの一番のパートナーです。
        </StyledTypography>
      </Box>

      <Box mb="50px" data-aos="fade-right" data-aos-duration="500">
        <TitleTypography variant="h2">ミッション</TitleTypography>
        <StyledTypography>
          クライアントとその顧客の両方が信頼し、喜んで選択できる採用パートナーになること。
        </StyledTypography>
        <StyledTypography>
          これを達成するために、私たちは優れた顧客サービス、質の高いスタッフ、および競争力のある価格を提供することに尽力しています。
        </StyledTypography>
        <StyledTypography>
          今後もお客様とよく相談し、お客様に満足していただける良い人材をご提供できるよう努めてまいります。
        </StyledTypography>
      </Box>

      <Box mb="50px" data-aos="fade-left" data-aos-duration="500">
        <TitleTypography variant="h2">ヴィジョン</TitleTypography>
        <StyledTypography>
          私たちのビジョンは、サービスの範囲と品質に基づいて、お客様に選ばれる人材紹介会社になることです。
        </StyledTypography>
        <StyledTypography>
          適切な仕事に適切な人材を確保するというクライアントのニーズを満たします。
        </StyledTypography>
        <StyledTypography>
          私たちのスタッフはまた、求職者が理想的な組織でエキサイティングなキャリアを発見し、追求するための好ましいプラットフォームになるよう努めています。
        </StyledTypography>
        <StyledTypography>
          クライアント、その顧客、スタッフ、およびパートナーに優れたサービスを提供することにより、最高のサービスプロバイダーとして認められること。
        </StyledTypography>
      </Box>

      <Box data-aos="fade-right" data-aos-duration="500">
        <TitleTypography variant="h2">価値</TitleTypography>
        <Box mb="50px" data-aos="fade-up" data-aos-duration="500">
          <Typography variant="h4">人</Typography>
          <Typography>
            私たちは人々とその生活における仕事の役割を気にかけています。
            私たちは人々を個人として尊重し、信頼し、仕事と生活の目的を達成できるようにします。
          </Typography>
          <Typography>
            私たちは、計画、仕事、コーチング、トレーニングを通じて、人々のキャリア開発を支援します。
          </Typography>
          <Typography>
            私たちは、スタッフ、クライアント、候補者など、私たちの成功へのすべての貢献を認識しています。
            私たちは達成を奨励し、報います。
          </Typography>
        </Box>

        <Box mb="50px" data-aos="fade-up" data-aos-duration="500">
          <Typography variant="h4">知識</Typography>
          <Typography>
            私たちは知識、専門知識、リソースを共有して、仕事の世界で今何が重要で、次に何が起こっているのかを誰もが
            理解し、対応する方法を理解できるようにします。
          </Typography>
          <Typography>
            私たちは、関係、ソリューション、およびサービスを改善するために、この情報に積極的に耳を傾け、それに基づいて行動します。
          </Typography>
          <Typography>
            私たちは、これらのベストプラクティスの開発と採用を積極的に追求しています。
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Overview
