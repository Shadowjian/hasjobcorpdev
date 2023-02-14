import styled from "@emotion/styled";

import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const StyledTypography = styled(Typography)({
  fontSize: "20px",
  py: "20px",
});
const TitleTypography = styled(Typography)({
  fontSize: "40px",
});

const EmployersInfoPage = () => {
  return (
    <>
      <Container
        sx={{
          my: "50px",
          backgroundColor: "#D8AE5E",
          padding: { md: "50px", xs: "10px" },
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          justifyContent: "center",
        }}
      >
        <Box mb="50px">
          <Typography variant="h2" align="center">
            派遣の流れ
          </Typography>
          <StyledTypography>①営業活動。</StyledTypography>
          <StyledTypography>
            ②クライアントから抵触日の通知を受取る
          </StyledTypography>
          <StyledTypography>
            ③派遣基本契約書を結ぶ(クライアント初回のみ)
          </StyledTypography>
          <StyledTypography>
            ④派遣社員と労使協定を結ぶ(TW毎年１回)
          </StyledTypography>
          <StyledTypography>
            ⑤待遇に関する情報提供(派遣先の社員の待遇、初回のみ)
          </StyledTypography>
          <StyledTypography>
            ⑥労働者派遣個別契約書を結ぶ(クライアント)
          </StyledTypography>
          <StyledTypography>・何人、金額、労働場所</StyledTypography>
          <StyledTypography>・人数を増やす時は毎回必要</StyledTypography>
          <StyledTypography>・派遣元、派遣先の責任者も決める</StyledTypography>
          <StyledTypography>
            ⑦派遣先への通知(TW採用時の名前、性別等)
          </StyledTypography>
          <StyledTypography>
            ⑧派遣労働者として雇い入れようとする明示書、労働条件通知書(TW採用時)
          </StyledTypography>
        </Box>

        <Box mb="50px">
          <TitleTypography variant="h2">●派遣法</TitleTypography>
          <br />
          <StyledTypography>・労働者派遣事業の許可</StyledTypography>
          <StyledTypography>
            ・派遣禁止業務
            港湾運行業務、建設業務、警備業務、病院などにおける医療関係業務
          </StyledTypography>
          <StyledTypography>・日雇い派遣の原則禁止(30日)</StyledTypography>
          <StyledTypography>
            ・離職後1年以内の労働者派遣禁止(元の勤務先へ)
          </StyledTypography>
          <StyledTypography>・グループ企業派遣の8割規制</StyledTypography>
          <StyledTypography>・マージン率などの情報提供</StyledTypography>
        </Box>

        <Box mb="50px">
          <TitleTypography variant="h2">
            〇派遣労働者の同一労働同一賃金
          </TitleTypography>
          <StyledTypography>
            ・派遣先均等・均衡方式 派遣先の従業員と同じ待遇(給料、休み)
          </StyledTypography>
          <StyledTypography>・労使協定方式</StyledTypography>
          <StyledTypography>
            同種の業務に従事する一般労働者の平均的な賃金の額と同等以上、職務内容が向上した場合に賃金の改善、段階的な教育訓練
            ◎派遣社員を守る為、地域の最低賃金より派遣社員の最低賃金は高
          </StyledTypography>
          <StyledTypography>
            クライアント、その顧客、スタッフ、およびパートナーに優れたサービスを提供することにより、最高のサービスプロバイダーとして認められること。
          </StyledTypography>
          <br />
          <StyledTypography>くなる(2020年4月～)</StyledTypography>
          <StyledTypography>
            ・毎年業者毎に時給の平均値から見直し
          </StyledTypography>
          <StyledTypography>・勤務年数、スキルにより見直し</StyledTypography>
          <StyledTypography>
            ・毎年8月頃に局長通達により発表(9月、10月には見直していく)
          </StyledTypography>
          <StyledTypography>
            ・雇用保険、労災保険、社会保険料率も見直しがある
          </StyledTypography>
        </Box>

        <Box>
          <Box mb="50px">
            <TitleTypography variant="h2">
              ◎派遣通知書と呼ばれる書類で派遣先に伝えるべきものは、
            </TitleTypography>
            <StyledTypography>①氏名</StyledTypography>
            <StyledTypography>②性別</StyledTypography>
            <StyledTypography>
              ③社会保険・雇用保険の加入状況（未加入の場合はその理由）
            </StyledTypography>
            <StyledTypography>
              ④18歳未満である場合は実年齢、45歳以上である場合はその旨
            </StyledTypography>
            <StyledTypography>
              （それ以外の年齢は伝えてはなりません)
            </StyledTypography>
            <StyledTypography>
              これら仕事を紹介する上で不要な情報を伝えることは、派遣法に違反することになります
            </StyledTypography>
          </Box>

          <Box mb="50px">
            <TitleTypography variant="h2">●禁止事項</TitleTypography>
            <StyledTypography>
              派遣先による派遣労働者を特定することを目的とする行為
            </StyledTypography>
            <StyledTypography>・面接による選考</StyledTypography>
            <StyledTypography>・履歴書・職務経歴書による選考</StyledTypography>
            <StyledTypography>・適性検査による選考</StyledTypography>
            <StyledTypography>・年齢・性別による選考</StyledTypography>
          </Box>

          <Box mb="50px">
            <TitleTypography variant="h2">●労働法</TitleTypography>
            <StyledTypography>
              ・1日8時間、週40時間までが原則(基本残業出来ない)
            </StyledTypography>
            <StyledTypography>
              ・36協定を過半数の従業員と結ぶことにより、最大月45時間まで残業可能に
            </StyledTypography>
            <StyledTypography>・1日8時間を超えた時間1.25倍</StyledTypography>
            <StyledTypography>
              ・22:00～5:00までは深夜手当1.25倍
            </StyledTypography>
            <StyledTypography>
              ・休日出勤は1.35倍(会社指定休日)
            </StyledTypography>
          </Box>
        </Box>
        <StyledTypography>
          ↓これをクリックすると情報が表示されます
        </StyledTypography>
        <Button variant="contained">労働条件通知書</Button>

        <br />
        <br />
        <br />

        <Box mb="50px">
          <TitleTypography variant="h2">ビザについて</TitleTypography>
          <StyledTypography>・留学生ビザ</StyledTypography>
          <StyledTypography>資格外活動許可有り</StyledTypography>
          <StyledTypography>週28時間まで</StyledTypography>
          <StyledTypography>・家族滞在ビザ</StyledTypography>
          <StyledTypography>資格外活動許可有り</StyledTypography>
          <StyledTypography>週28時間まで</StyledTypography>
          <StyledTypography>
            ・永住者、定住者、日本人配偶者ビザ
          </StyledTypography>
          <StyledTypography>日本人と同条件</StyledTypography>
        </Box>

        <StyledTypography>
          ↓これをクリックすると情報が表示されます
        </StyledTypography>
        <Button variant="contained">HAS雇用契約書</Button>
      </Container>

      <Container 
       sx={{
        my: "50px",
        backgroundColor: "#D8AE5E",
        padding: { md: "50px", xs: "10px" },
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        justifyContent: "center",
      }}
      >
        <TitleTypography variant="h2"> 介護福祉士の資格</TitleTypography>
        <StyledTypography>🟡養成施設ルート(外国人留学生)</StyledTypography>
        <StyledTypography>日本語学校</StyledTypography>
        <StyledTypography>↓↓↓</StyledTypography>
        <StyledTypography>介護専門学校等の介護福祉士養成施設</StyledTypography>
        <StyledTypography>(2年以上)</StyledTypography>
        <StyledTypography>実務者研修取得</StyledTypography>
        <StyledTypography>↓↓↓</StyledTypography>
        <StyledTypography>介護福祉士国家試験</StyledTypography>
        <br/>
        <StyledTypography>●国家試験時期</StyledTypography>
        <StyledTypography>年に１回</StyledTypography>
        <StyledTypography>例年、試験の申し込み時期は8月～9月頃となっています。</StyledTypography>
        <StyledTypography>試験日は</StyledTypography>
        <StyledTypography>例年1月下旬に筆記試験、3月上旬に実技試験が実施されます。</StyledTypography>
        <br/>
        <br/>
        <StyledTypography>🟡実務経験ルート</StyledTypography>
        <StyledTypography>実務経験ルートでは、3年以上の経験（従業期間3年以上、従事日数540日以上）と合わせて実務者研修の修了が国家試験受験の際の条件</StyledTypography>
        <StyledTypography>従事日数と従業期間は両方満さなくてはいけません。実務経験3年（1,095日）以上、かつ従事日数540日以上というのが受験資格の条件です。</StyledTypography>
        <StyledTypography>パート、アルバイトでも良い。</StyledTypography>
        <br/>
        <StyledTypography>●実務者研修(資格)</StyledTypography>
        <StyledTypography>450時間のカリキュラム修了するには、民間の資格学校に通って講座を受講。</StyledTypography>
        <StyledTypography>スクールは多数あるため、スクーリングや通信教育形式など、自分に合った学び方を選べる。</StyledTypography>
        <StyledTypography>●実務経験証明書</StyledTypography>
        <StyledTypography>働いている介護の現場に申請を出す。</StyledTypography>
        <StyledTypography>１週間ほどで取れる。</StyledTypography>
        <StyledTypography>●介護職員初任者研修</StyledTypography>
        <StyledTypography>130時間のカリキュラム。</StyledTypography>
        <StyledTypography>通信講座と実技必要。土・日コース5ヶ月ほど</StyledTypography>
        <StyledTypography>1度取ると一生有効。更新なし。訪問介護や夜勤もできる。</StyledTypography>
        <StyledTypography>外国人の方においては、講義や試験が日本語で行われるので、日本語能力試験のN4レベル相当の理解力が必要。</StyledTypography>
        <StyledTypography>130時間。スクーリング15日間程度 10:00～18:00</StyledTypography>
        <StyledTypography>最短22日～5.6ヶ月</StyledTypography>

      </Container>
    </>
  );
};

export default EmployersInfoPage;
