import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Usuario } from "../../../models/usuario.model";
import { ActivatedRoute } from "@angular/router";
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'
import { EfectoresService } from 'src/app/services/efectores.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  form: FormGroup;
  efector: any;
  id = "";
  constructor(
    public usuarioservice: UsuarioService,
    public efectoresservice: EfectoresService,
    public activatedroute: ActivatedRoute
  ) {
    this.form = new FormGroup({
      nombre: new FormControl(""),
      email: new FormControl(""),
      telefono: new FormControl(""),
      celular: new FormControl(""),
      direccion: new FormControl(""),
      distrito: new FormControl(""),
      observacion: new FormControl(""),
    });
  }
  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.efectoresservice.cargarUno(this.id).subscribe((respuesta: any) => {
      this.efector = respuesta.efectorsalud;
      this.setValue(respuesta.efectorsalud.nombre, respuesta.efectorsalud.correo,
         respuesta.efectorsalud.telefono, respuesta.efectorsalud.celular,
         respuesta.efectorsalud.direccion, respuesta.efectorsalud.distrito,
         respuesta.efectorsalud.observacion);
    });
  }

  setValue(nombre: string, email: string, telefono: string, celular: string,
    direccion: string, distrito: string, observacion: string) {
    let user = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      celular: celular,
      direccion: direccion,
      distrito: distrito,
      observacion: observacion
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
  editarUsuario(efector: any) {
    this.efectoresservice.editar(this.id, efector).subscribe((respuesta: any) => {
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
