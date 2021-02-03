import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomeComponent } from './home/home.component';
import { InformacionComponent } from './informacion/informacion.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'sobre-nosotros', component: AboutUsComponent },
    { path: 'actividades', component: ActividadesComponent },
    { path: 'agenda', component: AgendaComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'informacion-de-interes', component: InformacionComponent },
    { path: 'contacto', component: ContactoComponent },
   // { path: '**', component: HomeComponent },

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPages { }
