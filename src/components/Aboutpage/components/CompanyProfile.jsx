import styled from "@emotion/styled"

import { Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import React from "react"

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center"
})

const CompanyProfile = () => {
  return (
    <Container
    data-aos="fade-up"data-aos-duration="500"
      sx={{
        backgroundColor: "#D8AE5E",
        borderRadius: "10px",
        pt: "50px",
        pb: "50px",
        marginBottom:"100px"
        
      }}
    >
      <Typography
        variant="h2"
        align="center"
        fontSize={{ xs: "50px", sm: "60px", md: "70  px" }}
      >
        会社概要
      </Typography>
      <Box>
        <Typography
          variant="h3"
          fontSize={{ xs: "40px", sm: "50px", md: "60px" }}
        >
          会社データ
        </Typography>
      </Box>
      <br />

      <hr />

      <StyledBox
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" }
        }}
      >
        <Typography>会社名:</Typography>
        <Typography>HAソリューション株式会社</Typography>
      </StyledBox>

      <hr />

      <StyledBox
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" }
        }}
      >
        <Typography>代表者名:</Typography>
        <Typography>代表取締役社長 西山禎則</Typography>
      </StyledBox>

      <hr />
      <StyledBox
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" }
        }}
      >
        <Typography>顧問弁護士</Typography>
        <Typography>堤＆パートナーズ法律事務所</Typography>
      </StyledBox>

      <hr />

      <StyledBox
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" }
        }}
      >
        <Typography>顧問社労士</Typography>
        <Typography>福岡社会保険労務士法人</Typography>
      </StyledBox>

      <hr />
      
      <StyledBox
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" }
        }}
      >
        <Typography>設立年月日:</Typography>
        <Typography>2022年10月7日</Typography>
      </StyledBox>

      <hr />

      <StyledBox
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" }
        }}
      >
        <Typography>資本金:</Typography>
        <Typography>2,500万</Typography>
      </StyledBox>

      <hr />
      <StyledBox
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" }
        }}
      >
        <Typography>資本準備金: </Typography>
        <Typography>300万</Typography>
      </StyledBox>

      <hr />

      <StyledBox
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" }
        }}
      >
        <Typography>事業内容:</Typography>
        <Typography>労働者派遣事業</Typography>
      </StyledBox>
      <hr />

      <StyledBox
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" }
        }}
      >
        <Typography>許可番号:</Typography>
        <Typography>派 40-301864</Typography>
      </StyledBox>

      <hr />

      <StyledBox
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" }
        }}
      >
        <Typography>所在地:</Typography>
        <Box>
          <Typography>〒810-0062 </Typography>
          <Typography>福岡県福岡市中央区荒戸3-2-4-1003 </Typography>
          <Typography>エステートモア大濠れんが通り</Typography>
        </Box>
      </StyledBox>
      <hr />
      <StyledBox
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" }
        }}
      >
        <Typography>お問い合わせ:</Typography>
        <Box>
          <Typography>電話番号 092-753-9522</Typography>
          <Typography>メールアドレス has.corp.job@gmail.com</Typography>
        </Box>
      </StyledBox>

      <hr />

      <StyledBox
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" }
        }}
      >
        <Typography>受付時間:</Typography>
        <Typography>10:00～17:00</Typography>
      </StyledBox>

      <hr />
    </Container>
  )
}

export default CompanyProfile
