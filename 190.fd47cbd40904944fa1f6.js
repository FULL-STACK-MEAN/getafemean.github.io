(self.webpackChunkbudget_app=self.webpackChunkbudget_app||[]).push([[190],{4190:(e,s,t)=>{"use strict";t.r(s),t.d(s,{UsersModule:()=>Z});var r=t(1116),o=t(4140),i=t(8619),n=t(6044),c=t(1518);function u(e,s){1&e&&i._UZ(0,"img",10)}function a(e,s){if(1&e){const e=i.EpF();i.TgZ(0,"img",11),i.NdJ("click",function(){return i.CHM(e),i.oxw(2).updateUserRole()}),i.qZA()}}function d(e,s){if(1&e){const e=i.EpF();i.TgZ(0,"tr"),i.TgZ(1,"td"),i._uU(2),i.qZA(),i.TgZ(3,"td"),i._uU(4),i.qZA(),i.TgZ(5,"td"),i.TgZ(6,"select",4),i.NdJ("change",function(s){const t=i.CHM(e).$implicit;return i.oxw().onChangeRole(t._id,s)}),i.TgZ(7,"option",5),i._uU(8,"Usuario"),i.qZA(),i.TgZ(9,"option",6),i._uU(10,"Ventas"),i.qZA(),i.TgZ(11,"option",7),i._uU(12,"Administrador"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(13,"td"),i.YNc(14,u,1,0,"img",8),i.YNc(15,a,1,0,"img",9),i.qZA(),i.qZA()}if(2&e){const e=s.$implicit,t=i.oxw();i.xp6(2),i.AsE("",e.name," ",e.surname,""),i.xp6(2),i.Oqu(e.email),i.xp6(3),i.Q6J("selected","user"===e.role),i.xp6(2),i.Q6J("selected","sales"===e.role),i.xp6(2),i.Q6J("selected","admin"===e.role),i.xp6(3),i.Q6J("ngIf",e._id!==t.userUpdated._id),i.xp6(1),i.Q6J("ngIf",e._id===t.userUpdated._id)}}const l=[{path:"",component:(()=>{class e{constructor(e,s){this.userService=e,this.route=s,this.userUpdated={_id:"",role:""}}ngOnInit(){this.dataRoutes=this.route.pathFromRoot,this.userService.getUsers().subscribe(e=>{this.users=e.users},e=>{console.log(e)})}onChangeRole(e,s){this.userUpdated={_id:e,role:s.target.value}}updateUserRole(){this.userService.updateUserRole(this.userUpdated._id,this.userUpdated.role).subscribe(e=>{console.log(e)},e=>{console.log(e)})}}return e.\u0275fac=function(s){return new(s||e)(i.Y36(n.f),i.Y36(o.gz))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-users-report"]],decls:13,vars:2,consts:[[1,"container","show"],[3,"dataRoutes"],[1,"card"],[4,"ngFor","ngForOf"],[3,"change"],["value","user",3,"selected"],["value","sales",3,"selected"],["value","admin",3,"selected"],["src","/assets/img/icons/save-grey.svg",4,"ngIf"],["src","/assets/img/icons/save.svg",3,"click",4,"ngIf"],["src","/assets/img/icons/save-grey.svg"],["src","/assets/img/icons/save.svg",3,"click"]],template:function(e,s){1&e&&(i.TgZ(0,"div",0),i._UZ(1,"app-breadcrumbs",1),i.TgZ(2,"div",2),i.TgZ(3,"table"),i.TgZ(4,"tr"),i.TgZ(5,"th"),i._uU(6,"Nombre y Apellidos"),i.qZA(),i.TgZ(7,"th"),i._uU(8,"Correo electr\xf3nico"),i.qZA(),i.TgZ(9,"th"),i._uU(10,"Rol"),i.qZA(),i._UZ(11,"th"),i.qZA(),i.YNc(12,d,16,8,"tr",3),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(1),i.Q6J("dataRoutes",s.dataRoutes),i.xp6(11),i.Q6J("ngForOf",s.users))},directives:[c.n,r.sg,r.O5],styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[o.Bz.forChild(l)],o.Bz]}),e})();var p=t(5425);let Z=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[r.ez,g,p.m]]}),e})()}}]);