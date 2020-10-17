import { ITimeWeatherProvider, IWeatherRequest } from '../ITimeWeatherProvider';
import request from 'request';

export class OpenWeatherProvider implements ITimeWeatherProvider {
  
  async requestWeather(weather: IWeatherRequest): Promise<void> {
    var response = request.get(`http://api.openweathermap.org/data/2.5/weather?q=${weather.cityName}&appid=${weather.apiKey}`);
    console.log(response);
  }
}