import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chuweb } from '../models/chuweb';

@Injectable({
  providedIn: 'root'
})
export class ChuService {

  static readonly URL_API_CHU ="https://api.chucknorris.io/jokes/random"
  static readonly URL_PROPIO="./assets/valor.json"

  constructor(private httClient: HttpClient) { }

  getChuckAleatorio():Observable<Chuweb>{
   // return this.httClient.get<Chuweb>(ChuService.URL_API_CHU)
   return this.httClient.get<Chuweb>(ChuService.URL_API_CHU)
  }
}
