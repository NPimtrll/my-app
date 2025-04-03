import { Bar } from "react-chartjs-2";
import { IBarChartConfig } from "../../../Domains/Chart/Config/BarChart";
import { Dataset } from "../../../Domains/Chart/Dataset";
import { DefaultConfig } from "./config";
import {
  Chart as ChartJS,
  ChartOptions,
  Point,
  ChartData,
  ChartDataset,
  Legend,
  Tooltip,
  BarElement,
  LegendItem,
} from "chart.js";
import * as _ from "lodash";
import { useState, useRef, useEffect } from "react";
import { ChartSignage } from "../../../Domains/Chart/Plugins/ChartSignage";

export interface SushiChartBarChartProps {
  datasets: Dataset[];
  labels: string[]; // for x
  yLabelFunction?: (value: number | string) => string;
  chartConfig?: IBarChartConfig;
  signage?: string;
}

ChartJS.register(Tooltip, Legend, BarElement, ChartSignage);

export function SushiChartBarChart(props: SushiChartBarChartProps) {
  const { datasets, labels, chartConfig, yLabelFunction, signage } = props;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const config = _.merge({}, DefaultConfig, chartConfig || {});
  const chartRef = useRef<ChartJS | null>(null);
  const chartKey = `chart-${Math.round(Math.random() * new Date().getTime())}-${windowWidth}`;

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

  const chartOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: config.flipped ? "y" : "x",
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
        ticks: {
          callback: (value: number | string, tickIndex: number): string => {
            if (config.flipped) {
              if (yLabelFunction) {
                return yLabelFunction(value);
              }
              return `${value}`;
            } else {
              return labels[tickIndex];
            }
          },
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
          callback: (value: number | string, tickIndex: number): string => {
            if (!config.flipped) {
              if (yLabelFunction) {
                return yLabelFunction(value);
              }
              return `${value}`;
            } else {
              return labels[tickIndex];
            }
          },
        },
      },
    },
    plugins: {
      chartSignage: {
        image: signage,
      },
      legend: {
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
  const chartDatasets: ChartData<"bar", (number | Point)[]> = {
    labels: labels,
    datasets: datasets.map(
      (
        dataset: Dataset,
        datasetIndex: number,
      ): ChartDataset<"bar", (number | Point)[]> => {
        return {
          label: dataset.title,
          data: dataset.data,
          backgroundColor: config.barColors[datasetIndex],
          borderColor: config.barColors[datasetIndex],
          borderRadius: config.barRadius,
          grouped: true,
        };
      },
    ),
  };

  return (
    <Bar
      id={chartKey}
      key={chartKey}
      options={chartOptions}
      data={chartDatasets}
      redraw
    ></Bar>
  );
}
