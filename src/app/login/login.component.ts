import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Usuario } from "../models/usuario.model";
import { Router } from "@angular/router";
import { UsuarioService } from '../services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  form: FormGroup;
  constructor(public usuarioservice: UsuarioService, public router: Router) {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }
  login() {
    if (this.form.status !== "VALID") {
      if (this.form.value.password === null) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No ingresaste ninguna contraseña',
        })
      }
      if (this.form.value.password === '') {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No ingresaste ninguna contraseña',
        })
      }
      return;
    }
    let usuario = new Usuario(
      this.form.value.email,
      this.form.value.password
    );
    this.usuarioservice
      .login(usuario)
      .subscribe((respuesta: any) => console.log("Login correcto"), error => {
        Swal.fire(
          error.error.mensaje,
          'Pruebe con otro mail o otra contraseña',
          'error'
        )
      });
  }
}
