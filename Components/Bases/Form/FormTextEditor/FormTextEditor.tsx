import TextEditor from "src/Components/Bases/TextEditor";
import { Box, BoxProps, InputLabel, Typography } from "@mui/material";
import { RichTextEditorProps } from "mui-tiptap";
import { useController, UseControllerProps } from "react-hook-form";

type FormTextEditorProps = {
  label?: string;
  name: string;
  required?: boolean;
  inputProps?: { placeholder?: string } & Partial<RichTextEditorProps>;
} & UseControllerProps &
  BoxProps;

const FormTextEditor = (props: FormTextEditorProps) => {
  const { name, label, required = false } = props;
  const {
    field: { value, onChange, ref, onBlur },
    fieldState: { error },
  } = useController({ ...props, name });

  return (
    <Box
      {...props}
      sx={{
        cursor: "text",
        "& .ProseMirror": {
          minHeight: "100px",
          padding: "10px",
        },
        "& .ProseMirror-focused": {
          outline: "2px solid blue",
        },
        ...props.sx,
      }}
    >
      {label && (
        <InputLabel sx={{ mb: 0.5 }} required={required}>
          {label}
        </InputLabel>
      )}
      <TextEditor
        ref={ref}
        onBlur={onBlur}
        content={value || ""}
        onUpdate={({ editor }) => {
          const html = editor.getHTML();
          if (!html || html === "<p></p>") onChange(null);
          else onChange(editor.getHTML());
        }}
        error={!!error}
        editable={!props.disabled}
        {...props.inputProps}
      />
      {error && (
        <Typography variant={"caption"} color={"error.main"}>
          {error.message}
        </Typography>
      )}
    </Box>
  );
};

export default FormTextEditor;
