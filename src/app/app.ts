import { CommonModule, DecimalPipe } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Weatherservice } from './weatherservice';
import { WeatherData } from './models/weather.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DecimalPipe,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  constructor(private weatherService: Weatherservice){

  }

  cityName:string='pune';
  weatherData?: WeatherData;


  ngOnInit(): void {
     this.getWeatherData(this.cityName);
     this.cityName='';
    // this.weatherService.getWeatherData('wellington')
    // .subscribe({
    //   next: (responce) => {

    //     this.weatherData=responce;
    //     console.log(responce);


    //   }
    // });
    
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
       
  }

  private getWeatherData(cityName:string) {
     this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (responce) => {

        this.weatherData=responce;
        console.log(responce);


      }
    });
    
  }
 
}
