import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'
import { ObrasSocialesService } from 'src/app/services/obras-sociales.service';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  form: FormGroup;
  obraSocial: any;
  id = "";
  constructor(
    public usuarioservice: UsuarioService,
    public obrasocialservice: ObrasSocialesService,
    public activatedroute: ActivatedRoute
  ) {
    this.form = new FormGroup({
      nombre: new FormControl(""),
      correo: new FormControl(""),
      telefono: new FormControl(""),
      celular: new FormControl(""),
      provincia: new FormControl(""),
      ciudad: new FormControl(""),
      direccion: new FormControl(""),
      codpos: new FormControl(""),
      contacto: new FormControl(""),
      cuit: new FormControl(""),
      ci: new FormControl(""),
      ib: new FormControl(""),
      otros: new FormControl(""),
    });
  }
  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.obrasocialservice.cargarUno(this.id).subscribe((respuesta: any) => {
      this.obraSocial = respuesta.obrasocial;
      this.setValue(respuesta.obrasocial.nombre, respuesta.obrasocial.correo,
         respuesta.obrasocial.telefono, respuesta.obrasocial.celular,
         respuesta.obrasocial.provincia, respuesta.obrasocial.ciudad,
         respuesta.obrasocial.direccion,
         respuesta.obrasocial.codpos, respuesta.obrasocial.contacto,
         respuesta.obrasocial.cuit, respuesta.obrasocial.ci,
         respuesta.obrasocial.ib, respuesta.obrasocial.otros);
    });
  }

  setValue(nombre: string, correo: string, telefono: string, celular: string,
    provincia: string, ciudad: string, direccion: string, codpos: string,
    contacto: string, cuit: string, ci: string, ib: string, otros: string) {
    let user = {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      celular: celular,
      provincia: provincia,
      ciudad: ciudad,
      direccion: direccion,
      codpos: codpos,
      contacto: contacto,
      cuit: cuit,
      ci: ci,
      ib: ib,
      otros: otros
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
          this.editar(this.form.value);
      }
    })
  }
  editar(obraSocial: any) {
    this.obrasocialservice.editar(this.id, obraSocial).subscribe((respuesta: any) => {
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
