import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API Key

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (err) {
      setError("Unable to fetch weather. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px",backgroundColor:"paleturquoise" }}>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "10px", marginRight: "10px"}}
      />
      <button onClick={fetchWeather} style={{ padding: "10px" ,backgroundColor:"blue"}}>
        Get Weather
      </button>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && !loading && !error && (
        <div style={{ marginTop: "20px" }}>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
