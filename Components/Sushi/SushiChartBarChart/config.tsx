import { NamedColor } from "../../../Domains/Chart/ColorScheme";
import { IBarChartConfig } from "../../../Domains/Chart/Config/BarChart";

export const DefaultConfig: IBarChartConfig = {
  barColors: [
    NamedColor.YOUR_COMPANY,
    NamedColor.AVERAGE_SECTOR,
    NamedColor.STRONG_PLAYER,
  ],
  barRadius: 4,
  barThickness: 32,
  barGap: 4,
  categoryGap: 8,
  yAxisLabel: "",
  xAxisLabel: "",
  flipped: false,
  legendAlignment: "center",
  legendPosition: "bottom",
  legendIconWidth: 22,
  legendIconHeight: 4,
};
