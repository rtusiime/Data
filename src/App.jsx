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

  const apiKey = import.meta.env.VITE_API_KEY_OPEN;
  const geoApiBaseUrl = import.meta.env.VITE_GEO_API_BASE_URL;
  const weatherApiBaseUrl = import.meta.env.VITE_WEATHER_API_BASE_URL;

  useEffect(() => {
    const fetchWeatherData = async () => {
      const weatherDataPromises = usCities.map(async ({ name, state, country }) => {
        try {
          const geoUrl = `${geoApiBaseUrl}?q=${name},${state},${country}&limit=1&appid=${apiKey}`;
          const { data: geoData } = await axios.get(geoUrl);
          if (geoData.length === 0) return null;

          const { lat, lon } = geoData[0];
          const weatherUrl = `${weatherApiBaseUrl}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,current&appid=${apiKey}`;
          const { data: weatherData } = await axios.get(weatherUrl);
          return { city: name, weather: weatherData.daily };
        } catch (error) {
          console.error(`Error fetching weather for ${name}:`, error);
          return null;
        }
      });

      try {
        const results = await Promise.all(weatherDataPromises);
        setWeatherData(results.filter(Boolean)); // Filter out null results
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
      <div>
      <NavBar onSearch={handleSearchChange} />
      </div>
      <div>
        {isLoading ? <p>Loading weather data...</p> : 
          filteredWeatherData.map((data, index) => (
            <WeatherCard key={index} city={data.city} weather={data.weather[0]} />
          ))
        }
      </div>
    </div>
  );
};

export default App;