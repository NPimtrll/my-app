import { Components, Theme } from "@mui/material";

const tooltipTheme: Components<Omit<Theme, "components">> = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: ({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
      }),
      arrow: ({ theme }) => ({
        color: theme.palette.secondary.main,
      }),
    },
  },
};

export default tooltipTheme.MuiTooltip;
