import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import background from "../assets/image/background.png";
import borderImage from "../assets/image/border-img.png";
import buttonImage from "../assets/image/play-arrow.png";
import secImage from "../assets/image/border-img-se.png";
const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "500px",
        backgroundSize: "cover",
        backgroundImage: `url(${background})`,
      }}
      alignItems={"center"}
    >
      <Stack direction={"row"}>
        <Typography
          variant="h7"
          component="div"
          sx={{ flexGrow: 1, color: "white", fontSize: "24px" }}
          fontFamily={"'Cabin', sans-serif"}
        >
          Build your own empire in the metaverse
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        sx={{
          backgroundImage: `url(${borderImage})`,
          height: 80,
          backgroundSize: "100% 100%",
          px: 3,
          py: 1,
        }}
      >
        <Typography
          variant="h7"
          fontSize={48}
          color="#FF7A00"
          component="div"
          textTransform="uppercase"
          fontFamily="BROOKLINE"
        >
          NFT GAME. Play. Conquer. Earn
        </Typography>
      </Stack>
      <Stack direction={"row"}>
        <Typography
          variant="h7"
          component="div"
          sx={{ flexGrow: 1, color: "white", fontSize: "24px" }}
          fontFamily={"'Cabin', sans-serif"}
          fontSize={20}
        >
          Play & Conquer in the First True MMO Real Time Strategy Game on
          Blockchain
        </Typography>
      </Stack>
      <Stack direction={"row"}>
        <Button
          sx={{
            backgroundImage: `url(${buttonImage})`,
            width: "80px",
            height: "80px",
            backgroundSize: "100% 100%",
            borderRadius: "50%",
          }}
        />
      </Stack>
      <Stack direction={"row"} mt={3} px={1}>
        <Button
          disableRipple
          sx={{
            backgroundImage: `url(${secImage})`,
            backgroundSize: "100% 100%",
            color: "#FF7A00",
            fontSize: 24,
          }}
          fontFamily={"'Cabin', sans-serif"}
        >
          CONNECT WALLET & CONQUER
        </Button>
      </Stack>
    </Box>
  );
};

export default Home;
