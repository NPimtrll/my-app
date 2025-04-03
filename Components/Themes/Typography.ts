import { createTheme } from "@mui/material";

const typography = createTheme({
  typography: {
    fontFamily: [
      "Sarabun",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontWeight: 800,
      fontSize: "2.625rem",
      lineHeight: 1.45,
    },
    h2: {
      fontWeight: 800,
      fontSize: "1.75rem",
      lineHeight: 1.45,
    },
    h3: {
      fontWeight: 800,
      fontSize: "1.313rem",
      lineHeight: 1.45,
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: "0.875rem",
      lineHeight: 1.45,
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.45,
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.45,
    },
    button: {
      fontWeight: 700,
      fontSize: "0.875rem",
      lineHeight: 1.45,
      textTransform: "none",
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.625rem",
      lineHeight: 1.45,
    },
  },
});

export default typography.typography;
