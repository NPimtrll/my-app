import React, { useEffect, useState } from "react";
import serviceContainer from "../../../../Services/ServiceContainer";
import { IPrelimAnalysisService } from "../../../../Domains/PrelimAnalysis/PrelimAnalysisService";
import { IPrelimAnalysisData } from "../../../../Domains/PrelimAnalysis/PrelimAnalysis";
import { Dataset } from "../../../../Domains/Chart/Dataset";
import styles from "./styles.module.scss";
import { ChartBox } from "../ChartBox";
import { SushiChartLineChart } from "../../../Sushi/SushiChartLineChart";
import { SushiChartRadarChart } from "../../../Sushi/SushiChartRadarChart";
import { RadarChartBox } from "../RadarChartBox";
import ScoreBox from "../ScoreBox";
import ScoreTable from "../ScoreTable";
import { transformDataset } from "../TransformDataset";

type Props = {};

export default function BusinessFoundation({}: Props) {
  const prelim = serviceContainer.get<IPrelimAnalysisService>(
    "IPrelimAnalysisService"
  );

  const [deRatioLabels, setDERatioLabels] = useState<string[]>(null);
  const [deRatioIndustryDataset, setDERatioIndustryDataset] =
    useState<Dataset[]>(null);
  const [deRatioMarketDataset, setDERatioMarketDataset] =
    useState<Dataset[]>(null);

  const [currentRatioLabels, setCurrentRatioLabels] = useState<string[]>(null);
  const [currentRatioIndustryDataset, setCurrentRatioIndustryDataset] =
    useState<Dataset[]>(null);
  const [currentRatioMarketDataset, setCurrentRatioMarketDataset] =
    useState<Dataset[]>(null);

  const [chartByAccountFormLabels, setChartByAccountFormLabels] =
    useState<string[]>(null);
  const [
    chartByAccountFormIndustryDataset,
    setChartByAccountFormIndustryDataset,
  ] = useState<Dataset[]>(null);
  const [chartByAccountFormMarketDataset, setChartByAccountFormMarketDataset] =
    useState<Dataset[]>(null);
  const [chartNameByAccountForm, setChartNameByAccountForm] =
    useState<string>("LOADING...");

  const [freeCashFlowLabels, setFreeCashFlowLabels] = useState<string[]>(null);
  const [freeCashFlowIndustryDataset, setFreeCashFlowIndustryDataset] =
    useState<Dataset[]>(null);
  const [freeCashFlowMarketDataset, setFreeCashFlowMarketDataset] =
    useState<Dataset[]>(null);

  const [freeFloatLabels, setFreeFloatLabels] = useState<string[]>(null);
  const [freeFloatIndustryDataset, setFreeFloatIndustryDataset] =
    useState<Dataset[]>(null);
  const [freeFloatMarketDataset, setFreeFloatMarketDataset] =
    useState<Dataset[]>(null);

  const [cgrScoreLabels, setCGRScoreLabels] = useState<string[]>(null);
  const [cgrScoreIndustryDataset, setCGRScoreIndustryDataset] =
    useState<Dataset[]>(null);
  const [cgrScoreMarketDataset, setCGRScoreMarketDataset] =
    useState<Dataset[]>(null);

  const metricsRadarChartLabel: string[] = [
    "D/E Ratio",
    "Current Ratio",
    "Debt Service Coverage Ratio (DSCR)",
    "Free Cash Flow (FCF)",
    "Free float",
    "CGR",
  ];
  const metricsRadarChartIndustryDataset: Dataset[] = [
    { title: "Your Company", data: [3, 2, 3, 1, 1, 1] },
    { title: "Industry", data: [2, 2, 2, 1, 1, 8] },
    { title: "Strong Player", data: [3, 3, 4, 4, 4, 3] },
  ];
  const metricsRadarChartMarketDataset: Dataset[] = [
    { title: "Your Company", data: [3, 2, 3, 1, 1, 1] },
    { title: "Industry", data: [2.4, 2.2, 2.5, 1.6, 1.5, 1.8] },
    { title: "Strong Player", data: [3, 5, 4, 6, 7, 3] },
  ];

  useEffect(() => {
    Promise.all([
      prelim.deRatio(),
      prelim.currentRatio(),
      prelim.chartByAccountForm(),
      prelim.freeCashFlow(),
      prelim.freeFloat(),
      prelim.cgrScore(),
    ]).then(
      ([
        deRatioResponse,
        currentRatioResponse,
        chartByAccountFormResponse,
        freeCashFlowResponse,
        freeFloatResponse,
        cgrScoreResponse,
      ]: IPrelimAnalysisData[]) => {
        setDERatioLabels(deRatioResponse.labels);
        setDERatioIndustryDataset(deRatioResponse.industrySeries);
        setDERatioMarketDataset(deRatioResponse.marketSeries);
        setCurrentRatioLabels(currentRatioResponse.labels);
        setCurrentRatioIndustryDataset(currentRatioResponse.industrySeries);
        setCurrentRatioMarketDataset(currentRatioResponse.marketSeries);
        setChartByAccountFormLabels(chartByAccountFormResponse.labels);
        setChartByAccountFormIndustryDataset(
          chartByAccountFormResponse.industrySeries
        );
        setChartByAccountFormMarketDataset(
          chartByAccountFormResponse.marketSeries
        );
        setChartNameByAccountForm(chartByAccountFormResponse.name);
        setFreeCashFlowLabels(freeCashFlowResponse.labels);
        setFreeCashFlowIndustryDataset(freeCashFlowResponse.industrySeries);
        setFreeCashFlowMarketDataset(freeCashFlowResponse.marketSeries);
        setFreeFloatLabels(freeFloatResponse.labels);
        setFreeFloatIndustryDataset(freeFloatResponse.industrySeries);
        setFreeFloatMarketDataset(freeFloatResponse.marketSeries);
        setCGRScoreLabels(cgrScoreResponse.labels);
        setCGRScoreIndustryDataset(cgrScoreResponse.industrySeries);
        setCGRScoreMarketDataset(cgrScoreResponse.marketSeries);
      }
    );
  }, []);

  return (
    <>
      <div className={styles.grid}>
        <RadarChartBox
          chartTitle={"Industry"}
          scoreBox={<ScoreBox datasets={metricsRadarChartIndustryDataset} />}
          children={
            <SushiChartRadarChart
              labels={metricsRadarChartLabel}
              datasets={metricsRadarChartIndustryDataset}
            />
          }
        />
        <RadarChartBox
          chartTitle={"Market"}
          scoreBox={<ScoreBox datasets={metricsRadarChartMarketDataset} />}
          children={
            <SushiChartRadarChart
              labels={metricsRadarChartLabel}
              datasets={metricsRadarChartMarketDataset}
            />
          }
        />
        <ChartBox
          title="D/E Ratio"
          description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
          industryTitle={"Industry"}
          industryChart={
            deRatioIndustryDataset && (
              <SushiChartLineChart
                labels={deRatioLabels}
                datasets={deRatioIndustryDataset}
                chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
              />
            )
          }
          industryTable={
            deRatioIndustryDataset && (
              <ScoreTable
                labels={deRatioLabels}
                datasets={transformDataset(deRatioIndustryDataset)}
                dataPosition={"center"}
                unit="เท่า"
              />
            )
          }
          marketTitle={"Market"}
          marketChart={
            deRatioMarketDataset && (
              <SushiChartLineChart
                labels={deRatioLabels}
                datasets={deRatioMarketDataset}
                chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
              />
            )
          }
          marketTable={
            deRatioMarketDataset && (
              <ScoreTable
                labels={deRatioLabels}
                datasets={transformDataset(deRatioMarketDataset)}
                dataPosition={"center"}
                unit="เท่า"
              />
            )
          }
        />
        <ChartBox
          title="Current Ratio"
          description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
          industryTitle={"Industry"}
          industryChart={
            currentRatioIndustryDataset && (
              <SushiChartLineChart
                labels={currentRatioLabels}
                datasets={currentRatioIndustryDataset}
                chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
              />
            )
          }
          industryTable={
            currentRatioIndustryDataset && (
              <ScoreTable
                labels={currentRatioLabels}
                datasets={transformDataset(currentRatioIndustryDataset)}
                dataPosition={"center"}
                unit="เท่า"
              />
            )
          }
          marketTitle={"Market"}
          marketChart={
            currentRatioMarketDataset && (
              <SushiChartLineChart
                labels={currentRatioLabels}
                datasets={currentRatioMarketDataset}
                chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
              />
            )
          }
          marketTable={
            currentRatioMarketDataset && (
              <ScoreTable
                labels={currentRatioLabels}
                datasets={transformDataset(currentRatioMarketDataset)}
                dataPosition={"center"}
                unit="เท่า"
              />
            )
          }
        />
        <ChartBox
          title={chartNameByAccountForm}
          description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
          industryTitle={"Industry"}
          industryChart={
            chartByAccountFormIndustryDataset && (
              <SushiChartLineChart
                labels={chartByAccountFormLabels}
                datasets={chartByAccountFormIndustryDataset}
                chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
              />
            )
          }
          industryTable={
            chartByAccountFormIndustryDataset && (
              <ScoreTable
                labels={chartByAccountFormLabels}
                datasets={transformDataset(chartByAccountFormIndustryDataset)}
                dataPosition={"center"}
                unit="เท่า"
              />
            )
          }
          marketTitle={"Market"}
          marketChart={
            chartByAccountFormMarketDataset && (
              <SushiChartLineChart
                labels={chartByAccountFormLabels}
                datasets={chartByAccountFormMarketDataset}
                chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
              />
            )
          }
          marketTable={
            chartByAccountFormMarketDataset && (
              <ScoreTable
                labels={chartByAccountFormLabels}
                datasets={transformDataset(chartByAccountFormMarketDataset)}
                dataPosition={"center"}
                unit="เท่า"
              />
            )
          }
        />
        <ChartBox
          title="Free float"
          description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
          industryTitle={"Industry"}
          industryChart={
            freeFloatIndustryDataset && (
              <SushiChartLineChart
                labels={freeFloatLabels}
                datasets={freeFloatIndustryDataset}
                chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
              />
            )
          }
          industryTable={
            freeFloatIndustryDataset && (
              <ScoreTable
                labels={freeFloatLabels}
                datasets={transformDataset(freeFloatIndustryDataset)}
                dataPosition={"center"}
                unit="เปอร์เซ็นต์"
              />
            )
          }
          marketTitle={"Market"}
          marketChart={
            freeFloatMarketDataset && (
              <SushiChartLineChart
                labels={freeFloatLabels}
                datasets={freeFloatMarketDataset}
                chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
              />
            )
          }
          marketTable={
            freeFloatMarketDataset && (
              <ScoreTable
                labels={freeFloatLabels}
                datasets={transformDataset(freeFloatMarketDataset)}
                dataPosition="center"
                unit="เปอร์เซ็นต์"
              />
            )
          }
        />
        <ChartBox
          title="Free Cash Flow (FCF)"
          description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
          industryTitle={"Industry"}
          industryChart={
            freeCashFlowIndustryDataset && (
              <SushiChartLineChart
                labels={freeCashFlowLabels}
                datasets={freeCashFlowIndustryDataset}
                chartConfig={{ yAxisLabel: "พันบาท", xAxisLabel: "ปี" }}
              />
            )
          }
          industryTable={
            freeCashFlowIndustryDataset && (
              <ScoreTable
                labels={freeCashFlowLabels}
                datasets={transformDataset(freeCashFlowIndustryDataset)}
                dataPosition="right"
                unit="พันบาท"
              />
            )
          }
          marketTitle={"Market"}
          marketChart={
            freeCashFlowMarketDataset && (
              <SushiChartLineChart
                labels={freeCashFlowLabels}
                datasets={freeCashFlowMarketDataset}
                chartConfig={{ yAxisLabel: "พันบาท", xAxisLabel: "ปี" }}
              />
            )
          }
          marketTable={
            freeCashFlowMarketDataset && (
              <ScoreTable
                labels={freeCashFlowLabels}
                datasets={transformDataset(freeCashFlowMarketDataset)}
                dataPosition="right"
                unit="พันบาท"
              />
            )
          }
        />
        <ChartBox
          title="CGR Score"
          description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
          industryTitle={"Industry"}
          industryChart={
            cgrScoreIndustryDataset && (
              <SushiChartLineChart
                labels={cgrScoreLabels}
                datasets={cgrScoreIndustryDataset}
                chartConfig={{ yAxisLabel: "คะแนน", xAxisLabel: "ปี" }}
              />
            )
          }
          industryTable={
            cgrScoreIndustryDataset && (
              <ScoreTable
                labels={cgrScoreLabels}
                datasets={transformDataset(cgrScoreIndustryDataset)}
                dataPosition="center"
                unit="คะแนน"
              />
            )
          }
          marketTitle={"Market"}
          marketChart={
            cgrScoreMarketDataset && (
              <SushiChartLineChart
                labels={cgrScoreLabels}
                datasets={cgrScoreMarketDataset}
                chartConfig={{ yAxisLabel: "คะแนน", xAxisLabel: "ปี" }}
              />
            )
          }
          marketTable={
            cgrScoreMarketDataset && (
              <ScoreTable
                labels={cgrScoreLabels}
                datasets={transformDataset(cgrScoreMarketDataset)}
                dataPosition="center"
                unit="คะแนน"
              />
            )
          }
        />
      </div>
    </>
  );
}
