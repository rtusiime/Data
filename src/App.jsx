import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import WeatherCard from './components/WeatherCard';
import usCities from './utils/usCities';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // const apiKey = import.meta.env.VITE_API_KEY_OPEN;
  // const geoApiBaseUrl = import.meta.env.VITE_GEO_API_BASE_URL;
  // const weatherApiBaseUrl = import.meta.env.VITE_WEATHER_API_BASE_URL;

  // const weatherbitApiKey = import.meta.env.VITE_API_KEY_WEATHERBIT;
  // const weatherbitApiBaseUrl = import.meta.env.VITE_WEATHERBIT_API_BASE_URL;

  const govBaseUrl = import.meta.env.VITE_GOV_API_BASE_URL;

  // useEffect(() => {
  // const fetchWeatherData = async () => {
  //   const weatherDataPromises = usCities.map(async ({ name, state, country }) => {
  //     try {
  //       const geoUrl = `${geoApiBaseUrl}?q=${name},${state},${country}&limit=1&appid=${apiKey}`;
  //       const { data: geoData } = await axios.get(geoUrl);
  //       if (geoData.length === 0) return null;

  //       const { lat, lon } = geoData[0];
  //       const weatherUrl = `${weatherApiBaseUrl}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,current&appid=${apiKey}`;
  //       const { data: weatherData } = await axios.get(weatherUrl);
  //       // console.log("weatherData...", weatherData);
  //       return { city: name, weather: weatherData.daily, lat: lat, lon: lon};
  //     } catch (error) {
  //       console.error(`Error fetching weather for ${name}:`, error);
  //       return null;
  //     }
  //     try {
  //       const weatherUrl = `${weatherbitApiBaseUrl}?city=${name}&country=${country}&key=${weatherbitApiKey}`;
  //       console.log("weatherUrl...", weatherUrl);
  //       const { data: weatherData } = await axios.get(weatherUrl);
  //       console.log("weatherData...", weatherData[0]);
  //       return { city: weatherData[0].city_name, weather: weatherData[0]};
  //     } catch (error) {
  //       console.error(`Error fetching weather for ${name}:`, error);
  //       return null;
  //     }
  //   });

  //   try {
  //     // console.log("WeatherDataPromises...", weatherDataPromises);
  //     const results = await Promise.all(weatherDataPromises);
  //     setWeatherData(results.filter(Boolean)); // Filter out null results
  //   } catch (error) {
  //     console.error("Error collecting weather data:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  // fetchWeatherData();
  // }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const weatherDataPromises = usCities.map(async (city) => {
        try {
          const url = `${govBaseUrl}${city.lat},${city.lon}`;
          const { data } = await axios.get(url);
          if (!data.properties.forecast) return null;
  
          const forecastResponse = await axios.get(data.properties.forecast);
          const forecastData = forecastResponse.data;

          // console.log("forecastData...", forecastData);
  
          return {
            city: city.name,
            state: city.state,
            forecast: forecastData.properties.periods, // This line remains unchanged
            // Let's omit lat, lon here since they were not used in WeatherCard
            // lat: city.lat,
            // lon: city.lon,
          };
        } catch (error) {
          console.error(`Error fetching weather for ${city.name}:`, error);
          return null;
        }
      });
  
      try {
        const results = await Promise.all(weatherDataPromises);
        setWeatherData(results.filter(Boolean));
      } catch (error) {
        console.error("Error collecting weather data:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchWeatherData();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredWeatherData = searchTerm
    ? weatherData.filter(data => data.city.toLowerCase().includes(searchTerm.toLowerCase()))
    : weatherData;

  return (
    <div className="App">
      <div className="dashboard">
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Search by city"
          onChange={e => handleSearchChange(e)}
        />
        {isLoading ? <p>Loading weather data...</p> :
          filteredWeatherData.map((data, index) => (
            <WeatherCard key={index} city={data.city} state={data.state} forecast={data.forecast} index={index} />
          ))
        }
      </div>
    </div>
  );
};

export default App;