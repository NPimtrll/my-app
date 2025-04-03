import { Autocomplete, AutocompleteProps, TextField } from "@mui/material";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { JSX } from "react/jsx-runtime";

export type AutocompleteOption = {
  label: string;
  value: string | number;
};

export type FormAutocompleteProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> &
    Omit<AutocompleteProps<any, boolean, boolean, boolean>, "renderInput"> & {
      label?: string;
      required?: boolean;
    } & { placeholder?: string };

const FormAutocomplete = <TFieldValues extends FieldValues = FieldValues>({
  placeholder,
  ...restProps
}: FormAutocompleteProps<TFieldValues>): JSX.Element => {
  const {
    field: { ref, onChange, ...field },
    fieldState: { error },
  } = useController({ ...restProps, name: restProps.name });

  return (
    <Autocomplete
      {...field}
      onChange={(_, data) => onChange(data)}
      multiple={false}
      renderInput={(params) => (
        <TextField
          {...params}
          label={restProps.label}
          error={!!error}
          helperText={error ? error.message : null}
          placeholder={placeholder}
          inputRef={ref}
        />
      )}
      {...restProps}
    />
  );
};

export default FormAutocomplete;
