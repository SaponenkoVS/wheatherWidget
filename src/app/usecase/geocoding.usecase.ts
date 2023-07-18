import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Location} from "../model/Location.model";

@Injectable()
export class GeocodingUsecase {
  private readonly API_KEY = "f7bdf01256bbd28b205538150ddd8f11"

  constructor(private httpClient: HttpClient) {
  }

  execute(address: string): Observable<Location[]> {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${address}&appid=${this.API_KEY}`
    return this.httpClient.get(url) as Observable<Location[]>
  }
}
