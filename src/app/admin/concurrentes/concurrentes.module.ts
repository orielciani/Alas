import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar/editar.component';
import { ConcurrentesPages } from './concurrentes.pages';
import { VerComponent } from './ver/ver.component';
import { ConcurrentesComponent } from './concurrentes.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearComponent } from './crear/crear.component';



@NgModule({
  declarations: [ConcurrentesComponent, EditarComponent, VerComponent, MainComponent, CrearComponent],
  imports: [
    CommonModule,
    ConcurrentesPages,
    ReactiveFormsModule
  ]
})
export class ConcurrentesModule { }
