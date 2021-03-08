import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    
    color: theme.palette.text.secondary,
    
  },
}));

export default function Form() {
    const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <Grid container >
          <Grid item xs={8} > 
          <form className={classes.root} noValidate autoComplete="off">
          <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
          <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
          <TextField required id="standard-required" label="Required" defaultValue="Hello World" />

              </form>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
