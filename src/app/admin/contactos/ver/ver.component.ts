import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { ContactosService } from 'src/app/services/contactos.service';
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
    public contactosservice: ContactosService,
    public router: Router,
    public activatedroute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.params['id'];
    this.contactosservice.cargarUno(id).subscribe((respuesta: any) => {
      console.log(respuesta);
      this.contacto = respuesta.contacto;
    }, (error: any ) => {
      console.log(error);
      Swal.fire(
        'Error',
        error.error.message,
        'error'
      );
      this.router.navigate(['/admin/contactos']);
    });
  }
  contacto: any;
}
