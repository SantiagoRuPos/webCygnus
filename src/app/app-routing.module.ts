import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './view/menu/menu.component';
import {ProyectoComponent} from './view/proyecto/proyecto.component';
import { ServiciosTecnicoComponent } from './view/servicios-tecnico/servicios-tecnico.component';
import { HomeComponent } from './view/home/home.component';
import { AppComponent } from './view/app/app.component';
import { Error404Component } from "../app/errors/HTTP/error404/error404.component";
import { Error501Component } from './errors/HTTP/error501/error501.component';
const routes: Routes = [
  {path: 'Proyectos', component: ProyectoComponent},
  {path: 'Home', component:HomeComponent},
  {path: 'ServicioTecnico', component:ServiciosTecnicoComponent},
  {path: 'App', component:Error501Component},
  {path: '', component:HomeComponent},
  {path:'**',component:Error404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
