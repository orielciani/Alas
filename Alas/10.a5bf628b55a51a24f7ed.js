(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{TDbd:function(e,o,r){"use strict";r.r(o),r.d(o,"ProveedoresModule",function(){return _});var t=r("ofXK"),i=r("tyNb"),n=r("B0km"),b=r("3Pt+"),c=r("PSD3"),a=r.n(c),d=r("fXoL"),l=r("0np6"),s=r("on2l"),p=r("tk/3");let v=(()=>{class e{constructor(e,o,r){this.usuarioservice=e,this.router=o,this.http=r,this.token=this.usuarioservice.token}cargarProveedores(e=0){return this.http.get(l.a+"proveedores?desde="+e+"?token="+this.token)}cargarProveedor(e){return this.http.get(l.a+"proveedores/proveedor/"+e+"?token="+this.token)}crearProveedor(e){return this.http.post(l.a+"proveedores/agregar?token="+this.token,e)}editarProveedor(e,o){return this.http.put(l.a+"proveedores/actualizar/"+e+"?token="+this.token,o)}eliminarProveedor(e){return this.http.delete(l.a+"proveedores/eliminar/"+e+"?token="+this.token)}}return e.\u0275fac=function(o){return new(o||e)(d.Qb(s.a),d.Qb(i.b),d.Qb(p.a))},e.\u0275prov=d.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),u=(()=>{class e{constructor(e){this.proveedorservice=e,this.form=new b.d({denominacion:new b.b,contacto:new b.b,correo:new b.b,celular:new b.b,telefono:new b.b,direccion:new b.b,cuit:new b.b,provincia:new b.b,ciudad:new b.b,cp:new b.b,ci:new b.b,actividad:new b.b})}guardarCambios(){this.crearProveedor(this.form.value)}crearProveedor(e){this.proveedorservice.crearProveedor(e).subscribe(e=>{a.a.fire("Exito","El proveedor "+e.proveedor.denominacion+" se agrego con exito","success")},e=>{e.error.error.message&&a.a.fire("Error",e.error.error.message,"error")})}}return e.\u0275fac=function(o){return new(o||e)(d.Jb(v))},e.\u0275cmp=d.Db({type:e,selectors:[["app-crear"]],decls:62,vars:1,consts:[[1,"animate__animated","animate__fadeIn",3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["for","role"],["type","text","placeholder","Denominacion","formControlName","denominacion",1,"form-control"],["type","email","placeholder","Contacto","formControlName","contacto",1,"form-control"],["type","text","placeholder","Celular","formControlName","celular",1,"form-control"],["type","email","placeholder","Telefono","formControlName","telefono",1,"form-control"],["type","text","placeholder","Direccion","formControlName","direccion",1,"form-control"],["type","email","placeholder","Cuit","formControlName","cuit",1,"form-control"],["type","text","placeholder","Provincia","formControlName","provincia",1,"form-control"],["type","email","placeholder","Ciudad","formControlName","ciudad",1,"form-control"],["type","text","placeholder","Codigo postal","formControlName","cp",1,"form-control"],["type","email","placeholder","ci","formControlName","ci",1,"form-control"],["type","email","placeholder","Actividad","formControlName","actividad",1,"form-control"],["type","email","placeholder","Email","formControlName","correo",1,"form-control"],["type","button","routerLink","/admin/proveedores",1,"btn","btn-danger","w-100"],["type","submit",1,"btn","btn-primary","w-100"]],template:function(e,o){1&e&&(d.Mb(0,"form",0),d.Tb("ngSubmit",function(){return o.guardarCambios()}),d.Mb(1,"div",1),d.Mb(2,"div",2),d.Mb(3,"label",3),d.hc(4,"Denominacion:"),d.Lb(),d.Kb(5,"input",4),d.Lb(),d.Mb(6,"div",2),d.Mb(7,"label",3),d.hc(8,"Contacto:"),d.Lb(),d.Kb(9,"input",5),d.Lb(),d.Lb(),d.Mb(10,"div",1),d.Mb(11,"div",2),d.Mb(12,"label",3),d.hc(13,"Celular:"),d.Lb(),d.Kb(14,"input",6),d.Lb(),d.Mb(15,"div",2),d.Mb(16,"label",3),d.hc(17,"Telefono:"),d.Lb(),d.Kb(18,"input",7),d.Lb(),d.Lb(),d.Mb(19,"div",1),d.Mb(20,"div",2),d.Mb(21,"label",3),d.hc(22,"Direccion:"),d.Lb(),d.Kb(23,"input",8),d.Lb(),d.Mb(24,"div",2),d.Mb(25,"label",3),d.hc(26,"Cuit:"),d.Lb(),d.Kb(27,"input",9),d.Lb(),d.Lb(),d.Mb(28,"div",1),d.Mb(29,"div",2),d.Mb(30,"label",3),d.hc(31,"Provincia:"),d.Lb(),d.Kb(32,"input",10),d.Lb(),d.Mb(33,"div",2),d.Mb(34,"label",3),d.hc(35,"Ciudad:"),d.Lb(),d.Kb(36,"input",11),d.Lb(),d.Lb(),d.Mb(37,"div",1),d.Mb(38,"div",2),d.Mb(39,"label",3),d.hc(40,"Codigo Postal:"),d.Lb(),d.Kb(41,"input",12),d.Lb(),d.Mb(42,"div",2),d.Mb(43,"label",3),d.hc(44,"ci:"),d.Lb(),d.Kb(45,"input",13),d.Lb(),d.Lb(),d.Mb(46,"div",1),d.Mb(47,"div",2),d.Mb(48,"label",3),d.hc(49,"Actividad:"),d.Lb(),d.Kb(50,"input",14),d.Lb(),d.Mb(51,"div",2),d.Mb(52,"label",3),d.hc(53,"Correo:"),d.Lb(),d.Kb(54,"input",15),d.Lb(),d.Lb(),d.Mb(55,"div",1),d.Mb(56,"div",2),d.Mb(57,"button",16),d.hc(58," Volver "),d.Lb(),d.Lb(),d.Mb(59,"div",2),d.Mb(60,"button",17),d.hc(61," Guardar "),d.Lb(),d.Lb(),d.Lb(),d.Lb()),2&e&&d.Yb("formGroup",o.form)},directives:[b.m,b.g,b.e,b.a,b.f,b.c,i.c],styles:[""]}),e})();function m(e,o){if(1&e){const e=d.Nb();d.Mb(0,"form",1),d.Tb("ngSubmit",function(){return d.dc(e),d.Vb().guardarCambios()}),d.Mb(1,"div",2),d.Mb(2,"div",3),d.Mb(3,"label",4),d.hc(4,"Denominacion:"),d.Lb(),d.Kb(5,"input",5),d.Lb(),d.Mb(6,"div",3),d.Mb(7,"label",4),d.hc(8,"Contacto:"),d.Lb(),d.Kb(9,"input",6),d.Lb(),d.Lb(),d.Mb(10,"div",2),d.Mb(11,"div",3),d.Mb(12,"label",4),d.hc(13,"Celular:"),d.Lb(),d.Kb(14,"input",7),d.Lb(),d.Mb(15,"div",3),d.Mb(16,"label",4),d.hc(17,"Telefono:"),d.Lb(),d.Kb(18,"input",8),d.Lb(),d.Lb(),d.Mb(19,"div",2),d.Mb(20,"div",3),d.Mb(21,"label",4),d.hc(22,"Direccion:"),d.Lb(),d.Kb(23,"input",9),d.Lb(),d.Mb(24,"div",3),d.Mb(25,"label",4),d.hc(26,"Cuit:"),d.Lb(),d.Kb(27,"input",10),d.Lb(),d.Lb(),d.Mb(28,"div",2),d.Mb(29,"div",3),d.Mb(30,"label",4),d.hc(31,"Provincia:"),d.Lb(),d.Kb(32,"input",11),d.Lb(),d.Mb(33,"div",3),d.Mb(34,"label",4),d.hc(35,"Ciudad:"),d.Lb(),d.Kb(36,"input",12),d.Lb(),d.Lb(),d.Mb(37,"div",2),d.Mb(38,"div",3),d.Mb(39,"label",4),d.hc(40,"Codigo Postal:"),d.Lb(),d.Kb(41,"input",13),d.Lb(),d.Mb(42,"div",3),d.Mb(43,"label",4),d.hc(44,"ci:"),d.Lb(),d.Kb(45,"input",14),d.Lb(),d.Lb(),d.Mb(46,"div",2),d.Mb(47,"div",3),d.Mb(48,"label",4),d.hc(49,"Actividad:"),d.Lb(),d.Kb(50,"input",15),d.Lb(),d.Mb(51,"div",3),d.Mb(52,"label",4),d.hc(53,"Correo:"),d.Lb(),d.Kb(54,"input",16),d.Lb(),d.Lb(),d.Mb(55,"div",2),d.Mb(56,"div",3),d.Mb(57,"button",17),d.hc(58," Volver "),d.Lb(),d.Lb(),d.Mb(59,"div",3),d.Mb(60,"button",18),d.hc(61," Guardar "),d.Lb(),d.Lb(),d.Lb(),d.Lb()}if(2&e){const e=d.Vb();d.Yb("formGroup",e.form)}}let h=(()=>{class e{constructor(e,o){this.proveedorservice=e,this.activatedroute=o,this.id="",this.form=new b.d({denominacion:new b.b,contacto:new b.b,correo:new b.b,celular:new b.b,telefono:new b.b,direccion:new b.b,cuit:new b.b,provincia:new b.b,ciudad:new b.b,cp:new b.b,ci:new b.b,actividad:new b.b})}ngOnInit(){this.id=this.activatedroute.snapshot.params.id,this.proveedorservice.cargarProveedor(this.id).subscribe(e=>{this.proveedor=e.proveedor,this.setValue(e.proveedor.denominacion,e.proveedor.contacto,e.proveedor.correo,e.proveedor.celular,e.proveedor.telefono,e.proveedor.direccion,e.proveedor.cuit,e.proveedor.provincia,e.proveedor.ciudad,e.proveedor.cp,e.proveedor.ci,e.proveedor.actividad)})}setValue(e,o,r,t,i,n,b,c,a,d,l,s){this.form.setValue({denominacion:e,contacto:o,correo:r,celular:t,telefono:i,direccion:n,cuit:b,provincia:c,ciudad:a,cp:d,ci:l,actividad:s})}guardarCambios(){a.a.fire({title:"\xbfSeguro que quieres hacerlo?",text:"No podras revertir esta accion",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, modificar"}).then(e=>{e.isConfirmed&&this.editarProveedor(this.form.value)})}editarProveedor(e){this.proveedorservice.editarProveedor(this.id,e).subscribe(e=>a.a.fire("Modificado","Se modifico con exito","success"),e=>{e.error.error.message&&a.a.fire("Error1 ",e.error.error.message,"error")})}}return e.\u0275fac=function(o){return new(o||e)(d.Jb(v),d.Jb(i.a))},e.\u0275cmp=d.Db({type:e,selectors:[["app-editar"]],decls:1,vars:1,consts:[["class","animate__animated animate__fadeIn",3,"formGroup","ngSubmit",4,"ngIf"],[1,"animate__animated","animate__fadeIn",3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["for","role"],["type","text","placeholder","Denominacion","formControlName","denominacion",1,"form-control"],["type","email","placeholder","Contacto","formControlName","contacto",1,"form-control"],["type","text","placeholder","Celular","formControlName","celular",1,"form-control"],["type","email","placeholder","Telefono","formControlName","telefono",1,"form-control"],["type","text","placeholder","Direccion","formControlName","direccion",1,"form-control"],["type","email","placeholder","Cuit","formControlName","cuit",1,"form-control"],["type","text","placeholder","Provincia","formControlName","provincia",1,"form-control"],["type","email","placeholder","Ciudad","formControlName","ciudad",1,"form-control"],["type","text","placeholder","Codigo postal","formControlName","cp",1,"form-control"],["type","email","placeholder","ci","formControlName","ci",1,"form-control"],["type","email","placeholder","Actividad","formControlName","actividad",1,"form-control"],["type","email","placeholder","Email","formControlName","correo",1,"form-control"],["type","button","routerLink","/admin/proveedores",1,"btn","btn-danger","btn-block"],["type","submit",1,"btn","btn-primary","btn-block"]],template:function(e,o){1&e&&d.gc(0,m,62,1,"form",0),2&e&&d.Yb("ngIf",o.proveedor)},directives:[t.j,b.m,b.g,b.e,b.a,b.f,b.c,i.c],styles:[".row[_ngcontent-%COMP%]{margin:10px 0 0}"]}),e})();function f(e,o){1&e&&(d.Mb(0,"div",18),d.Mb(1,"div",2),d.Mb(2,"h5",19),d.Kb(3,"i",20),d.hc(4," Cargando..."),d.Lb(),d.Mb(5,"p",21),d.hc(6,"Si ve este mensaje es porque se esta descargando los datos, si la sigue viendo despues de un tiempo porfavor reinicie la pagina."),d.Lb(),d.Lb(),d.Lb())}function L(e,o){if(1&e&&(d.Mb(0,"a",22),d.hc(1),d.Lb()),2&e){const e=d.Vb();d.yb(1),d.ic(e.botonCrear)}}const M=function(e){return[e]};function g(e,o){if(1&e&&(d.Mb(0,"a",28),d.Kb(1,"i",29),d.Lb()),2&e){const e=d.Vb().$implicit;d.Yb("routerLink",d.Zb(1,M,"editar/"+e._id))}}function y(e,o){if(1&e){const e=d.Nb();d.Mb(0,"button",30),d.Tb("click",function(){d.dc(e);const o=d.Vb().$implicit;return d.Vb().eliminar(o)}),d.Kb(1,"i",31),d.Lb()}}function C(e,o){if(1&e&&(d.Mb(0,"tr"),d.Mb(1,"td"),d.hc(2),d.Lb(),d.Mb(3,"td"),d.hc(4),d.Lb(),d.Mb(5,"td",11),d.hc(6),d.Lb(),d.Mb(7,"td",23),d.Mb(8,"a",24),d.Kb(9,"i",25),d.Lb(),d.gc(10,g,2,3,"a",26),d.gc(11,y,2,0,"button",27),d.Lb(),d.Lb()),2&e){const e=o.$implicit,r=d.Vb();d.yb(2),d.ic(e.denominacion),d.yb(2),d.ic(e.contacto),d.yb(2),d.ic(e.telefono),d.yb(2),d.Yb("routerLink",d.Zb(6,M,"ver/"+e._id)),d.yb(2),d.Yb("ngIf",r.admin),d.yb(1),d.Yb("ngIf",r.admin)}}function w(e,o){if(1&e&&(d.Mb(0,"div",1),d.Mb(1,"div",2),d.Mb(2,"div",3),d.hc(3,"Denominacion"),d.Lb(),d.Mb(4,"div",4),d.hc(5),d.Lb(),d.Lb(),d.Mb(6,"div",2),d.Mb(7,"div",3),d.hc(8,"Email"),d.Lb(),d.Mb(9,"div",4),d.hc(10),d.Lb(),d.Lb(),d.Mb(11,"div",2),d.Mb(12,"div",3),d.hc(13,"Telefono"),d.Lb(),d.Mb(14,"div",4),d.hc(15),d.Lb(),d.Lb(),d.Mb(16,"div",2),d.Mb(17,"div",3),d.hc(18,"Celular"),d.Lb(),d.Mb(19,"div",4),d.hc(20),d.Lb(),d.Lb(),d.Mb(21,"div",2),d.Mb(22,"div",3),d.hc(23,"Provincia"),d.Lb(),d.Mb(24,"div",4),d.hc(25),d.Lb(),d.Lb(),d.Mb(26,"div",2),d.Mb(27,"div",3),d.hc(28,"Ciudad"),d.Lb(),d.Mb(29,"div",4),d.hc(30),d.Lb(),d.Lb(),d.Mb(31,"div",2),d.Mb(32,"div",3),d.hc(33,"Direccion"),d.Lb(),d.Mb(34,"div",4),d.hc(35),d.Lb(),d.Lb(),d.Mb(36,"div",2),d.Mb(37,"div",3),d.hc(38,"Codigo Postal"),d.Lb(),d.Mb(39,"div",4),d.hc(40),d.Lb(),d.Lb(),d.Mb(41,"div",2),d.Mb(42,"div",3),d.hc(43,"CUIT"),d.Lb(),d.Mb(44,"div",4),d.hc(45),d.Lb(),d.Lb(),d.Mb(46,"div",2),d.Mb(47,"div",3),d.hc(48,"Actividad"),d.Lb(),d.Mb(49,"div",4),d.hc(50),d.Lb(),d.Lb(),d.Mb(51,"div",2),d.Mb(52,"div",3),d.hc(53,"CI"),d.Lb(),d.Mb(54,"div",4),d.hc(55),d.Lb(),d.Lb(),d.Mb(56,"div",2),d.Mb(57,"div",3),d.hc(58,"Contacto"),d.Lb(),d.Mb(59,"div",4),d.hc(60),d.Lb(),d.Lb(),d.Mb(61,"button",5),d.hc(62,"Volver"),d.Lb(),d.Lb()),2&e){const e=d.Vb();d.yb(5),d.ic(e.proveedor.denominacion),d.yb(5),d.ic(e.proveedor.correo),d.yb(5),d.ic(e.proveedor.telefono),d.yb(5),d.ic(e.proveedor.celular),d.yb(5),d.ic(e.proveedor.provincia),d.yb(5),d.ic(e.proveedor.ciudad),d.yb(5),d.ic(e.proveedor.direccion),d.yb(5),d.ic(e.proveedor.cp),d.yb(5),d.ic(e.proveedor.cuit),d.yb(5),d.ic(e.proveedor.actividad),d.yb(5),d.ic(e.proveedor.ci),d.yb(5),d.ic(e.proveedor.contacto)}}const k=[{path:"",component:(()=>{class e{constructor(e,o,r,t){this.proveedorservice=e,this.router=o,this.usuarioservice=r,this.http=t,this.admin=!1,this.cargando=!1,this.desde=0,this.totalRegistros=0,this.proveedores=[],this.titulo="Proveedores",this.data="proveedores",this.dataSingular="proveedor",this.registros="Total de "+this.data+": ",this.botonCrear="Crear "+this.dataSingular+" nuevo"}ngOnInit(){this.cargarData(),this.admin=this.usuarioservice.admin}cargarData(){this.proveedorservice.cargarProveedores(this.desde).subscribe(e=>{this.proveedores=e.proveedores,this.totalRegistros=e.conteo,this.cargando=!0})}buscar(e){if(""!==e)return this.http.get(l.a+"busqueda/db/proveedores/"+e).subscribe(e=>{this.proveedores=e.proveedores},e=>{a.a.fire("Error","Error inesperado","error")});this.cargarData()}cambiarDesde(e){let o=this.desde+e;o>=this.totalRegistros||o<0||(this.desde+=e,this.cargando=!1,this.cargarData())}eliminar(e){const o=e._id;a.a.fire({title:"\xbfSeguro que quieres eliminarlo?",text:"No podras revertir esta accion",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Eliminar"}).then(r=>{r.isConfirmed&&this.proveedorservice.eliminarProveedor(o).subscribe(o=>{this.cargarData(),a.a.fire("Elimnado","El proveedor "+e.denominacion+" fue eliminado","success")},o=>{a.a.fire("Error","El proveedor "+e.denominacion+" no pudo ser eliminado","error")})})}}return e.\u0275fac=function(o){return new(o||e)(d.Jb(v),d.Jb(i.b),d.Jb(s.a),d.Jb(p.a))},e.\u0275cmp=d.Db({type:e,selectors:[["app-main"]],decls:32,vars:6,consts:[[1,"container-fluid","animate__animated","animate__fadeIn"],[1,"card"],[1,"card-body"],[1,"card-title"],["type","search","placeholder","Nombre, dni, localidad",1,"form-control",3,"keyup"],["termino",""],["class","card bg-warning",4,"ngIf"],[1,"bg-info","text-center"],[1,"d-grid","gap-2","d-md-flex","justify-content-md-end"],["class","btn btn-primary e-md-2","routerLink","crear",4,"ngIf"],[1,"table"],["width","20%",1,"text-right"],[1,"text-right"],[4,"ngFor","ngForOf"],[1,"row","container-fluid"],[1,"col"],[1,"btn","btn-block","btn-danger",3,"click"],[1,"btn","btn-block","btn-success",3,"click"],[1,"card","bg-warning"],[1,"card-title","text-center"],[1,"fas","fa-sync","fa-spin"],[1,"card-text"],["routerLink","crear",1,"btn","btn-primary","e-md-2"],["width","15%",1,"text-right"],[1,"btn","botones","btn-success",3,"routerLink"],[1,"far","fa-eye"],["class","btn botones btn-primary",3,"routerLink",4,"ngIf"],["class","btn botones btn-danger",3,"click",4,"ngIf"],[1,"btn","botones","btn-primary",3,"routerLink"],[1,"fas","fa-pencil-alt"],[1,"btn","botones","btn-danger",3,"click"],[1,"fas","fa-times-circle"]],template:function(e,o){if(1&e){const e=d.Nb();d.Mb(0,"div",0),d.Mb(1,"div",1),d.Mb(2,"div",2),d.Mb(3,"h5",3),d.hc(4),d.Lb(),d.Mb(5,"input",4,5),d.Tb("keyup",function(){d.dc(e);const r=d.cc(6);return o.buscar(r.value)}),d.Lb(),d.Lb(),d.Lb(),d.gc(7,f,7,0,"div",6),d.Mb(8,"p",7),d.hc(9),d.Lb(),d.Mb(10,"div",8),d.gc(11,L,2,1,"a",9),d.Lb(),d.Mb(12,"table",10),d.Mb(13,"thead"),d.Mb(14,"tr"),d.Mb(15,"th"),d.hc(16,"Denominacion"),d.Lb(),d.Mb(17,"th"),d.hc(18,"Contacto"),d.Lb(),d.Mb(19,"th",11),d.hc(20,"Telefono"),d.Lb(),d.Mb(21,"th",12),d.hc(22,"Botones "),d.Lb(),d.Lb(),d.Lb(),d.Mb(23,"tbody"),d.gc(24,C,12,8,"tr",13),d.Lb(),d.Lb(),d.Mb(25,"div",14),d.Mb(26,"div",15),d.Mb(27,"button",16),d.Tb("click",function(){return o.cambiarDesde(-5)}),d.hc(28,"Anterior"),d.Lb(),d.Lb(),d.Mb(29,"div",15),d.Mb(30,"button",17),d.Tb("click",function(){return o.cambiarDesde(5)}),d.hc(31,"Siguiente"),d.Lb(),d.Lb(),d.Lb(),d.Lb()}2&e&&(d.yb(4),d.jc("Buscar ",o.data,""),d.yb(3),d.Yb("ngIf",!o.cargando),d.yb(2),d.kc(" ",o.registros," ",o.totalRegistros," "),d.yb(2),d.Yb("ngIf",o.admin),d.yb(13),d.Yb("ngForOf",o.proveedores))},directives:[t.j,t.i,i.e],styles:[".container-fluid[_ngcontent-%COMP%]{margin:10px 0 0;padding:0}.col[_ngcontent-%COMP%]{padding:0}.bg-info[_ngcontent-%COMP%]{font-size:40px}.table[_ngcontent-%COMP%]{margin:20px 0 0}.botones[_ngcontent-%COMP%]{margin:0 0 0 5px}"]}),e})()},{path:"ver/:id",component:(()=>{class e{constructor(e,o,r){this.proveedorservice=e,this.router=o,this.activatedroute=r}ngOnInit(){this.proveedorservice.cargarProveedor(this.activatedroute.snapshot.params.id).subscribe(e=>{this.proveedor=e.proveedor})}}return e.\u0275fac=function(o){return new(o||e)(d.Jb(v),d.Jb(i.b),d.Jb(i.a))},e.\u0275cmp=d.Db({type:e,selectors:[["app-ver"]],decls:1,vars:1,consts:[["class","container-fluid animate__animated animate__fadeIn",4,"ngIf"],[1,"container-fluid","animate__animated","animate__fadeIn"],[1,"row"],[1,"col","bg-info","font-weight-bold"],[1,"col-9","bg-info"],["routerLink","/admin/proveedores",1,"btn","btn-danger","w-100"]],template:function(e,o){1&e&&d.gc(0,w,63,12,"div",0),2&e&&d.Yb("ngIf",o.proveedor)},directives:[t.j,i.c],styles:[".row[_ngcontent-%COMP%]{margin:5px 0}.bg-info[_ngcontent-%COMP%]{margin:0 5px 0 0;font-size:35px}"]}),e})()},{path:"editar/:id",canActivate:[n.a],component:h},{path:"crear",canActivate:[n.a],component:u}];let P=(()=>{class e{}return e.\u0275mod=d.Hb({type:e}),e.\u0275inj=d.Gb({factory:function(o){return new(o||e)},imports:[[i.f.forChild(k)],i.f]}),e})(),_=(()=>{class e{}return e.\u0275mod=d.Hb({type:e}),e.\u0275inj=d.Gb({factory:function(o){return new(o||e)},imports:[[t.b,P,b.i]]}),e})()}}]);