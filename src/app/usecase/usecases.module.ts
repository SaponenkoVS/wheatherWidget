import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {GeocodingUsecase} from "./geocoding.usecase";
import {GetWeatherByLocationUsecase} from "./get-weather-by-location.usecase";

@NgModule({
  imports:[HttpClientModule],
  providers:[
    GeocodingUsecase,
    GetWeatherByLocationUsecase
  ]
})
export class UsecasesModule {}
