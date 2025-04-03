import {
  Box,
  BoxProps,
  InputLabel,
  styled,
  TextareaAutosize,
  TextareaAutosizeProps,
  Typography,
} from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";

const BaseTextareaAutosize = TextareaAutosize;

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
    box-sizing: border-box;
    font-weight: 400;
    font-size: 0.875rem;
    font-family:${theme.typography.fontFamily};
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    color: ${theme.palette.text.primary};
    border: 1px solid ${theme.palette.grey[200]};

    &:hover {
      borderBottomColor: ${theme.palette.primary.main};
    }

    &:focus {
      borderBottomColor: ${theme.palette.primary.main};
    }

    &:focus-visible {
      outline: 0;
    }
  `,
);

type FormTextAreaProps = {
  label?: string;
  name: string;
  inputProps: Partial<TextareaAutosizeProps>;
} & UseControllerProps &
  BoxProps;

const FormTextAreaAutoSize = (props: FormTextAreaProps) => {
  const { label, name, inputProps, ...restProps } = props;
  const {
    field: { value, onChange, ...field },
    fieldState: { error },
  } = useController({
    ...props,
    name: name,
  });

  return (
    <Box {...restProps}>
      {label && <InputLabel sx={{ mb: 0.5 }}>{label}</InputLabel>}
      <Textarea
        value={value || ""}
        sx={(theme) => ({
          borderBottom: error
            ? `2px solid ${theme.palette.error.main} `
            : `2px solid ${theme.palette.grey[200]} `,
          "&:hover": {
            borderBottom: error
              ? `2px solid ${theme.palette.error.main} `
              : `2px solid ${theme.palette.common.black} `,
          },
          "&:focus": {
            borderBottom: error
              ? `2px solid ${theme.palette.error.main} `
              : `2px solid ${theme.palette.primary.main} `,
          },
        })}
        {...field}
        {...inputProps}
        onChange={onChange}
      />
      <Box>
        {error && (
          <Typography variant="caption" color="error">
            {error?.message || "This field is required"}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FormTextAreaAutoSize;
