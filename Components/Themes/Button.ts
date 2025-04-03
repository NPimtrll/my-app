import { ButtonOwnProps, Components, Theme } from "@mui/material";

const buttonTheme: Components<Omit<Theme, "components">> = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
      size: "medium",
      color: "primary",
    },
    styleOverrides: {
      sizeSmall: ({ theme }) => ({
        fontSize: "0.625rem",
        borderRadius: 25,
        ".MuiButton-icon": {
          marginRight: theme.spacing(0.5),
        },
      }),
      contained: ({ theme: { palette, unstable_sx: sx }, ownerState }) => {
        const { color = "primary", disabled } = ownerState as ButtonOwnProps;

        if (disabled) {
          return sx({
            color: "hsla(0, 0%, 53%, 1)",
            background: "hsla(0, 0%, 81%, 1)",
          });
        }

        switch (color) {
          case "primary": {
            return sx({
              boxShadow: "none",
              background:
                "linear-gradient(180deg, hsl(46, 100%, 61%) 0%, hsl(37, 97%, 60%) 88%)",
            });
          }
          case "success": {
            return sx({
              boxShadow: "none",
              background:
                "linear-gradient(180deg, hsl(68, 69%, 70%) 0%, hsl(68, 68%, 50%) 88%)",
              color: palette.text.primary,
            });
          }
          case "warning": {
            return sx({
              boxShadow: "none",
              background:
                "linear-gradient(180deg, hsl(49, 100%, 70%) 0%, hsl(49, 100%, 50%) 88%)",
              color: palette.text.primary,
            });
          }
          case "info": {
            return sx({
              boxShadow: "none",
              background:
                "linear-gradient(180deg, hsl(191, 65%, 60%) 0%, hsl(191, 100%, 40%) 88%)",
            });
          }
          case "error": {
            return sx({
              boxShadow: "none",
              background:
                "linear-gradient(180deg, hsl(337, 63%, 60%) 0%, hsl(337, 94%, 40%) 88%)",
            });
          }
          case "inherit": {
            return sx({
              boxShadow: "none",
              background:
                "linear-gradient(180deg, hsl(0, 0%, 100%) 0%, hsl(0, 0%, 94%) 88.02%)",
              outline: "1px solid hsla(0, 0%, 81%, 1)",
            });
          }
          default: {
            return sx({
              boxShadow: "none",
              background: `linear-gradient(180deg, ${palette[color].light}, ${palette[color].dark})`,
            });
          }
        }
      },
      text: ({ theme: { unstable_sx: sx }, ownerState }) => {
        const { color = "primary", disabled } = ownerState as ButtonOwnProps;

        if (disabled) {
          return sx({
            color: "hsla(0, 0%, 53%, 1)",
          });
        }

        switch (color) {
          case "primary":
            return sx({ color: "hsl(37, 97%, 60%)" });
          case "success":
            return sx({ color: "hsl(68, 68%, 50%)" });
          case "warning":
            return sx({ color: "hsl(49, 100%, 50%)" });
          case "info":
            return sx({ color: "hsl(191, 100%, 40%)" });
          case "error":
            return sx({ color: "hsl(337, 94%, 40%)" });
        }
      },
    },
  },
};

export default buttonTheme.MuiButton;
