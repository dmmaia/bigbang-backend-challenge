interface ICoordinates {
  lat: number,
  lon: number
}

export interface IWeatherRequest {
  cityName: string,
  coordinates: ICoordinates,
  apiKey: string,
}

export interface ITimeWeatherProvider {
  requestWeather(weather: IWeatherRequest): Promise<void>;
}