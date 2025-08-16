import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateweather }) {
  let [value, setvalue] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather`;
  const key = "53beb39a99c61230e0428c7d4308e168";

  const handlingInput = (e) => {
    setvalue(e.target.value);
  };

  const convertTime = (timestamp, timezone) => {
  // timestamp is in seconds, timezone is also in seconds
  const date = new Date((timestamp + timezone) * 1000);

  // Hours and minutes in UTC
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();

  // Format minutes
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // AM/PM format
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // convert to 12-hour format

  return `${hours}:${minutes} ${ampm}`;
};


  const getweather = async (city) => {
    let response = await fetch(
      `${url}?q=${city}&appid=${key}&units=metric&lang=en`
    );
    let data = await response.json();
console.log(data);
    // making a new object.
    let weather = {
      name: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      feelslike: data.main.feels_like,
      pressure: data.main.pressure,
      visibility: data.visibility,
      windSpeed: data.wind.speed,
      windDeg: data.wind.deg,
      description: data.weather[0].description,
      condition: data.weather[0].main,
      icon: data.weather[0].icon,
      sunrise: convertTime(data.sys.sunrise, data.timezone),
      sunset: convertTime(data.sys.sunset, data.timezone),
      timezone: data.timezone / 3600, // convert to hours
    };

    console.log(weather);
    return weather;
  };

  const submit = async (e) => {
    e.preventDefault();
    setvalue("");
    let info = await getweather(value);
    updateweather(info);
  };

  return (
    <form id="box" onSubmit={submit}>
      <TextField
        label="City"
        variant="standard"
        value={value}
        onChange={handlingInput}
      />

      <Button variant="contained" size="medium" type="submit">
        Search
      </Button>
    </form>
  );
}
