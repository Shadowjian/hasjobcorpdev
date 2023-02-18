import { ArrowCircleRight, Circle } from "@mui/icons-material"

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material"
import { Box, Container } from "@mui/system"
import React from "react"

const Whatcanwedo = () => {
  return (
    <Container sx={{marginBottom:"100px"}}>
      <Typography data-aos="fade-right" data-aos-duration="1500"
        variant="h2"
        mt="50px"
        fontSize={{ xs: "50px", sm: "60px", md: "70  px" }}
      >
        私たちは何ができる？
      </Typography>
      <Box data-aos="fade-up" data-aos-duration="1500"
        backgroundColor="#0B3749"
        padding="40px"
        borderRadius="10px"
        color="#FBFFFF"
      >
        <Typography
          color="#D8AE5E"
          variant="h3"
          fontSize={{ xs: "50px", sm: "60px", md: "70  px" }}
        >
          企業様向け
        </Typography>
        <Typography variant="h5" margin="10px 0">
          優良な応募者をプロデュースし、御社の安心ポリシーで管理いたします。
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <ArrowCircleRight style={{ fill: "#D8AE5E" }} />
            </ListItemIcon>
            <ListItemText primary="HAソリューションは、あなたの会社の問題を回避するために良い応募者を見つけるのに役立ちます。" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <ArrowCircleRight style={{ fill: "#D8AE5E" }} />
            </ListItemIcon>
            <ListItemText primary="従業員とお客様の関係を円滑に進められるよう仲介いたします。" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <ArrowCircleRight style={{ fill: "#D8AE5E" }} />
            </ListItemIcon>
            <ListItemText primary="たくさんの応募者をご用意して、あなたの会社でお仕事マッチを選びやすくします。" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <ArrowCircleRight style={{ fill: "#D8AE5E" }} />
            </ListItemIcon>
            <ListItemText primary="HAソリューションにコミットする際は、企業様と応募者様にトラブルがないよう、しっかりと管理させて頂きます。" />
          </ListItem>
        </List>

        <Box >
          <Typography variant="h5" margin="10px 0">
            クライアントの苦情を処理する方法
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <Circle style={{ fill: "#D8AE5E" }} />
              </ListItemIcon>
              <ListItemText>
                HA ソリューションが苦情を聞きます。
                問題を報告してくださったお客様に感謝します。
              </ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>
                <Circle style={{ fill: "#D8AE5E" }} />
              </ListItemIcon>
              <ListItemText>苦情の詳細を記録します。</ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>
                <Circle style={{ fill: "#D8AE5E" }} />
              </ListItemIcon>
              <ListItemText>すべての事実を把握します。</ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>
                <Circle style={{ fill: "#D8AE5E" }} />
              </ListItemIcon>
              <ListItemText>
                問題を解決するためのオプションについて話し合います。
              </ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>
                <Circle style={{ fill: "#D8AE5E" }} />
              </ListItemIcon>
              <ListItemText>迅速に行動します。</ListItemText>
            </ListItem>

            <ListItem disablePadding>
              <ListItemIcon>
                <Circle style={{ fill: "#D8AE5E" }} />
              </ListItemIcon>
              <ListItemText>
                常にクライアントをフォローアップします。
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
      <br />

      <Box data-aos="fade-up" data-aos-duration="1500"
        backgroundColor="#0B3749"
        padding="40px"
        borderRadius="10px"
        color="white"
      >
        <Typography
          color="#D8AE5E"
          variant="h3"
          fontSize={{ xs: "50px", sm: "60px", md: "70  px" }}
        >
          従業員向け
        </Typography>
        <Typography variant="h5" margin="10px 0">
          私たちは、あなたが望む仕事に基づいて、あなたのキャリアパスを構築します。
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <ArrowCircleRight style={{ fill: "#D8AE5E" }} />
            </ListItemIcon>
            <ListItemText primary="会社はあなたが簡単に仕事を見つけ、応募した仕事にすぐに採用されるように支援します。" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <ArrowCircleRight style={{ fill: "#D8AE5E" }} />
            </ListItemIcon>
            <ListItemText primary="どこでも仕事を探す必要はなく、誰かに頼む必要もありません。簡単に仕事を見つけることができるサイトが用意されているからです。 希望のお仕事が見つかるまで、私たちは立ち止まりません。" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <ArrowCircleRight style={{ fill: "#D8AE5E" }} />
            </ListItemIcon>
            <ListItemText primary="現場で面接前に何を準備すればいいのか、私たち自身がサポート・提案するので、面接での苦労はもうありません。" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <ArrowCircleRight style={{ fill: "#D8AE5E" }} />
            </ListItemIcon>
            <ListItemText primary="採用後は、応募職種の新人研修を行いますので、実務経験がなくても問題ありません。" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <ArrowCircleRight style={{ fill: "#D8AE5E" }} />
            </ListItemIcon>
            <ListItemText primary="また、現場で問題が発生した場合は、いつでもご連絡ください。 " />
          </ListItem>
        </List>

        <Box>
          <Typography variant="h5" margin="10px 0">
            従業員の苦情を処理する方法
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <Circle style={{ fill: "#D8AE5E" }} />
              </ListItemIcon>
              <ListItemText>
                私たちは注意深く耳を傾け、質問します。
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <Circle style={{ fill: "#D8AE5E" }} />
              </ListItemIcon>
              <ListItemText>申し出てくれた従業員に感謝します。</ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <Circle style={{ fill: "#D8AE5E" }} />
              </ListItemIcon>
              <ListItemText>私たちはクレームを調査します。</ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <Circle style={{ fill: "#D8AE5E" }} />
              </ListItemIcon>
              <ListItemText>内密に推奨します。</ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <Circle style={{ fill: "#D8AE5E" }} />
              </ListItemIcon>
              <ListItemText>
                私たちは、論争を解決するためのミーティングを促進します。
              </ListItemText>
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <Circle style={{ fill: "#D8AE5E" }} />
              </ListItemIcon>
              <ListItemText>
                おまけ:
                中立的なファシリテーターを雇って、従業員の苦情に対応してもらいましょう。
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  )
}

export default Whatcanwedo
