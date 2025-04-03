import { AlertOwnerState, Components, Theme } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const alertTheme: Components<Omit<Theme, "components">> = {
  MuiAlert: {
    defaultProps: {
      iconMapping: {
        success: <CheckCircleIcon color="success" />,
        warning: <ErrorIcon color="warning" />,
        info: <InfoIcon color="primary" />,
      },
    },
    styleOverrides: {
      root: ({ theme: { palette, spacing, unstable_sx: sx }, ownerState }) => {
        const { severity } = ownerState as AlertOwnerState;

        switch (severity) {
          case "error":
            return sx({
              backgroundColor: palette.purplishRed[100],
              color: palette.text.primary,
              boxShadow: `0px 0px 10px 0px rgba(0%, 0%, 0%, 0.10)`,
              p: spacing(1),
            });
          case "warning":
            return sx({
              backgroundColor: palette.orange[100],
              color: palette.text.primary,
              boxShadow: `0px 0px 10px 0px rgba(0%, 0%, 0%, 0.10)`,
              p: spacing(1),
            });
          case "success":
            return sx({
              backgroundColor: palette.yellowGreen[100],
              color: palette.text.primary,
              boxShadow: `0px 0px 10px 0px rgba(0%, 0%, 0%, 0.10)`,
              p: spacing(1),
            });
          case "info":
          default:
            return sx({
              backgroundColor: palette.yellow[100],
              color: palette.text.primary,
              boxShadow: `0px 0px 10px 0px rgba(0%, 0%, 0%, 0.10)`,
              p: spacing(1),
            });
        }
      },
      icon: ({ theme }) => ({
        padding: theme.spacing(0),
        marginRight: theme.spacing(1),
      }),
      message: ({ theme }) => ({
        lineHeight: 1.75,
        padding: theme.spacing(0),
      }),
    },
  },
};

export default alertTheme.MuiAlert;
