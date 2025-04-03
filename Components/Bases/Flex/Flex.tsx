import { Box, BoxProps } from "@mui/material";
import { forwardRef } from "react";

export type { BoxProps as FlexProps };

const Flex = forwardRef((prop: BoxProps, ref) => {
  return <Box ref={ref} {...prop} display={"flex"} />;
});

export default Flex;
