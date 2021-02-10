import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'
import { EfectoresService } from 'src/app/services/efectores.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  form: FormGroup;

  constructor(public usuarioservice: UsuarioService,
    public efectoresservice: EfectoresService) {
    this.form = new FormGroup({
      nombre: new FormControl(""),
      direccion: new FormControl(""),
      telefono: new FormControl(""),
      celular: new FormControl(""),
      correo: new FormControl(""),
      contacto: new FormControl(""),
      distrito: new FormControl(""),
      observacion: new FormControl(""),
    });
  }
  formsQuestions: any = [ {
      label: 'Nombre',
      class: 'form-control',
      type: 'text',
      formControlName: "nombre"
    },
    {
      label: 'Direccion',
      class: 'form-control',
      type: 'text',
      formControlName: "direccion"
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
      label: 'Distrito',
      class: 'form-control',
      type: 'text',
      formControlName: "distrito"
    },
    {
      label: 'Observacion',
      class: 'form-control',
      type: 'text',
      formControlName: "observacion"
    },
   ]

  guardarCambios() {
    this.crearUsuario(this.form.value);
  }
  crearUsuario(efector: any) {
    const user = efector;
    this.efectoresservice.agregar(user).subscribe((respuesta: any) => {
      Swal.fire(
        'Exito',
        'El efector de salud de nombre ' + respuesta.efectorsalud.nombre + ' se agrego con exito',
        'success'
      )
    }, (error: any) => {
      console.log(error);
      if ( !error.error.message ) {
        Swal.fire(
          'Error',
          'Error',
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
