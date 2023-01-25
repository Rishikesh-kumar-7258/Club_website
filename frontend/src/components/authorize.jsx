import { Stack } from "@mui/system";
import {
  Tab,
  Tabs,
  TextField,
  Box,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../App";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            backgroundColor: "white",
            width: {
              xs: "100vw",
              sm: "100vw",
              md: "70vw",
              lg: "50vw",
            },
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Authorize = () => {
  const [value, setValue] = React.useState(0);
  const [success, setSuccess] = React.useState(false);
  const navigate = useNavigate();
  const globalContext = React.useContext(GlobalContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSignup = (e) => {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    if (password === password2) {
      fetch("http://localhost:8000/users/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: fname,
          last_name: lname,
          username: fname + "_" + lname,
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.username instanceof Array) {
            console.log(data);
            return;
          }
          globalContext.setIsLoggedIn((isLoggedIn) => true);
          globalContext.setUser(data);
          setSuccess(true);
          setTimeout(()=>{}, 1000);
          navigate("/");
        })
        .catch((err) => console.error("Error: ", err));
    }
  };

  const handleLogin = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("l_password").value;

    fetch("http://localhost:8000/users/exist/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) return response.json();
        else throw new Error(response.status);
      })
      .then((data) => {
        console.log(data);
        globalContext.setIsLoggedIn(true);
        globalContext.setUser(data);
        navigate("/");
      });
  };

  const allyProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <Box
      sx={{
        backgroundColor: "#333333",
        color: "white",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "white",
          width: {
            xs: "100vw",
            sm: "100vw",
            md: "70vw",
            lg: "50vw",
          },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Login" {...allyProps(0)} />
          <Tab label="SignUp" {...allyProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack component="form">
          {/* <Typography variant="body" sx={{color : "black", p : 1}}>Username is your 'FirstName_LastName'</Typography> */}
          <TextField
            id="username"
            label="Username"
            variant="filled"
            type="text"
          />
          <TextField
            id="l_password"
            label="Password"
            variant="filled"
            type="password"
          />
          <Button
            onClick={handleLogin}
            size="large"
            variant="contained"
            id="login_button"
          >
            Login
          </Button>
        </Stack>
        
        {success && <Alert severity="success" sx={{
          position : "absolute",
          right : 10,
          top : 10,
        }}>
          <AlertTitle>Success</AlertTitle>
          Logged in Sucessfully !!!
        </Alert>}
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack component="form">
          <TextField id="fname" label="First Name" variant="filled" />
          <TextField id="lname" label="Last Name" variant="filled" />
          <TextField id="email" label="Email" variant="filled" type="email" />
          <TextField
            id="password"
            label="Password"
            variant="filled"
            type="password"
          />
          <TextField
            id="password2"
            label="Re-Enter Password"
            variant="filled"
            type="password"
          />
          <Button
            onClick={handleSignup}
            size="large"
            variant="contained"
            id="signup_button"
          >
            Register
          </Button>
        </Stack>
      </TabPanel>
    </Box>
  );
};

export default Authorize;
