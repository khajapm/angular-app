import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Report } from '../comment/models/report.model';

@Injectable()
export class ForumService{

    constructor(private _http: Http){
    }

    getForumDetails(): Observable<Report> {
        return this._http.get('http://localhost:4200/assets/data.json')
            .map((response: Response) => <Report>response.json());
    }
}