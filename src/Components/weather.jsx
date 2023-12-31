/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import axios from "axios";
import { ClassNames } from "@emotion/react";
import { Container, Box, Typography, CircularProgress,  } from "@mui/material";
import { TextField } from "@mui/material";

function Weather() {

  const [weatherData,setWeatherData] = useState(null);
  const [city,setCity] = useState('');
  const apiKey = `9e1cc598ba727f4f1d13fe0507b64cb8`;

  useEffect(() => {
    if(city === '') return;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
      .then((response) => {
        setWeatherData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data', error)
      })
  },[city,apiKey] )
      
  const handleChange = (event) => {
    setCity(event.target.value);
  }  

  let sunriseTime;
  let sunsetTime;
  let visibility;

  if(weatherData){
    const sunriseTimestamp = weatherData.sys?.sunrise;
    const sunsetTimestamp = weatherData.sys?.sunset;

    const sunriseDate = new Date(sunriseTimestamp * 1000)
    const sunsetDate = new Date(sunsetTimestamp * 1000)

    sunriseTime = sunriseDate.toLocaleTimeString()
    sunsetTime = sunsetDate.toLocaleTimeString()

    const Visibility_in_m = weatherData.visibility;
    visibility = (Visibility_in_m / 1000).toFixed(2);

  }

    return (
      <Container
        className="main"
        maxWidth={false}
        style={{
          backgroundImage: `url("images/weather_bg2.jpg")`,
          backgroundRepeat: 'no-repeat',
          height: 'auto',
          backgroundSize: 'cover',
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          minHeight="100vh"
        >
          <TextField
            label="City Name"
            color="success"
            value={city}
            onChange={handleChange}
            focused
          />
          {weatherData && city != '' ? (
            <Box
              mb={7}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              marginY={'2vh'}
            >
              <Typography variant="h2" color={'black'}>
                Temperature: {weatherData.main?.temp} °C
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginY={'2vh'}
              >
                <Typography variant="h5" color={'black'} paddingX={'4vh'}>
                  Humidity: {weatherData.main?.humidity}%
                </Typography>
                <Typography variant="h5" color={'black'} paddingX={'4vh'}>
                  Visibility: {visibility} km
                </Typography>
              </Box>
              <Typography variant="h4" color={'black'} marginY={'2vh'}>
                Feel&apos;s Like: {weatherData.main?.feels_like}
              </Typography>
              <Typography variant="h4" color={'black'} marginY={'2vh'}>
                Sky condition: {weatherData.weather[0]?.description}
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginY={'2vh'}
              >
                <Typography variant="h5" color={'black'} paddingX={'4vh'}>
                  Sunrise: {sunriseTime}
                </Typography>
                <Typography variant="h5" color={'black'} paddingX={'4vh'}>
                  Sunset: {sunsetTime}
                </Typography>
              </Box>
            </Box>
          ) : (
            <Typography variant="h3" color={'grey'}>
              Enter the city name to see the details
            </Typography>
          )}
        </Box>
      </Container>
    )
}

export default Weather;