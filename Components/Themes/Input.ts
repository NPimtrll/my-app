import { Components, Theme } from "@mui/material";

const inputTheme: Components<Omit<Theme, "components">> = {
  MuiTextField: {
    defaultProps: {
      variant: "standard",
    },
    styleOverrides: {
      root: {
        "&& .MuiFormLabel-root": {
          transform: "translate(0, -3px) scale(1)",
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: ({ theme: { unstable_sx: sx, spacing, palette } }) => {
        return sx({
          px: spacing(1),
          borderRadius: 1,
          overflow: "hidden",
          minHeight: 32,
          backgroundColor: palette.common.white,
          fieldset: {
            display: "none",
          },
          "&&::before": {
            border: `1px solid hsla(0, 0%, 0%, 0.1)`,
            height: "100%",
          },
          "&.Mui-disabled": {
            backgroundColor: "hsla(0, 0%, 81%, 1)",
            color: palette.common.black,
          },
        });
      },
      adornedStart: ({ theme: { unstable_sx: sx } }) =>
        sx({
          input: { pl: 1 },
          ".MuiSvgIcon-root": {
            fontSize: "1.25rem",
          },
        }),
      adornedEnd: ({ theme: { unstable_sx: sx } }) =>
        sx({
          input: { pr: 1 },
          ".MuiSvgIcon-root": {
            fontSize: "1.25rem",
          },
        }),
    },
  },
  MuiInputLabel: {
    defaultProps: {
      shrink: true,
      variant: "standard",
    },
    styleOverrides: {
      standard: ({ theme }) => ({
        color: theme.palette.text.primary,
        fontSize: "0.875rem",
        fontWeight: 400,
        transform: "translate(0, 1.5px) scale(1)",
        zIndex: 0,

        "&.Mui-focused, &.Mui-error, &.Mui-disabled": {
          color: theme.palette.text.primary,
        },
      }),
      asterisk: ({ theme }) => ({ color: theme.palette.error.main }),
    },
  },
};

export default inputTheme;
