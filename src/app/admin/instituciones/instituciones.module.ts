import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar/editar.component';
import { InstitucionesPages } from './instituciones.pages';
import { VerComponent } from './ver/ver.component';
import { InstitucionesComponent } from './instituciones.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearComponent } from './crear/crear.component';



@NgModule({
  declarations: [InstitucionesComponent, EditarComponent, VerComponent, MainComponent, CrearComponent],
  imports: [
    CommonModule,
    InstitucionesPages,
    ReactiveFormsModule
  ]
})
export class InstitucionesModule { }
