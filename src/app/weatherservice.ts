// Multiple search city weather 

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from './models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class Weatherservice {

  private readonly BASE_URL =
    'https://api.openweathermap.org/data/2.5/forecast';

  private readonly API_KEY =
    '40e69152f8809a79fd6f3b91afd7a176';

  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {

    const params = new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('appid', this.API_KEY);

    return this.http.get<WeatherData>(this.BASE_URL, { params });
  }
}


// ONE city use COde
// import { WeatherData } from './models/weather.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class Weatherservice {

//   constructor(private http: HttpClient) {}

//   getWeatherData(cityName: string): Observable<WeatherData> {
//     const params = new HttpParams()
//       .set('q', cityName)
//       .set('units', 'metric')
//       .set('appid', environment.apiKey);

//     return this.http.get<WeatherData>(
//       environment.weatherApiBaseUrl,
//       { params }
//     );
//   }
// }
