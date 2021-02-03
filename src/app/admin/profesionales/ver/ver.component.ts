import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { ProfesionalesService } from 'src/app/services/profesionales.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss']
})
export class VerComponent implements OnInit {

  constructor(
    public usuarioservice: UsuarioService,
    public profesionalesservice: ProfesionalesService,
    public router: Router,
    public activatedroute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.params['id'];
    this.profesionalesservice.cargarUno(id).subscribe((respuesta: any) => {
      console.log(respuesta);
      this.profesional = respuesta.profesional;
      if ( this.profesional.asistencia[0].lunes[0].inicioLunes > 0 ) {
        this.lunesHoras = (this.profesional.asistencia[0].lunes[0].finalLunes - this.profesional.asistencia[0].lunes[0].inicioLunes)
      }
      if ( this.profesional.asistencia[0].martes[0].inicioMartes > 0 ) {
        this.martesHoras = (this.profesional.asistencia[0].martes[0].finalMartes - this.profesional.asistencia[0].martes[0].inicioMartes)
      }
      if ( this.profesional.asistencia[0].miercoles[0].inicioMiercoles > 0 ) {
        this.miercolesHoras = (this.profesional.asistencia[0].miercoles[0].finalMiercoles - this.profesional.asistencia[0].miercoles[0].inicioMiercoles)
      }
      if ( this.profesional.asistencia[0].jueves[0].inicioJueves > 0 ) {
        this.juevesHoras = (this.profesional.asistencia[0].jueves[0].finalJueves - this.profesional.asistencia[0].jueves[0].inicioJueves)
      }
      if ( this.profesional.asistencia[0].viernes[0].inicioviernes > 0 ) {
        this.viernesHoras = (this.profesional.asistencia[0].viernes[0].finalViernes - this.profesional.asistencia[0].viernes[0].inicioViernes)
      }
      this.totalHorasSemanales = this.lunesHoras + this.martesHoras + this.miercolesHoras + this.juevesHoras + this.viernesHoras;
    }, (error: any ) => {
      console.log(error);
      Swal.fire(
        'Error',
        error.error.message,
        'error'
      );
      this.router.navigate(['/admin/usuarios']);
    });
  }
  profesional: any;
  lunesHoras: number = 0;
  martesHoras: number = 0;
  miercolesHoras: number = 0;
  juevesHoras: number = 0;
  viernesHoras: number = 0;
  totalHorasSemanales: number = 0;
}
