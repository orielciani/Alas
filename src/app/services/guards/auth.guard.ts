import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public usuarioservices: UsuarioService, public router: Router) {}

    canActivate() {
      if (this.usuarioservices.estoyLogeado()) {
        return true;
      } else {
        this.router.navigate(["/login"]);
        return false;
      }
    }
}
