import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar/editar.component';
import { ProveedoresPages } from './proveedores.pages';
import { VerComponent } from './ver/ver.component';
import { ProveedoresComponent } from './proveedores.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearComponent } from './crear/crear.component';



@NgModule({
  declarations: [ProveedoresComponent, VerComponent, MainComponent, EditarComponent, CrearComponent],
  imports: [
    CommonModule,
    ProveedoresPages,
    ReactiveFormsModule
  ]
})
export class ProveedoresModule { }
