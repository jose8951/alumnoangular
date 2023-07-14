import { Component, OnInit } from '@angular/core'
import { Restaurante } from 'src/app/models/restaurante'
import { RestauranteService } from 'src/app/services/restaurante.service'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
})
export class RestaurantesComponent implements OnInit {
  lista_restaurantes!: Array<Restaurante>
  titulo: string

  constructor(private restaurantesService: RestauranteService) {
    this.titulo = 'Restaurantes de Málaga'
  }

  ngOnInit(): void {
    this.restaurantesService.getListaRestaurantes().subscribe({
      complete: () => console.log('comunicacion completada'),
      error: (errorRx) => {
        console.log(errorRx)
      },
      next: (listaRestaurantesRx) => {
        console.log('lista restaurante ok')
        listaRestaurantesRx.forEach((rest) => {
          console.log(`ID= ${rest.id} nombe = ${rest.nombre}`)
        })

        this.lista_restaurantes = listaRestaurantesRx
      },
    })
  }

  //TODO falta completar
  borrarRegistro(id: number) {
    console.log('valor de id ' + id)
  }

  //TODO falta completar
  updateRegistro(id: number) {
    console.log('valor de id ' + id)
  }
}
