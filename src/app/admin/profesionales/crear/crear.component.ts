import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'
import { ProfesionalesService } from 'src/app/services/profesionales.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  form: FormGroup;
  hora: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  constructor(public usuarioservice: UsuarioService,
    public profesionalesservice: ProfesionalesService) {
    this.form = new FormGroup({
      nombre: new FormControl(""),
      dni: new FormControl(""),
      nacimiento: new FormControl(""),
      provincia: new FormControl(""),
      ciudad: new FormControl(""),
      direccion: new FormControl(""),
      telefono: new FormControl(""),
      celular: new FormControl(""),
      correo: new FormControl(""),
      cuit: new FormControl(""),
      ib: new FormControl(""),
      cbu: new FormControl(""),
      profesion: new FormControl(""),
      alta: new FormControl(""),
      baja: new FormControl(""),
      seguro: new FormControl(""),
      actividadLunes: new FormControl(""),
      inicioLunes: new FormControl(0),
      finalLunes: new FormControl(0),
      actividadMartes: new FormControl(""),
      inicioMartes: new FormControl(0),
      finalMartes: new FormControl(0),
      actividadMiercoles: new FormControl(""),
      inicioMiercoles: new FormControl(0),
      finalMiercoles: new FormControl(0),
      actividadJueves: new FormControl(""),
      inicioJueves: new FormControl(0),
      finalJueves: new FormControl(0),
      actividadViernes: new FormControl(""),
      inicioViernes: new FormControl(0),
      finalViernes: new FormControl(0),
    });
  }
  formsQuestions: any = [ {
      label: 'Nombre',
      class: 'form-control',
      type: 'text',
      formControlName: "nombre"
    },
    {
      label: 'DNI',
      class: 'form-control',
      type: 'text',
      formControlName: "dni"
    },
    {
      label: 'Nacimiento',
      class: 'form-control',
      type: 'text',
      formControlName: "nacimiento"
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
      label: 'CUIT',
      class: 'form-control',
      type: 'text',
      formControlName: "cuit"
    },
    {
      label: 'Ingresos brutos',
      class: 'form-control',
      type: 'text',
      formControlName: "ib"
    },
    {
      label: 'CBU',
      class: 'form-control',
      type: 'text',
      formControlName: "cbu"
    },
    {
      label: 'Profesion',
      class: 'form-control',
      type: 'text',
      formControlName: "profesion"
    },
    {
      label: 'Alta',
      class: 'form-control',
      type: 'text',
      formControlName: "alta"
    },
    {
      label: 'Baja',
      class: 'form-control',
      type: 'text',
      formControlName: "baja"
    },
    {
      label: 'Seguro',
      class: 'form-control',
      type: 'text',
      formControlName: "seguro"
    },
   ]
   formActividad: any = [{
      dia: 'Lunes',
      actividad: {
        label: 'Actividad',
        class: 'form-control',
        type: 'text',
        formControlName: "actividadLunes"
      },
      inicio: {
        label: 'Desde',
        class: 'custom-select',
        type: 'text',
        formControlName: "inicioLunes"
      },
      final: {
        label: 'Desde',
        class: 'custom-select',
        type: 'text',
        formControlName: "finalLunes"
      }
   },
   {
    dia: 'Martes',
    actividad: {
      label: 'Actividad',
      class: 'form-control',
      type: 'text',
      formControlName: "actividadMartes"
    },
    inicio: {
      label: 'Desde',
      class: 'custom-select',
      type: 'text',
      formControlName: "inicioMartes"
    },
    final: {
      label: 'Desde',
      class: 'custom-select',
      type: 'text',
      formControlName: "finalMartes"
    }
 },
 {
  dia: 'Miercoles',
  actividad: {
    label: 'Actividad',
    class: 'form-control',
    type: 'text',
    formControlName: "actividadMiercoles"
  },
  inicio: {
    label: 'Desde',
    class: 'custom-select',
    type: 'text',
    formControlName: "inicioMiercoles"
  },
  final: {
    label: 'Desde',
    class: 'custom-select',
    type: 'text',
    formControlName: "finalMiercoles"
  }
},
{
  dia: 'Jueves',
  actividad: {
    label: 'Actividad',
    class: 'form-control',
    type: 'text',
    formControlName: "actividadJueves"
  },
  inicio: {
    label: 'Desde',
    class: 'custom-select',
    type: 'text',
    formControlName: "inicioJueves"
  },
  final: {
    label: 'Desde',
    class: 'custom-select',
    type: 'text',
    formControlName: "finalJueves"
  }
},
{
  dia: 'Viernes',
  actividad: {
    label: 'Actividad',
    class: 'form-control',
    type: 'text',
    formControlName: "actividadViernes"
  },
  inicio: {
    label: 'Desde',
    class: 'custom-select',
    type: 'text',
    formControlName: "inicioViernes"
  },
  final: {
    label: 'Desde',
    class: 'custom-select',
    type: 'text',
    formControlName: "finalViernes"
  }
},
  ];

  guardarCambios() {
    this.crearUsuario(this.form.value);
  }
  crearUsuario(profesional: any) {
    const user = profesional;
    this.profesionalesservice.agregar(user).subscribe((respuesta: any) => {
      Swal.fire(
        'Exito',
        'El usuario de nombre ' + respuesta.profesional.nombre + ' se creo con exito',
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
