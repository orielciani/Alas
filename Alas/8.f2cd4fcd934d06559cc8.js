(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6H/B":function(o,e,r){"use strict";r.r(e),r.d(e,"ObrasSocialesModule",function(){return _});var t=r("ofXK"),i=r("tyNb"),b=r("B0km"),a=r("3Pt+"),n=r("PSD3"),c=r.n(n),s=r("fXoL"),l=r("on2l"),d=r("0np6"),u=r("tk/3");let m=(()=>{class o{constructor(o,e,r){this.usuarioservice=o,this.router=e,this.http=r,this.token=this.usuarioservice.token}cargar(o=0){return this.http.get(d.a+"obrassociales?desde="+o+"&token="+this.token)}cargarUno(o){return this.http.get(d.a+"obrassociales/obrasocial/"+o+"?token="+this.token)}agregar(o){return this.http.post(d.a+"obrassociales/agregar?token="+this.token,o)}editar(o,e){return this.http.put(d.a+"obrassociales/actualizar/"+o+"?token="+this.token,e)}eliminar(o){return this.http.delete(d.a+"obrassociales/eliminar/"+o+"?token="+this.token)}}return o.\u0275fac=function(e){return new(e||o)(s.Qb(l.a),s.Qb(i.b),s.Qb(u.a))},o.\u0275prov=s.Fb({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),h=(()=>{class o{constructor(o,e){this.usuarioservice=o,this.obrassocialesservice=e,this.roles=["ADMIN_ROLE","USER_ROLE"],this.form=new a.d({nombre:new a.b(""),correo:new a.b(""),telefono:new a.b(""),celular:new a.b(""),provincia:new a.b(""),ciudad:new a.b(""),direccion:new a.b(""),codpos:new a.b(""),contacto:new a.b(""),cuit:new a.b(""),ci:new a.b(""),ib:new a.b(""),otros:new a.b("")})}guardarCambios(){this.agregarObraSocial(this.form.value)}agregarObraSocial(o){this.obrassocialesservice.agregar(o).subscribe(o=>{c.a.fire("Exito","La obra social de nombre "+o.obrasocial.nombre+" se creo con exito","success")},o=>{console.log(o),c.a.fire("Error",o.error.message?"error.error.message":o.error.error.error.errors.message,"error")})}}return o.\u0275fac=function(e){return new(e||o)(s.Jb(l.a),s.Jb(m))},o.\u0275cmp=s.Db({type:o,selectors:[["app-crear"]],decls:66,vars:1,consts:[[1,"animate__animated","animate__fadeIn",3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["type","text","placeholder","Nombre","formControlName","nombre",1,"form-control"],["type","email","placeholder","Correo electr\xf3nico","formControlName","correo",1,"form-control"],["type","text","placeholder","Telefono","formControlName","telefono",1,"form-control"],["type","text","placeholder","Celular","formControlName","celular",1,"form-control"],["type","text","placeholder","Provincia","formControlName","provincia",1,"form-control"],["type","text","placeholder","Ciudad","formControlName","ciudad",1,"form-control"],["type","text","placeholder","Direccion","formControlName","direccion",1,"form-control"],["type","text","placeholder","Codigo Postal","formControlName","codpos",1,"form-control"],["type","text","placeholder","Contacto","formControlName","contacto",1,"form-control"],["type","text","placeholder","CUIT","formControlName","cuit",1,"form-control"],["type","text","placeholder","CI","formControlName","ci",1,"form-control"],["type","text","placeholder","Ingresos Brutos","formControlName","ib",1,"form-control"],[1,"container-fluid"],["type","text","placeholder","Otros","formControlName","otros",1,"form-control"],["type","button","routerLink","/admin/obras-sociales",1,"btn","btn-danger","w-100"],["type","submit",1,"btn","btn-primary","w-100"]],template:function(o,e){1&o&&(s.Mb(0,"form",0),s.Tb("ngSubmit",function(){return e.guardarCambios()}),s.Mb(1,"div",1),s.Mb(2,"div",2),s.Mb(3,"label"),s.hc(4,"Nombre"),s.Lb(),s.Kb(5,"input",3),s.Lb(),s.Mb(6,"div",2),s.Mb(7,"label"),s.hc(8,"Email"),s.Lb(),s.Kb(9,"input",4),s.Lb(),s.Lb(),s.Mb(10,"div",1),s.Mb(11,"div",2),s.Mb(12,"label"),s.hc(13,"Telefono"),s.Lb(),s.Kb(14,"input",5),s.Lb(),s.Mb(15,"div",2),s.Mb(16,"label"),s.hc(17,"Celular"),s.Lb(),s.Kb(18,"input",6),s.Lb(),s.Lb(),s.Mb(19,"div",1),s.Mb(20,"div",2),s.Mb(21,"label"),s.hc(22,"Provincia"),s.Lb(),s.Kb(23,"input",7),s.Lb(),s.Mb(24,"div",2),s.Mb(25,"label"),s.hc(26,"Ciudad"),s.Lb(),s.Kb(27,"input",8),s.Lb(),s.Lb(),s.Mb(28,"div",1),s.Mb(29,"div",2),s.Mb(30,"label"),s.hc(31,"Direccion"),s.Lb(),s.Kb(32,"input",9),s.Lb(),s.Mb(33,"div",2),s.Mb(34,"label"),s.hc(35,"Codigo Postal"),s.Lb(),s.Kb(36,"input",10),s.Lb(),s.Lb(),s.Mb(37,"div",1),s.Mb(38,"div",2),s.Mb(39,"label"),s.hc(40,"Contacto"),s.Lb(),s.Kb(41,"input",11),s.Lb(),s.Mb(42,"div",2),s.Mb(43,"label"),s.hc(44,"CUit"),s.Lb(),s.Kb(45,"input",12),s.Lb(),s.Lb(),s.Mb(46,"div",1),s.Mb(47,"div",2),s.Mb(48,"label"),s.hc(49,"CI"),s.Lb(),s.Kb(50,"input",13),s.Lb(),s.Mb(51,"div",2),s.Mb(52,"label"),s.hc(53,"Ingresos Brutos"),s.Lb(),s.Kb(54,"input",14),s.Lb(),s.Mb(55,"div",15),s.Mb(56,"label"),s.hc(57,"Otros"),s.Lb(),s.Kb(58,"input",16),s.Lb(),s.Lb(),s.Mb(59,"div",1),s.Mb(60,"div",2),s.Mb(61,"button",17),s.hc(62," Volver "),s.Lb(),s.Lb(),s.Mb(63,"div",2),s.Mb(64,"button",18),s.hc(65," Guardar "),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&o&&s.Yb("formGroup",e.form)},directives:[a.m,a.g,a.e,a.a,a.f,a.c,i.c],styles:[""]}),o})();function f(o,e){if(1&o){const o=s.Nb();s.Mb(0,"form",1),s.Tb("ngSubmit",function(){return s.dc(o),s.Vb().guardarCambios()}),s.Mb(1,"div",2),s.Mb(2,"div",3),s.Mb(3,"label"),s.hc(4,"Nombre"),s.Lb(),s.Kb(5,"input",4),s.Lb(),s.Mb(6,"div",3),s.Mb(7,"label"),s.hc(8,"Email"),s.Lb(),s.Kb(9,"input",5),s.Lb(),s.Lb(),s.Mb(10,"div",2),s.Mb(11,"div",3),s.Mb(12,"label"),s.hc(13,"Telefono"),s.Lb(),s.Kb(14,"input",6),s.Lb(),s.Mb(15,"div",3),s.Mb(16,"label"),s.hc(17,"Celular"),s.Lb(),s.Kb(18,"input",7),s.Lb(),s.Lb(),s.Mb(19,"div",2),s.Mb(20,"div",3),s.Mb(21,"label"),s.hc(22,"Provincia"),s.Lb(),s.Kb(23,"input",8),s.Lb(),s.Mb(24,"div",3),s.Mb(25,"label"),s.hc(26,"Ciudad"),s.Lb(),s.Kb(27,"input",9),s.Lb(),s.Lb(),s.Mb(28,"div",2),s.Mb(29,"div",3),s.Mb(30,"label"),s.hc(31,"Direccion"),s.Lb(),s.Kb(32,"input",10),s.Lb(),s.Mb(33,"div",3),s.Mb(34,"label"),s.hc(35,"Codigo Postal"),s.Lb(),s.Kb(36,"input",11),s.Lb(),s.Lb(),s.Mb(37,"div",2),s.Mb(38,"div",3),s.Mb(39,"label"),s.hc(40,"Contacto"),s.Lb(),s.Kb(41,"input",12),s.Lb(),s.Mb(42,"div",3),s.Mb(43,"label"),s.hc(44,"CUit"),s.Lb(),s.Kb(45,"input",13),s.Lb(),s.Lb(),s.Mb(46,"div",2),s.Mb(47,"div",3),s.Mb(48,"label"),s.hc(49,"CI"),s.Lb(),s.Kb(50,"input",14),s.Lb(),s.Mb(51,"div",3),s.Mb(52,"label"),s.hc(53,"Ingresos Brutos"),s.Lb(),s.Kb(54,"input",15),s.Lb(),s.Lb(),s.Mb(55,"div",16),s.Mb(56,"label"),s.hc(57,"Otros"),s.Lb(),s.Kb(58,"input",17),s.Lb(),s.Mb(59,"div",2),s.Mb(60,"div",3),s.Mb(61,"button",18),s.hc(62," Volver "),s.Lb(),s.Lb(),s.Mb(63,"div",3),s.Mb(64,"button",19),s.hc(65," Guardar "),s.Lb(),s.Lb(),s.Lb(),s.Lb()}if(2&o){const o=s.Vb();s.Yb("formGroup",o.form)}}let p=(()=>{class o{constructor(o,e,r){this.usuarioservice=o,this.obrasocialservice=e,this.activatedroute=r,this.id="",this.form=new a.d({nombre:new a.b(""),correo:new a.b(""),telefono:new a.b(""),celular:new a.b(""),provincia:new a.b(""),ciudad:new a.b(""),direccion:new a.b(""),codpos:new a.b(""),contacto:new a.b(""),cuit:new a.b(""),ci:new a.b(""),ib:new a.b(""),otros:new a.b("")})}ngOnInit(){this.id=this.activatedroute.snapshot.params.id,this.obrasocialservice.cargarUno(this.id).subscribe(o=>{this.obraSocial=o.obrasocial,this.setValue(o.obrasocial.nombre,o.obrasocial.correo,o.obrasocial.telefono,o.obrasocial.celular,o.obrasocial.provincia,o.obrasocial.ciudad,o.obrasocial.direccion,o.obrasocial.codpos,o.obrasocial.contacto,o.obrasocial.cuit,o.obrasocial.ci,o.obrasocial.ib,o.obrasocial.otros)})}setValue(o,e,r,t,i,b,a,n,c,s,l,d,u){this.form.setValue({nombre:o,correo:e,telefono:r,celular:t,provincia:i,ciudad:b,direccion:a,codpos:n,contacto:c,cuit:s,ci:l,ib:d,otros:u})}guardarCambios(){c.a.fire({title:"\xbfSeguro que quieres hacerlo?",text:"No podras revertir esta accion",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, modificar"}).then(o=>{o.isConfirmed&&this.editar(this.form.value)})}editar(o){this.obrasocialservice.editar(this.id,o).subscribe(o=>{c.a.fire("Modificado","","success")},o=>{c.a.fire("Error",o.error.message?o.error.message:o.error.error.errors.email.message,"error")})}}return o.\u0275fac=function(e){return new(e||o)(s.Jb(l.a),s.Jb(m),s.Jb(i.a))},o.\u0275cmp=s.Db({type:o,selectors:[["app-editar"]],decls:1,vars:1,consts:[["class","animate__animated animate__fadeIn",3,"formGroup","ngSubmit",4,"ngIf"],[1,"animate__animated","animate__fadeIn",3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],["type","text","placeholder","Nombre","formControlName","nombre",1,"form-control"],["type","email","placeholder","Correo electr\xf3nico","formControlName","correo",1,"form-control"],["type","text","placeholder","Telefono","formControlName","telefono",1,"form-control"],["type","text","placeholder","Celular","formControlName","celular",1,"form-control"],["type","text","placeholder","Provincia","formControlName","provincia",1,"form-control"],["type","text","placeholder","Ciudad","formControlName","ciudad",1,"form-control"],["type","text","placeholder","Direccion","formControlName","direccion",1,"form-control"],["type","text","placeholder","Codigo Postal","formControlName","codpos",1,"form-control"],["type","text","placeholder","Contacto","formControlName","contacto",1,"form-control"],["type","text","placeholder","CUIT","formControlName","cuit",1,"form-control"],["type","text","placeholder","CI","formControlName","ci",1,"form-control"],["type","text","placeholder","Ingresos Brutos","formControlName","ib",1,"form-control"],[1,"container-fluid"],["type","text","placeholder","Otros","formControlName","otros",1,"form-control"],["type","button","routerLink","/admin/obras-sociales",1,"btn","btn-danger","w-100"],["type","submit",1,"btn","btn-primary","w-100"]],template:function(o,e){1&o&&s.gc(0,f,66,1,"form",0),2&o&&s.Yb("ngIf",e.obraSocial)},directives:[t.j,a.m,a.g,a.e,a.a,a.f,a.c,i.c],styles:[".row[_ngcontent-%COMP%]{margin:10px 0 0}.container-fluid[_ngcontent-%COMP%]{margin-top:10px}"]}),o})();function L(o,e){1&o&&(s.Mb(0,"div",15),s.Mb(1,"div",2),s.Mb(2,"h5",16),s.Kb(3,"i",17),s.hc(4," Cargando..."),s.Lb(),s.Mb(5,"p",18),s.hc(6,"Si ve este mensaje es porque se esta descargando los datos, si la sigue viendo despues de un tiempo porfavor reinicie la pagina."),s.Lb(),s.Lb(),s.Lb())}function M(o,e){1&o&&(s.Mb(0,"a",19),s.hc(1,"Crear Obra Social nueva"),s.Lb())}const v=function(o){return[o]};function g(o,e){if(1&o&&(s.Mb(0,"a",30),s.Kb(1,"i",31),s.Lb()),2&o){const o=s.Vb().$implicit;s.Yb("routerLink",s.Zb(1,v,"editar/"+(o._id||"")))}}function C(o,e){if(1&o){const o=s.Nb();s.Mb(0,"button",32),s.Tb("click",function(){s.dc(o);const e=s.Vb().$implicit;return s.Vb(2).eliminar(e)}),s.Kb(1,"i",33),s.Lb()}}function y(o,e){if(1&o&&(s.Mb(0,"tr"),s.Mb(1,"td"),s.hc(2),s.Lb(),s.Mb(3,"td"),s.hc(4),s.Lb(),s.Mb(5,"td",22),s.hc(6),s.Lb(),s.Mb(7,"td",25),s.Mb(8,"a",26),s.Kb(9,"i",27),s.Lb(),s.gc(10,g,2,3,"a",28),s.gc(11,C,2,0,"button",29),s.Lb(),s.Lb()),2&o){const o=e.$implicit,r=s.Vb(2);s.yb(2),s.ic(o.nombre),s.yb(2),s.ic(o.celular),s.yb(2),s.ic(o.role),s.yb(2),s.Yb("routerLink",s.Zb(6,v,"ver/"+(o._id||""))),s.yb(2),s.Yb("ngIf",r.admin),s.yb(1),s.Yb("ngIf",r.admin)}}function w(o,e){if(1&o&&(s.Mb(0,"table",20),s.Mb(1,"thead"),s.Mb(2,"tr",21),s.Mb(3,"th"),s.hc(4,"Nombre"),s.Lb(),s.Mb(5,"th"),s.hc(6,"Celular"),s.Lb(),s.Mb(7,"th",22),s.hc(8,"Role"),s.Lb(),s.Mb(9,"th",23),s.hc(10,"Botones "),s.Lb(),s.Lb(),s.Lb(),s.Mb(11,"tbody"),s.gc(12,y,12,8,"tr",24),s.Lb(),s.Lb()),2&o){const o=s.Vb();s.yb(12),s.Yb("ngForOf",o.obrasSociales)}}function x(o,e){if(1&o&&(s.Mb(0,"div",1),s.Mb(1,"div",2),s.Mb(2,"div",3),s.hc(3,"Nombre"),s.Lb(),s.Mb(4,"div",4),s.hc(5),s.Lb(),s.Lb(),s.Mb(6,"div",2),s.Mb(7,"div",3),s.hc(8,"Email"),s.Lb(),s.Mb(9,"div",4),s.hc(10),s.Lb(),s.Lb(),s.Mb(11,"div",2),s.Mb(12,"div",3),s.hc(13,"Telefono"),s.Lb(),s.Mb(14,"div",4),s.hc(15),s.Lb(),s.Lb(),s.Mb(16,"div",2),s.Mb(17,"div",3),s.hc(18,"Celular"),s.Lb(),s.Mb(19,"div",4),s.hc(20),s.Lb(),s.Lb(),s.Mb(21,"div",2),s.Mb(22,"div",3),s.hc(23,"Provincia"),s.Lb(),s.Mb(24,"div",4),s.hc(25),s.Lb(),s.Lb(),s.Mb(26,"div",2),s.Mb(27,"div",3),s.hc(28,"Ciudad"),s.Lb(),s.Mb(29,"div",4),s.hc(30),s.Lb(),s.Lb(),s.Mb(31,"div",2),s.Mb(32,"div",3),s.hc(33,"Codigo Postal"),s.Lb(),s.Mb(34,"div",4),s.hc(35),s.Lb(),s.Lb(),s.Mb(36,"div",2),s.Mb(37,"div",3),s.hc(38,"Direccion"),s.Lb(),s.Mb(39,"div",4),s.hc(40),s.Lb(),s.Lb(),s.Mb(41,"div",2),s.Mb(42,"div",3),s.hc(43,"Cuit"),s.Lb(),s.Mb(44,"div",4),s.hc(45),s.Lb(),s.Lb(),s.Mb(46,"div",2),s.Mb(47,"div",3),s.hc(48,"Contacto"),s.Lb(),s.Mb(49,"div",4),s.hc(50),s.Lb(),s.Lb(),s.Mb(51,"div",2),s.Mb(52,"div",3),s.hc(53,"Ci"),s.Lb(),s.Mb(54,"div",4),s.hc(55),s.Lb(),s.Lb(),s.Mb(56,"div",2),s.Mb(57,"div",3),s.hc(58,"Ingresos Brutos"),s.Lb(),s.Mb(59,"div",4),s.hc(60),s.Lb(),s.Lb(),s.Mb(61,"div",2),s.Mb(62,"div",3),s.hc(63,"Otros"),s.Lb(),s.Mb(64,"div",4),s.hc(65),s.Lb(),s.Lb(),s.Mb(66,"button",5),s.hc(67,"Volver"),s.Lb(),s.Lb()),2&o){const o=s.Vb();s.yb(5),s.ic(o.obrasocial.nombre),s.yb(5),s.ic(o.obrasocial.correo),s.yb(5),s.ic(o.obrasocial.telefono),s.yb(5),s.ic(o.obrasocial.celular),s.yb(5),s.ic(o.obrasocial.provincia),s.yb(5),s.ic(o.obrasocial.ciudad),s.yb(5),s.ic(o.obrasocial.codpos),s.yb(5),s.ic(o.obrasocial.direccion),s.yb(5),s.ic(o.obrasocial.cuit),s.yb(5),s.ic(o.obrasocial.contacto),s.yb(5),s.ic(o.obrasocial.ci),s.yb(5),s.ic(o.obrasocial.ib),s.yb(5),s.ic(o.obrasocial.otros)}}const N=[{path:"",component:(()=>{class o{constructor(o,e,r,t){this.usuarioservice=o,this.obrassocialesservice=e,this.router=r,this.http=t,this.admin=!1,this.cargando=!0,this.desde=0,this.totalRegistros=0,this.obrasSociales=[]}ngOnInit(){this.cargarData(),this.admin=this.usuarioservice.admin}cargarData(){this.obrassocialesservice.cargar(this.desde).subscribe(o=>{this.obrasSociales=o.obrasSociales,this.totalRegistros=o.conteo,this.cargando=!1})}buscar(o){if(""!==o)return this.http.get(d.a+"busqueda/db/obrassociales/"+o).subscribe(o=>{this.obrasSociales=o.obrassociales},o=>{c.a.fire("Error","Error inesperado","error")});this.cargarData()}cambiarDesde(o){let e=this.desde+o;e>=this.totalRegistros||e<0||(this.desde+=o,this.cargando=!1,this.cargarData())}eliminar(o){const e=o._id;c.a.fire({title:"\xbfSeguro que quieres eliminarlo?",text:"No podras revertir esta accion",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Eliminar"}).then(r=>{r.isConfirmed&&this.obrassocialesservice.eliminar(e).subscribe(e=>{c.a.fire("Elimnado","El concurrente "+o.nombre+" fue eliminado","success"),!0===Number.isInteger((this.totalRegistros-1)/5)?this.cambiarDesde(-5):this.cargarData()},o=>{"No puedes eliminarte a si mismo"!==o.error.mensaje||c.a.fire("Error","No puedes eliminar tu propia cuenta","error")})})}}return o.\u0275fac=function(e){return new(e||o)(s.Jb(l.a),s.Jb(m),s.Jb(i.b),s.Jb(u.a))},o.\u0275cmp=s.Db({type:o,selectors:[["app-main"]],decls:20,vars:4,consts:[[1,"container-fluid","animate__animated","animate__fadeIn"],[1,"card"],[1,"card-body"],[1,"card-title"],["type","search","placeholder","Nombre, dni, localidad",1,"form-control",3,"keyup"],["termino",""],["class","card bg-warning text-center",4,"ngIf"],[1,"bg-info","text-center"],[1,"d-grid","gap-2","d-md-flex","justify-content-md-end"],["class","btn btn-primary e-md-2","routerLink","crear",4,"ngIf"],["class","table",4,"ngIf"],[1,"row","container-fluid"],[1,"col"],[1,"btn","btn-block","btn-danger",3,"click"],[1,"btn","btn-block","btn-success",3,"click"],[1,"card","bg-warning","text-center"],[1,"card-title","text-center"],[1,"fas","fa-sync","fa-spin"],[1,"card-text"],["routerLink","crear",1,"btn","btn-primary","e-md-2"],[1,"table"],[1,"table-danger"],["width","20%",1,"text-right"],[1,"text-right"],[4,"ngFor","ngForOf"],["width","15%",1,"text-right"],[1,"btn","botones","btn-success",3,"routerLink"],[1,"far","fa-eye"],["class","btn botones btn-primary",3,"routerLink",4,"ngIf"],["class","btn botones btn-danger",3,"click",4,"ngIf"],[1,"btn","botones","btn-primary",3,"routerLink"],[1,"fas","fa-pencil-alt"],[1,"btn","botones","btn-danger",3,"click"],[1,"fas","fa-times-circle"]],template:function(o,e){if(1&o){const o=s.Nb();s.Mb(0,"div",0),s.Mb(1,"div",1),s.Mb(2,"div",2),s.Mb(3,"h5",3),s.hc(4,"Buscar obras sociales"),s.Lb(),s.Mb(5,"input",4,5),s.Tb("keyup",function(){s.dc(o);const r=s.cc(6);return e.buscar(r.value)}),s.Lb(),s.Lb(),s.Lb(),s.gc(7,L,7,0,"div",6),s.Mb(8,"p",7),s.hc(9),s.Lb(),s.Mb(10,"div",8),s.gc(11,M,2,0,"a",9),s.Lb(),s.gc(12,w,13,1,"table",10),s.Mb(13,"div",11),s.Mb(14,"div",12),s.Mb(15,"button",13),s.Tb("click",function(){return e.cambiarDesde(-5)}),s.hc(16,"Anterior"),s.Lb(),s.Lb(),s.Mb(17,"div",12),s.Mb(18,"button",14),s.Tb("click",function(){return e.cambiarDesde(5)}),s.hc(19,"Siguiente"),s.Lb(),s.Lb(),s.Lb(),s.Lb()}2&o&&(s.yb(7),s.Yb("ngIf",e.cargando),s.yb(2),s.jc(" Total de obras sociales: ",e.totalRegistros," "),s.yb(2),s.Yb("ngIf",e.admin),s.yb(1),s.Yb("ngIf",!e.cargando))},directives:[t.j,i.e,t.i],styles:[".container-fluid[_ngcontent-%COMP%]{margin:10px 0 0;padding:0}.col[_ngcontent-%COMP%]{padding:0}.bg-info[_ngcontent-%COMP%]{font-size:40px}.table[_ngcontent-%COMP%]{margin:20px 0 0}.botones[_ngcontent-%COMP%]{margin:0 0 0 5px}"]}),o})()},{path:"ver/:id",component:(()=>{class o{constructor(o,e,r,t){this.usuarioservice=o,this.obrassocialesservice=e,this.router=r,this.activatedroute=t}ngOnInit(){this.obrassocialesservice.cargarUno(this.activatedroute.snapshot.params.id).subscribe(o=>{this.obrasocial=o.obrasocial},o=>{console.log(o),c.a.fire("Error",o.error.message,"error"),this.router.navigate(["/admin/obras-sociales"])})}}return o.\u0275fac=function(e){return new(e||o)(s.Jb(l.a),s.Jb(m),s.Jb(i.b),s.Jb(i.a))},o.\u0275cmp=s.Db({type:o,selectors:[["app-ver"]],decls:1,vars:1,consts:[["class","container-fluid animate__animated animate__fadeIn",4,"ngIf"],[1,"container-fluid","animate__animated","animate__fadeIn"],[1,"row"],[1,"col","bg-info","font-weight-bold"],[1,"col-10","bg-info"],["routerLink","/admin/obras-sociales",1,"btn","btn-danger","w-100"]],template:function(o,e){1&o&&s.gc(0,x,68,13,"div",0),2&o&&s.Yb("ngIf",e.obrasocial)},directives:[t.j,i.c],styles:[".row[_ngcontent-%COMP%]{margin:5px 0}.bg-info[_ngcontent-%COMP%]{margin:0 5px 0 0;font-size:35px}"]}),o})()},{path:"editar/:id",canActivate:[b.a],component:p},{path:"crear",canActivate:[b.a],component:h}];let k=(()=>{class o{}return o.\u0275mod=s.Hb({type:o}),o.\u0275inj=s.Gb({factory:function(e){return new(e||o)},imports:[[i.f.forChild(N)],i.f]}),o})(),_=(()=>{class o{}return o.\u0275mod=s.Hb({type:o}),o.\u0275inj=s.Gb({factory:function(e){return new(e||o)},imports:[[t.b,k,a.i]]}),o})()}}]);