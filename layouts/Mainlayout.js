import React from 'react';

import Appbar from '../components/appbar';
import CssBaseline from '@material-ui/core/CssBaseline';


import { makeStyles, useTheme } from '@material-ui/core/styles';
import Sidebar from '../components/sidebar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
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
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));


const Mainlayout = ({children}) => {

    
  const classes = useStyles();
  
  

    return (
        <div className={classes.root}>
        <CssBaseline />
  
        
  
         <Sidebar />
      
      <Appbar />
     
        <main className={classes.content}>
          <div className={classes.toolbar} />
         
          {children}
          
        </main>
        
      </div>
    );
}

export default Mainlayout;