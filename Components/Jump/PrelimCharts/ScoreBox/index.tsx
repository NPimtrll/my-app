import { Typography } from "@mui/material";
import { Dataset } from "../../../../Domains/Chart/Dataset";

export interface ScoreProps {
  datasets: Dataset[];
}

export default function ScoreBox(props: ScoreProps) {
  const { datasets } = props;
  const yourCompanyData = datasets[0];
  const averageData = datasets[1];
  const top5Data = datasets[2];
  const calculateAverageScore = (data: Dataset) => {
    const sum = data.data.reduce((acc, curr) => acc + curr, 0);
    return Math.round(sum / data.data.length);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div>
        <div
          style={{
            backgroundColor: "#5d5d5d",
            color: "white",
            padding: 4,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <Typography fontSize="12px" align="center" fontWeight="bold">
            Your Company
          </Typography>
        </div>
        <div
          style={{
            textAlign: "center",
            border: "1px solid #5d5d5d",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 6,
            paddingBottom: 6,
          }}
        >
          <Typography fontSize="10px">
            <span style={{ fontWeight: "bold", fontSize: "21px", color: "#5d5d5d" }}>
              {calculateAverageScore(yourCompanyData)}
            </span>{" "}
            /100 คะแนน
          </Typography>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "hsla(37, 97%, 60%, 1)",
            color: "white",
            padding: 4,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <Typography fontSize="12px" align="center" fontWeight="bold">
            Average
          </Typography>
        </div>
        <div
          style={{
            textAlign: "center",
            border: "1px solid hsla(37, 97%, 60%, 1)",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 6,
            paddingBottom: 6,
          }}
        >
          <Typography fontSize="10px">
            <span style={{ fontWeight: "bold", fontSize: "21px", color: "hsla(37, 97%, 60%, 1)" }}>
              {calculateAverageScore(averageData)}
            </span>{" "}
            /100 คะแนน
          </Typography>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "hsla(144, 85%, 40%, 1)",
            color: "white",
            padding: 4,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <Typography fontSize="12px" align="center" fontWeight="bold">
            Top 5
          </Typography>
        </div>
        <div
          style={{
            textAlign: "center",
            border: "1px solid hsla(144, 85%, 40%, 1)",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 6,
            paddingBottom: 6,
          }}
        >
          <Typography fontSize="10px">
            <span style={{ fontWeight: "bold", fontSize: "21px", color: "hsla(144, 85%, 40%, 1)" }}>
              {calculateAverageScore(top5Data)}
            </span>{" "}
            /100 คะแนน
          </Typography>
        </div>
      </div>
    </div>
  );
}
