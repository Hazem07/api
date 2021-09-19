import './Navbar.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  title: {
    flexGrow: 1,
  },
}));

 function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static"style={{paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: 'auto',
        marginLeft: 'auto'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <LocalBarIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TeCocktailDB
          </Typography>
          <NavLink
              exact to="/"
              className="appLink"
              activeClassName="activeLink"
            >
              Home
            </NavLink>
          <NavLink
              to="/About"
              className="appLink"
              activeClassName="activeLink"
            >
              About Us
            </NavLink>
            
           
            <NavLink
              to="/Login"
              className="appLink"
              activeClassName="activeLink"
            >
              Login
            </NavLink>
        
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default ButtonAppBar ;