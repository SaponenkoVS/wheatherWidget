import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WeatherDataModel} from "../model/WeatherData.model";

@Injectable()
export class GetWeatherByLocationUsecase {
  private readonly API_KEY = "f7bdf01256bbd28b205538150ddd8f11"

  constructor(private httpClient: HttpClient) {
  }

  execute(lat: number, lon: number): Observable<WeatherDataModel> {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.API_KEY}`
    return this.httpClient.get(url) as Observable<WeatherDataModel>
  }
}
