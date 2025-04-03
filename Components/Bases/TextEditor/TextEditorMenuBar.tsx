import { useTheme } from "@mui/material";
import {
  MenuButtonBold,
  MenuButtonBulletedList,
  MenuButtonEditLink,
  MenuButtonHighlightColor,
  MenuButtonItalic,
  MenuButtonRemoveFormatting,
  MenuButtonSubscript,
  MenuButtonSuperscript,
  MenuButtonTextColor,
  MenuButtonUnderline,
  MenuControlsContainer,
  MenuSelectTextAlign,
} from "mui-tiptap";

export default function TextEditorMenuBar() {
  const theme = useTheme();
  return (
    <MenuControlsContainer>
      <MenuButtonBold />
      <MenuButtonItalic />
      <MenuButtonUnderline />
      <MenuButtonTextColor defaultTextColor={theme.palette.text.primary} />
      <MenuButtonHighlightColor />
      <MenuButtonBulletedList />
      <MenuSelectTextAlign />
      <MenuButtonSubscript />
      <MenuButtonSuperscript />
      <MenuButtonEditLink />
      <MenuButtonRemoveFormatting />
    </MenuControlsContainer>
  );
}
