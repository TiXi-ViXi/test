import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Icon } from '@mui/material';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Icon src = '/assets/logo.png'></Icon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Debonair Group
          </Typography>
          <Button color="inherit" id="">Employee</Button>
          <Button color="inherit" id="">Users</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}