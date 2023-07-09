import { Component, OnInit } from '@angular/core'
import { Imc } from 'src/app/models/imc'

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css'],
})
export class ImcComponent implements OnInit {
  titulo: string = 'CALCULO DE IMC.'
  valorPeso: number
  valorAltura: number
  comoEsta: string
  listaImc: Array<Imc> //esta linea almacena los imc

  constructor() {
    this.valorAltura = 0
    this.valorPeso = 0
    this.comoEsta = ''
    this.listaImc = new Array<Imc>()
  }

  ngOnInit(): void {
    console.log('valor peso ' + this.valorPeso)
  }

  /**
   * Por debajo de 18.5	Bajo peso
   * 18.5 – 24.9	Normal
   * 25.0 – 29.9	Sobrepeso
   * 30.0 o más	Obesidad
   */
  calcularImc(): void {
    let imc: Imc = new Imc() // se crea un nuevo imc

    //IMC = Peso (kg) / altura (m)2
    let totalImc = this.valorPeso / Math.pow(this.valorAltura, 2)
    console.log(totalImc)
    if (totalImc <= 18.5) {
      this.comoEsta = 'Bajo peso'
    } else if (totalImc > 18.5 && totalImc <= 24.9) {
      this.comoEsta = 'Normal'
    } else if (totalImc >= 25 && totalImc <= 29.9) {
      this.comoEsta = 'Sobrepeso'
    } else {
      this.comoEsta = 'Obesidad'
    }

    let aux = totalImc.toFixed(2) //devuelve un string
    let formatoTotalImc = parseFloat(aux) //lo pasamosa number

    imc.altura = this.valorAltura
    imc.peso = this.valorPeso
    imc.resultadoImc = formatoTotalImc
    imc.comoEstas = this.comoEsta

    this.listaImc.push(imc)
    console.log(
      'el resultado es ' + this.comoEsta + ' total ' + formatoTotalImc,
    )
    this.mostrarListaImc()
  }

  mostrarListaImc(): void {
    //progamacion funcional
    this.listaImc.forEach((ele) => {
      console.log(
        `Imc = ${ele.altura} ${ele.peso} ${ele.resultadoImc} ${ele.comoEstas}`,
      )
    })
  }

  //ordenar por peso
  ordenarPorPeso(): void {
    this.listaImc.sort((a, b) => a.peso - b.peso)
  }

  //ordenar por imc
  ordenarPorImc(): void {
    //ordenar por number
    this.listaImc.sort((a, b) => a.resultadoImc - b.resultadoImc)
  }
  //ordenar por estado
  ordenarEstado(): void {
    //ordenar por string
    this.listaImc.sort((a, b) => a.comoEstas.localeCompare(b.comoEstas))
  }
}
