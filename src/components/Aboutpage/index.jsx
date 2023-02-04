import styled from "@emotion/styled";
import { ArrowCircleRight, Circle } from "@mui/icons-material";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const StyledTypography = styled(Typography)({
  fontSize: "20px",
});
const TitleTypography = styled(Typography)({
  fontSize: "40px",
});
const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const AboutUsPage = () => {
  return (
    <Container>
      <Container
        sx={{
          margin: { md: "50px 0px", xs: "20px 0", sm: "30px 0" },
          backgroundColor: "#D8AE5E",
          padding: { md: "50px", xs: "10px" },
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <Box mb="50px">
          <Typography variant="h2" align="center">
            概要
          </Typography>
          <StyledTypography>
            私たちは,「HAソリューション」です。
          </StyledTypography>
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

        <Box mb="50px">
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

        <Box mb="50px">
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

        <Box>
          <TitleTypography variant="h2">価値</TitleTypography>
          <Box mb="50px">
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

          <Box mb="50px">
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

      {/* Company Profile */}
      <Container
        sx={{
          backgroundColor: "#D8AE5E",
          borderRadius: "10px",
          pt: "50px",
          pb: "50px",
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
            margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" },
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
            margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" },
          }}
        >
          <Typography>代表者名:</Typography>
          <Typography>牛島 寛将</Typography>
        </StyledBox>

        <hr />
        <StyledBox
          sx={{
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: { xs: "center", sm: "center", md: "space-between" },
            margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" },
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
            margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" },
          }}
        >
          <Typography>資本金:</Typography>
          <Typography>2,200万</Typography>
        </StyledBox>

        <hr />

        <StyledBox
          sx={{
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: { xs: "center", sm: "center", md: "space-between" },
            margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" },
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
            margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" },
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
            margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" },
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
            margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" },
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
            margin: { xs: "20px 0px", sm: "20px 0px", md: "30px 220px" },
          }}
        >
          <Typography>受付時間:</Typography>
          <Typography>10:00～17:00</Typography>
        </StyledBox>

        <hr />
      </Container>

 
        
        <Container>
        <Typography variant="h2" mt="50px" fontSize={{ xs: "50px", sm: "60px", md: "70  px" }} >私たちは何ができる？</Typography>
          <Box backgroundColor="#0B3749" padding="40px" borderRadius="10px" color="#FBFFFF">
            <Typography color="#D8AE5E" variant="h3"  fontSize={{ xs: "50px", sm: "60px", md: "70  px" }}>企業様向け</Typography>
            <Typography variant="h5" margin="10px 0">
              優良な応募者をプロデュースし、御社の安心ポリシーで管理いたします。
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>
                  <ArrowCircleRight style={{ fill: '#D8AE5E' }}/>
                </ListItemIcon>
                <ListItemText primary="HAソリューションは、あなたの会社の問題を回避するために良い応募者を見つけるのに役立ちます。" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <ArrowCircleRight style={{ fill: '#D8AE5E' }}/>
                </ListItemIcon>
                <ListItemText primary="従業員とお客様の関係を円滑に進められるよう仲介いたします。" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <ArrowCircleRight style={{ fill: '#D8AE5E' }} />
                </ListItemIcon>
                <ListItemText primary="たくさんの応募者をご用意して、あなたの会社でお仕事マッチを選びやすくします。" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <ArrowCircleRight style={{ fill: '#D8AE5E' }} />
                </ListItemIcon>
                <ListItemText primary="HAソリューションにコミットする際は、企業様と応募者様にトラブルがないよう、しっかりと管理させて頂きます。" />
              </ListItem>
            </List>

            <Box>
              <Typography variant="h5" margin="10px 0">クライアントの苦情を処理する方法</Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <Circle style={{ fill: '#D8AE5E' }}/>
                  </ListItemIcon>
                  <ListItemText>
                    HA ソリューションが苦情を聞きます。
                    問題を報告してくださったお客様に感謝します。
                  </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <Circle style={{ fill: '#D8AE5E' }}/>
                  </ListItemIcon>
                  <ListItemText>苦情の詳細を記録します。</ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <Circle style={{ fill: '#D8AE5E' }}/>
                  </ListItemIcon>
                  <ListItemText>すべての事実を把握します。</ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <Circle style={{ fill: '#D8AE5E' }}/>
                  </ListItemIcon>
                  <ListItemText>
                    問題を解決するためのオプションについて話し合います。
                  </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <Circle style={{ fill: '#D8AE5E' }} />
                  </ListItemIcon>
                  <ListItemText>迅速に行動します。</ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <Circle style={{ fill: '#D8AE5E' }}/>
                  </ListItemIcon>
                  <ListItemText>
                    常にクライアントをフォローアップします。
                  </ListItemText>
                </ListItem>
              </List>
            </Box>
          </Box>
          <br/>

          <Box backgroundColor="#0B3749" padding="40px" borderRadius="10px" color="white">
            <Typography color="#D8AE5E" variant="h3"  fontSize={{ xs: "50px", sm: "60px", md: "70  px" }}>従業員向け</Typography>
            <Typography variant="h5" margin="10px 0">
              私たちは、あなたが望む仕事に基づいて、あなたのキャリアパスを構築します。
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemIcon>
                  <ArrowCircleRight style={{ fill: '#D8AE5E' }} />
                </ListItemIcon>
                <ListItemText primary="会社はあなたが簡単に仕事を見つけ、応募した仕事にすぐに採用されるように支援します。" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <ArrowCircleRight style={{ fill: '#D8AE5E' }} />
                </ListItemIcon>
                <ListItemText primary="どこでも仕事を探す必要はなく、誰かに頼む必要もありません。簡単に仕事を見つけることができるサイトが用意されているからです。 希望のお仕事が見つかるまで、私たちは立ち止まりません。" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <ArrowCircleRight style={{ fill: '#D8AE5E' }}/>
                </ListItemIcon>
                <ListItemText primary="現場で面接前に何を準備すればいいのか、私たち自身がサポート・提案するので、面接での苦労はもうありません。" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <ArrowCircleRight style={{ fill: '#D8AE5E' }}/>
                </ListItemIcon>
                <ListItemText primary="採用後は、応募職種の新人研修を行いますので、実務経験がなくても問題ありません。" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <ArrowCircleRight style={{ fill: '#D8AE5E' }}/>
                </ListItemIcon>
                <ListItemText primary="また、現場で問題が発生した場合は、いつでもご連絡ください。 " />
              </ListItem>
            </List>

            <Box>
            <Typography variant="h5" margin="10px 0">従業員の苦情を処理する方法</Typography>
            <List>
            <ListItem disablePadding>
                  <ListItemIcon>
                    <Circle style={{ fill: '#D8AE5E' }} />
                  </ListItemIcon>
                  <ListItemText>
                  私たちは注意深く耳を傾け、質問します。
                  </ListItemText>
                </ListItem>
            <ListItem disablePadding>
                  <ListItemIcon>
                    <Circle style={{ fill: '#D8AE5E' }}/>
                  </ListItemIcon>
                  <ListItemText>
                  申し出てくれた従業員に感謝します。
                  </ListItemText>
                </ListItem>
            <ListItem disablePadding>
                  <ListItemIcon>
                    <Circle style={{ fill: '#D8AE5E' }}/>
                  </ListItemIcon>
                  <ListItemText>
                  私たちはクレームを調査します。
                  </ListItemText>
                </ListItem>
            <ListItem disablePadding>
                  <ListItemIcon>
                    <Circle style={{ fill: '#D8AE5E' }} />
                  </ListItemIcon>
                  <ListItemText>
                  内密に推奨します。
                  </ListItemText>
                </ListItem>
            <ListItem disablePadding>
                  <ListItemIcon>
                    <Circle style={{ fill: '#D8AE5E' }}/>
                  </ListItemIcon>
                  <ListItemText>
                  私たちは、論争を解決するためのミーティングを促進します。
                  </ListItemText>
                </ListItem>
            <ListItem disablePadding>
                  <ListItemIcon>
                    <Circle style={{ fill: '#D8AE5E' }}/>
                  </ListItemIcon>
                  <ListItemText>
                  おまけ: 中立的なファシリテーターを雇って、従業員の苦情に対応してもらいましょう。
                  </ListItemText>
                </ListItem>

            </List>
            </Box>
          </Box>
        </Container>

    </Container>
  );
};

export default AboutUsPage;

