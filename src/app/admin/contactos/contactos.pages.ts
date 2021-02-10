import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/services/guards/admin.guard';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { MainComponent } from './main/main.component';
import { VerComponent } from './ver/ver.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'ver/:id', component: VerComponent},
    { path: 'editar/:id', canActivate: [AdminGuard], component: EditarComponent },
    { path: 'crear', canActivate: [AdminGuard], component: CrearComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactosPages { }
