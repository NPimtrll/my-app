// import React, { useState, useEffect } from "react";
// import { EditorContent, useEditor } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import TextAlign from "@tiptap/extension-text-align";
// import Underline from "@tiptap/extension-underline";
// import Superscript from "@tiptap/extension-superscript";
// import Link from "@tiptap/extension-link";
// import Subscript from "@tiptap/extension-subscript";
// import TextStyle from "@tiptap/extension-text-style";
// import Color from "@tiptap/extension-color";
// import { ToggleButton, ToggleButtonGroup, Box, Paper, Popover, IconButton } from "@mui/material";
// import FormatBoldIcon from "@mui/icons-material/FormatBold";
// import FormatItalicIcon from "@mui/icons-material/FormatItalic";
// import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
// import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
// import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
// import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
// import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
// import SuperscriptIcon from "@mui/icons-material/Superscript";
// import SubscriptIcon from "@mui/icons-material/Subscript";
// import FormatClearIcon from "@mui/icons-material/FormatClear";
// import ColorLensIcon from "@mui/icons-material/ColorLens";
// import HighlightIcon from "@mui/icons-material/Highlight";
// import Highlight from "@tiptap/extension-highlight";


// const App: React.FC = () => {
//   const HighlightExtension = Highlight.configure({ multicolor: true });
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Underline,
//       Superscript,
//       Subscript,
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//       Link,
//       TextStyle,
//       Color,
//       HighlightExtension,
//     ],
//     content: "<p>เริ่มพิมพ์ข้อความที่นี่...</p>",
//   });

//   const [htmlOutput, setHtmlOutput] = useState(editor?.getHTML() || "");
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [colorType, setColorType] = useState<"text" | "highlight">("text");
//   const [textColor, setTextColor] = useState("#000000");
//   const [highlightColor, setHighlightColor] = useState("#ffff00");

//   useEffect(() => {
//     if (editor) {
//       editor.on("update", () => {
//         setHtmlOutput(editor.getHTML());
//       });
//     }
//   }, [editor]);

//   const handleOpenColorPicker = (event: React.MouseEvent<HTMLElement>, type: "text" | "highlight") => {
//     setAnchorEl(event.currentTarget); 
//     setColorType(type);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const color = event.target.value;
//     if (colorType === "text") {
//       setTextColor(color);
//       editor?.chain().focus().setColor(color).run();
//     } else {
//       setHighlightColor(color);
//       editor?.chain().focus().toggleMark("highlight", { color }).run();
//     }
//   };

//   if (!editor) {
//     return null;
//   }

//   return (
//     <div className="App">
//       <h1>Text Editor POC</h1>
//       <Box sx={{ maxWidth: 700, margin: "auto", padding: 2 }}>
//         <ToggleButtonGroup size="small" sx={{ marginBottom: 2 }}>
//           <ToggleButton value="bold" onClick={() => editor.chain().focus().toggleBold().run()} selected={editor.isActive("bold")}>
//             <FormatBoldIcon />
//           </ToggleButton>
//           <ToggleButton value="italic" onClick={() => editor.chain().focus().toggleItalic().run()} selected={editor.isActive("italic")}>
//             <FormatItalicIcon />
//           </ToggleButton>
//           <ToggleButton value="underline" onClick={() => editor.chain().focus().toggleUnderline().run()} selected={editor.isActive("underline")}>
//             <FormatUnderlinedIcon />
//           </ToggleButton>
//           <ToggleButton value="superscript" onClick={() => editor.chain().focus().toggleSuperscript().run()} selected={editor.isActive("superscript")}>
//             <SuperscriptIcon />
//           </ToggleButton>
//           <ToggleButton value="subscript" onClick={() => editor.chain().focus().toggleSubscript().run()} selected={editor.isActive("subscript")}>
//             <SubscriptIcon />
//           </ToggleButton>
//           <ToggleButton value="left" onClick={() => editor.chain().focus().setTextAlign("left").run()} selected={editor.isActive({ textAlign: "left" })}>
//             <FormatAlignLeftIcon />
//           </ToggleButton>
//           <ToggleButton value="center" onClick={() => editor.chain().focus().setTextAlign("center").run()} selected={editor.isActive({ textAlign: "center" })}>
//             <FormatAlignCenterIcon />
//           </ToggleButton>
//           <ToggleButton value="right" onClick={() => editor.chain().focus().setTextAlign("right").run()} selected={editor.isActive({ textAlign: "right" })}>
//             <FormatAlignRightIcon />
//           </ToggleButton>
//           <ToggleButton value="bulleted" onClick={() => editor.chain().focus().toggleBulletList().run()} selected={editor.isActive("bulletList")}>
//             <FormatListBulletedIcon />
//           </ToggleButton>
//           <ToggleButton value="numbered" onClick={() => editor.chain().focus().toggleOrderedList().run()} selected={editor.isActive("orderedList")}>
//             <FormatListNumberedIcon />
//           </ToggleButton>
//           <ToggleButton value="color" onClick={(e) => handleOpenColorPicker(e, "text")}>
//             <ColorLensIcon />
//           </ToggleButton>
//           <ToggleButton value="highlight" onClick={(e) => handleOpenColorPicker(e, "highlight")}>
//             <HighlightIcon />
//           </ToggleButton>
//           <ToggleButton value="clear" onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}>
//             <FormatClearIcon />
//           </ToggleButton>
//         </ToggleButtonGroup>

//         {/* Popover สำหรับเลือกสี */}
//         <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
//           <Box sx={{ padding: 1 }}>
//             <input type="color" value={colorType === "text" ? textColor : highlightColor} onChange={handleColorChange} />
//           </Box>
//         </Popover>

//         <Paper variant="outlined" sx={{ padding: 2, minHeight: 100 }}>
//           <EditorContent editor={editor} />
//         </Paper>

//         <Paper variant="outlined" sx={{ marginTop: 2, padding: 2 }}>
//           <h3>ผลลัพธ์ (HTML):</h3>
//           <div dangerouslySetInnerHTML={{ __html: htmlOutput }} />
//         </Paper>
//       </Box>
//     </div>
//   );
// };

// export default App;
