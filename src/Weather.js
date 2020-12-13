import React from "react";
import "./Weather.css";

export default function Weather() {  
  let weatherData = {
    city: "Bucharest",
    country: "RO",
    date: "Sunday | Dec 13 | 18:08",
    description: "Cloudy",
    temperature: 2,
    humidity: 74,
    wind: 2
  };

  return (
    <div className="Weather">
      <div className="weather-app night">
        <form>
          <div className="input-group mb-3 change-search">
            <input
              type="search"
              placeholder="Enter a city …"
              className="form-control change"
              autoComplete="off"
            />
            <div className="input-group-append">
              <button type="submit" className="btn form-button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>
            {weatherData.city}, {weatherData.country}
          </h1>
          <h6>{weatherData.date}</h6>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <div>
                <span>{weatherData.description} </span>
                <i className="fas fa-cloud"></i>
              </div>
              <strong className="temperature-below">
                {weatherData.temperature}
              </strong>
              <span className="unit">
                <a href="#" className="active">
                  °C
                </a>{" "}
                | <a href="#">°F</a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <div className="weather-details">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <small>
        This project is coded by Loredana Mihai and is
        <a
          href="https://github.com/loredanamihai/weather-react"
          target="_blank"
        >
          {" "}
          open-sourced on GitHub
        </a>
      </small>
    </div>
  );
}