import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SERVER_URL } from '../config/config';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService{
  usuario: Usuario | undefined;
  token: string = '';
  admin = false;
  constructor(
    public http: HttpClient,
    public router: Router) {
      this.cargarStorage();
    }

    // LOGEARSE
  login(usuario: Usuario) {
    let url = SERVER_URL + "login";
    return this.http.post(url, usuario).pipe(map((respuesta: any) => {
      this.guardarStorage(respuesta.id, respuesta.token, respuesta.usuario);
      this.estoyLogeado();
      this.router.navigate(["/admin/concurrentes"]);
      return true;
    }))
  }
  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.token  = token;
    this.usuario = usuario;
    if (this.usuario.role === 'ADMIN_ROLE') {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }
  estoyLogeado() {
    return this.token.length > 5 ? true : false;
  }
  // ELIMINAR LOCALSTORAGE LOGOUT
  logout() {
    this.usuario = undefined;
    this.token = "";
    this.admin = false;
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    this.router.navigate(["/home"]);
  }
  // CARGAR STORAGE
  cargarStorage() {
    if (!localStorage.getItem("token")) {
      this.router.navigate(["/login"]);
      return;
    }
    if (!localStorage.getItem("usuario")) {
      this.router.navigate(["/login"]);
      return;
    }
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token") || '';
      this.usuario = JSON.parse(localStorage.getItem("usuario") || '');
      if (this.usuario) {
        if ( this.usuario.role === 'ADMIN_ROLE') {
          this.admin = true;
        } else {
          this.admin = false;
        }
      }
    } else {
      this.token = "";
      this.usuario = undefined;
      this.admin = false;
    }
  }
  renuevaToken() {
    let url = SERVER_URL + "login/renuevatoken?token=" + this.token;
    return this.http.get(url).pipe(map((respuesta: any) => {
      this.token = respuesta.token;
      localStorage.setItem('token', this.token);
      return true;
    }, (err: any) => {
      console.log(err);
      return false;
    }))


  }
  // TOMAR TODOS LOS USUARIOS
    cargarUsuarios(desde: number = 0) {
      let url = SERVER_URL + "usuarios?desde=" + desde + '&token=' + this.token;
      return this.http.get(url);
    }
    // TOMAR SOLO UN USUARIO
  cargarUsuario(id: string) {
    let url = SERVER_URL + "usuarios/usuario/" + id + '/?token=' + this.token;
    return this.http.get(url);
  }
    // TOMAR SOLO UN USUARIO
  crearUsuario(usuario: Usuario) {
    let url = SERVER_URL + "usuarios/crear?token=" + this.token;
    return this.http.post(url, usuario);
  }
  // MODIFICAR USUARIO
  editarUsuario(id: string, usuario: Usuario) {
    let url = SERVER_URL + "usuarios/actualizar/" + id + '/?token=' + this.token;
    return this.http.put(url, usuario);
  }
  // ELIMINAR USUARIO
  eliminarUsuario(id: string) {
    let url = SERVER_URL + "usuarios/usuario/eliminar/" + id + '/?token=' + this.token;
    return this.http.delete(url);
  }
}
