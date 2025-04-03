import {
  Box,
  BoxProps,
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";

type FormCheckboxProps = {
  label?: string;
  defaultChecked?: boolean;
  inputProps?: CheckboxProps;
} & UseControllerProps &
  BoxProps;

const FormCheckbox = (props: FormCheckboxProps) => {
  const { defaultChecked, inputProps, ...restProps } = props;

  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    ...restProps,
    name: restProps.name,
  });

  return (
    <Box {...restProps}>
      <FormControlLabel
        control={
          <Checkbox
            {...inputProps}
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
            onBlur={onBlur}
            color={error ? "error" : "primary"}
          />
        }
        label={props.label}
      />
      {error && (
        <Typography variant={"caption"} color={"error.main"}>
          {error.message}
        </Typography>
      )}
    </Box>
  );
};

export default FormCheckbox;
