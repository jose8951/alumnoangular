import { Component, OnInit } from '@angular/core'
import { Observer } from 'rxjs'
import { PerroWeb } from 'src/app/models/perro-web'
import { PerroService } from 'src/app/services/perro.service'

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.css'],
})
export class PerroComponent implements OnInit {

perroWeb!: PerroWeb
raza!:string

  observerPerros: Observer<PerroWeb> = {
    next: (perroRx:PerroWeb) => {
      console.log('Perro recibido bien')
      console.log(perroRx.message)
      this.raza= perroRx.message
      console.log(perroRx.status)
      this.perroWeb=perroRx
      //no hace falta Array<string>
      let palabrasURL:Array<string>= perroRx.message.split('/')
      console.log("la raza es: " +palabrasURL[4])
      this.raza=palabrasURL[4]
    },
    error: (fallo) => console.error('Fallo al rx el Perro ' + fallo),
    complete: () => console.log('Comunicación completada')
    
  }

  constructor(private perroService: PerroService) {
    console.log('estamos cargado el componente')    
  }

  //la comunicacion con un servicio, debe hacerse desde ngOninit
  ngOnInit(): void {
    console.log('vamos a traernos')
    //cuando me suscribo al observer, le estoy diciendo, cuando vuelvas me avisas aqui
    this.perroService.getPerroAleatorio().subscribe(this.observerPerros)    
    console.log("perro solicitado...")
  }



//TODO haced un pie de foto en el salga la raza del perro

  damePerro():void{
   let a= this.perroService.getPerroAleatorio().subscribe(this.observerPerros)  
   

  


  }


}
