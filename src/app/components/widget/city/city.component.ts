import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {GeocodingUsecase} from "../../../usecase/geocoding.usecase";
import {GetWeatherByLocationUsecase} from "../../../usecase/get-weather-by-location.usecase";
import {Location} from "../../../model/Location.model";
import {WeatherDataModel} from "../../../model/WeatherData.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnChanges, OnDestroy {
  constructor(private geocodingUsecase: GeocodingUsecase, private getWeatherByLocationUsecase: GetWeatherByLocationUsecase) {
  }

  @Input() city: string = ''
  private subscription: Subscription = new Subscription();
  weather: WeatherDataModel = {} as WeatherDataModel
  locationData: Location = {} as Location
  weatherId: number = 0

  ngOnChanges(changes: SimpleChanges) {
    if (changes['city']["currentValue"]) {
      this.geocodingUsecase.execute(this.city).subscribe((location: Location[]) => {
        this.locationData = location[0];
        this.fetchWeatherData(location[0])
      })
    }
  }

  toWeatherDetails() {
    window.open(`https://openweathermap.org/city/${this.weatherId}`, "_blank")
  }

  fetchWeatherData(location: Location) {
    this.weather = {} as WeatherDataModel
    this.getWeatherByLocationUsecase.execute(location.lat, location.lon).subscribe((res: WeatherDataModel) => {
      this.weatherId = res.id
      this.weather = res
    }, (error) => {
      console.error('Error fetching weather data:', error);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  convertTemperatureToCelsius(temperature: number) {
    return (temperature - 273.15).toFixed(1)
  }
}
