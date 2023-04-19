import { Injectable } from '@angular/core'
import { tripdetailStructure } from '../assets/data/tripdetail'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TripdetailService {
  private url: string = 'http://localhost:3000/api/'
  constructor(private _http: HttpClient) {}
  getTripDetail(): Observable<tripdetailStructure[]> {
    return this._http.get<tripdetailStructure[]>(this.url + 'tripdetail')
  }
  getTripDetailById(id:string): Observable<tripdetailStructure> {
    return this._http.get<tripdetailStructure>(this.url+'tripdetail/'+id);
  }
}
