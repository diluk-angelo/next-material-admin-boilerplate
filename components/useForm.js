import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";

export  function useForm(initValue) {

    const [formValues, setFormValues] = useState(initValue);

    const handleInputChange = e => {
    
        const {name,value} = e.target;
        
       
        setFormValues({
          ...formValues,
          [name]:value
        })
    
        
      }

    return {
        formValues,
        setFormValues,
        handleInputChange
    };

    
}
const useStyles = makeStyles((theme) => ({
    root:{
      '& .MuiFormControl-root':{
        width:'90%',
        margin:theme.spacing(1)
      }
    }, 
    pageContent: {
      margin:theme.spacing(2),
      padding:theme.spacing(5)
    }
  }));

export function Form(props){
    const classes = useStyles();
    return (
        <form className={classes.root}>
            {props.children}
        </form>
    )
}