import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Usuario } from "../../../models/usuario.model";
import { ActivatedRoute } from "@angular/router";
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'
import { InstitucionesService } from 'src/app/services/instituciones.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  form: FormGroup;
  institucion: any;
  id = "";
  constructor(
    public usuarioservice: UsuarioService,
    public institucionesservice: InstitucionesService,
    public activatedroute: ActivatedRoute
  ) {
    this.form = new FormGroup({
      denominacion: new FormControl(""),
      correo: new FormControl(""),
      telefono: new FormControl(""),
      celular: new FormControl(""),
      provincia: new FormControl(""),
      ciudad: new FormControl(""),
      codpos: new FormControl(""),
      direccion: new FormControl(""),
      cuit: new FormControl(""),
      ci: new FormControl(""),
      ib: new FormControl(""),
      otros: new FormControl(""),
      web: new FormControl(""),
      contacto: new FormControl(""),
      contactocel: new FormControl(""),
      contactocorreo: new FormControl(""),
    });
  }
  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.institucionesservice.cargarUno(this.id).subscribe((respuesta: any) => {
      this.institucion = respuesta.institucion;
      this.setValue(respuesta.institucion.denominacion || '', respuesta.institucion.correo || '',
         respuesta.institucion.telefono || '', respuesta.institucion.celular || '',
         respuesta.institucion.provincia || '', respuesta.institucion.ciudad || '',
         respuesta.institucion.codpos || '', respuesta.institucion.direccion || '',
         respuesta.institucion.cuit || '', respuesta.institucion.ci || '',
         respuesta.institucion.ib, respuesta.institucion.otros || '',
         respuesta.institucion.web || '', respuesta.institucion.contacto || '',
         respuesta.institucion.contactocel || '', respuesta.institucion.contactocorreo || '');
    });
  }

  setValue(denominacion: string, correo: string, telefono: string, celular: string,
    provincia: string, ciudad: string, codpos: string, direccion: string,
    cuit: string, ci: string, ib: string, otros: string, web: string,
    contacto: string, contactocel: string, contactocorreo: string) {
    let user = {
      denominacion: denominacion,
      correo: correo,
      telefono: telefono,
      celular: celular,
      provincia: provincia,
      ciudad: ciudad,
      codpos: codpos,
      direccion: direccion,
      cuit: cuit,
      ci: ci,
      ib: ib,
      otros: otros,
      web: web,
      contacto: contacto,
      contactocel: contactocel,
      contactocorreo: contactocorreo
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
    this.institucionesservice.editar(this.id, usuario).subscribe((respuesta: any) => {
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
