/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Container, Grid, ListItem, ListItemButton ,Typography, colors, List, ListItemText, autocompleteClasses, ListItemAvatar } from '@mui/material';
import { Link } from 'react-router-dom';
import '../Styles/web.css';

const Home = () => {
    // function googleTranslateElementInit() {
    //     new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    // }
    // <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    // const text1 = "//translate.google.com/translate_a/element.js?cb=";
    return (
      <>
        {/* <Navbar /> */}
        <Grid
          className="main"
          container
          spacing={4}
          justifyContent={'center'}
          alignItems={'center'}
          alignContent={'center'}
        >
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Container className="mainContent">
              <Box
                className="content"
                display="flex"
                justifyContent="space-evenly"
                alignItems="flex-start"
                flexDirection="column"
                minHeight="70vh"
              >
                <Typography variant="h1" marginTop={13}>
                  WELCOME YOU !! <br />
                  <Typography variant="">GET CONNECTED</Typography>
                </Typography>
                <Typography>
                  <q>விதைப்பவனே விலையை தகுதியிடுபவன்</q>
                  <br />
                  <q>The one who seeds will determine the price</q>
                </Typography>
              </Box>
              <Box paddingBottom={2} marginTop={2}>
                <Typography
                  variant="subtitle1"
                  style={{ fontSize: 18, color: 'white' }}
                  gutterBottom
                >
                  This web act as a bridge for both farmers and consumers.
                  <br />
                  We sure that this app must be beneficial one.
                  <br />
                  All other details were in about page.
                </Typography>
                <Link to="/signup">
                  <button
                    className="cn"
                    style={{ width: '160px', height: '40px' }}
                  >
                    JOIN US
                  </button>
                </Link>
                <Link to="/signin">
                  <button
                    className="cna"
                    style={{ width: '160px', height: '40px' }}
                  >
                    LOGIN
                  </button>
                </Link>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={3}>
            <Container
              className="feature"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '10px',
                py: 1,
                px: 2,
              }}
            >
              <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="h4"
                  style={{ fontSize: 30, color: 'white' }}
                  gutterBottom
                >
                  Features
                </Typography>

                <List style={{ display: 'flex', flexDirection: 'column' }}>
                  <ListItem disablePadding>
                    <Link to="/weather">
                      <ListItemButton
                        style={{
                          textDecoration: 'none',
                          color: 'white',
                          '&:hover': {
                            color: 'black',
                          },
                        }}
                      >
                        <ListItemText primary="Know Your Weather" />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link
                      to="/services"
                      style={{
                        textDecoration: 'none',
                        color: 'white',
                        '&:hover': {
                          color: '#cccccc',
                        },
                      }}
                    >
                      <ListItemButton>
                        <ListItemText primary="Loans and Subsidies" />
                      </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      style={{
                        color: 'white',
                        '&:hover': {
                          color: '#cccccc',
                        },
                      }}
                    >
                      <ListItemText primary="Price Calculator" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </>
    )
}

export default Home;