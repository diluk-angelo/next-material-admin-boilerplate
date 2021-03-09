import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useForm, Form } from "../useForm";
import { FormControl } from "@material-ui/core";
import { Controls } from "../formcomponents/controls";
const initialFormValues = {
  id: 0,
  fullname: "test ",
  email: "",
  gender: "male",
  mobile: "",
  role: 0,
  password: "",
  created: new Date(),
};

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(2),
    padding: theme.spacing(5),
  },
}));

export default function Formu() {
  const classes = useStyles();
  const { formValues, setFormValues, handleInputChange } = useForm(
    initialFormValues
  );

  const roles = [
    { label: "Admin", value: 0 },
    { label: "Staff", value: 1 },
  ];

  return (
    <>
      <Paper className={classes.pageContent}>
        <Form>
          <Grid container>
            <Grid item xs={6}>
              <Controls.Input
                variant="outlined"
                label="Full Name"
                name="fullname"
                type="text"
                value={formValues.fullname}
                onChange={handleInputChange}
              />

              <Controls.Input
                variant="outlined"
                label="Email"
                name="email"
                type="text"
                value={formValues.email}
                onChange={handleInputChange}
              />

              <Controls.Input
                variant="outlined"
                label="Password"
                name="password"
                type="password"
                value={formValues.password}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.Select
                label="Role"
                name="role"
                value={formValues.role}
                onChange={handleInputChange}
                items={roles}
              />

              <Controls.Datepicker
                label="Created"
                name="created"
                value={formValues.created}
                onChange={handleInputChange}
              />

              <div>
                <Controls.Button onClick={() => {}} text="Create User" />

                <Controls.Button color="default" onClick={() => {}} text="Reset Form" />
              </div>
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </>
  );
}
