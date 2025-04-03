// import useTextEditorExtensions from '@hooks/useTextEditorExtensions';
import { styled, SxProps, Theme } from "@mui/material";
import StarterKit from "@tiptap/starter-kit";
import {
  LinkBubbleMenu,
  LinkBubbleMenuHandler,
  RichTextEditor,
  RichTextEditorProps,
  RichTextEditorRef,
} from "mui-tiptap";
import { forwardRef, useEffect, useRef } from "react";
import TextEditorMenuBar from "./TextEditorMenuBar";

type TextEditorProps = {
  error?: boolean;
  placeholder?: string;
  sx?: SxProps<Theme>;
} & Omit<RichTextEditorProps, "extensions"> &
  React.RefAttributes<RichTextEditorRef>;

const StyledTextEditor = styled(RichTextEditor)<TextEditorProps>(({
  theme,
  ...props
}) => {
  if (!props.editable) {
    return {
      "&.MuiTiptap-FieldContainer-root": {
        borderRadius: 4,
        overflow: "hidden",
        position: "relative",
        minHeight: 80,
        border: "1px solid hsla(0, 0%, 0%, 0.10)",
        backgroundColor: "hsla(0, 0%, 86%, 1)",
        cursor: "not-allowed",

        "& .MuiTiptap-MenuBar-root .MuiTiptap-RichTextField-content": {
          padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
        },
        "& .MuiTiptap-RichTextContent-root": {
          padding: theme.spacing(1),
          minHeight: 80,
        },
      },
    };
  }

  return {
    "&.MuiTiptap-FieldContainer-root": {
      border: "1px solid hsla(0, 0%, 0%, 0.10)",
      borderRadius: 4,
      overflow: "hidden",
      position: "relative",
      backgroundColor: "white",
      "&::before": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        transition:
          "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        height: "100%",
        borderBottom: props.error
          ? `1px solid ${theme.palette.error.main}`
          : "inherit",
      },
      "&:hover:before": {
        borderBottom: props.error
          ? `1px solid ${theme.palette.error.main}`
          : "2px solid hsl(201, 15%, 23%)",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        transform: "scaleX(0)",
        transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
        borderBottom: props.error
          ? `2px solid ${theme.palette.error.main}`
          : `2px solid ${theme.palette.primary.main}`,
      },
      "&.MuiTiptap-FieldContainer-focused:after": {
        transform: "scaleX(1) translateX(0)",
      },
    },
    "& .MuiTiptap-MenuBar-root .MuiTiptap-RichTextField-content": {
      padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
    },
    "& .MuiTiptap-RichTextContent-root": {
      padding: theme.spacing(1),
      minHeight: 80,
    },
  };
});

const TextEditor = forwardRef<RichTextEditorRef, TextEditorProps>((props) => {
  const rtxEditor = useRef<RichTextEditorRef>(null);
  const {
    error = false,
    editable = true,
    placeholder = "",
    content,
    ...restProps
  } = props;
  // const customExtensions = useTextEditorExtensions({
  //   placeholder,
  // });

  // const extensions = [...customExtensions, StarterKit, LinkBubbleMenuHandler];
  const extensions = [StarterKit, LinkBubbleMenuHandler];

  useEffect(() => {
    const editor = rtxEditor.current?.editor;
    if (!editor) return;

    const selection = editor.state.selection;

    const currentContent = editor.getHTML();
    if (currentContent !== (content || "")) {
      editor.commands.setContent(content ?? "");

      editor.commands.setTextSelection(selection);
    }
  }, [content]);

  return (
    <StyledTextEditor
      ref={rtxEditor}
      RichTextFieldProps={{
        variant: "standard",
        ...props.RichTextFieldProps,
      }}
      {...restProps}
      editable={editable}
      error={error}
      extensions={extensions}
      renderControls={() => <TextEditorMenuBar />}
    >
      {() => (
        <>
          <LinkBubbleMenu />
        </>
      )}
    </StyledTextEditor>
  );
});

export default TextEditor;
