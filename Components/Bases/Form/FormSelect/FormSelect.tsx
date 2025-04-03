import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { JSX } from "react/jsx-runtime";

type FormSelectProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> &
    SelectProps & {
      label?: string;
      placeholder?: string;
      errorText?: string;
    };

const FormSelect = <TFieldValues extends FieldValues = FieldValues>(
  props: FormSelectProps<TFieldValues>,
): JSX.Element => {
  const {
    field: { ref, onBlur, ...field },
    fieldState: { error },
  } = useController({ ...props, name: props.name });

  return (
    <FormControl fullWidth error={!!error} sx={props.sx}>
      {props.label && (
        <InputLabel required={props.required} sx={{ top: -4 }}>
          {props.label}
        </InputLabel>
      )}

      <Select {...field} {...props} onBlur={onBlur} inputRef={ref} displayEmpty>
        {props.placeholder && (
          <MenuItem value="" disabled>
            {props.placeholder}
          </MenuItem>
        )}
        {props.children}
      </Select>
      {error && (
        <FormHelperText sx={{ marginX: "0" }}>
          {error.message || props.errorText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default FormSelect;
