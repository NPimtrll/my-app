import { createTheme } from "@mui/material";
import { Color, ColorPartial } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    orange: Color;
    yellow: Color;
    yellowGreen: Color;
    skyBlue: Color;
    purplishBlue: Color;
    purplishRed: Color;
  }

  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }

  interface PaletteOptions {
    orange?: ColorPartial;
    yellow?: ColorPartial;
    yellowGreen?: ColorPartial;
    skyBlue?: ColorPartial;
    purplishBlue?: ColorPartial;
    purplishRed?: ColorPartial;
  }
}

const palette = createTheme({
  palette: {
    primary: {
      lighter: "hsla(37, 97%, 60%, 0.1)",
      light: "hsla(37, 97%, 60%, 1)",
      main: "hsl(39, 100%, 50%)",
      dark: "hsla(37, 97%, 50%, 1)",
      darker: "hsla(37, 97%, 40%, 1)",
    },
    secondary: {
      lighter: "hsl(220, 2.00%, 70.00%)",
      light: "hsla(220, 2%, 55%, 1)",
      main: "hsla(220, 2%, 38%, 1)",
      dark: "hsla(220, 2%, 29%, 1)",
      darker: "hsla(220, 2%, 20%, 1)",
    },
    success: {
      lighter: "hsla(120, 80%, 85%, 1)",
      light: "hsla(120, 60%, 59%, 1)",
      main: "hsla(120, 100%, 20%, 1)",
      dark: "hsla(120, 80%, 15%, 1)",
      darker: "hsla(120, 80%, 10%, 1)",
    },
    warning: {
      lighter: "hsla(22, 84%, 75%, 1)",
      light: "hsla(22, 84%, 59%, 1)",
      main: "hsla(22, 84%, 49%, 1)",
      dark: "hsla(22, 84%, 40%, 1)",
      darker: "hsla(22, 84%, 30%, 1)",
    },
    info: {
      lighter: "hsla(210, 100%, 75%, 1)",
      light: "hsla(210, 100%, 60%, 1)",
      main: "hsla(210, 100%, 39%, 1)",
      dark: "hsla(210, 100%, 32%, 1)",
      darker: "hsla(210, 100%, 25%, 1)",
    },
    error: {
      lighter: "hsla(8, 70%, 81%, 1)",
      light: "hsla(8, 70%, 65%, 1)",
      main: "hsla(0, 100%, 36%, 1)",
      dark: "hsla(0, 100%, 25%, 1)",
      darker: "hsla(0, 100%, 15%, 1)",
    },
    common: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0.00%, 12.90%)",
    },
    grey: {
      50: "hsl(0, 0.00%, 98.00%)",
      100: "hsl(240, 4.00%, 95.10%)",
      200: "hsl(240, 2.00%, 90.00%)",
      300: "hsl(225, 2.00%, 60.00%)",
      500: "hsl(220, 2%, 40%)",
    },
    text: {
      primary: "hsl(201, 15%, 23%)",
      secondary: "hsl(202, 13%, 50%)",
    },
    orange: {
      100: "hsl(32, 93%, 95%)",
      200: "hsl(32, 93%, 90%)",
      300: "hsl(32, 93%, 70%)",
      500: "hsl(32, 93%, 50%)",
    },
    yellow: {
      50: "hsl(46, 100%, 97%)",
      100: "hsl(49, 100%, 95%)",
      200: "hsl(49, 100%, 90%)",
      300: "hsl(49, 100%, 70%)",
      500: "hsl(49, 100%, 50%)",
    },
    yellowGreen: {
      100: "hsl(68, 68%, 95%)",
      200: "hsl(68, 68%, 90%)",
      300: "hsl(68, 68%, 70%)",
      500: "hsl(68, 68%, 50%)",
    },
    skyBlue: {
      50: "hsl(192, 63%, 97%)",
      100: "hsl(191, 65%, 90%)",
      200: "hsl(191, 65%, 80%)",
      300: "hsl(191, 65%, 60%)",
      500: "hsl(191, 100%, 40%)",
    },
    purplishBlue: {
      100: "hsl(246, 28%, 90%)",
      200: "hsl(246, 28%, 80%)",
      300: "hsl(246, 28%, 60%)",
      500: "hsl(246, 52%, 35%)",
    },
    purplishRed: {
      50: "hsl(336, 63%, 97%)",
      100: "hsl(337, 63%, 90%)",
      200: "hsl(337, 63%, 80%)",
      300: "hsl(337, 63%, 60%)",
      500: "hsl(337, 94%, 40%)",
    },
  },
});

export default palette.palette;
