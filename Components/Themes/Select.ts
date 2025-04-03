import { Components, Theme } from "@mui/material";

const selectTheme: Components<Theme> = {
  MuiSelect: {
    defaultProps: {
      variant: "standard",
      displayEmpty: true,
    },
    styleOverrides: {
      select: ({ theme }) => ({
        color: theme.palette.text.primary,
        "&:empty": {
          color: theme.palette.text.secondary,
        },
      }),
    },
  },
};

export default selectTheme;
