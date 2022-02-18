export type GetWeatherType = (city: string) => Promise<any>;
export type FilteredDataType = {
  weatherId: number;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
};
