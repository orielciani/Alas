import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPages } from './admin.pages';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { BusquedaComponent } from './busqueda/busqueda.component';



@NgModule({
  declarations: [AdminComponent,
           BusquedaComponent
            ],
  imports: [
    CommonModule,
    AdminPages,
    SharedModule,
  ]
})
export class AdminModule { }
