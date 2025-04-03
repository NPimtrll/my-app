import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  ChartOptions,
  ChartData,
  PointElement,
  ChartDataset,
  LineElement,
  Point,
  LegendItem,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useRef, useState } from "react";
import * as _ from "lodash";

import { Dataset } from "../../../Domains/Chart/Dataset";
import { ILineChartConfig } from "../../../Domains/Chart/Config/LineChart";
import { DefaultConfig } from "./config";

export interface SushiChartLineChartProps {
  datasets: Dataset[];
  labels: string[]; // for x
  yLabelFunction?: (value: number | string) => string;
  chartConfig?: ILineChartConfig;
}

ChartJS.register(
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

export function SushiChartLineChart(props: SushiChartLineChartProps) {
  const { datasets, labels, chartConfig, yLabelFunction } = props;

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

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5,
    scales: {
      x: {
        position: "bottom",
        title: config.xAxisLabel
          ? {
              display: true,
              text: config.xAxisLabel,
            }
          : { display: false },
        border: {
          color: "hsla(206, 9%, 65%, 1)",
        },
      },
      y: {
        position: "top",
        title: config.yAxisLabel
          ? {
              display: true,
              text: config.yAxisLabel,
            }
          : { display: false },
        ticks: {
          callback: (value: number): string => {
            if (yLabelFunction) {
              return yLabelFunction(value);
            }
            if (config.yAxisLabel === "พันบาท") {
              return (value / 1000).toString();
            }
            return `${value}`;
          },
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
            chart: ChartJS<"line", (number | Point)[]>,
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
              }),
            ),
        },
      },
    },
  };
  const chartDatasets: ChartData<"line", (number | Point)[]> = {
    labels: labels,
    datasets: datasets.map(
      (
        dataset: Dataset,
        datasetIndex: number,
      ): ChartDataset<"line", (number | Point)[]> => {
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
      },
    ),
  };
  const chartKey = `chart-${Math.round(Math.random() * new Date().getTime())}-${windowWidth}`;

  return (
    <Line
      id={chartKey}
      key={chartKey}
      options={chartOptions}
      data={chartDatasets}
      redraw
    ></Line>
  );
}
