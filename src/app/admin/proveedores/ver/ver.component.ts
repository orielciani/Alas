import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss']
})
export class VerComponent implements OnInit {

  constructor(
    public proveedorservice: ProveedorService,
    public router: Router,
    public activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.params['id'];
    this.proveedorservice.cargarProveedor(id).subscribe((respuesta: any) => {
      this.proveedor = respuesta.proveedor;
    });
  }
  proveedor!: any;
}
