export interface WeatherData {
  cod: string
  message: number
  cnt: number
  // list: List[]
  // city: City
}

export interface List {
  dt: number
  summery: string
  main: Main
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility_distance: number
  visibility_unit: string
  probability_of_precipitation: number
  probability_of_precipitation_unit: string
  rain: Rain
  snow: Snow
  sys: Sys
  dt_txt: string
}

export interface Main {
  temprature: number
  temprature_feels_like: number
  temprature_min: number
  temprature_max: number
  temprature_unit: string
  pressure: number
  sea_level_pressure: number
  ground_level_pressure: number
  pressure_unit: string
  humidity: number
  humidity_unit: string
  temp_kf: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Clouds {
  cloudiness: number
  unit: string
}

export interface Wind {
  speed: number
  degrees: number
  direction: string
  gust_speed: number
  speed_unit: string
}

export interface Rain {
  amount: number
  unit: string
}

export interface Snow {
  amount: number
  unit: string
}

export interface Sys {
  part_of_day: string
}

export interface City {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunrise_txt: string
  sunset: number
  sunset_txt: string
}

export interface Coord {
  lat: number
  lon: number
}

export interface WeatherData {
  city: {
    name: string;
  };
  list: {
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
  }[];
}

