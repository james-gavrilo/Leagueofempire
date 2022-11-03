import { Box } from "@mui/system";
import React from "react";
import Home from "./Home";
import Overview from "./Overview";
import Feature from "./Feature";
import Kingdom from "./Kingdom";
export default function () {
  return (
    <Box>
      <Home />
      <Overview />
      <Feature />
      <Kingdom />
    </Box>
  );
}
