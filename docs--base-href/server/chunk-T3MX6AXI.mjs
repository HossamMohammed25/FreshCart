import './polyfills.server.mjs';
import{a as M}from"./chunk-RM7W3U3M.mjs";import"./chunk-QZLY374Y.mjs";import{a as G,b as c,c as V,d as B,f as $,g as k,h as j,i as I,k as O}from"./chunk-NB7DLP3G.mjs";import{k as D}from"./chunk-SX4IOAQB.mjs";import"./chunk-EC73D4GI.mjs";import{Db as a,Eb as x,Kb as L,Nb as w,Oa as o,W as P,_ as q,db as p,fb as h,jb as u,nb as i,ob as r,pb as F,tc as A,ub as N,vb as S}from"./chunk-ZWGHKFBJ.mjs";import"./chunk-VVCT4QZE.mjs";var y=(t,n)=>({"is-valid":t,"is-invalid":n});function z(t,n){t&1&&(i(0,"p",18),a(1,"name is required"),r())}function H(t,n){t&1&&(i(0,"p",18),a(1,"Name Should be more than or equal 3 chars"),r())}function J(t,n){t&1&&(i(0,"p",18),a(1,"Name Should be less than or equal 3 chars"),r())}function K(t,n){if(t&1&&(i(0,"div",6),p(1,z,2,0,"p",18)(2,H,2,0)(3,J,2,0),r()),t&2){let l,s=S();o(),u(1,(l=s.registerForm.get("name"))!=null&&l.getError("required")?1:(l=s.registerForm.get("name"))!=null&&l.getError("minlength")?2:(l=s.registerForm.get("name"))!=null&&l.getError("maxlength")?3:-1)}}function Q(t,n){t&1&&(i(0,"p",18),a(1,"Email is required"),r())}function U(t,n){t&1&&(i(0,"p",18),a(1,"Enter Valid Email"),r())}function W(t,n){if(t&1&&(i(0,"div",6),p(1,Q,2,0,"p",18)(2,U,2,0),r()),t&2){let l,s=S();o(),u(1,(l=s.registerForm.get("email"))!=null&&l.getError("required")?1:(l=s.registerForm.get("email"))!=null&&l.getError("email")?2:-1)}}function X(t,n){t&1&&(i(0,"p",18),a(1,"password is required"),r())}function Y(t,n){t&1&&(i(0,"p",18),a(1,"must be at least 6 chars"),r())}function Z(t,n){if(t&1&&(i(0,"div",6),p(1,X,2,0,"p",18)(2,Y,2,0),r()),t&2){let l,s=S();o(),u(1,(l=s.registerForm.get("password"))!=null&&l.getError("required")?1:(l=s.registerForm.get("password"))!=null&&l.getError("pattern")?2:-1)}}function ee(t,n){t&1&&(i(0,"div",6)(1,"p"),a(2,"Password confirmation is incorrect"),r()())}function te(t,n){t&1&&(i(0,"p",18),a(1,"phone is required"),r())}function re(t,n){t&1&&(i(0,"p",18),a(1,"accept only egypt phone numbers"),r())}function ie(t,n){if(t&1&&(i(0,"div",6),p(1,te,2,0,"p",18)(2,re,2,0),r()),t&2){let l,s=S();o(),u(1,(l=s.registerForm.get("phone"))!=null&&l.getError("required")?1:(l=s.registerForm.get("phone"))!=null&&l.getError("pattern")?2:-1)}}function ne(t,n){t&1&&(i(0,"span"),F(1,"i",19),r())}function le(t,n){if(t&1&&(i(0,"p",16),a(1),r()),t&2){let l=S();o(),x(l.errMsg)}}function oe(t,n){t&1&&(i(0,"p",17),a(1,"Success"),r())}var _e=(()=>{let n=class n{constructor(){this._AuthService=P(M),this._FormBuilder=P(I),this._Router=P(D),this.errMsg="",this.isLoading=!1,this.msgSuccess=!1,this.registerForm=this._FormBuilder.group({name:[null,[c.required,c.minLength(3),c.maxLength(20)]],email:[null,[c.required,c.email]],password:[null,[c.required,c.pattern(/^\w{6,}$/)]],rePassword:[null,[c.required,c.pattern(/^\w{6,}$/)]],phone:[null,[c.required,c.pattern(/^01[0125][0-9]{8}$/)]]},{validators:this.confirmPassword})}registerSubmit(){this.registerForm.valid?(this.isLoading=!0,this.registerSub=this._AuthService.registerData(this.registerForm.value).subscribe({next:s=>{s.message=="success"&&(this.msgSuccess=!0,setTimeout(()=>{this._Router.navigate(["/login"])},1e3)),this.isLoading=!1}})):(this.registerForm.setErrors({mismatch:!0}),this.registerForm.markAllAsTouched())}confirmPassword(s){return s.get("password")?.value===s.get("rePassword")?.value?null:{mismatch:!0}}ngOnDestroy(){this.registerSub?.unsubscribe()}};n.\u0275fac=function(b){return new(b||n)},n.\u0275cmp=q({type:n,selectors:[["app-register"]],standalone:!0,features:[L],decls:34,vars:30,consts:[[1,"bg-main-light","p-2","my-5","w-75","mx-auto","rounded","shadow"],[1,"h2","text-main"],[3,"ngSubmit","formGroup"],[1,"my-2"],["for","name"],["formControlName","name","type","text","id","name","name","name",1,"form-control",3,"ngClass"],[1,"alert","alert-success","mt-2"],["for","email"],["formControlName","email","type","email","id","email","name","email",1,"form-control",3,"ngClass"],["for","password"],["formControlName","password","type","password","id","password","name","password",1,"form-control",3,"ngClass"],["for","rePassword"],["formControlName","rePassword","type","password","id","rePassword","name","rePassword",1,"form-control",3,"ngClass"],["for","Phone"],["formControlName","phone","type","tel","id","Phone","name","phone",1,"form-control",3,"ngClass"],[1,"btn-main","d-block","ms-auto","my-3",3,"disabled"],[1,"m-0","alert","alert-danger","text-center"],[1,"text-success","h6","text-center"],[1,"m-0"],[1,"fas","fa-spin","fa-spinner"]],template:function(b,e){if(b&1&&(i(0,"section",0)(1,"h1",1),a(2,"Register Now:"),r(),i(3,"form",2),N("ngSubmit",function(){return e.registerSubmit()}),i(4,"div",3)(5,"label",4),a(6,"Name:"),r(),F(7,"input",5),p(8,K,4,1,"div",6),r(),i(9,"div",3)(10,"label",7),a(11,"email:"),r(),F(12,"input",8),p(13,W,3,1,"div",6),r(),i(14,"div",3)(15,"label",9),a(16,"password:"),r(),F(17,"input",10),p(18,Z,3,1,"div",6),r(),i(19,"div",3)(20,"label",11),a(21,"rePassword:"),r(),F(22,"input",12),p(23,ee,3,0,"div",6),r(),i(24,"div",3)(25,"label",13),a(26,"Phone:"),r(),F(27,"input",14),p(28,ie,3,1,"div",6),r(),i(29,"button",15),a(30,"Register "),p(31,ne,2,0,"span"),r(),p(32,le,2,1,"p",16)(33,oe,2,0,"p",17),r()()),b&2){let m,C,d,v,g,E,_,R,f,T;o(3),h("formGroup",e.registerForm),o(4),h("ngClass",w(15,y,!((m=e.registerForm.get("name"))!=null&&m.errors)&&(((m=e.registerForm.get("name"))==null?null:m.touched)||((m=e.registerForm.get("name"))==null?null:m.dirty)),((m=e.registerForm.get("name"))==null?null:m.errors)&&(((m=e.registerForm.get("name"))==null?null:m.touched)||((m=e.registerForm.get("name"))==null?null:m.dirty)))),o(),u(8,(C=e.registerForm.get("name"))!=null&&C.errors&&((C=e.registerForm.get("name"))!=null&&C.touched||(C=e.registerForm.get("name"))!=null&&C.dirty)?8:-1),o(4),h("ngClass",w(18,y,!((d=e.registerForm.get("email"))!=null&&d.errors)&&(((d=e.registerForm.get("email"))==null?null:d.touched)||((d=e.registerForm.get("email"))==null?null:d.dirty)),((d=e.registerForm.get("email"))==null?null:d.errors)&&(((d=e.registerForm.get("email"))==null?null:d.touched)||((d=e.registerForm.get("email"))==null?null:d.dirty)))),o(),u(13,(v=e.registerForm.get("email"))!=null&&v.errors&&((v=e.registerForm.get("email"))!=null&&v.touched||(v=e.registerForm.get("email"))!=null&&v.dirty)?13:-1),o(4),h("ngClass",w(21,y,!((g=e.registerForm.get("password"))!=null&&g.errors)&&(((g=e.registerForm.get("password"))==null?null:g.touched)||((g=e.registerForm.get("password"))==null?null:g.dirty)),((g=e.registerForm.get("password"))==null?null:g.errors)&&(((g=e.registerForm.get("password"))==null?null:g.touched)||((g=e.registerForm.get("password"))==null?null:g.dirty)))),o(),u(18,(E=e.registerForm.get("password"))!=null&&E.errors&&((E=e.registerForm.get("password"))!=null&&E.touched||(E=e.registerForm.get("password"))!=null&&E.dirty)?18:-1),o(4),h("ngClass",w(24,y,!e.registerForm.getError("mismatch")&&(((_=e.registerForm.get("rePassword"))==null?null:_.touched)||((_=e.registerForm.get("rePassword"))==null?null:_.dirty)),e.registerForm.getError("mismatch")&&(((_=e.registerForm.get("rePassword"))==null?null:_.touched)||((_=e.registerForm.get("rePassword"))==null?null:_.dirty)))),o(),u(23,e.registerForm.getError("mismatch")&&((R=e.registerForm.get("rePassword"))!=null&&R.touched||(R=e.registerForm.get("rePassword"))!=null&&R.dirty)?23:-1),o(4),h("ngClass",w(27,y,!((f=e.registerForm.get("phone"))!=null&&f.errors)&&((f=e.registerForm.get("phone"))==null?null:f.touched),((f=e.registerForm.get("phone"))==null?null:f.errors)&&((f=e.registerForm.get("phone"))==null?null:f.touched))),o(),u(28,(T=e.registerForm.get("phone"))!=null&&T.errors&&((T=e.registerForm.get("phone"))!=null&&T.touched)?28:-1),o(),h("disabled",e.registerForm.invalid||e.isLoading),o(2),u(31,e.isLoading?31:-1),o(),u(32,e.errMsg?32:-1),o(),u(33,e.msgSuccess?33:-1)}},dependencies:[O,$,G,V,B,k,j,A]});let t=n;return t})();export{_e as RegisterComponent};
