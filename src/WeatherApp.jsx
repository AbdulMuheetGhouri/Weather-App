import SearchBox from "./SearchBox";
import Infobox from "./Infobox";
import { useState } from "react";

export default function WeatherApp() {
  const [weather, setweather] = useState({
    name: "Hyderabad",
    country: "PK",
    temp: 32,
    tempMin: 30,
    tempMax: 35,
    humidity: 53,
    feelslike: 33,
    pressure: 1010,
    visibility: 6000,
    windSpeed: 3,
    windDeg: 120,
    description: "clear sky",
    condition: "Clear",
    icon: "01d",
    sunrise: "6:00 AM",
    sunset: "7:00 PM",
    timezone: 5,
  });

  let updateweather = (result) => {
    setweather(result);
  };

  return (
    <div>
      <h1>🌍 Weather App</h1>
      <SearchBox updateweather={updateweather} />
      <Infobox info={weather} />
    </div>
  );
}
