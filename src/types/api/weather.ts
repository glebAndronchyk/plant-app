export interface WeatherResponse {
  current: CurrentWeatherSignature;

  // This interface can be extended with fields accordingly to https://www.weatherapi.com/api-explorer.aspx#current
}

export interface CurrentWeatherSignature {
  temp_c: number;
  cloud: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
}
