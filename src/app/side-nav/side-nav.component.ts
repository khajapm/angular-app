import { Component, OnInit, Output, EventEmitter, AfterContentInit, ElementRef, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, AfterContentInit {

  @Output() private emitChartData: EventEmitter<any> = new EventEmitter();
  @ViewChild('chartOptions') private chartOptions: ElementRef;
  private chartType: String;

  constructor(private _http: Http) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.chartOptions.nativeElement.click();
    this.showViz('pie');
    this.chartType = 'pie';
  }

  showViz(chartType: string) {
    this.chartType = chartType;
    this._http.get('/pie')
      .map((response: Response) => <any>response.json())
      .subscribe((data) => {
        let actualData = {
          data: data,
          type: chartType
        }
        this.emitChartData.emit(actualData);
      });
  }

}
