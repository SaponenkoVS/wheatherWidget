import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  private cities: string[] = ["Lodz", "Warszawa", "Berlin", "New York", "Londyn"]
  private numberOfCitiesToReturn = 3;
  randomCities: string[] = [];

  ngOnInit() {
    this.randomCities = this.getRandomCities()
    setInterval(() => {
      this.randomCities = this.getRandomCities()
    }, 60000)
  }

  getRandomCities() {
    const shuffledCities = this.cities.slice().sort(() => Math.random() - 0.5);
    return shuffledCities.slice(0, this.numberOfCitiesToReturn);
  }
}
