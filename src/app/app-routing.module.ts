import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DniComponent } from './components/dni/dni.component';
import { PerroComponent } from './components/perro/perro.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import {EjercicioComponent } from "./components/ejercicio/ejercicio.component";
import { ImcComponent } from './components/imc/imc.component';
import {ChuckComponent} from "./components/chuck/chuck.component";
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { FormularioRestauranteComponent } from './components/formulario-restaurante/formulario-restaurante.component';


//en este arrya de rutas, tengo que tener una ruta path
//asosiado al componente
const routes: Routes = [
  {path:"dni", component:DniComponent},
  {path:"adivina", component:AdivinaComponent},
  {path:"perros", component:PerroComponent},
  {path: "basico", component:EjercicioComponent},
  {path:"imc", component:ImcComponent},
  {path:"chuck", component:ChuckComponent},
  {path:"restaurante", component:RestaurantesComponent},
  {path:"restaurantes/nuevo",component:FormularioRestauranteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
