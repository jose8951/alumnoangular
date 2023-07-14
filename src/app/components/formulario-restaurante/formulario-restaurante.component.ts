import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Restaurante } from 'src/app/models/restaurante'
import { RestauranteService } from 'src/app/services/restaurante.service'

@Component({
  selector: 'app-formulario-restaurante',
  templateUrl: './formulario-restaurante.component.html',
  styleUrls: ['./formulario-restaurante.component.css'],
})
export class FormularioRestauranteComponent {
  restaurante: Restaurante
  barrios: Array<string>

  constructor(private restauranteService: RestauranteService, private servioRuta:Router) {
    this.restaurante = new Restaurante()
    this.barrios = [
      '------',
      'Centro',
      'Este',
      'Ciudad Jardín',
      'Bailén-Miraflores',
      'Palma-Palmilla',
      'Cruz de Humilladero',
      'Carretera de Cádiz',
      'Churriana',
      'Campanillas',
      'Puerto de la Torre',
      'Teatinos-Universidad',
    ]

    this.restaurante.nombre = 'El Cateto'
    this.restaurante.direccion = 'La fuente s/n'
    this.restaurante.barrio = 'Este'
    this.restaurante.web = 'http://www.elcateto.org'
    this.restaurante.fichaGoogle = 'http://www.google.elcateto.org'
    this.restaurante.latitud = 30
    this.restaurante.longuitud = 30
    this.restaurante.precio = 10
    this.restaurante.especialidad1 = 'Marisco'
    this.restaurante.especialidad2 = 'Pescado'
    this.restaurante.especialidad3 = 'Carne'
  }

  crearRestaurante() {
    console.log('enviar los datos')
    console.log(`Restaurante 
   ${this.restaurante.nombre}
   ${this.restaurante.direccion}
   ${this.restaurante.barrio}
   ${this.restaurante.web}
   ${this.restaurante.fichaGoogle}
   ${this.restaurante.latitud}
   ${this.restaurante.longuitud}
   ${this.restaurante.precio}
   ${this.restaurante.especialidad1}
   ${this.restaurante.especialidad2}
   ${this.restaurante.especialidad3}
  `)

    this.restauranteService.postRestaurante(this.restaurante).subscribe({
      complete: () => console.log(`com completa`),
      error: (errorRx) => {
        console.error(errorRx)
        alert(`Error al insertar el restaurante`)
      },
      next: (restauranteNuevo) => {
        alert(
          `Restaurante insertado correctamente con id ${restauranteNuevo.id}`,
        )
        //si todo ok redirijo el usuario al listado
        this.servioRuta.navigateByUrl("/restaurante")
      },
    })
  }
}
