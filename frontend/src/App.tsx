import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Box, Button, Grid, Paper, Tab, Tabs, styled, Typography } from '@mui/material'



// function App() {
//   const gridStyle = {
//     borderRight: '1px solid #ccc', // Add a border to the right of the first grid
//   };

//   const [tabValue, setTabValue] = useState(0);

//   const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//     setTabValue(newValue);
//   };
//   return (
//     <Grid container spacing={2} columns={16}>
//       <Grid xs={8} style={gridStyle}>
//         <Tabs aria-label="basic tabs example"
//           indicatorColor="primary"
//           textColor="inherit"
//           variant='fullWidth'>
//           <Tab label="Item One" />
//           <Tab label="Item Two" />
//           <Tab label="Item Three" />
//         </Tabs>
//       </Grid>
//       <Grid xs={8} >

//         <Tabs aria-label="basic tabs example"
//           indicatorColor="primary"
//           textColor="inherit"
//           variant='fullWidth'>
//           <Tab label="Item One" />
//           <Tab label="Item Two" />
//           <Tab label="Item Three" />
//         </Tabs>

//       </Grid>
//     </Grid>

//   )


// }

// export default App;



function App() {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const paperStyle = {
    padding: '20px',
    margin: '20px',
    textAlign: 'center',
    backgroundColor: '#f3f3f3',
  };

  const tabContainerStyle = {
    marginTop: '20px',
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper style={paperStyle}>
          <Typography variant="h4" >Flower Shop</Typography>
          <Typography variant="subtitle1">Choose an option from the tabs below:</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper style={paperStyle}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="basic tabs example"
          >
            <Tab label="Add Flower" />
            <Tab label="Edit Flower" />
            <Tab label="Delete Flower" />
          </Tabs>
        </Paper>
        <Box style={tabContainerStyle}>
          <TabPanel value={tabValue} index={0}>
            <Button variant="contained" color="primary">
              Add Flower
            </Button>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Button variant="contained" color="primary">
              Edit Flower
            </Button>
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <Button variant="contained" color="primary">
              Delete Flower
            </Button>
          </TabPanel>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Paper style={paperStyle}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="basic tabs example"
          >
            <Tab label="Search Flower" />
            <Tab label="Quit" />
          </Tabs>
        </Paper>
        <Box style={tabContainerStyle}>
          <TabPanel value={tabValue} index={3}>
            <Button variant="contained" color="primary">
              Search Flower
            </Button>
          </TabPanel>
          <TabPanel value={tabValue} index={4}>
            <Button variant="contained" color="primary">
              Quit
            </Button>
          </TabPanel>
        </Box>
      </Grid>
    </Grid>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default App;