import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infobox.css";

export default function Infobox({ info }) {
  return (
    <Card id="card" sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://openweathermap.org/img/wn/${info.icon}@2x.png`}
        alt="weather icon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3>{info.name}, {info.country}</h3>
        </Typography>
        <Typography className="typo" variant="body2" sx={{ color: "text.secondary" }}>
          <p>🌡 Temperature: {info.temp}&deg;C</p>
          <p>⬇ Min: {info.tempMin}&deg;C | ⬆ Max: {info.tempMax}&deg;C</p>
          <p>🥵 Feels Like: {info.feelslike}&deg;C</p>
          <p>💧 Humidity: {info.humidity}%</p>
          <p>⚡ Pressure: {info.pressure} hPa</p>
          <p>👀 Visibility: {info.visibility / 1000} km</p>
          <p>🌬 Wind: {info.windSpeed} m/s, {info.windDeg}&deg;</p>
          <p>☁ Weather: {info.condition} ({info.description})</p>
          <p>🌅 Sunrise: {info.sunrise}</p>
          <p>🌇 Sunset: {info.sunset}</p>
          <p>🕒 Timezone: UTC {info.timezone >= 0 ? "+" : ""}{info.timezone}</p>
        </Typography>
      </CardContent>
    </Card>
  );
}
