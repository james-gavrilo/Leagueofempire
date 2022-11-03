import { Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";

import pngegg1 from "../assets/image/pngegg1.png";
import pngegg2 from "../assets/image/pngegg2.png";
import pngeggBackground from "../assets/image/pngegg-background.png";
const Kingdom = () => {
  return (
    <Box mt={40}>
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
            BUILD THE ULTIMATE KINGDOM
          </Typography>
        </Stack>
        <Grid container spacing={1} sx={{ height: "300px" }}>
          <Grid item md={3}>
            <Stack direction={"row"} flexDirection={"column"}>
              <Typography
                variant="h7"
                fontSize={24}
                color="white"
                component="div"
                fontFamily="BROOKLINE"
              >
                Console-Quality Graphics
              </Typography>
              <Typography
                variant="h7"
                fontSize={16}
                color="#B0B5C1"
                component="div"
                fontFamily="BROOKLINE"
              >
                Plan, strategize and fight enemies in a stunning 3D fantasy
                world.
              </Typography>
            </Stack>
            <Stack direction={"row"} flexDirection={"column"}>
              <Typography
                variant="h7"
                fontSize={24}
                color="white"
                component="div"
                fontFamily="BROOKLINE"
              >
                Dominate with Strategy
              </Typography>
              <Typography
                variant="h7"
                fontSize={16}
                color="#B0B5C1"
                component="div"
                fontFamily="BROOKLINE"
              >
                Train your troops, equip them with powerful artillery and lead
                them into epic PvP battles.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={6}>
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
                <img src={pngegg1} alt="" />
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
                <img src={pngegg2} alt="" />
              </Box>
            </Stack>
          </Grid>
          <Grid item md={3}>
            <Stack direction={"row"} flexDirection={"column"}>
              <Typography
                variant="h7"
                fontSize={24}
                color="white"
                component="div"
                fontFamily="BROOKLINE"
                textAlign={"center"}
              >
                Real-Time Battle Control
              </Typography>
              <Typography
                variant="h7"
                fontSize={16}
                color="#B0B5C1"
                component="div"
                fontFamily="BROOKLINE"
                textAlign={"center"}
              >
                Go to war with thousands of troops, all under your direct
                control.
              </Typography>
            </Stack>
            <Stack direction={"row"} flexDirection={"column"}>
              <Typography
                variant="h7"
                fontSize={24}
                color="white"
                component="div"
                fontFamily="BROOKLINE"
                textAlign={"center"}
              >
                Nonstop Events & Campaigns
              </Typography>
              <Typography
                variant="h7"
                fontSize={16}
                color="#B0B5C1"
                component="div"
                fontFamily="BROOKLINE"
                textAlign={"center"}
              >
                Daily quests, leaderboard challenges, unique campaigns, and
                alliance events
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Kingdom;
