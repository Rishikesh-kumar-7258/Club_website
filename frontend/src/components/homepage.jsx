import React from "react";
import { Stack, Unstable_Grid } from "@mui/system";
import {
  Box,
  Typography,
  ButtonGroup,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Carousel from "react-material-ui-carousel";
import { ArrowRight, ArrowLeft } from "@mui/icons-material";

const Home = () => {
  return (
    <Stack
      sx={{
        boxSizing: "border-box",
        overflowX: "hidden",
        backgroundColor: "#333333",
        color: "white",
      }}
    >
      {/* Header section */}
      <Unstable_Grid
        container
        sx={{
          height: "100vh",
          width: "100vw",
          paddingX: 2,
        }}
      >
        <Unstable_Grid
          item
          lg={6}
          md={12}
          sx={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              width: "50vw",
              maxHeight: "100vh",
            }}
            src="https://source.unsplash.com/random/400x400?clubs"
            alt="Random Image"
          ></Box>
        </Unstable_Grid>
        <Unstable_Grid
          item
          lg={6}
          md={12}
          sx={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <Box
            sx={{
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
              }}
            >
              Anonymous
            </Typography>
            <Typography variant="caption">An ever Learning Club</Typography>
          </Box>
          <ButtonGroup
            variant="contained"
            size="large"
            aria-label="outlined primary button group"
          >
            <Button>
              {" "}
              <Link
                to="/authorize"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Join Now !!!
              </Link>
            </Button>
            <Button>
              <HashLink
                smooth
                to="#aboutUs"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Know More
              </HashLink>
            </Button>
          </ButtonGroup>
        </Unstable_Grid>
      </Unstable_Grid>

      {/* About Us  */}
      <Box
        sx={{
          padding: 5,
        }}
        id="aboutUs"
      >
        <Typography variant="h4" fontWeight="800">
          About Us
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vitae
          voluptatibus suscipit quae beatae impedit maiores tempora laborum,
          aperiam culpa modi obcaecati, facere explicabo, distinctio similique
          deserunt a? Iure magni a odit perferendis architecto sequi. Porro
          voluptatem ullam saepe deserunt totam assumenda eius animi ipsam. Ut
          voluptatem dolor tempora ullam!
        </Typography>
      </Box>

      {/* Members */}
      <Box
        sx={{
          padding: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" fontWeight="800">
            Members
          </Typography>
          <Link to="/members" className="text-link">
            See More
          </Link>
        </Box>
        <Unstable_Grid container>
          <Unstable_Grid item xm={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                image="https://source.unsplash.com/random/400x400?animal"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5">Member 1</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam nulla, assumenda iure et reiciendis iste dolore ipsum
                  tempora molestias culpa?
                </Typography>
              </CardContent>
              <CardActions>
                <Button>View</Button>
              </CardActions>
            </Card>
          </Unstable_Grid>
        </Unstable_Grid>
      </Box>

      {/* Events  */}
      <Box
        sx={{
          padding: 5,
          height : 'fit-content'
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" fontWeight="800">
            Events
          </Typography>
          <Link to="/evens" className="text-link">
            See More
          </Link>
        </Box>
        <Carousel
          NextIcon={<ArrowRight />}
          PrevIcon={<ArrowLeft />}
          navButtonsAlwaysVisible={true}
          animation="slide"
          indicators={true}
          swipe={true}
        >
          <Card key={1}>
            <CardMedia
              component="img"
              image="https://source.unsplash.com/random/1000x300?events"
            ></CardMedia>
          </Card>
        </Carousel>
      </Box>

      {/* Projects  */}
      <Box
        sx={{
          padding: 5,
        }}
      >
        <Typography variant="h4" fontWeight="800">
          About Us
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vitae
          voluptatibus suscipit quae beatae impedit maiores tempora laborum,
          aperiam culpa modi obcaecati, facere explicabo, distinctio similique
          deserunt a? Iure magni a odit perferendis architecto sequi. Porro
          voluptatem ullam saepe deserunt totam assumenda eius animi ipsam. Ut
          voluptatem dolor tempora ullam!
        </Typography>
      </Box>
    </Stack>
  );
};

export default Home;
