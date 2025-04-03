import { NamedColor } from "../../../Domains/Chart/ColorScheme";
import { ILineChartConfig } from "../../../Domains/Chart/Config/LineChart";

export const DefaultConfig: ILineChartConfig = {
  lineColors: [
    NamedColor.YOUR_COMPANY,
    NamedColor.AVERAGE_SECTOR,
    NamedColor.STRONG_PLAYER,
  ],
  lineWidth: 2,
  pointRadius: 4,
  legendAlignment: "center",
  legendPosition: "bottom",
  legendIconWidth: 22,
  legendIconHeight: 4,
  yAxisLabel: "",
  xAxisLabel: "",
};
