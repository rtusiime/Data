import React from 'react';
import WeatherChart from './WeatherChart';
import { useLocation, useParams } from "react-router-dom";
import './WeatherDetail.css';

// Assuming `forecastData` is directly passed as a prop to this component.
const WeatherDetail = () => {
    const location = useLocation();
    const { city } = useParams();
    // console.log("location in WeatherDetail: ", location);
    const forecastData = location.state;
    console.log("forecastData in WeatherDetail: ", forecastData);
    // If no data is available, display a loading message or similar.
    if (!forecastData) {
        return <p>Loading weather details...</p>;
    }

    // Extracting some specific details for demonstration purposes
    const { temperature: temp, windSpeed: wind, relativeHumidity: humidity, detailedForecast: details } = forecastData[0];

    return (
        <div className="weather-detail">
            <div className='summary'>
                <div className="city">
                    <h3>{city}</h3>
                </div>
                <div className='temperature'>
                    <h3>{temp} °</h3>
                </div>
                <div className='wind'>
                    <h3>{wind}</h3>
                </div>
                <div className='humidity'>
                <h3>{humidity.value}%</h3>
                </div>
            </div>
            <div className='details'>
                <p>{details}</p>
            </div>
            <WeatherChart forecastData={forecastData} />
        </div>
    );
};

export default WeatherDetail;