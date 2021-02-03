import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public usuarioservice: UsuarioService) { }

  ngOnInit(): void {
    if ( this.usuarioservice.admin === true ) {
      this.menus.push({
        nombre: 'Usuarios',
        route: '/admin/usuarios'
      },)
    }
  }
  menus: any = [{
    nombre: 'Concurrentes',
    route: '/admin/concurrentes'
  },
  {
    nombre: 'Contactos',
    route: '/admin/contactos'
  },
  {
    nombre: 'Efectores de salud',
    route: '/admin/efectores'
  },
  {
    nombre: 'Instituciones',
    route: '/admin/instituciones'
  },
  {
    nombre: 'Obras Sociales',
    route: '/admin/obras-sociales'
  },
  {
    nombre: 'Profesionales',
    route: '/admin/profesionales'
  },
  {
    nombre: 'Proveedores',
    route: '/admin/proveedores'
  },

              ]
}
