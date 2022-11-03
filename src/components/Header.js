import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";

import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import logo from "../assets/image/logo.png";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Stack
          sx={{ height: "40px", background: "rgba(29, 29, 29, 0.8)" }}
          direction={"row"}
        >
          <Container maxWidth="lg">
            <Grid container justifyContent={"space-between"}>
              <Grid item md={6}>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <SendIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
              </Grid>
              <Grid item md={6} textAlign={"right"}>
                <Button
                  sx={{ color: "#FF7A00", fontFamily: "BROOKLINE" }}
                  color="inherit"
                >
                  connect wallet
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Stack>
        <Stack sx={{ height: "88px" }} direction={"row"} alignItems={"center"}>
          <Container maxWidth="lg">
            {/* <Toolbar> */}
            <Grid container alignItems={"center"}>
              <Grid item md={4} textAlign={"center"} spacing={1}>
                <Button color="inherit" sx={{ fontFamily: "BROOKLINE" }}>
                  Tokenomics
                </Button>
                <Button color="inherit" sx={{ fontFamily: "BROOKLINE" }}>
                  Whitepaper
                </Button>
              </Grid>
              <Grid item md={4} justifyContent={"center"} textAlign={"center"}>
                <img src={logo} loading="lazy" />
              </Grid>
              <Grid item md={4} textAlign={"center"}>
                <Button color="inherit" sx={{ fontFamily: "BROOKLINE" }}>
                  Marketplace
                </Button>
                <Button color="inherit" sx={{ fontFamily: "BROOKLINE" }}>
                  Team
                </Button>
              </Grid>
            </Grid>
            {/* </Toolbar> */}
          </Container>
        </Stack>
      </AppBar>
    </Box>
  );
};
export default Header;
