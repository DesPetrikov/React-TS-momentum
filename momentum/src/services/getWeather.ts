import { GetWeatherType, FilteredDataType } from '.';

const getWeather: GetWeatherType = async (city: string) => {
  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=44a379419b0afbf98c4ebbc40bf82cef&units=metric`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Could not fetch ${url} received status ${response.status}`
    );
  }
  const data = await response.json();

  const filteredData: FilteredDataType = {
    weatherId: data.weather[0].id,
    temperature: Math.round(data.main.temp),
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: Math.round(data.wind.speed),
  };
  return filteredData;
};

export { getWeather };
