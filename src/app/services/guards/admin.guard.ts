import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public usuarioservice: UsuarioService, public router: Router) {}
  canActivate( ) {
    if ( this.usuarioservice.admin === true ) {
      return true;
    } else {
      this.router.navigate(['/admin/concurrentes']);
      Swal.fire({
        icon: 'error',
        title: 'No eres administrador',
        text: 'No puedes entrar aqui',
      })
      return false;
    }
  }

}
