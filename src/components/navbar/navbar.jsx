import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import { BrowserRouter , Route , Routes, useLocation ,Link} from 'react-router-dom';

import { useParams } from 'react-router-dom';

export function Navbar() {
  const ishiremepresent = location.pathname.includes('/hireme');
  const isHomePresent = location.pathname.includes('/');
  var page = useParams();
  console.log(isHomePresent);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{"backgroundColor" : "#333333"}}>
          
          <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={12} sm={3} style={{ "textAlign": 'center' }}>
                <Typography variant="h6" component="div" onMouseEnter={(e) => e.target.style.color = 'gold'} onMouseLeave={(e) => e.target.style.color = 'white'}>
                  Student details Form
                </Typography>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Grid container justifyContent="space-evenly" spacing={2}>
                  <Grid item>
                    <Link to={"/seestudentdatas"} style={{textDecoration : 'none'}}>
                    <a href="#"  style={{color : ishiremepresent ? "gold" : "white",  textDecoration : "none"}}   onMouseEnter={(e) => e.target.style.color = 'gold' }
        onMouseLeave={(e) => e.target.style.color = ishiremepresent ? 'gold' : 'white'} >See student details</a>
                    </Link>
                  
                  </Grid>
                  <Grid item>
                    
                  <Link to={"/"} style={{textDecoration : 'none'}}>
                    <a href="#"  style={{color : isHomePresent && ishiremepresent? "white" : "white",
                      textDecoration : "none"
                    }}   onMouseEnter={(e) => e.target.style.color = 'gold'}
        onMouseLeave={(e) => e.target.style.color = isHomePresent ? 'gold' : 'white'} >Enter student details</a>
                    </Link>
                  </Grid>
                  <Grid item>
                   
          
                  
                  
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
          
        </AppBar>
      </Box>
    </>
  );
}
