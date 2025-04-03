import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SushiPage } from "../../Components/Sushi/SushiPage";
import { SushiContainer } from "../../Components/Sushi/SushiContainer";
import { SushiCard } from "../../Components/Sushi/SushiCard";
// import ShareHolder from "../../Components/Jump/PrelimCharts/ShareHolder";
import theme from "../../Components/Themes/Theme";
// import BusinessFoundation from "../../Components/Jump/PrelimCharts/BusinessFoundation";
// import FutureOutlook from "../../Components/Jump/PrelimCharts/FutureOutlook";
// import Performance from "../../Components/Jump/PrelimCharts/Performance";
// import { Overall } from "../../Components/Jump/PrelimCharts/OverallChart";

type Props = {};

export default function PrelimAnalysisPage({}: Props) {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--bodyColor",
      theme.palette.common.white,
    );
    return () => {
      document.documentElement.style.setProperty("--bodyColor", "");
    };
  }, []);

  const navigate = useNavigate();
  const navigateToOnbordingPage = () => {
    navigate("/app/onboard");
  };

  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <SushiPage
      withToolbar
      title="รายงานผลการวิเคราะห์ข้อมูลทางการเงินเบื้องต้น"
    >
      <SushiContainer>
        <SushiCard testId="prelim-analysis-card">
          <SushiCard.Body>
            {/* <Overall /> */}
            <div style={{ paddingTop: "24px", paddingBottom: "24px" }}>
              <Tabs
                value={tabIndex}
                onChange={handleChange}
                variant="fullWidth"
                slotProps={{
                  indicator: { style: { display: "none" } },
                }}
                sx={{
                  "& .MuiTab-root": {
                    color: theme.palette.common.black,
                    textTransform: "none",
                    fontWeight: "bold",
                    backgroundColor: "#F2F2F2",
                    borderRadius: "8px",
                    width: "279px",
                    height: "85px",
                  },
                  "& .Mui-selected": {
                    color: `${theme.palette.common.white} !important`,
                    backgroundColor: "#FFA400",
                  },
                  "& .MuiTabs-flexContainer": {
                    gap: "18px",
                  },
                }}
              >
                <Tab
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                  label={
                    <Box textAlign="left">
                      <Typography variant="h3" fontWeight="bold">
                        Business Foundation
                      </Typography>
                      <Typography variant="body2">
                        Stability & Governance
                      </Typography>
                    </Box>
                  }
                />
                <Tab
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                  label={
                    <Box textAlign="left">
                      <Typography variant="h3" fontWeight="bold">
                        Performance
                      </Typography>
                      <Typography variant="body2">
                        Profitability & Efficiency
                      </Typography>
                    </Box>
                  }
                />
                <Tab
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                  label={
                    <Box textAlign="left">
                      <Typography variant="h3" fontWeight="bold">
                        Future Outlook
                      </Typography>
                      <Typography variant="body2">Growth</Typography>
                    </Box>
                  }
                />
                <Tab
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                  label={
                    <Box textAlign="left">
                      <Typography variant="h3" fontWeight="bold">
                        Shareholders' Value
                      </Typography>
                      <Typography variant="body2">
                        Shareholders Value & Market Sentiment
                      </Typography>
                    </Box>
                  }
                />
              </Tabs>
            </div>
            <Box sx={{ pb: "24px" }}>
              {/* {tabIndex === 0 && <BusinessFoundation /> }
              {tabIndex === 1 && <Performance />}
              {tabIndex === 2 && <FutureOutlook />}
              {tabIndex === 3 && <ShareHolder />} */}
            </Box>
            <Box sx={{ pt: "24px", pb: "48px" }}>
              <Typography variant="body1" fontWeight="bold">
                หมายเหตุ
              </Typography>
              <ul style={{ paddingLeft: "16px", margin: 0 }}>
                <li>
                  ข้อมูลเพื่อการศึกษาหรือใช้งานส่วนบุคคลเท่านั้น
                  ไม่ใช่เพื่อประกอบการซื้อขายหลักทรัพย์
                </li>
                <li>ATO - คำสั่งซื้อหรือขายหลักทรัพย์ ณ ราคาเปิดตลาด</li>
                <li>ATC - คำสั่งซื้อหรือขายหลักทรัพย์ ณ ราคาปิดตลาด</li>
                <li>
                  ปริมาณ/มูลค่าการซื้อขายรวมจากทุกวิธีการซื้อขาย (Auto matching
                  Trade Report, Odd Lot)
                </li>
              </ul>
            </Box>
          </SushiCard.Body>
        </SushiCard>
      </SushiContainer>
    </SushiPage>
  );
}
