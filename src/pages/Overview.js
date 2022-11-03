import { Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import background from "../assets/image/overview-background.png";
import Subtract1 from "../assets/image/Subtract1.png";
import Subtract2 from "../assets/image/Subtract2.png";
import Points1 from "../assets/image/points1.png";
import Points2 from "../assets/image/points2.png";
const Overview = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        height: "500px",
        backgroundColor: "#151515",
        backgroundSize: "100% 100%",
        py: "30px",
      }}
    >
      <Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            variant="h7"
            fontSize={40}
            color="white"
            component="div"
            fontFamily="BROOKLINE"
            textAlign={"center"}
            className="overview-text"
          >
            OVERVIEW
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={3}
        >
          <Typography
            variant="h7"
            fontSize={20}
            color="white"
            component="div"
            fontFamily="'Cabin', sans-serif"
            textAlign={"center"}
          >
            Experience blockchain gaming at its best! Challenge the world in
            multiplayer PvP style
            <br />
            with a custom army of your favourite units, a rich and immersive
            gameplay!
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" sx={{ my: 7 }}>
          <Box
            sx={{
              //   backgroundImage: `url(${Points1})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              height: "320px",
              "& img": {
                marginRight: "-130px",
              },
            }}
            className="slash"
          >
            <img src={Subtract1} alt="" />
          </Box>
          <Box
            className="slash-2"
            sx={{
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              //   backgroundImage: `url(${Points2})`,
              "& img": {
                height: "320px",
                marginLeft: "-130px",
                marginTop: "200px",
              },
            }}
          >
            <img src={Subtract2} alt="" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Overview;
