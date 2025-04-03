import { Search } from "@mui/icons-material";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { FieldValues, useController } from "react-hook-form";
import { FormAutocompleteProps } from "../FormAutoComplete/FormAutoComplete";
import { JSX } from "react/jsx-runtime";

const FormAutocompleteWithIcon = <
  TFieldValues extends FieldValues = FieldValues,
>({
  placeholder,
  required,
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
          required={required}
          label={restProps.label}
          error={!!error}
          helperText={error ? error.message : null}
          placeholder={placeholder}
          inputRef={ref}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      )}
      {...restProps}
    />
  );
};

export default FormAutocompleteWithIcon;
