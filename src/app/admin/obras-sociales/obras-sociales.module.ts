import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar/editar.component';
import { ObrasSocialesPages } from './obras-sociales.pages';
import { VerComponent } from './ver/ver.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearComponent } from './crear/crear.component';
import { ObrasSocialesComponent } from './obras-sociales.component';



@NgModule({
  declarations: [ObrasSocialesComponent, EditarComponent, VerComponent, MainComponent, CrearComponent],
  imports: [
    CommonModule,
    ObrasSocialesPages,
    ReactiveFormsModule
  ]
})
export class ObrasSocialesModule { }
