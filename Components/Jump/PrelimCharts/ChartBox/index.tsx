import styles from "./styles.module.scss";

export interface ChartBoxProps {
  title: string;
  description: string;
  industryTitle: string;
  marketTitle: string;
  industryChart: React.ReactNode;
  marketChart: React.ReactNode;
  industryTable: React.ReactNode;
  marketTable: React.ReactNode;
}

export function ChartBox(props: ChartBoxProps) {
  const {
    title,
    description,
    industryTitle,
    marketTitle,
    industryChart,
    marketChart,
    industryTable,
    marketTable,
  } = props;
  return (
    <div className={styles.box}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div>
        <div className={styles.groupchart}>
          <div className={styles.chart}>
            <div className={styles.chartTitle}>{industryTitle}</div>
            {industryChart}
            {industryTable}
          </div>
          <div className={styles.chart}>
            <div className={styles.chartTitle}>{marketTitle}</div>
            {marketChart}
            {marketTable}
          </div>
        </div>
      </div>
    </div>
  );
}
