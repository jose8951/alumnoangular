import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerroWeb } from '../models/perro-web';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerroService {

  //desde aqui vamosa interacturar con el servidor
  static readonly URL_API_PERROS= "https://dog.ceo/api/breeds/image/random"


//es lo mismo que @Autowired
  constructor(private httpClient: HttpClient) { 
    
  }


  //el metodo me devuelve un PerroWeb, en un futuro, dentro de un rato
  getPerroAleatorio():Observable<PerroWeb>{
    //entre <comillas> inicio el tipo de dato recibido el cuerpo del mensaje json
   return this.httpClient.get<PerroWeb>(PerroService.URL_API_PERROS);
  }
}
