import { Grid, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import background from "../assets/image/overview-background.png";
import Subtract1 from "../assets/image/Subtract1.png";
import Subtract2 from "../assets/image/Subtract2.png";
const Feature = () => {
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
            KEY FEATURES
          </Typography>
        </Stack>
        <Grid container spacing={1} sx={{ height: "300px" }}>
          <Grid item md={3}>
            <Box className="card" sx={{}}></Box>
          </Grid>
          <Grid item md={3}>
            <Box className="card"></Box>
          </Grid>
          <Grid item md={3}>
            <Box className="card"></Box>
          </Grid>
          <Grid item md={3}>
            <Box className="card"></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Feature;
