import React, { useEffect } from "react";
import { useDispatchAppbar } from "../../../components/globalContext";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import UserTable from '../../../components/users/Table';
import { useRouter } from 'next/router'
const useStyles = makeStyles((theme) => ({
    paper: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
      },
      searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      },
      searchInput: {
        fontSize: theme.typography.fontSize,
      },
      block: {
        display: 'block',
      },
      addUser: {
        marginRight: theme.spacing(1),
      },
      contentWrapper: {
        margin: '40px 16px',
      },
  }));

export default function Users() {
  const router = useRouter();
  const classes = useStyles();
  const dis = useDispatchAppbar();
  useEffect(() => {
    dis({
      type: "SET",
      payload: "User Management",
    });
  }, []);

  function add(){
    router.push('/admin/users/add');
  }
  return (
    <>
      <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              
            </Grid>
            <Grid item xs>
              
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={classes.addUser} onClick={add}>
                Add user
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          No users for this project yet
        </Typography>

    <UserTable></UserTable>

      </div>
    </Paper>
    </>
  );
}
