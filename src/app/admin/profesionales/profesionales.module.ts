import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar/editar.component';
import { ProfesionalesPages } from './profesionales.pages';
import { VerComponent } from './ver/ver.component';
import { ProfesionalesComponent } from './profesionales.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearComponent } from './crear/crear.component';



@NgModule({
  declarations: [ProfesionalesComponent, EditarComponent, VerComponent, MainComponent, CrearComponent],
  imports: [
    CommonModule,
    ProfesionalesPages,
    ReactiveFormsModule
  ]
})
export class ProfesionalesModule { }
