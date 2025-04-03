import { TextField, TextFieldProps } from "@mui/material";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { JSX } from "react/jsx-runtime";

export type FormTextInputProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & TextFieldProps;

const FormInput = <TFieldValues extends FieldValues = FieldValues>(
  props: FormTextInputProps<TFieldValues>,
): JSX.Element => {
  const {
    field: { ref, onChange: controllerOnChange, ...field },
    fieldState: { error },
  } = useController({ ...props, name: props.name });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    controllerOnChange(event);

    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <TextField
      {...field}
      {...props}
      onChange={handleChange}
      inputRef={ref}
      error={!!error?.message}
      helperText={error ? error.message : props.helperText}
    />
  );
};

export default FormInput;
