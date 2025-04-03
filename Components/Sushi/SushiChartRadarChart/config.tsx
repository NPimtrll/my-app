import { NamedColor } from "../../../Domains/Chart/ColorScheme";
import { IRadarChartConfig } from "../../../Domains/Chart/Config/RadarChart";

export const DefaultConfig: IRadarChartConfig = {
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
};
