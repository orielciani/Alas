import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ProveedorService } from 'src/app/services/proveedor.service';
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
  constructor(public proveedorservice: ProveedorService) {
    this.form = new FormGroup({
      denominacion: new FormControl(),
      contacto: new FormControl(),
      correo: new FormControl(),
      celular: new FormControl(),
      telefono: new FormControl(),
      direccion: new FormControl(),
      cuit: new FormControl(),
      provincia: new FormControl(),
      ciudad: new FormControl(),
      cp: new FormControl(),
      ci: new FormControl(),
      actividad: new FormControl()
    });
  }

  guardarCambios() {
    this.crearProveedor(this.form.value);
  }
  crearProveedor(proveedor: any) {
    this.proveedorservice.crearProveedor(proveedor).subscribe((respuesta: any) => {
      Swal.fire(
        'Exito',
        'El proveedor ' + respuesta.proveedor.denominacion + ' se agrego con exito',
        'success'
      )
    }, (error: any) => {
      if ( error.error.error.message ) {
        Swal.fire(
          'Error',
          error.error.error.message,
          'error'
        )
      }
    });
  }
}
