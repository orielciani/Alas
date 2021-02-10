import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPages } from './admin.pages';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [AdminComponent,
           BusquedaComponent,
           ModalUploadComponent
            ],
  imports: [
    CommonModule,
    AdminPages,
    SharedModule,
    PipesModule
  ]
})
export class AdminModule { }
