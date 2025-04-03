import React, { useEffect, useState } from "react";
import { IPrelimAnalysisService } from "../../../../Domains/PrelimAnalysis/PrelimAnalysisService";
import serviceContainer from "../../../../Services/ServiceContainer";
import { Dataset } from "../../../../Domains/Chart/Dataset";
import { IPrelimAnalysisData } from "../../../../Domains/PrelimAnalysis/PrelimAnalysis";
import styles from "./styles.module.scss";
import { ChartBox } from "../ChartBox";
import { SushiChartLineChart } from "../../../Sushi/SushiChartLineChart";
import { RadarChartBox } from "../RadarChartBox";
import { SushiChartRadarChart } from "../../../Sushi/SushiChartRadarChart";
import ScoreBox from "../ScoreBox";

type Props = {};

export default function Performance({}: Props) {
  const prelim = serviceContainer.get<IPrelimAnalysisService>(
    "IPrelimAnalysisService"
  );

  const [grossProfitMarginLabels, setGrossProfitMarginLabels] =
    useState<string[]>(null);
  const [
    grossProfitMarginIndustryDataset,
    setGrossProfitMarginIndustryDataset,
  ] = useState<Dataset[]>(null);
  const [grossProfitMarginMarketDataset, setGrossProfitMarginMarketDataset] =
    useState<Dataset[]>(null);

  const [operatingMarginLabels, setOperatingMarginLabels] =
    useState<string[]>(null);
  const [operatingMarginIndustryDataset, setOperatingMarginIndustryDataset] =
    useState<Dataset[]>(null);
  const [operatingMarginMarketDataset, setOperatingMarginMarketDataset] =
    useState<Dataset[]>(null);

  const [netProfitMarginLabels, setNetProfitMarginLabels] =
    useState<string[]>(null);
  const [netProfitMarginIndustryDataset, setNetProfitMarginIndustryDataset] =
    useState<Dataset[]>(null);
  const [netProfitMarginMarketDataset, setNetProfitMarginMarketDataset] =
    useState<Dataset[]>(null);

  const [assetTurnoverRatioLabels, setAssetTurnoverRatioLabels] =
    useState<string[]>(null);
  const [
    assetTurnoverRatioIndustryDataset,
    setAssetTurnoverRatioIndustryDataset,
  ] = useState<Dataset[]>(null);
  const [assetTurnoverRatioMarketDataset, setAssetTurnoverRatioMarketDataset] =
    useState<Dataset[]>(null);

  const metricsRadarChartLabel: string[] = [
    "Gross Profit Margin",
    "Operating Margin",
    "Net Profit Margin",
    "Asset Turnover Ratio",
  ];
  const metricsRadarChartIndustryDataset: Dataset[] = [
    { title: "Your Company", data: [4, 3, 5, 3] },
    { title: "Industry", data: [5, 6, 5, 8] },
    { title: "Strong Player", data: [10, 12, 10, 9] },
  ];
  const metricsRadarChartMarketDataset: Dataset[] = [
    { title: "Your Company", data: [4, 3, 5, 3] },
    { title: "Industry", data: [5, 6, 5, 8] },
    { title: "Strong Player", data: [10, 12, 10, 9] },
  ];

  useEffect(() => {
    Promise.all([
      prelim.grossProfitMargin(),
      prelim.operatingMargin(),
      prelim.netProfitMargin(),
      prelim.assetTurnoverRatio(),
    ]).then(
      ([
        grossProfitMarginResponse,
        operatingMarginResponse,
        netProfitMarginResponse,
        assetTurnoverRatioResponsse,
      ]: IPrelimAnalysisData[]) => {
        setGrossProfitMarginLabels(grossProfitMarginResponse.labels);
        setGrossProfitMarginIndustryDataset(
          grossProfitMarginResponse.industrySeries
        );
        setGrossProfitMarginMarketDataset(
          grossProfitMarginResponse.marketSeries
        );
        setOperatingMarginLabels(operatingMarginResponse.labels);
        setOperatingMarginIndustryDataset(
          operatingMarginResponse.industrySeries
        );
        setOperatingMarginMarketDataset(operatingMarginResponse.marketSeries);
        setNetProfitMarginLabels(netProfitMarginResponse.labels);
        setNetProfitMarginIndustryDataset(
          netProfitMarginResponse.industrySeries
        );
        setNetProfitMarginMarketDataset(netProfitMarginResponse.marketSeries);
        setAssetTurnoverRatioLabels(assetTurnoverRatioResponsse.labels);
        setAssetTurnoverRatioIndustryDataset(
          assetTurnoverRatioResponsse.industrySeries
        );
        setAssetTurnoverRatioMarketDataset(
          assetTurnoverRatioResponsse.marketSeries
        );
      }
    );
  }, []);
  return (
    <div className={styles.grid}>
      <RadarChartBox
        chartTitle={"Industry"}
        scoreBox={
          <ScoreBox
            datasets={metricsRadarChartIndustryDataset}
          />
        }
        children={
          <SushiChartRadarChart
            labels={metricsRadarChartLabel}
            datasets={metricsRadarChartIndustryDataset}
          />
        }
      />
      <RadarChartBox
        chartTitle={"Market"}
        scoreBox={
          <ScoreBox
            datasets={metricsRadarChartMarketDataset}
          />
        }
        children={
          <SushiChartRadarChart
            labels={metricsRadarChartLabel}
            datasets={metricsRadarChartMarketDataset}
          />
        }
      />
      <ChartBox
        title="Gross Profit Margin"
        description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
        industryTitle={"Industry"}
        industryChart={
          grossProfitMarginIndustryDataset && (
            <SushiChartLineChart
              labels={grossProfitMarginLabels}
              datasets={grossProfitMarginIndustryDataset}
              chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
            />
          )
        }
        marketTitle={"Market"}
        marketChart={
          grossProfitMarginMarketDataset && (
            <SushiChartLineChart
              labels={grossProfitMarginLabels}
              datasets={grossProfitMarginMarketDataset}
              chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
            />
          )
        }
      />
      <ChartBox
        title="Operating Margin"
        description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
        industryTitle={"Industry"}
        industryChart={
          operatingMarginIndustryDataset && (
            <SushiChartLineChart
              labels={operatingMarginLabels}
              datasets={operatingMarginIndustryDataset}
              chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
            />
          )
        }
        marketTitle={"Market"}
        marketChart={
          operatingMarginMarketDataset && (
            <SushiChartLineChart
              labels={operatingMarginLabels}
              datasets={operatingMarginMarketDataset}
              chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
            />
          )
        }
      />
      <ChartBox
        title="Net Profit Margin"
        description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
        industryTitle={"Industry"}
        industryChart={
          netProfitMarginIndustryDataset && (
            <SushiChartLineChart
              labels={netProfitMarginLabels}
              datasets={netProfitMarginIndustryDataset}
              chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
            />
          )
        }
        marketTitle={"Market"}
        marketChart={
          netProfitMarginMarketDataset && (
            <SushiChartLineChart
              labels={netProfitMarginLabels}
              datasets={netProfitMarginMarketDataset}
              chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
            />
          )
        }
      />
      <ChartBox
        title="Asset Turnover Ratio"
        description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
        industryTitle={"Industry"}
        industryChart={
          assetTurnoverRatioIndustryDataset && (
            <SushiChartLineChart
              labels={assetTurnoverRatioLabels}
              datasets={assetTurnoverRatioIndustryDataset}
              chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
            />
          )
        }
        marketTitle={"Market"}
        marketChart={
          assetTurnoverRatioMarketDataset && (
            <SushiChartLineChart
              labels={assetTurnoverRatioLabels}
              datasets={assetTurnoverRatioMarketDataset}
              chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
            />
          )
        }
      />
    </div>
  );
}
