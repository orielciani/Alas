import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  constructor(public usuarioservice: UsuarioService, public router: Router) { }

  ngOnInit(): void {
  }
  buscar(termino: string | null) {
    if ( !termino ) {
      return;
    }
    this.router.navigate(['/admin/busqueda/' + termino]);
  }
}
