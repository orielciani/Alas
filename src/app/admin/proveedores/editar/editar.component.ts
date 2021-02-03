import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ProveedorService } from 'src/app/services/proveedor.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  form: FormGroup;
  proveedor!: any;
  id = "";
  constructor(
    public proveedorservice: ProveedorService,
    public activatedroute: ActivatedRoute
  ) {
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
  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.proveedorservice.cargarProveedor(this.id).subscribe((respuesta: any) => {
      this.proveedor = respuesta.proveedor;
      this.setValue(respuesta.proveedor.denominacion,
         respuesta.proveedor.contacto,
          respuesta.proveedor.correo,
          respuesta.proveedor.celular,
          respuesta.proveedor.telefono,
          respuesta.proveedor.direccion,
          respuesta.proveedor.cuit,
          respuesta.proveedor.provincia,
          respuesta.proveedor.ciudad,
          respuesta.proveedor.cp,
          respuesta.proveedor.ci,
          respuesta.proveedor.actividad,
          );
    });
  }

  setValue(denominacion: string, contacto: string, correo: string,
    celular: string, telefono: string, direccion: string,
    cuit: string, provincia: string, ciudad: string,
    cp: string, ci: string, actividad: string) {
    let proveedor = {
      denominacion: denominacion,
      contacto: contacto,
      correo: correo,
      celular: celular,
      telefono: telefono,
      direccion: direccion,
      cuit: cuit,
      provincia: provincia,
      ciudad: ciudad,
      cp: cp,
      ci: ci,
      actividad: actividad
    };
    this.form.setValue(proveedor);
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
          this.editarProveedor(this.form.value);
      }
    })
  }
  editarProveedor(proveedor: any) {
    this.proveedorservice.editarProveedor(this.id, proveedor).subscribe( respuesta =>
      Swal.fire(
        'Modificado',
        'Se modifico con exito',
        'success'
        )
      , error => {
        if ( error.error.error.message ) {
          Swal.fire(
            'Error1 ',
            error.error.error.message,
            'error'
            )
        }
    });
  }
}

