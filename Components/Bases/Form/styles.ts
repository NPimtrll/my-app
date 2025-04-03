export const disabledFormInputStyles = {
  pointerEvents: "none",
  "& div": {
    bgcolor: "grey.200",
  },
};

export const disabledFormFileInputStyles = {
  pointerEvents: "none",
  "& div": {
    bgcolor: "grey.200",
  },
  "& .MuiFormHelperText-root": {
    pointerEvents: "auto",
    color: "inherit",
  },
};

export const disabledTextAreaInputStyles = {
  pointerEvents: "none",
  "& textarea": {
    bgcolor: "grey.200",
  },
};

export const disabledFormSelectStyles = {
  pointerEvents: "none",
  "& div": {
    bgcolor: "grey.200",
  },
  "& .MuiSelect-select": {
    color: "grey.300",
  },
};

export const disabledDatePickerTypingStyles = {
  "& .MuiInput-root": {
    pointerEvents: "none",
  },
  "& .MuiInputAdornment-root": {
    pointerEvents: "auto",
  },
};
