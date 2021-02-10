import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from "../../../models/usuario.model";
import Swal from 'sweetalert2'
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  form: FormGroup;
  constructor(public usuarioservice: UsuarioService,
    public contactoservice: ContactosService) {
    this.form = new FormGroup({
      nombre: new FormControl(""),
      telefono: new FormControl(""),
      celular: new FormControl(""),
      correo: new FormControl(""),
      horario: new FormControl(""),
      institucion: new FormControl(""),
    });
  }
  formsQuestions: any = [ {
      label: 'Nombre',
      class: 'form-control',
      type: 'text',
      formControlName: "nombre"
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
      label: 'Institucion',
      class: 'form-control',
      type: 'text',
      formControlName: "institucion"
    },
    {
      label: 'Horario',
      class: 'form-control',
      type: 'text',
      formControlName: "horario"
    },
   ]

  guardarCambios() {
    this.crearUsuario(this.form.value);
  }
  crearUsuario(contacto: any) {
    const user = contacto;
    this.contactoservice.agregar(user).subscribe((respuesta: any) => {
      Swal.fire(
        'Exito',
        'El efector de salud de nombre ' + respuesta.contacto.nombre + ' se agrego con exito',
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
