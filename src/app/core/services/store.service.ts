import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { StoreData } from '../models/store-data.model';

@Injectable()
export class StoreService {

    constructor(private _http: Http) {
    }

    getForumDetails(): Observable<StoreData> {
        return this._http.get('http://localhost:4200/assets/data.json')
            .map((response: Response) => <StoreData>response.json());
    }
}
