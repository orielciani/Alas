import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
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
    public router: Router,
    public activatedroute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.params['id'];
    this.usuarioservice.cargarUsuario(id).subscribe((respuesta: any) => {
      this.usuario = respuesta.usuario;
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
  usuario!: Usuario;
}
