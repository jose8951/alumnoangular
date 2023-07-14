import { Component, OnInit } from '@angular/core';
import { Chuweb } from 'src/app/models/chuweb';
import { Observer } from 'rxjs'
import { ChuService } from 'src/app/services/chu.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {
  fraseChuck!:string
  constructor(private chuckService: ChuService) {       
  }


  ngOnInit(): void {    
    //cuando me suscribo al observer, le estoy diciendo, cuando vuelvas me avisas aqui
    this.chuckService.getChuckAleatorio().subscribe(
      {
        next: frase=>{
          console.log("Frase bien resibida")
          this.fraseChuck= frase.value;
        },
        error:fallo=>{
          alert("Fallo al obtener la frase")
        },
        complete:()=>console.log("Completada")
      }    
    )
  }
  }





