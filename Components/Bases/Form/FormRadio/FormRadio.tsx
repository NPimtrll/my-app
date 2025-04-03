import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
  Typography,
} from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";

type FormRadioProps = {
  label?: string;
  options: Array<{
    value: string | number;
    label: string;
    disabled?: boolean;
  }>;
  inputProps?: RadioProps;
} & UseControllerProps &
  Omit<RadioGroupProps, "value">;

const FormRadio = (props: FormRadioProps) => {
  const { label, options, disabled, inputProps, ...restProps } = props;
  const {
    field,
    fieldState: { error },
  } = useController(restProps);

  return (
    <FormControl error={!!error} fullWidth>
      <RadioGroup {...field} {...restProps}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            {...option}
            control={
              <Radio
                {...inputProps}
                color={error && !option.disabled ? "error" : "primary"}
                disabled={disabled}
              />
            }
          />
        ))}
        {error && (
          <Typography color="error.main" variant="caption">
            {error.message}
          </Typography>
        )}
      </RadioGroup>
    </FormControl>
  );
};

export default FormRadio;
