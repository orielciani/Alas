import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar/editar.component';
import { UsuariosPages } from './usuarios.pages';
import { VerComponent } from './ver/ver.component';
import { UsuariosComponent } from './usuarios.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearComponent } from './crear/crear.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [UsuariosComponent, EditarComponent, VerComponent, MainComponent, CrearComponent],
  imports: [
    CommonModule,
    UsuariosPages,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class UsuariosModule { }
