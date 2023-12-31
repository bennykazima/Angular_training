import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class DataService{
    constructor(private http: HttpClient){}

    getData(): Observable<any> {
        return this.http.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps');
    }
}