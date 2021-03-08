import React , {useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Mainlayout from '../layouts/Mainlayout';
import '../styles/mystyles.css';
import {AppbarProvider} from '../components/globalContext'
//context 

export default function MyApp(props) {

 

  const { Component, pageProps } = props;
  const initCtxData = {
    appBarTitle:"BoilerPlate"
  }

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <AppbarProvider>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
       
        <Mainlayout>
         
          
              <Component {...pageProps} />
           
          
          
        
        </Mainlayout>
       
      </ThemeProvider>
      </AppbarProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};