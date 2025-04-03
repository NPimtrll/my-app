import React, { useEffect, useState } from "react";
import serviceContainer from "../../../../Services/ServiceContainer";
import { IPrelimAnalysisService } from "../../../../Domains/PrelimAnalysis/PrelimAnalysisService";
import { Dataset } from "../../../../Domains/Chart/Dataset";
import { IPrelimAnalysisData } from "../../../../Domains/PrelimAnalysis/PrelimAnalysis";
import styles from "./styles.module.scss";
import { ChartBox } from "../ChartBox";
import { SushiChartLineChart } from "../../../Sushi/SushiChartLineChart";
import { RadarChartBox } from "../RadarChartBox";
import { SushiChartRadarChart } from "../../../Sushi/SushiChartRadarChart";
import ScoreBox from "../ScoreBox";
import ScoreTable from "../ScoreTable";
import { transformDataset } from "../TransformDataset";

type Props = {};

export default function FutureOutlook({}: Props) {
  const prelim = serviceContainer.get<IPrelimAnalysisService>(
    "IPrelimAnalysisService"
  );

  const [revenueGrowthLabels, setRevenueGrowthLabels] =
    useState<string[]>(null);
  const [revenueGrowthIndustryDataset, setRevenueGrowthIndustryDataset] =
    useState<Dataset[]>(null);
  const [revenueGrowthMarketDataset, setRevenueGrowthMarketDataset] =
    useState<Dataset[]>(null);

  const [netProfitGrowthLabels, setNetProfitGrowthLabels] =
    useState<string[]>(null);
  const [netProfitGrowthIndustryDataset, setNetProfitGrowthIndustryDataset] =
    useState<Dataset[]>(null);
  const [netProfitGrowthMarketDataset, setNetProfitGrowthMarketDataset] =
    useState<Dataset[]>(null);

  const [capexSaleLabels, setCapexSaleLabels] = useState<string[]>(null);
  const [capexSaleIndustryDataset, setCapexSaleIndustryDataset] =
    useState<Dataset[]>(null);
  const [capexSaleMarketDataset, setCapexSaleMarketDataset] =
    useState<Dataset[]>(null);

  const metricsRadarChartLabel: string[] = [
    "Revenue Gowth",
    "Net Profit Growth",
    "CapEx/ Sales",
  ];
  const metricsRadarChartIndustryDataset: Dataset[] = [
    { title: "Your Company", data: [3, 2, 6] },
    { title: "Industry", data: [4, 2, 5] },
    { title: "Strong Player", data: [7, 8, 10] },
  ];
  const metricsRadarChartMarketDataset: Dataset[] = [
    { title: "Your Company", data: [3, 2, 6] },
    { title: "Industry", data: [4, 2, 5] },
    { title: "Strong Player", data: [7, 8, 10] },
  ];

  useEffect(() => {
    Promise.all([
      prelim.revenueGrowth(),
      prelim.netProfitGrowth(),
      prelim.capexSale(),
    ]).then(
      ([
        revenueGrowthResponse,
        netProfitGrowthResponse,
        capexSaleResponse,
      ]: IPrelimAnalysisData[]) => {
        setRevenueGrowthLabels(revenueGrowthResponse.labels);
        setRevenueGrowthIndustryDataset(revenueGrowthResponse.industrySeries);
        setRevenueGrowthMarketDataset(revenueGrowthResponse.marketSeries);
        setNetProfitGrowthLabels(netProfitGrowthResponse.labels);
        setNetProfitGrowthIndustryDataset(
          netProfitGrowthResponse.industrySeries
        );
        setNetProfitGrowthMarketDataset(netProfitGrowthResponse.marketSeries);
        setCapexSaleLabels(capexSaleResponse.labels);
        setCapexSaleIndustryDataset(capexSaleResponse.industrySeries);
        setCapexSaleMarketDataset(capexSaleResponse.marketSeries);
      }
    );
  }, []);
  return (
    <>
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
          title="Revenue Gowth"
          description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
          industryTitle={"Industry"}
          industryChart={
            revenueGrowthIndustryDataset && (
              <SushiChartLineChart
                labels={revenueGrowthLabels}
                datasets={revenueGrowthIndustryDataset}
                chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
              />
            )
          }
          industryTable={
            revenueGrowthIndustryDataset && (
              <ScoreTable
                labels={revenueGrowthLabels}
                datasets={transformDataset(revenueGrowthIndustryDataset)}
                unit={"เปอร์เซ็นต์"}
                dataPosition="center"
              />
            )
          }
          marketTitle={"Market"}
          marketChart={
            revenueGrowthMarketDataset && (
              <SushiChartLineChart
                labels={revenueGrowthLabels}
                datasets={revenueGrowthMarketDataset}
                chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
              />
            )
          }
          marketTable={
            revenueGrowthMarketDataset && (
              <ScoreTable
                labels={revenueGrowthLabels}
                datasets={transformDataset(revenueGrowthMarketDataset)}
                unit={"เปอร์เซ็นต์"}
                dataPosition="center"
              />
            )
          }
        />
        <ChartBox
          title="Net Profit Growth"
          description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
          industryTitle={"Industry"}
          industryChart={
            netProfitGrowthIndustryDataset && (
              <SushiChartLineChart
                labels={netProfitGrowthLabels}
                datasets={netProfitGrowthIndustryDataset}
                chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
              />
            )
          }
          industryTable={
            netProfitGrowthIndustryDataset && (
              <ScoreTable
                labels={netProfitGrowthLabels}
                datasets={transformDataset(netProfitGrowthIndustryDataset)}
                unit={"เปอร์เซ็นต์"}
                dataPosition="center"
              />
            )
          }
          marketTitle={"Market"}
          marketChart={
            netProfitGrowthMarketDataset && (
              <SushiChartLineChart
                labels={netProfitGrowthLabels}
                datasets={netProfitGrowthMarketDataset}
                chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
              />
            )
          }
          marketTable={
            netProfitGrowthMarketDataset && (
              <ScoreTable
                labels={netProfitGrowthLabels}
                datasets={transformDataset(netProfitGrowthMarketDataset)}
                unit={"เปอร์เซ็นต์"}
                dataPosition="center"
              />
            )
          }
        />
        <ChartBox
          title="CapEx/ Sales"
          description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
          industryTitle={"Industry"}
          industryChart={
            capexSaleIndustryDataset && (
              <SushiChartLineChart
                labels={capexSaleLabels}
                datasets={capexSaleIndustryDataset}
                chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
              />
            )
          }
          industryTable={
            capexSaleIndustryDataset && (
              <ScoreTable
                labels={capexSaleLabels}
                datasets={transformDataset(capexSaleIndustryDataset)}
                unit={"เท่า"}
                dataPosition="center"
              />
            )
          }
          marketTitle={"Market"}
          marketChart={
            capexSaleMarketDataset && (
              <SushiChartLineChart
                labels={capexSaleLabels}
                datasets={capexSaleMarketDataset}
                chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
              />
            )
          }
          marketTable={
            capexSaleMarketDataset && (
              <ScoreTable
                labels={capexSaleLabels}
                datasets={transformDataset(capexSaleMarketDataset)}
                unit={"เท่า"}
                dataPosition="center"
              />
            )
          }
        />
      </div>
    </>
  );
}
