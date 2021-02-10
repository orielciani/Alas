import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SERVER_URL } from '../config/config';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(public usuarioservice: UsuarioService, public router: Router, public http: HttpClient) { }
token: string = this.usuarioservice.token;
// Cargar proveedores
cargarProveedores(desde: number = 0) {
  let url = SERVER_URL + 'proveedores?desde=' + desde+ '?token=' + this.token;
  return this.http.get(url);
}
// Cargar proveedor
cargarProveedor(id: string) {
  let url = SERVER_URL + 'proveedores/proveedor/' + id+ '?token=' + this.token;;
  return this.http.get(url);
}
// Crear proveedor
crearProveedor(proveedor: any) {
  let url = SERVER_URL + 'proveedores/agregar' + '?token=' + this.token;
  return this.http.post(url, proveedor);
}
// Editar proveedor
editarProveedor(id: string, proveedor: any) {
  let url = SERVER_URL + 'proveedores/actualizar/' + id + '?token=' + this.token;
  return this.http.put(url, proveedor);
}
// Eliminar proveedor
eliminarProveedor(id: string) {
  let url = SERVER_URL + 'proveedores/eliminar/' + id + '?token=' + this.token;
  return this.http.delete(url);
}
}
