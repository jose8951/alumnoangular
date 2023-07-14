import { Component, OnInit, ViewChild } from '@angular/core'
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer'

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css'],
})
export class AdivinaComponent implements OnInit {
  /**
   *
   * HACED UNA APP DONDE EL PROGRAMA
   * PIENSE UN NÚMERO DEL 1 AL 100
   *
   * EL USUARIO, TENDRÁ 5 INTENTOS PARA AVERIGÜAR el
   * NÚMERO PENSADO POR LA MÁQUINA
   *
   * POR CADA INTENTO, SI FALLA, LE DEBEMOS DAR UNA PISTA
   * Y DECIRLE SI EL NÚMERO INTRODUCIDO ES
   * MENOR O MAYOR QUE EL BUSCADO
   *
   * SI ACIERTA, PUES LE DAMOS LA ENHORABUENA
   * SI SUPERA LOS 5 INTENTOS, PUES LE DECIMOS
   * QUE HA PERDIDO Y LA SOLUCIÓN
   */

  titulo: string
  numusuario: number
  numadivina: number
  intentos: number
  finpartida: boolean

  @ViewChild('basicTimer') contador!: CdTimerComponent

  //inversion de contrucion
  constructor() {
    this.finpartida = false
    console.log('Estoy en el constructor')
    //this es el componente
    //interpolación
    this.titulo = 'Adivina un numero en 5 intentos'
    this.numusuario = 0
    this.numadivina = this.calcularNumAleaotorioDe1a100()
    console.log('Numero a adivinar ' + this.numadivina)
    console.log(`Numero a adivinar ${this.numadivina} por el usuario`)
    this.intentos = 0
  }

  ngOnInit(): void {
    console.log('estamos en onInit.')
  }

  calcularNumAleaotorioDe1a100(): number {
    let numgen: number = 0
    numgen = Math.floor(Math.random() * 100 + 1)
    return numgen
  }

  comprobarIntento() {
    // console.log('comprobar intento')
    //console.log(this.numerousuario)

    if (this.numusuario == this.numadivina) {
      window.alert('Has acertado!! Enhorabuena :) ')
      this.finpartida = true
    } else {
      if (this.numusuario < this.numadivina) {
        window.alert(
          'El número buscado es mayor que el introducido ' +
            this.numusuario +
            '.',
        )
      } else {
        window.alert(
          'El número buscado es menor que el introducido ' +
            this.numusuario +
            '.',
        )
      }
      this.intentos++
      if (this.intentos == 5) {
        this.finpartida = true
      }
    }

    if (this.finpartida) {
      this.contador.stop()
      let ti: TimeInterface = this.contador.get()
      //  console.log("Has tardado  " + ti.minutes + "" + ti.seconds)
      window.alert(
        ' Has perdido! te has quedado sin intentos. El número buscado era ' +
          this.numadivina +
          '.' +
          ' Has tardado  ' +
          ti.minutes +
          '' +
          ti.seconds,
      )
    }
  }

  reset(): void {
    window.location.reload()
  }
}
