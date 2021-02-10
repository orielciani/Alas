import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from "../../../models/usuario.model";
import Swal from 'sweetalert2'
import { ConcurrentesService } from 'src/app/services/concurrentes.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  form: FormGroup;
  constructor(public usuarioservice: UsuarioService,
    public concurrentesservice: ConcurrentesService) {
    this.form = new FormGroup({
      nombre: new FormControl(""),
      dni: new FormControl(""),
      fechadenacimiento: new FormControl(""),
      sexo: new FormControl(""),
      localidad: new FormControl(""),
      direccion: new FormControl(""),
      barrio: new FormControl(""),
      provincia: new FormControl(""),
      estadocivil: new FormControl(""),
      telefono: new FormControl(""),
      celular: new FormControl(""),
      correo: new FormControl(""),
      cuil: new FormControl(""),
      cobertura: new FormControl(""),
      numerobenef: new FormControl(""),
      alta: new FormControl(""),
      baja: new FormControl(""),
      cud: new FormControl(""),
      vencimiento: new FormControl(""),
      imagen: new FormControl(""),
      jornada: new FormControl(""),
      diagnostico: new FormControl(""),
      tratamiento: new FormControl(""),
      equiporeferencia: new FormControl(""),
      nombrefamiliar: new FormControl(""),
      vinculofamiliar: new FormControl(""),
      direccionfamiliar: new FormControl(""),
      dnifamiliar: new FormControl(""),
      responsablefamiliar: new FormControl(""),
      fechanacimientofamiliar: new FormControl(""),
      estadocivilfamiliar: new FormControl(""),
      telefonofamiliar: new FormControl(""),
      celularfamiliar: new FormControl(""),
      correofamiliar: new FormControl(""),
      ocupacionfamiliar: new FormControl(""),
      convivientefamiliar: new FormControl(""),
      nombretransporte: new FormControl(""),
      contactotransporte: new FormControl(""),
      cuittransporte: new FormControl(""),
      direcciontransporte: new FormControl(""),
      ibtransporte: new FormControl(""),
      situaciontransporte: new FormControl(""),
      telefonotransporte: new FormControl(""),
      celulartransporte: new FormControl(""),
      correotransporte: new FormControl(""),
      tieneasistente: new FormControl(""),
      nombreasistente: new FormControl(""),
      cuitasistente: new FormControl(""),
      direccionasistente: new FormControl(""),
      telefonoasistente: new FormControl(""),
      celularasistente: new FormControl(""),
      correoasistente: new FormControl(""),
      cuilasistente: new FormControl(""),
      ibasistente: new FormControl(""),
      profesionasistente: new FormControl(""),
      mananalunes: new FormControl(""),
      mananamartes: new FormControl(""),
      mananamiercoles: new FormControl(""),
      mananajueves: new FormControl(""),
      mananaviernes: new FormControl(""),
      tardelunes: new FormControl(""),
      tardemartes: new FormControl(""),
      tardemiercoles: new FormControl(""),
      tardejueves: new FormControl(""),
      tardeviernes: new FormControl(""),
      tmananalunes: new FormControl(""),
      tmananamartes: new FormControl(""),
      tmananamiercoles: new FormControl(""),
      tmananajueves: new FormControl(""),
      tmananaviernes: new FormControl(""),
      ttardelunes: new FormControl(""),
      ttardemartes: new FormControl(""),
      ttardemiercoles: new FormControl(""),
      ttardejueves: new FormControl(""),
      ttardeviernes: new FormControl(""),
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
      label: 'Fecha de nacimiento',
      class: 'form-control',
      type: 'text',
      formControlName: "fechadenacimiento"
    },
    {
      label: 'Sexo',
      class: 'form-control',
      type: 'text',
      formControlName: "sexo"
    },
    {
      label: 'Direccion',
      class: 'form-control',
      type: 'text',
      formControlName: "direccion"
    },
    {
      label: 'Barrio',
      class: 'form-control',
      type: 'text',
      formControlName: "barrio"
    },
    {
      label: 'Localidad',
      class: 'form-control',
      type: 'text',
      formControlName: "localidad"
    },
    {
      label: 'Estado Civil',
      class: 'form-control',
      type: 'text',
      formControlName: "estadocivil"
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
      label: 'CUIL',
      class: 'form-control',
      type: 'text',
      formControlName: "cuil"
    },
    {
      label: 'Cobertura',
      class: 'form-control',
      type: 'text',
      formControlName: "cobertura"
    },
    {
      label: 'Numero de beneficio',
      class: 'form-control',
      type: 'text',
      formControlName: "numerobenef"
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
      label: 'CUD',
      class: 'form-control',
      type: 'text',
      formControlName: "cud"
    },
    {
      label: 'Vencimiento',
      class: 'form-control',
      type: 'text',
      formControlName: "vencimiento"
    },
    {
      label: 'Jornada',
      class: 'form-control',
      type: 'text',
      formControlName: "jornada"
    },
    {
      label: 'Diagnostico',
      class: 'form-control',
      type: 'text',
      formControlName: "diagnostico"
    },
    {
      label: 'Tratamiento',
      class: 'form-control',
      type: 'text',
      formControlName: "tratamiento"
    },
    {
      label: 'Equipo de referencia',
      class: 'form-control',
      type: 'text',
      formControlName: "equiporeferencia"
    },
    {
      label: 'Nombre del familiar',
      class: 'form-control',
      type: 'text',
      formControlName: "nombrefamiliar"
    },
    {
      label: 'El responsable el familiar',
      class: 'form-control',
      type: 'text',
      formControlName: "responsablefamiliar"
    },
    {
      label: 'Vinculo del familiar',
      class: 'form-control',
      type: 'text',
      formControlName: "vinculofamiliar"
    },
    {
      label: 'Direccion del familiar',
      class: 'form-control',
      type: 'text',
      formControlName: "direccionfamiliar"
    },
    {
      label: 'DNi del familiar',
      class: 'form-control',
      type: 'text',
      formControlName: "dnifamiliar"
    },
    {
      label: 'Fecha de nacimiento del familiar',
      class: 'form-control',
      type: 'text',
      formControlName: "fechanacimientofamiliar"
    },
    {
      label: 'Estado Civil del familiar',
      class: 'form-control',
      type: 'text',
      formControlName: "estadocivilfamiliar"
    },
    {
      label: 'Telefono del familiar',
      class: 'form-control',
      type: 'text',
      formControlName: "telefonofamiliar"
    },
    {
      label: 'Celular del familiar',
      class: 'form-control',
      type: 'text',
      formControlName: "celularfamiliar"
    },
    {
      label: 'Email del familiar',
      class: 'form-control',
      type: 'text',
      formControlName: "correofamiliar"
    },
    {
      label: 'Ocupacion del familiar',
      class: 'form-control',
      type: 'text',
      formControlName: "ocupacionfamiliar"
    },
    {
      label: 'Conviviente del familiar',
      class: 'form-control',
      type: 'text',
      formControlName: "ocupacionfamiliar"
    },
    {
      label: 'Nombre del transporte',
      class: 'form-control',
      type: 'text',
      formControlName: "nombretransporte"
    },
    {
      label: 'Contacto del transporte',
      class: 'form-control',
      type: 'text',
      formControlName: "contactotransporte"
    },
    {
      label: 'CUIT del transporte',
      class: 'form-control',
      type: 'text',
      formControlName: "cuittransporte"
    },
    {
      label: 'Direccion del transporte',
      class: 'form-control',
      type: 'text',
      formControlName: "direcciontransporte"
    },
    {
      label: 'Ingresos brutos del transporte',
      class: 'form-control',
      type: 'text',
      formControlName: "ibtransporte"
    },
    {
      label: 'Situacion del transporte',
      class: 'form-control',
      type: 'text',
      formControlName: "situaciontransporte"
    },
    {
      label: 'Telefono del transporte',
      class: 'form-control',
      type: 'text',
      formControlName: "telefonotransporte"
    },
    {
      label: 'Celular del transporte',
      class: 'form-control',
      type: 'text',
      formControlName: "celulartransporte"
    },
    {
      label: 'Email del transporte',
      class: 'form-control',
      type: 'text',
      formControlName: "correotransporte"
    },
    {
      label: 'Tiene asistente',
      class: 'form-control',
      type: 'text',
      formControlName: "tieneasistente"
    },
    {
      label: 'Nombre del asistente',
      class: 'form-control',
      type: 'text',
      formControlName: "nombreasistente"
    },
    {
      label: 'CUIT del asistente',
      class: 'form-control',
      type: 'text',
      formControlName: "cuitasistente"
    },
    {
      label: 'Direccion del asistente',
      class: 'form-control',
      type: 'text',
      formControlName: "direccionasistente"
    },
    {
      label: 'Telefono del asistente',
      class: 'form-control',
      type: 'text',
      formControlName: "telefonoasistente"
    },
    {
      label: 'Celular del asistente',
      class: 'form-control',
      type: 'text',
      formControlName: "celularasistente"
    },
    {
      label: 'Email del asistente',
      class: 'form-control',
      type: 'text',
      formControlName: "correoasistente"
    },
    {
      label: 'Cuil del asistente',
      class: 'form-control',
      type: 'text',
      formControlName: "cuilasistente"
    },
    {
      label: 'Ingresos Brutos del asistente',
      class: 'form-control',
      type: 'text',
      formControlName: "ibasistente"
    },
    {
      label: 'Profesion del asistente',
      class: 'form-control',
      type: 'text',
      formControlName: "profesionasistente"
    },
    {
      label: 'Horario a la mañana del lunes',
      class: 'form-control',
      type: 'text',
      formControlName: "mananalunes"
    },
    {
      label: 'Horario a la mañana del martes',
      class: 'form-control',
      type: 'text',
      formControlName: "mananamartes"
    },
    {
      label: 'Horario a la mañana del miercoles',
      class: 'form-control',
      type: 'text',
      formControlName: "mananamiercoles"
    },
    {
      label: 'Horario a la mañana del jueves',
      class: 'form-control',
      type: 'text',
      formControlName: "mananajueves"
    },
    {
      label: 'Horario a la mañana del viernes',
      class: 'form-control',
      type: 'text',
      formControlName: "mananaviernes"
    },
    {
      label: 'Horario a la tarde del lunes',
      class: 'form-control',
      type: 'text',
      formControlName: "tardelunes"
    },
    {
      label: 'Horario a la tarde del martes',
      class: 'form-control',
      type: 'text',
      formControlName: "tardemartes"
    },
    {
      label: 'Horario a la tarde del miercoles',
      class: 'form-control',
      type: 'text',
      formControlName: "tardemiercoles"
    },
    {
      label: 'Horario a la tarde del jueves',
      class: 'form-control',
      type: 'text',
      formControlName: "tardejueves"
    },
    {
      label: 'Horario a la tarde del viernes',
      class: 'form-control',
      type: 'text',
      formControlName: "tardeviernes"
    },
    {
      label: 'Horario del taller a la mañana del lunes',
      class: 'form-control',
      type: 'text',
      formControlName: "tmananalunes"
    },
    {
      label: 'Horario del taller a la mañana del martes',
      class: 'form-control',
      type: 'text',
      formControlName: "tmananamartes"
    },
    {
      label: 'Horario del taller a la mañana del miercoles',
      class: 'form-control',
      type: 'text',
      formControlName: "tmananamiercoles"
    },
    {
      label: 'Horario del taller a la mañana del jueves',
      class: 'form-control',
      type: 'text',
      formControlName: "tmananajueves"
    },
    {
      label: 'Horario del taller a la mañana del viernes',
      class: 'form-control',
      type: 'text',
      formControlName: "tmananaviernes"
    },
    {
      label: 'Horario del taller a la tarde del lunes',
      class: 'form-control',
      type: 'text',
      formControlName: "ttardelunes"
    },
    {
      label: 'Horario del taller a la tarde del martes',
      class: 'form-control',
      type: 'text',
      formControlName: "ttardemartes"
    },
    {
      label: 'Horario del taller a la tarde del miercoles',
      class: 'form-control',
      type: 'text',
      formControlName: "ttardemiercoles"
    },
    {
      label: 'Horario del taller a la tarde del jueves',
      class: 'form-control',
      type: 'text',
      formControlName: "ttardejueves"
    },
    {
      label: 'Horario del taller a la tarde del viernes',
      class: 'form-control',
      type: 'text',
      formControlName: "ttardeviernes"
    },

   ]

  guardarCambios() {
    this.crearUsuario(this.form.value);
  }
  crearUsuario(concurrente: any) {
    const user = concurrente;
    this.concurrentesservice.agregar(user).subscribe((respuesta: any) => {
      Swal.fire(
        'Exito',
        'El concurrente de nombre ' + respuesta.concurrente.nombre + ' se agrego con exito',
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
