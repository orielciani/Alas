import { Component, defineInjectable, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'
import { ProfesionalesService } from 'src/app/services/profesionales.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  form: FormGroup;
  profesional: any;
  id = "";
  hora: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  constructor(
    public usuarioservice: UsuarioService,
    public profesionalesservice: ProfesionalesService,
    public activatedroute: ActivatedRoute
  ) {
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
      inicioLunes: new FormControl(""),
      finalLunes: new FormControl(""),
      actividadMartes: new FormControl(""),
      inicioMartes: new FormControl(""),
      finalMartes: new FormControl(""),
      actividadMiercoles: new FormControl(""),
      inicioMiercoles: new FormControl(""),
      finalMiercoles: new FormControl(""),
      actividadJueves: new FormControl(""),
      inicioJueves: new FormControl(""),
      finalJueves: new FormControl(""),
      actividadViernes: new FormControl(""),
      inicioViernes: new FormControl(""),
      finalViernes: new FormControl(""),
    });
  }
  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.profesionalesservice.cargarUno(this.id).subscribe((respuesta: any) => {
      this.profesional = respuesta.profesional;
      this.setValue(
        respuesta.profesional.nombre || '', respuesta.profesional.nacimiento || '',
        respuesta.profesional.provincia || '', respuesta.profesional.ciudad || '',
        respuesta.profesional.direccion || '', respuesta.profesional.telefono || '',
        respuesta.profesional.celular || '', respuesta.profesional.profesion || '',
        respuesta.profesional.correo || '', respuesta.profesional.cuit || '',
        respuesta.profesional.dni || '', respuesta.profesional.ib || '',
        respuesta.profesional.cbu || '',
        respuesta.profesional.alta || '', respuesta.profesional.baja || '',
        respuesta.profesional.seguro || '',
        respuesta.profesional.actividadLunes || '',
        respuesta.profesional.inicioLunes || '',
        respuesta.profesional.finalLunes || '',
        respuesta.profesional.actividadMartes || '',
        respuesta.profesional.inicioMartes || '',
        respuesta.profesional.finalMartes || '',
        respuesta.profesional.actividadMiercoles || '',
        respuesta.profesional.inicioMiercoles || '',
        respuesta.profesional.finalMiercoles || '',
        respuesta.profesional.actividadJueves || '',
        respuesta.profesional.inicioJueves || '',
        respuesta.profesional.finalJueves || '',
        respuesta.profesional.actividadViernes || '',
        respuesta.profesional.inicioViernes || '',
        respuesta.profesional.finalViernes || '',
         );
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
]

  setValue(nombre: string, nacimiento: string, provincia: string, ciudad: string,
    direccion: string, telefono: string, celular: string, profesion: string, correo: string, cuit: string, dni: string,
    ib: string, cbu: string, alta: string, baja: string, seguro: string,
    actividadLunes: string, inicioLunes: string, finalLunes: string,
    actividadMartes: string, inicioMartes: string, finalMartes: string,
    actividadMiercoles: string, inicioMiercoles: string, finalMiercoles: string,
    actividadJueves: string, inicioJueves: string, finalJueves: string,
    actividadViernes: string, inicioViernes: string, finalViernes: string,
    ) {
    let user = {
      nombre: nombre,
      nacimiento: nacimiento,
      provincia: provincia,
      ciudad: ciudad,
      direccion: direccion,
      telefono: telefono,
      celular: celular,
      profesion: profesion,
      correo: correo,
      cuit: cuit,
      dni: dni,
      ib: ib,
      cbu: cbu,
      alta: alta,
      baja: baja,
      seguro: seguro,
      actividadLunes: actividadLunes,
      inicioLunes: inicioLunes,
      finalLunes: finalLunes,
      actividadMartes: actividadMartes,
      inicioMartes: inicioMartes,
      finalMartes: finalMartes,
      actividadMiercoles: actividadMiercoles,
      inicioMiercoles: inicioMiercoles,
      finalMiercoles: finalMiercoles,
      actividadJueves: actividadJueves,
      inicioJueves: inicioJueves,
      finalJueves: finalJueves,
      actividadViernes: actividadViernes,
      inicioViernes: inicioViernes,
      finalViernes: finalViernes,

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
  editarUsuario(profesional: any) {
    this.profesionalesservice.editar(this.id, profesional).subscribe((respuesta: any) => {
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
