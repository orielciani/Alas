import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  menus: any = [{
    nombre: 'Home',
    route: '/home'
  },
  {
    nombre: 'Sobre nosotros',
    route: '/sobre-nosotros'
  },
  {
    nombre: 'Actividades',
    route: '/actividades'
  },
  {
    nombre: 'Agenda',
    route: '/agenda'
  },
  {
    nombre: 'Galeria',
    route: '/galeria'
  },
  {
    nombre: 'Informacion de interes',
    route: '/informacion-de-interes'
  },
  {
    nombre: 'Contacto',
    route: '/contacto'
  },
  {
    nombre: 'Administracion',
    route: '/admin/concurrentes'
  },
              ]

}
