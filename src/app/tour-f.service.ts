import { Injectable } from '@angular/core'
import { TourFStructure } from '../assets/data/tourFStructure'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TourFService {
  private url: string = 'http://localhost:3000/api/'
  constructor(private _http: HttpClient) {}
  getTourFsData(): Observable<TourFStructure[]> {
    return this._http.get<TourFStructure[]>(this.url + 'tourForeign')
  }
  getTourDataById(id: string): Observable<TourFStructure> {
    return this._http.get<TourFStructure>(this.url + 'tourForeign/' + id)
  }
}
