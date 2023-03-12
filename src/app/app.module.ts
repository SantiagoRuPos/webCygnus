import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { MenuComponent } from './view/menu/menu.component';
import { FooterComponent } from './view/footer/footer.component';
import { ProyectoComponent } from './view/proyecto/proyecto.component';
import { ServiciosTecnicoComponent } from './view/servicios-tecnico/servicios-tecnico.component';
import { Error404Component } from './errors/HTTP/error404/error404.component';

//angular material
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    ProyectoComponent,
    ServiciosTecnicoComponent,
    Error404Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
