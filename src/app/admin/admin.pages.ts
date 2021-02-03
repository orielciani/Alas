import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../services/guards/admin.guard';
import { AuthGuard } from '../services/guards/auth.guard';
import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';
import { AdminComponent } from './admin.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ConcurrentesComponent } from './concurrentes/concurrentes.component';
import { ContactosComponent } from './contactos/contactos.component';
import { EfectoresComponent } from './efectores/efectores.component';
import { InstitucionesComponent } from './instituciones/instituciones.component';
import { ObrasSocialesComponent } from './obras-sociales/obras-sociales.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, VerificaTokenGuard], children: [
    { path: 'busqueda/:termino', component: BusquedaComponent},
    {
      path: `contactos`,
      component: ContactosComponent,
      loadChildren: () =>
        import("./contactos/contactos.module").then((m) => m.ContactosModule)
    },
    {
      path: `efectores`,
      component: EfectoresComponent,
      loadChildren: () =>
        import("./efectores/efectores.module").then((m) => m.EfectoresModule)
    },
    {
      path: `instituciones`,
      component: InstitucionesComponent,
      loadChildren: () =>
        import("./instituciones/instituciones.module").then((m) => m.InstitucionesModule)
    },
    {
      path: `obras-sociales`,
      component: ObrasSocialesComponent,
      loadChildren: () =>
        import("./obras-sociales/obras-sociales.module").then((m) => m.ObrasSocialesModule)
    },
    {
      path: `profesionales`,
      component: ProfesionalesComponent,
      loadChildren: () =>
        import("./profesionales/profesionales.module").then((m) => m.ProfesionalesModule)
    },
    {
      path: `proveedores`,
      component: ProveedoresComponent,
      loadChildren: () =>
        import("./proveedores/proveedores.module").then((m) => m.ProveedoresModule)
    },
    {
      path: `concurrentes`,
      component: ConcurrentesComponent,
      loadChildren: () =>
        import("./concurrentes/concurrentes.module").then((m) => m.ConcurrentesModule)
    },
    {
      path: `usuarios`,
      component: UsuariosComponent,
      canActivate: [AdminGuard],
      loadChildren: () =>
        import("./usuarios/usuarios.module").then((m) => m.UsuariosModule)
    },
    { path: '', redirectTo: 'concurrentes', pathMatch: `full` }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPages { }
