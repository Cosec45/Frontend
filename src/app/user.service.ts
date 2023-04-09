import { Injectable } from '@angular/core';
import {UserStructure} from '../assets/data/userStructure';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private url: string ='http://localhost:3000/api/'

  constructor(private _http: HttpClient) {}
  getCatsData(): Observable<UserStructure[]> {
    return this._http.get<UserStructure[]>(this.url+'users'); 
  }
}
