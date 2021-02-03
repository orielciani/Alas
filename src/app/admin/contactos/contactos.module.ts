import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar/editar.component';
import { ContactosPages } from './contactos.pages';
import { VerComponent } from './ver/ver.component';
import { ContactosComponent } from './contactos.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearComponent } from './crear/crear.component';



@NgModule({
  declarations: [ContactosComponent, EditarComponent, VerComponent, MainComponent, CrearComponent],
  imports: [
    CommonModule,
    ContactosPages,
    ReactiveFormsModule
  ]
})
export class ContactosModule { }
