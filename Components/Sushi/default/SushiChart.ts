import { IAxis, IXAxis, IYAxis } from "../../../Domains/Chart/Axis";
import { ICanvas } from "../../../Domains/Chart/Canvas";

export const LineChartCanvasDefault: ICanvas = {
  width: 800,
  height: 450,
  padding: 0,
  gridSize: 100,
  showGrid: true,
  showGuideline: false,
  legendSize: 20,
  chartRightPadding: 40,
  chartTopPadding: 10,
  chartRightMargin: 30,
  chartTopMargin: 30,
};

export const LineChartXAxisDefault: IXAxis = {
  titleGap: 10,
  margin: 50,
  steppers: {
    size: 10,
    labelGap: 4,
  },
};

export const LineChartYAxisDefault: IYAxis = {
  titleGap: 10,
  margin: 60,
  steppers: {
    auto: true,
    size: 10,
    interval: 100,
    labelGap: 4,
  },
};

export const SpiderChartCanvasDefault: ICanvas = {
  width: 800,
  height: 600,
  padding: 0,
  showGuideline: false,
};

export const SpiderChartXAxisDefault: IAxis = {
  margin: 30,
};
