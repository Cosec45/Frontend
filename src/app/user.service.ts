import { Injectable } from '@angular/core';
import {UserStructure} from '../assets/data/userStructure';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ContactStructure}from '../assets/data/contact'
import {tripbookStructure} from '../assets/data/tripbook';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private url: string ='http://localhost:3000/api/'

  constructor(private _http: HttpClient) {}
  getUserData(): Observable<UserStructure[]> {
    return this._http.get<UserStructure[]>(this.url+'users'); 
  }
  createNewUser(contact:object):Observable<ContactStructure> {
    console.log(contact);
    const headers = { 'content-type': 'application/json'}

    return this._http.post<ContactStructure>(this.url+'contact',{body:contact}, { headers: headers});
    
  }
  createNewTripBook(tripbook:object):Observable<tripbookStructure> {
    console.log(tripbook);
    const headers = { 'tripbook-type': 'application/json'}

    return this._http.post<tripbookStructure>(this.url+'tripbook',{body:tripbook}, { headers: headers});
    
  }
}
