import { Components, Theme } from "@mui/material";

const checkboxTheme: Components<Omit<Theme, "components">> = {
  MuiCheckbox: {
    styleOverrides: {
      colorPrimary: ({ theme }) => ({
        color: theme.palette.primary.main,
      }),
      root: ({ theme }) => ({
        "&.MuiCheckbox-colorError": {
          color: theme.palette.error.main,
        },
        "&.Mui-disabled": {
          color: theme.palette.action.disabled,
        },
      }),
    },
  },
};

export default checkboxTheme.MuiCheckbox;
