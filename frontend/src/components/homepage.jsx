import React from "react";
import { Stack, Unstable_Grid } from "@mui/system";
import { Box, Typography, ButtonGroup, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Stack sx={{
      boxSizing: "border-box",
      overflowX: "hidden",
      backgroundColor: "#333333",
      color: "white"
    }}>

      {/* Header section */}
      <Unstable_Grid container sx={{
        height: "100vh",
        width: "100vw",
        paddingX: 2
      }}>
        <Unstable_Grid item lg={6} md={12} sx={{
          display: "grid",
          placeItems: "center"
        }}>
          <Box
            component="img"
            sx={{
              width: '50vw',
              maxHeight: '100vh'
            }}
            src="https://source.unsplash.com/random/?clubs" alt="Random Image"
          >
          </Box>
        </Unstable_Grid>
        <Unstable_Grid item lg={6} md={12} sx={{
          display: "grid",
          placeItems: "center"
        }}>
          <Box sx={{
            textAlign: 'right',
            display: "flex",
            flexDirection: 'column'
          }}>
            <Typography variant="h1" sx={{
              fontWeight: 800
            }}>Anonymous</Typography>
            <Typography variant="caption">A Chronic Learning Club</Typography>
          </Box>
          <ButtonGroup variant="contained" size="large" aria-label="outlined primary button group">
            <Button> <Link to='/authorize' style={{
              textDecoration : "none",
              color : "white"
            }}>Join Now !!!</Link></Button>
            <Button>Know More</Button>
          </ButtonGroup>
        </Unstable_Grid>
      </Unstable_Grid>

      {/* About Us  */}
      <Box sx={{
        padding: 5,
      }}>
        <Typography variant="h4" fontWeight="800">About Us</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vitae voluptatibus suscipit quae beatae impedit maiores tempora laborum, aperiam culpa modi obcaecati, facere explicabo, distinctio similique deserunt a? Iure magni a odit perferendis architecto sequi. Porro voluptatem ullam saepe deserunt totam assumenda eius animi ipsam. Ut voluptatem dolor tempora ullam!</Typography>
      </Box>

      {/* Members */}
      <Box sx={{
        padding: 5,
      }}>
        <Typography variant="h4" fontWeight="800">About Us</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vitae voluptatibus suscipit quae beatae impedit maiores tempora laborum, aperiam culpa modi obcaecati, facere explicabo, distinctio similique deserunt a? Iure magni a odit perferendis architecto sequi. Porro voluptatem ullam saepe deserunt totam assumenda eius animi ipsam. Ut voluptatem dolor tempora ullam!</Typography>
      </Box>

      {/* Projects  */}
      <Box sx={{
        padding: 5,
      }}>
        <Typography variant="h4" fontWeight="800">About Us</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vitae voluptatibus suscipit quae beatae impedit maiores tempora laborum, aperiam culpa modi obcaecati, facere explicabo, distinctio similique deserunt a? Iure magni a odit perferendis architecto sequi. Porro voluptatem ullam saepe deserunt totam assumenda eius animi ipsam. Ut voluptatem dolor tempora ullam!</Typography>
      </Box>

      {/* Events  */}
      <Box sx={{
        padding: 5,
      }}>
        <Typography variant="h4" fontWeight="800">About Us</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vitae voluptatibus suscipit quae beatae impedit maiores tempora laborum, aperiam culpa modi obcaecati, facere explicabo, distinctio similique deserunt a? Iure magni a odit perferendis architecto sequi. Porro voluptatem ullam saepe deserunt totam assumenda eius animi ipsam. Ut voluptatem dolor tempora ullam!</Typography>
      </Box>

    </Stack>
  );
};

export default Home;
