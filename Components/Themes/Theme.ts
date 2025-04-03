import { createTheme } from "@mui/material";

import alertTheme from "./Alert";
import buttonTheme from "./Button";
import checkboxTheme from "./Checkbox";
// import dataGridTheme from './DataGrid';
import dialogTheme from "./Dialog";
import inputTheme from "./Input";
import paletteTheme from "./Palette";
import radioTheme from "./Radio";
import selectTheme from "./Select";
import toolbarTheme from "./Toolbar";
import tooltipTheme from "./Tooltip";
import typographyTheme from "./Typography";

const theme = createTheme({
  typography: typographyTheme,
  palette: paletteTheme,
  components: {
    MuiAlert: alertTheme,
    MuiButton: buttonTheme,
    MuiCheckbox: checkboxTheme,
    // MuiDataGrid: dataGridTheme,
    MuiDialog: dialogTheme.MuiDialog,
    MuiInputBase: inputTheme.MuiInputBase,
    MuiInputLabel: inputTheme.MuiInputLabel,
    MuiRadio: radioTheme,
    MuiSelect: selectTheme.MuiSelect,
    MuiTextField: inputTheme.MuiTextField,
    MuiToolbar: toolbarTheme.MuiToolbar,
    MuiTooltip: tooltipTheme,
  },
});

export default theme;
