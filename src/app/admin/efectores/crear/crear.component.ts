import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from "../../../models/usuario.model";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  form: FormGroup;
  roles: any[] = ['ADMIN_ROLE', 'USER_ROLE']
  constructor(public usuarioservice: UsuarioService) {
    this.form = new FormGroup({
      nombre: new FormControl(),
      email: new FormControl(),
      role: new FormControl('USER_ROLE'),
      password: new FormControl()
    });
  }

  guardarCambios() {
    this.crearUsuario(this.form.value);
  }
  crearUsuario(usuario: Usuario) {
    const user = usuario;
    this.usuarioservice.crearUsuario(user).subscribe((respuesta: any) => {
      Swal.fire(
        'Exito',
        'El usuario de nombre ' + respuesta.usuario.nombre + ' se creo con exito',
        'success'
      )
    }, (error: any) => {
      if ( !error.error.message ) {
        Swal.fire(
          'Error',
          error.error.error.errors.email.message,
          'error'
        )
      } else {
        Swal.fire(
          'Error',
          error.error.message,
          'error'
        )
      }
    });
  }
}
