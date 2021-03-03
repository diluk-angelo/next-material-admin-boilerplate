import React from 'react';
import Link from '../src/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    
  }));


export default function Appbar({title}) {

    const classes = useStyles();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

  return (
    <AppBar position="fixed" className={classes.appBar}>
       
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
  );
}
