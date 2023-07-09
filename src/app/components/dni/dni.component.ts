import { Component, OnInit } from '@angular/core'
import { Dni } from 'src/app/models/dni'

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css'],
})
export class DniComponent implements OnInit {
  //readonly pq es constante
  //static es un atributo de la clase
  //para cada etiqueta/instancia, no cambia
  static readonly SECUENCIA_LETRAS_DNI: string = 'TRWAGMYFPDXBNJZSQVHLCKE'

  dni: string
  letra: string
  titulo: string

  listaDnis: Array<Dni> //esta lista, va a almacenar todos los dnis que calculemos
  listaDnisExtranjeros: Array<Dni> //esta lista, va a almacenar todos los dnis que calculemos

  constructor() {
    this.dni = ''
    this.letra = ''
    this.titulo = 'CALCULE SU LETRA DE DNI'
    this.listaDnis = new Array<Dni>()
    this.listaDnisExtranjeros = new Array<Dni>()
  }

  //TODO: completar el ejercicio, para que funcione
  //e informe de la letra del dni introducido

  ngOnInit(): void {
    //hago el casting de Element (etiqueta genérica)  HtmlInputElement
    let inputSeleccionado: HTMLInputElement = <HTMLInputElement>(
      document.querySelector(' [name="prefijo"]:checked')
    )
    console.log(inputSeleccionado.value)
  }

  calcularLetra(): void {
    let dni: Dni = new Dni() //creamos dni nuevo

    let numdni: number = 0
    let inputSeleccionado: HTMLInputElement = <HTMLInputElement>(
      document.querySelector(' [name="prefijo"]:checked')
    )
    console.log(inputSeleccionado.value)
    if (inputSeleccionado.value != 'sin') {
      //estoy en el caso extranjero , recalculo el dni
      let dnistrin: string = inputSeleccionado.value + this.dni
      numdni = parseInt(dnistrin)
      dni.prefijo = inputSeleccionado.id
    } else {
      numdni = parseInt(this.dni)
    }

    console.log(`El número introducido es  ${this.dni}`)
    //Integer numero = java
    let resto: number = numdni % 23
    this.letra = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto)
    console.log('la letra es ' + this.letra)

    dni.letra = this.letra
    dni.numero = parseInt(this.dni)

    this.listaDnis.push(dni) //aqui guardamos todos
    //aqui tenemos guardados un array de solo extranjero
    this.listaDnisExtranjeros = this.obtenerDnisExtranjeros()

    this.mostrarListaDnis()
  }

  obtenerDnisExtranjeros(): Array<Dni> {
    let listaDnisEx: Array<Dni>
    listaDnisEx = this.listaDnis.filter((dni) => dni.prefijo != '')
    return listaDnisEx
  }

  mostrarListaDnis(): void {
    console.log('Mostrando lista DNIS')
    this.listaDnis.forEach((d) => {
      console.log(`Dni = ${d.prefijo}${d.numero}-${d.letra}`)
    })

    console.log('Mostrando lista DNIS Extranjeros')

    this.listaDnisExtranjeros.forEach((d) => {
      console.log(`Dni = ${d.prefijo}${d.numero}-${d.letra}`)
    })
  }

  //TODO añadir un boton para ordenar por letra
  //TODO haced un componente con el ejercicio imc peso y altura
  ordenarPorNumero(): void {
    //ordenar las dni por numero
    console.log('ordenar por numero')
    this.listaDnis.sort((a, b) => a.numero - b.numero)
  }

  //ordenar por letra string con el localeCompare
  ordenarPorLetra(): void {
    //ordenar el dni por letra
    this.listaDnis.sort((a, b) => a.letra.localeCompare(b.letra))
  }
}
