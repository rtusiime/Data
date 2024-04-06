import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const WeatherChart = ({ lat, lon }) => {
  const [weatherData, setWeatherData] = useState([]);

  const API_KEY = import.meta.env.VITE_API_KEY; // Ensure you have the API key in your environment variables

  useEffect(() => {
    // For the sake of demonstration, imagine fetchWeatherData() loops over a hardcoded series of dates.
    // You would replace this with dynamic logic based on your application's needs, such as the user's input.
    const dates = ['2023-06-01', '2023-06-02', '2023-06-03']; // Example dates
    const fetchWeatherData = async () => {
      const dailyData = await Promise.all(dates.map(async (date) => {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=${lat}&lon=${lon}&date=${date}&appid=${API_KEY}`);
        const data = await response.json();

        return {
          date,
          morning: data.temperature.morning,
          afternoon: data.temperature.afternoon,
          evening: data.temperature.evening,
          night: data.temperature.night,
        };
      }));

      setWeatherData(dailyData);
    };

    fetchWeatherData().catch(console.error);
  }, [lat, lon]);

  return (
    <div>
      {weatherData.length === 0 ? <p>Loading...</p> :
        <LineChart
          width={1000}
          height={300}
          data={weatherData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="morning" stroke="#8884d8" />
          <Line type="monotone" dataKey="afternoon" stroke="#82ca9d" />
          <Line type="monotone" dataKey="evening" stroke="#ffc658" />
          <Line type="monotone" dataKey="night" stroke="#ff7300" />
        </LineChart>
      }
    </div>
  );
};

export default WeatherChart;