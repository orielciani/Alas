import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Usuario } from "../../../models/usuario.model";
import { ActivatedRoute } from "@angular/router";
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  form: FormGroup;
  usuario!: Usuario;
  id = "";
  constructor(
    public usuarioservice: UsuarioService,
    public activatedroute: ActivatedRoute
  ) {
    this.form = new FormGroup({
      nombre: new FormControl(""),
      email: new FormControl(""),
      role: new FormControl(""),
      password: new FormControl()
    });
  }
  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.usuarioservice.cargarUsuario(this.id).subscribe((respuesta: any) => {
      this.usuario = respuesta.usuario;
      this.setValue(respuesta.usuario.nombre, respuesta.usuario.email, respuesta.usuario.role, null);
    });
  }

  setValue(nombre: string, email: string, role: string, password: string | null) {
    let user = {
      nombre: nombre,
      email: email,
      role: role,
      password: password
    };
    this.form.setValue(user);
  }

  guardarCambios() {
    Swal.fire({
      title: '¿Seguro que quieres hacerlo?',
      text: "No podras revertir esta accion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificar'
    }).then((result) => {
      if (result.isConfirmed) {
          this.editarUsuario(this.form.value);
      }
    })
  }
  editarUsuario(usuario: Usuario) {
    this.usuarioservice.editarUsuario(this.id, usuario).subscribe((respuesta: any) => {
      Swal.fire(
        'Modificado',
        '',
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
