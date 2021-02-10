import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from "../../../models/usuario.model";
import Swal from 'sweetalert2'
import { InstitucionesService } from 'src/app/services/instituciones.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  form: FormGroup;
  constructor(public usuarioservice: UsuarioService,
    public institucionesservice: InstitucionesService) {
    this.form = new FormGroup({
      denominacion: new FormControl(''),
      direccion: new FormControl(''),
      provincia: new FormControl(''),
      ciudad: new FormControl(''),
      codpos: new FormControl(''),
      cuit: new FormControl(''),
      ci: new FormControl(''),
      ib: new FormControl(''),
      telefono: new FormControl(''),
      celular: new FormControl(''),
      correo: new FormControl(''),
      contacto: new FormControl(''),
      contactocel: new FormControl(''),
      contactocorreo: new FormControl(''),
      web: new FormControl(''),
      otros: new FormControl(''),
    });
  }
  formsQuestions: any = [ {
    label: 'Denominacion',
    class: 'form-control',
    type: 'text',
    formControlName: "denominacion"
  },
  {
    label: 'Provincia',
    class: 'form-control',
    type: 'text',
    formControlName: "provincia"
  },
  {
    label: 'Ciudad',
    class: 'form-control',
    type: 'text',
    formControlName: "ciudad"
  },
  {
    label: 'Direccion',
    class: 'form-control',
    type: 'text',
    formControlName: "direccion"
  },
  {
    label: 'Codigo Postal',
    class: 'form-control',
    type: 'text',
    formControlName: "codpos"
  },
  {
    label: 'CUIT',
    class: 'form-control',
    type: 'text',
    formControlName: "cuit"
  },
  {
    label: 'CI',
    class: 'form-control',
    type: 'text',
    formControlName: "ci"
  },
  {
    label: 'Ingresos Brutos',
    class: 'form-control',
    type: 'text',
    formControlName: "ib"
  },
  {
    label: 'Telefono',
    class: 'form-control',
    type: 'text',
    formControlName: "telefono"
  },
  {
    label: 'Celular',
    class: 'form-control',
    type: 'text',
    formControlName: "celular"
  },
  {
    label: 'Email',
    class: 'form-control',
    type: 'text',
    formControlName: "correo"
  },
  {
    label: 'Contacto',
    class: 'form-control',
    type: 'text',
    formControlName: "contacto"
  },
  {
    label: 'Celular del contacto',
    class: 'form-control',
    type: 'text',
    formControlName: "contactocel"
  },
  {
    label: 'Email del contacto',
    class: 'form-control',
    type: 'text',
    formControlName: "contactocorreo"
  },
  {
    label: 'Web',
    class: 'form-control',
    type: 'text',
    formControlName: "web"
  },
  {
    label: 'Otros',
    class: 'form-control',
    type: 'text',
    formControlName: "otros"
  },
 ]
  guardarCambios() {
    this.crearUsuario(this.form.value);
  }
  crearUsuario(institucion: any) {
    const user = institucion;
    this.institucionesservice.agregar(user).subscribe((respuesta: any) => {
      Swal.fire(
        'Exito',
        'La institucion de nombre ' + respuesta.institucion.denominacion + ' se agrego con exito',
        'success'
      )
    }, (error: any) => {
      console.log(error)
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
