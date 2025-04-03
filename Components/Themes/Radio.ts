import { Components, Theme } from "@mui/material";

const radioTheme: Components<Omit<Theme, "components">> = {
  MuiRadio: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.primary.main,
        "&.Mui-error": {
          color: theme.palette.error.main,
        },
        "&.MuiRadio-colorError": {
          color: theme.palette.error.main,
        },
      }),
    },
  },
};

export default radioTheme.MuiRadio;
