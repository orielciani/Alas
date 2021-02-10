import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from "../../../models/usuario.model";
import Swal from 'sweetalert2'
import { ObrasSocialesService } from 'src/app/services/obras-sociales.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  form: FormGroup;
  roles: any[] = ['ADMIN_ROLE', 'USER_ROLE']
  constructor(public usuarioservice: UsuarioService,
    public obrassocialesservice: ObrasSocialesService) {
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

  guardarCambios() {
    this.agregarObraSocial(this.form.value);
  }
  agregarObraSocial(obraSocial: any) {
    const user = obraSocial;
    this.obrassocialesservice.agregar(user).subscribe((respuesta: any) => {
      Swal.fire(
        'Exito',
        'La obra social de nombre ' + respuesta.obrasocial.nombre + ' se creo con exito',
        'success'
      )
    }, (error: any) => {
      console.log(error);
      if ( !error.error.message ) {
        Swal.fire(
          'Error',
          error.error.error.error.errors.message,
          'error'
        )
      } else {
        Swal.fire(
          'Error',
          'error.error.message',
          'error'
        )
      }
    });
  }
}
