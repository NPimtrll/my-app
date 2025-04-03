import AttachFileIcon from "@mui/icons-material/AttachFile";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  CircularProgress,
  IconButton,
  Input,
  InputAdornment,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import React from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

type FormTextInputProps<TFieldValues extends FieldValues> = {
  accept?: string;
  onCancel?: () => void;
  isCompletedTh?: boolean;
  isCompletedEn?: boolean;
  loading?: boolean;
} & UseControllerProps<TFieldValues> &
  TextFieldProps;

const FormFileInput = <TFieldValues extends FieldValues = FieldValues>(
  props: FormTextInputProps<TFieldValues>,
): JSX.Element => {
  const {
    accept,
    onChange,
    onCancel,
    isCompletedTh,
    isCompletedEn,
    loading,
    value: inputValue,
    helperText,
    ...restProps
  } = props;
  const {
    field: { ref, value, onChange: onFormChange, ...field },
    fieldState: { error },
  } = useController({ ...props, name: props.name });

  const isFile = (value: File | null): value is File => value instanceof File;
  const fileValue = isFile(value) ? value.name : inputValue;

  const handleClickUploadFile = (event: React.MouseEvent) => {
    if (!fileValue) {
      event.preventDefault();
      document.getElementById(`file-input-${props.name}`)?.click();
    }
  };

  const handleUploadFile = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectedFile = event.target.files?.[0];
    if (typeof onChange === "function") {
      onChange(event);
    } else if (selectedFile) {
      onFormChange(selectedFile);
    }
  };

  const handleClearFile = () => {
    const fileInput = document.getElementById(
      `file-input-${props.name}`,
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }

    if (typeof onCancel === "function") {
      onCancel();
    } else {
      onFormChange(null);
    }
  };

  return (
    <Box>
      <Input
        id={`file-input-${props.name}`}
        type={"file"}
        sx={{ display: "none" }}
        onChange={handleUploadFile}
        inputProps={{
          accept: accept,
        }}
      />
      <TextField
        {...restProps}
        {...field}
        value={fileValue}
        inputRef={ref}
        error={!!error?.message}
        sx={{ cursor: "pointer", ...restProps.sx }}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              {isCompletedTh || isCompletedEn ? null : (
                <>
                  {loading ? (
                    <CircularProgress size={20} />
                  ) : (
                    <>
                      <AttachFileIcon sx={{ cursor: "pointer" }} />
                      {fileValue && (
                        <IconButton
                          onClick={(e) => {
                            e.preventDefault();
                            handleClearFile();
                          }}
                          edge="end"
                          size="small"
                        >
                          <CloseIcon />
                        </IconButton>
                      )}
                    </>
                  )}
                </>
              )}
            </InputAdornment>
          ),
        }}
        onClick={handleClickUploadFile}
      />
      {helperText && (
        <Typography variant="caption" sx={{ display: "block", mt: 0.5 }}>
          {helperText}
        </Typography>
      )}
    </Box>
  );
};

export default FormFileInput;
