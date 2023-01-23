import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{flexGrow : 1}}>
      <Grid container spacing={2}>
        <Grid lg={6}>
          <Box></Box>
        </Grid>
        <Grid lg={6}>
          <Typography>xs=4</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
