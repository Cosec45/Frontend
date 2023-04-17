import { Injectable } from '@angular/core';
import {TourDStructure} from '../assets/data/tourDStructure';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourDService {
  private url: string ='http://localhost:3000/api/'
  constructor(private _http: HttpClient) {}
  getAllTourData(): Observable<TourDStructure[]> {
    return this._http.get<TourDStructure[]>(this.url+'tourDomestic'); 
  }
  getTourDataById(id:string): Observable<TourDStructure> {
    return this._http.get<TourDStructure>(this.url+'tourDomestic/'+id);
  }

}
