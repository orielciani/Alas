import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Usuario } from "../../../models/usuario.model";
import { ActivatedRoute } from "@angular/router";
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  form: FormGroup;
  contacto: any;
  id = "";
  constructor(
    public usuarioservice: UsuarioService,
    public contactosservice: ContactosService,
    public activatedroute: ActivatedRoute
  ) {
    this.form = new FormGroup({
      nombre: new FormControl(""),
      correo: new FormControl(""),
      telefono: new FormControl(""),
      celular: new FormControl(""),
      institucion: new FormControl("")
    });
  }
  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.contactosservice.cargarUno(this.id).subscribe((respuesta: any) => {
      this.contacto = respuesta.contacto;
      this.setValue(respuesta.contacto.nombre, respuesta.contacto.correo,
         respuesta.contacto.telefono, respuesta.contacto.celular,
         respuesta.contacto.institucion);
    });
  }

  setValue(nombre: string, correo: string, telefono: string, celular: string , institucion: string) {
    let user = {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      celular: celular,
      institucion: institucion
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
  editarUsuario(contacto: any) {
    this.contactosservice.editar(this.id, contacto).subscribe((respuesta: any) => {
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
