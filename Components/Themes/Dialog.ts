import { Components, Theme } from "@mui/material";

const dialogTheme: Components<Omit<Theme, "components">> = {
  MuiDialog: {
    defaultProps: {
      PaperProps: {
        sx: {
          minWidth: { xs: 320, sm: 440 },
          borderRadius: 2,
        },
      },
      closeAfterTransition: false,
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: ({ theme }) => ({
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
      }),
    },
  },
};

export default dialogTheme;
