import React from 'react';
import './WeatherDetail.css';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend,
  BarChart, Bar, ResponsiveContainer
} from 'recharts';

// This component is now designed to receive `forecastData` as a prop.
const WeatherChart = ({ forecastData }) => {
  if (!forecastData) {
    return <p>Loading...</p>;
  }

  const temperatureData = forecastData.map(period => ({
    name: period.name,
    Temperature: period.temperature
  }));

  const precipitationData = forecastData.map(period => ({
    name: period.name,
    "Precipitation Probability": period.probabilityOfPrecipitation.value || 0 // Handling null values
  }));

  return (
    <div>
      
      {/* Temperature Trend */}
      <ResponsiveContainer width="95%" height={300} className="graph">
        <LineChart data={temperatureData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="Temperature" stroke="#8884d8" />
          <CartesianGrid stroke="white" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>

      {/* Precipitation Probability */}
      <ResponsiveContainer width="95%" height={300} className="graph">
        <BarChart data={precipitationData}
          margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid stroke="white" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Precipitation Probability" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;