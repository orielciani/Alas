import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar/editar.component';
import { EfectoresPages } from './efectores.pages';
import { VerComponent } from './ver/ver.component';
import { EfectoresComponent } from './efectores.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearComponent } from './crear/crear.component';



@NgModule({
  declarations: [EfectoresComponent, EditarComponent, VerComponent, MainComponent, CrearComponent],
  imports: [
    CommonModule,
    EfectoresPages,
    ReactiveFormsModule
  ]
})
export class EfectoresModule { }
