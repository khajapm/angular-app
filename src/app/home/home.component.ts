import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private pieData;

  constructor() { }

  ngOnInit() {
  }

  receivedChartData(chartData) {
    if (chartData) {
       this.pieData = chartData;
    }else {
      this.pieData = null;
    }
  }

}
