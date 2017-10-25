import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  private dummyData;

  constructor(private _http: Http) { }

  ngOnInit() {
  }
  
  ngAfterViewInit():void{
    this._http.get('/posts')
        .map((response: Response) => <any>response.json())
        .subscribe((data) => {
          this.dummyData = data;
        })
  }

}
