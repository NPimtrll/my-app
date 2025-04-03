import {
  Box,
  Input,
  InputLabel,
  InputProps,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";

type FormTextAreaProps = {
  label?: string;
  name: string;
} & UseControllerProps &
  Partial<InputProps>;

const FormTextArea = (props: FormTextAreaProps) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ ...props, name: props.name });

  return (
    <Box>
      {props.label && <InputLabel>{props.label}</InputLabel>}
      <Input
        inputComponent={TextareaAutosize}
        value={value || ""}
        onChange={onChange}
        inputProps={{
          placeholder: props.placeholder,
          maxRows: props.maxRows,
          minRows: props.minRows,
        }}
        sx={{
          padding: "0px",
          "& .MuiInputBase-input": {
            padding: "8px",
          },
        }}
        error={!!error?.message}
      />
      <Box>
        {error && (
          <Typography variant="caption" color="error.main">
            {error.message}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FormTextArea;
