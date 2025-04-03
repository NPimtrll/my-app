import { Components, Theme } from "@mui/material";

const toolbarTheme: Components<Theme> = {
  MuiToolbar: {
    defaultProps: {
      variant: "dense",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        [theme.breakpoints.down("sm")]: {
          minHeight: 48,
        },
      }),
    },
  },
};

export default toolbarTheme;
