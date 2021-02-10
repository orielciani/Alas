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
      this.profesional = respuesta.profesional;
      if ( this.profesional.inicioLunes >= 0) {
        this.lunesHoras = (this.profesional.finalLunes - this.profesional.inicioLunes)
      }
      if ( this.profesional.inicioMartes >= 0) {
        this.martesHoras = (this.profesional.finalMartes - this.profesional.inicioMartes)
      }
      if ( this.profesional.inicioMiercoles >= 0) {
        this.miercolesHoras = (this.profesional.finalMiercoles - this.profesional.inicioMiercoles)
      }
      if ( this.profesional.inicioJueves >= 0) {
        this.juevesHoras = (this.profesional.finalJueves - this.profesional.inicioJueves)
      }
      if ( this.profesional.inicioViernes >= 0) {
        this.viernesHoras = (this.profesional.finalViernes - this.profesional.inicioViernes)
      }
      this.totalHorasSemanales = this.lunesHoras + this.martesHoras + this.miercolesHoras + this.juevesHoras + this.viernesHoras
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
