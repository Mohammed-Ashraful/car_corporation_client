import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../../hooks/useAuth';




const Navigation = () => {
  const { user, logOut } = useAuth();
  const theme = useTheme();
  const useStyle = makeStyles({
    NavItem: {
      textDecoration: 'none',
      color: 'white'
    },
    NavIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !important',
      },
    },
    NavItemContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    mobileNavItem: {
      [theme.breakpoints.down('sm')]: {
        textDecoration: 'none',
        color:'black',
      },
    }
  })

  const [state, setState] = React.useState(false);
  const { NavItem, NavIcon, NavItemContainer, mobileNavItem } = useStyle();
  
  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button>
          <ListItemText>
            <Link className={mobileNavItem} to="/">
              <Button color="inherit">Home</Button>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link className={mobileNavItem} to="/allcar">
              <Button color="inherit">All CAR</Button>
            </Link>
          </ListItemText>
        </ListItem>
        
        <ListItem button>
          <ListItemText>
                <Link className={mobileNavItem} to='/contact'><Button color="inherit">Contact Us</Button></Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
                <Link className={mobileNavItem} to='/about'><Button color="inherit">About US</Button></Link>
          </ListItemText>
        </ListItem>
         
        {user?.email ? (
          <>
            <ListItem button>
              <ListItemText>
                <Link className={mobileNavItem} to="dashboard">
                  <Button color="inherit">Dashboard</Button>
                </Link>
              </ListItemText>
            </ListItem>
            
            <ListItem button>
              <ListItemText>
                <Link className={mobileNavItem} onClick={logOut}>
                  <Button color="inherit">LogOut</Button>
                </Link>
              </ListItemText>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem button>
              <ListItemText>
                <Link className={mobileNavItem} to="/login">
                  <Button color="inherit">Login</Button>
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                <Link className={mobileNavItem} to="/register">
                  <Button color="inherit">Register</Button>
                </Link>
              </ListItemText>
            </ListItem>
          </>
        )}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <div style={{marginBottom:"15px"}}>
        {<Box sx={{ flexGrow: 1, marginBottom: 0 }} >
          <AppBar position="static">
            <Toolbar sx={{ margin: '0px' }}>
              <IconButton
                className={NavIcon}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setState(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
              </Typography>

              <div className={NavItemContainer}>
                <Link className={NavItem} to='/'><Button color="inherit">Home</Button></Link>
                <Link className={NavItem} to='/allcar'><Button color="inherit">All Car </Button></Link>
                <Link className={NavItem} to='/contact'><Button color="inherit">Contact Us</Button></Link>
                <Link className={NavItem} to='/about'><Button color="inherit">About US</Button></Link>

                {
                  user?.email ?
                    <span>
                      <Link className={NavItem} to="dashboard"><Button color="inherit" >Dashboard</Button></Link>
                      <Button onClick={logOut} color="inherit">LogOut</Button>
                    </span> :
                    <Link className={NavItem} to="login"><Button color="inherit">Login</Button></Link>
                }
                
              </div>
             
            </Toolbar>
          </AppBar>
        </Box>}
      </div>
    
        <React.Fragment >
          <SwipeableDrawer
            open={state}
            onClose={() => setState(false)}
          >
            {list}
          </SwipeableDrawer>
        </React.Fragment>
    </>
  );
};

export default Navigation;

