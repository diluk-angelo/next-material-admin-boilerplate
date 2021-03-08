import React , {useContext, useEffect}from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import {useDispatchAppbar} from '../components/globalContext';
import Head from 'next/head';


export default function Index() {
  const dis = useDispatchAppbar();

  React.useEffect(() => {
    dis({
      type:"SET",
      payload:"Index"
    })
   
   }, [])
  
   

  return (
    <React.Fragment>
      
      <Head>
        <title>Home Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
      </React.Fragment>
  );
}
