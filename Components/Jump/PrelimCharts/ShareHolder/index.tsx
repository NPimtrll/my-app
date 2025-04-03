import { SushiChartLineChart } from "../../../Sushi/SushiChartLineChart";
import { Dataset } from "../../../../Domains/Chart/Dataset";
import { useState, useEffect } from "react";
import serviceContainer from "../../../../Services/ServiceContainer";
import { ChartBox } from "../ChartBox";
import { IPrelimAnalysisService } from "../../../../Domains/PrelimAnalysis/PrelimAnalysisService";
import { IPrelimAnalysisData } from "../../../../Domains/PrelimAnalysis/PrelimAnalysis";
import styles from "./styles.module.scss";
import { RadarChartBox } from "../RadarChartBox";
import { SushiChartRadarChart } from "../../../Sushi/SushiChartRadarChart";
import ScoreBox from "../ScoreBox";

export default function ShareHolder() {
  const prelim = serviceContainer.get<IPrelimAnalysisService>(
    "IPrelimAnalysisService"
  );
  const [roiLabels, setRoiLabels] = useState<string[]>(null);
  const [roiIndustryDataset, setRoiIndustryDataset] = useState<Dataset[]>(null);
  const [roiMarketDataset, setRoiMarketDataset] = useState<Dataset[]>(null);

  const [dividendLabels, setDividendLabels] = useState<string[]>(null);
  const [dividendIndustryDataset, setDividendIndustryDataset] =
    useState<Dataset[]>(null);
  const [dividendMarketDataset, setDividendMarketDataset] =
    useState<Dataset[]>(null);

  const [pbLabels, setPbLabels] = useState<string[]>(null);
  const [pbIndustryDataset, setPbIndustryDataset] = useState<Dataset[]>(null);
  const [pbMarketDataset, setPbMarketDataset] = useState<Dataset[]>(null);

  const [peLabels, setPeLabels] = useState<string[]>(null);
  const [peIndustryDataset, setPeIndustryDataset] = useState<Dataset[]>(null);
  const [peMarketDataset, setPeMarketDataset] = useState<Dataset[]>(null);

  const [trLabels, setTrLabels] = useState<string[]>(null);
  const [trIndustryDataset, setTrIndustryDataset] = useState<Dataset[]>(null);
  const [trMarketDataset, setTrMarketDataset] = useState<Dataset[]>(null);

  const [egpLabels, setEgpLabels] = useState<string[]>(null);
  const [egpIndustryDataset, setEgpIndustryDataset] = useState<Dataset[]>(null);
  const [egpMarketDataset, setEgpMarketDataset] = useState<Dataset[]>(null);

  const metricsRadarChartLabel: string[] = [
    "Total Return Index",
    "Dividend Yield",
    "Price-to-Book Ratio (P/B)",
    "Price-to-Earnings Ratio (P/E)",
    "Turnover Ratio",
    "EPS Growth",
  ];
  const metricsRadarChartIndustryDataset: Dataset[] = [
    { title: "Your Company", data: [3, 12, 8, 9, 11, 8] },
    { title: "Industry", data: [7, 6, 5, 6, 5, 8] },
    { title: "Strong Player", data: [13, 13, 14, 14, 9, 11] },
  ];
  const metricsRadarChartMarketDataset: Dataset[] = [
    { title: "Your Company", data: [3, 12, 8, 9, 11, 8] },
    { title: "Industry", data: [7, 6, 5, 6, 5, 8] },
    { title: "Strong Player", data: [13, 13, 14, 14, 9, 11] },
  ];

  useEffect(() => {
    Promise.all([
      prelim.roi(),
      prelim.dividend(),
      prelim.pb(),
      prelim.pe(),
      prelim.tr(),
      prelim.egp(),
    ]).then(
      ([
        roiResponse,
        dividendResponse,
        pbResponse,
        peResponse,
        trResponse,
        egpResponse,
      ]: IPrelimAnalysisData[]) => {
        setRoiIndustryDataset(roiResponse.industrySeries);
        setRoiMarketDataset(roiResponse.marketSeries);
        setRoiLabels(roiResponse.labels);
        setDividendIndustryDataset(dividendResponse.industrySeries);
        setDividendMarketDataset(dividendResponse.marketSeries);
        setDividendLabels(dividendResponse.labels);
        setPbIndustryDataset(pbResponse.industrySeries);
        setPbMarketDataset(pbResponse.marketSeries);
        setPbLabels(pbResponse.labels);
        setPeIndustryDataset(peResponse.industrySeries);
        setPeMarketDataset(peResponse.marketSeries);
        setPeLabels(peResponse.labels);
        setTrIndustryDataset(trResponse.industrySeries);
        setTrMarketDataset(trResponse.marketSeries);
        setTrLabels(trResponse.labels);
        setEgpIndustryDataset(egpResponse.industrySeries);
        setEgpMarketDataset(egpResponse.marketSeries);
        setEgpLabels(egpResponse.labels);
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
        title="Total Return Index"
        description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
        industryTitle={"Industry"}
        industryChart={
          roiIndustryDataset && (
            <SushiChartLineChart
              labels={roiLabels}
              datasets={roiIndustryDataset}
              chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
            />
          )
        }
        marketTitle={"Market"}
        marketChart={
          roiMarketDataset && (
            <SushiChartLineChart
              labels={roiLabels}
              datasets={roiMarketDataset}
              chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
            />
          )
        }
      />
      <ChartBox
        title="Dividend Yield"
        description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
        industryTitle={"Industry"}
        industryChart={
          dividendIndustryDataset && (
            <SushiChartLineChart
              labels={dividendLabels}
              datasets={dividendIndustryDataset}
              chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
            />
          )
        }
        marketTitle={"Market"}
        marketChart={
          dividendMarketDataset && (
            <SushiChartLineChart
              labels={dividendLabels}
              datasets={dividendMarketDataset}
              chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
            />
          )
        }
      />
      <ChartBox
        title="Price-to-Book Ratio (P/B)"
        description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
        industryTitle={"Industry"}
        industryChart={
          pbIndustryDataset && (
            <SushiChartLineChart
              labels={pbLabels}
              datasets={pbIndustryDataset}
              chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
            />
          )
        }
        marketTitle={"Market"}
        marketChart={
          pbMarketDataset && (
            <SushiChartLineChart
              labels={pbLabels}
              datasets={pbMarketDataset}
              chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
            />
          )
        }
      />
      <ChartBox
        title="Price-to-Earnings Ratio (P/E)"
        description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
        industryTitle={"Industry"}
        industryChart={
          peIndustryDataset && (
            <SushiChartLineChart
              labels={peLabels}
              datasets={peIndustryDataset}
              chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
            />
          )
        }
        marketTitle={"Market"}
        marketChart={
          peMarketDataset && (
            <SushiChartLineChart
              labels={peLabels}
              datasets={peMarketDataset}
              chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
            />
          )
        }
      />
      <ChartBox
        title="Turnover Ratio"
        description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
        industryTitle={"Industry"}
        industryChart={
          trIndustryDataset && (
            <SushiChartLineChart
              labels={trLabels}
              datasets={trIndustryDataset}
              chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
            />
          )
        }
        marketTitle={"Market"}
        marketChart={
          trMarketDataset && (
            <SushiChartLineChart
              labels={trLabels}
              datasets={trMarketDataset}
              chartConfig={{ yAxisLabel: "เท่า", xAxisLabel: "ปี" }}
            />
          )
        }
      />
      <ChartBox
        title="EPS Growth"
        description="อัตราผลตอบแทนจากเงินปันผลหรืออัตราส่วนราคาต่อเงินปันผลของหุ้นคือเงินปันผลต่อหุ้นหารด้วยราคาต่อหุ้น"
        industryTitle={"Industry"}
        industryChart={
          egpIndustryDataset && (
            <SushiChartLineChart
              labels={egpLabels}
              datasets={egpIndustryDataset}
              chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
            />
          )
        }
        marketTitle={"Market"}
        marketChart={
          egpMarketDataset && (
            <SushiChartLineChart
              labels={egpLabels}
              datasets={egpMarketDataset}
              chartConfig={{ yAxisLabel: "เปอร์เซ็นต์", xAxisLabel: "ปี" }}
            />
          )
        }
      />
    </div>
  );
}
