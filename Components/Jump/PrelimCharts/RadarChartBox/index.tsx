import { colors } from "@mui/material";
import styles from "./styles.module.scss";

export interface ChartBoxProps {
  chartTitle: string;
  scoreBox: React.ReactNode;
  children: React.ReactNode;
}

export function RadarChartBox(props: ChartBoxProps) {
  const {
    chartTitle,
    scoreBox,
    children,
  } = props;
  return (
    <div className={styles.box}>
      <div className={styles.chart}>
        <div className={styles.groupChart}>
          {scoreBox}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.chartTitle}>{chartTitle}</div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
