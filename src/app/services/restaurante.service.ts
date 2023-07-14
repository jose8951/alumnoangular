import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Restaurante } from '../models/restaurante'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class RestauranteService {
  static readonly URL_GET_RESTAURANTES: string =
    'http://localhost:8081/restaurante'

  //lo tengo que expecificar si no el servidor lo rellaza
  cabeceras: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
  })

  constructor(private http: HttpClient) {}

  //es un proceso que contrala la sincronizacion Observable
  getListaRestaurantes(): Observable<Array<Restaurante>> {
    return this.http.get<Array<Restaurante>>(
      RestauranteService.URL_GET_RESTAURANTES,
    )
  }

  postRestaurante(restaurante: Restaurante): Observable<Restaurante> {
    return this.http.post<Restaurante>(
      RestauranteService.URL_GET_RESTAURANTES,
      restaurante,
      { headers: this.cabeceras },
    )
  }


  //TODO falta completar
  deleteRestaurante(restaurante:Restaurante):Observable<Restaurante>{
    return this.http.delete<Restaurante>(
      RestauranteService.URL_GET_RESTAURANTES
    )
  
  
  }


  //TODO falta completar
  updateRestaurante(restaurante: Restaurante):Observable<Restaurante> {
    return this.http.put<Restaurante>(
      RestauranteService.URL_GET_RESTAURANTES, restaurante
    )
  }

 
}
