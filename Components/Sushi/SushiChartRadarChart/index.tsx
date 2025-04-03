import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  ChartDataset,
  CategoryScale,
  RadialLinearScale,
  Point,
  LegendItem,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Dataset } from "../../../Domains/Chart/Dataset";
import { IRadarChartConfig } from "../../../Domains/Chart/Config/RadarChart";
import * as _ from "lodash";
import { useState, useRef, useEffect } from "react";
import { DefaultConfig } from "../SushiChartLineChart/config";

export interface SushiChartRadarChartProps {
  datasets: Dataset[];
  labels: string[];
  chartConfig?: IRadarChartConfig;
}

ChartJS.register(Tooltip, Legend, CategoryScale, RadialLinearScale);

export function SushiChartRadarChart(props: SushiChartRadarChartProps) {
  const { datasets, labels, chartConfig } = props;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const config = _.merge({}, DefaultConfig, chartConfig || {});
  const chartRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const handlerWindowResized = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handlerWindowResized);
    return () => window.removeEventListener("resize", handlerWindowResized);
  }, []);

  const chartOptions: ChartOptions<"radar"> = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    scales: {
      r: {
        ticks: { display: false },
        grid: { color: "hsla(220, 2%, 90%, 1)" },
        pointLabels: {
          callback: function (labels: string) {
            return labels.replace(/(.{10,}?)\s/g, "$1\n").split("\n");
          },
          padding: 8,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: config.legendPosition,
        align: config.legendAlignment,
        labels: {
          useBorderRadius: true,
          borderRadius: config.legendIconHeight / 2,
          boxWidth: config.legendIconWidth,
          boxHeight: config.legendIconHeight,
          generateLabels: (
            chart: ChartJS<"radar", (number | Point)[]>
          ): LegendItem[] =>
            chart.data.datasets.map(
              (dataset, index): LegendItem => ({
                text: dataset.label,
                fillStyle: dataset.borderColor as string, // Fills legend icon with borderColor
                strokeStyle: dataset.borderColor as string, // Ensures border matches fill
                lineWidth: 0, // Keeps the border width
                hidden: !chart.isDatasetVisible(index),
                borderRadius: 2,
                datasetIndex: index,
              })
            ),
        },
      },
    },
  };
  const chartDatasets: ChartData<"radar", (number | Point)[]> = {
    labels: labels,
    datasets: datasets.map(
      (
        dataset: Dataset,
        datasetIndex: number
      ): ChartDataset<"radar", (number | Point)[]> => {
        return {
          label: dataset.title,
          data: dataset.data,
          borderColor: config.lineColors[datasetIndex],
          borderWidth: config.lineWidth,
          borderCapStyle: "round",
          pointBackgroundColor: config.lineColors[datasetIndex],
          pointBorderWidth: 0,
          pointRadius: config.pointRadius,
        };
      }
    ),
  };
  const chartKey = `chart-${Math.round(Math.random() * new Date().getTime())}-${windowWidth}`;

  return (
    <Radar
      id={chartKey}
      key={chartKey}
      options={chartOptions}
      data={chartDatasets}
      redraw
    ></Radar>
  );
}
