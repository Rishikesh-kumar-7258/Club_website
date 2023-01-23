import { Stack } from '@mui/system'
import { Tab, Tabs, TextField, Box} from '@mui/material'
import React from 'react'
import PropTypes from "prop-types";
import { Button } from '@mui/material';

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
        <Box sx={{
          backgroundColor : "white",
          width : {
            xs : "100vw",
            sm : "100vw",
            md : "70vw",
            lg : "50vw",
          }
        }}>
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const allyProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{
      backgroundColor : "#333333",
      color: "white",
      width : "100vw",
      height : "100vh",
      display : "flex",
      alignItems : "center",
      justifyContent : "center",
      flexDirection : "column",
    }}>
      <Box sx={{ borderBottom: 1, 
        borderColor: 'divider',
        backgroundColor : "white",
        width : {
          xs : "100vw",
          sm : "100vw",
          md : "70vw",
          lg : "50vw",
        }
      }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Login" {...allyProps(0)} />
          <Tab label="SignUp" {...allyProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack component="form">
          <TextField id="email" label="Email" variant="filled" type="email" />
          <TextField id="password" label="Password" variant="filled" type="password" />
          <Button size="large" variant="contained">Login</Button>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack component="form">
          <TextField id="fname" label="First Name" variant="filled" />
          <TextField id="lname" label="Last Name" variant="filled" />
          <TextField id="email" label="Email" variant="filled" type="email" />
          <TextField id="password" label="Password" variant="filled" type="password" />
          <TextField id="password2" label="Re-Enter Password" variant="filled" type="password" />
          <Button size="large" variant="contained">Register</Button>
        </Stack>
      </TabPanel>
    </Box>

  )
}

export default Authorize