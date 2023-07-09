import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css'],
})
export class EjercicioComponent implements OnInit {
  cadena: string
  par: boolean
  impar: boolean
  reves: string
  contadorLetras: number

  constructor() {
    this.cadena = ''
    this.par = false
    this.impar = false
    this.reves = ''
    this.contadorLetras = 0
  }

  ngOnInit(): void {}

  comprobarIntento(): void {
    this.reves = this.cadena.split('').reverse().join('')
    console.log('reverse ' + this.reves)
    this.contadorLetras = this.reves.length
    console.log(this.contadorLetras / 2)
    if (this.contadorLetras % 2 == 0) {
      console.log('par')
      this.par = true
      this.impar = false
    } else {
      console.log('impar')
      this.impar = true
      this.par = false
    }
  }
}
