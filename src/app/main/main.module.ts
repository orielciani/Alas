import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainPages } from './main.pages';
import { SharedModule } from '../shared/shared.module';
import { ActividadesComponent } from './actividades/actividades.component';
import { AgendaComponent } from './agenda/agenda.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [MainComponent, HomeComponent, AboutUsComponent, ActividadesComponent, AgendaComponent, GaleriaComponent, InformacionComponent, ContactoComponent],
  imports: [
    CommonModule,
    MainPages,
    SharedModule
  ]
})
export class MainModule { }
