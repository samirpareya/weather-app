import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/icons/search.png'
import wind_icon from '../Assets/icons/wind.png'
import humidity_icon from '../Assets/icons/humidity.png'

import sun_icon from '../Assets/icons/sun.png'
import moon_icon from '../Assets/icons/moon.png'

import cloud_cloud_icon from '../Assets/icons/cloud-cloud.png'
import cloud_rain_icon from '../Assets/icons/cloud-rain.png'
import cloud_storm_rain_icon from '../Assets/icons/cloud-storm-rain.png'
import cloud_icon from '../Assets/icons/cloud.png'

import moon_cloud_rain_icon from '../Assets/icons/moon-cloud-rain.png'
import sun_cloud_rain_icon from '../Assets/icons/sun-cloud-rain.png'

import moon_cloud_icon from '../Assets/icons/moon-cloud.png'
import sun_cloud_icon from '../Assets/icons/sun-cloud.png'

import foog_icon from '../Assets/icons/foog.png'
import snow_icon from '../Assets/icons/snow.png'

export const WeatherApp = () => {

    // OpenWeather - API KEY
    const api_key = "9909e065e3289a983850bdb55a1823e8";

    const [wicon, setWicon] = useState(sun_icon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");

        const input_location = element[0].value

        if (input_location === "") {
            return 0;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input_location}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();

        let humidity = document.getElementsByClassName("humidity-percent");
        let wind = document.getElementsByClassName("wind-speed");
        let temprature = document.getElementsByClassName("weather-temp");
        let location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = Math.floor(data.main.humidity) + " %";
        wind[0].innerHTML = Math.floor(data.wind.speed) + " km/hr";
        temprature[0].innerHTML = Math.floor(data.main.temp) + " °C";
        location[0].innerHTML = data.name

        let weather_icon_code = data.weather[0].icon

        if (weather_icon_code === "01d") {
            setWicon(sun_icon)
        }
        else if (weather_icon_code === "01n") {
            setWicon(moon_icon)
        }
        else if (weather_icon_code === "02d") {
            setWicon(sun_cloud_icon)
        }
        else if (weather_icon_code === "02n") {
            setWicon(moon_cloud_icon)
        }
        else if (weather_icon_code === "03d" || weather_icon_code === "03n") {
            setWicon(cloud_icon)
        }
        else if (weather_icon_code === "04d" || weather_icon_code === "04n") {
            setWicon(cloud_cloud_icon)
        }
        else if (weather_icon_code === "09d" || weather_icon_code === "09n") {
            setWicon(cloud_rain_icon)
        }
        else if (weather_icon_code === "10d") {
            setWicon(sun_cloud_rain_icon)
        }
        else if (weather_icon_code === "10n") {
            setWicon(moon_cloud_rain_icon)
        }
        else if (weather_icon_code === "11d" || weather_icon_code === "11n") {
            setWicon(cloud_storm_rain_icon)
        }
        else if (weather_icon_code === "13d" || weather_icon_code === "13n") {
            setWicon(snow_icon)
        }
        else if (weather_icon_code === "50d" || weather_icon_code === "50n") {
            setWicon(foog_icon)
        }

    }

    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search' />
                <div className="search-icon" onClick={() => { search() }}>
                    <img src={search_icon} alt="" />
                </div>
            </div>

            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>

            <div className="weather-temp">24 °C</div>
            <div className="weather-location">London</div>

            <div className="data-container">

                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">64 %</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-speed">18 km/hr</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
