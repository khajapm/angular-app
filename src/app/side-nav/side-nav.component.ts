import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Output() private emitChartData : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showViz(chartType:string) {
    //emit chart data from back end, null should be replaced with actual data
    this.emitChartData.emit(chartType);
  }

}
