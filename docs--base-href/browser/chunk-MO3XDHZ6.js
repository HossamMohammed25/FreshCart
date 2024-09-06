import{a as b}from"./chunk-JYPWEKPL.js";import"./chunk-G5KA7DMQ.js";import{a as x,b as p,c as L,d as y,f as T,g as A,h as N,i as k,k as D}from"./chunk-BWYYIAS5.js";import{g as E,h as w}from"./chunk-DG4QCYDV.js";import{Cb as r,Db as F,Jb as C,Na as l,Z as c,aa as _,cb as u,eb as h,ib as d,mb as n,nb as t,ob as f,tb as v,ub as S}from"./chunk-4C3NXVLE.js";function I(e,o){e&1&&(n(0,"p",6),r(1,"Your Email is Invalid"),t())}function B(e,o){e&1&&(n(0,"p",6),r(1,"Your Password is Invalid"),t())}function M(e,o){e&1&&(n(0,"span"),f(1,"i",14),t())}function P(e,o){if(e&1&&(n(0,"p",12),r(1),t()),e&2){let G=S();l(),F(G.msgError)}}function R(e,o){e&1&&(n(0,"p",13),r(1,"Success"),t())}var H=(()=>{let o=class o{constructor(){this.isLoading=!1,this.msgError="",this.msgSuccess=!1,this._AuthService=c(b),this._FormBuilder=c(k),this._router=c(E),this.loginForms=this._FormBuilder.group({email:[null,[p.required,p.email]],password:[null,[p.required,p.pattern(/^\w{6,}$/)]]})}loginSubmit(){this.loginForms.valid?(this.isLoading=!0,this._AuthService.loginForm(this.loginForms.value).subscribe({next:s=>{this.isLoading=!1,s.message=="success"&&(this.msgSuccess=!0,localStorage.setItem("userToken",s.token),this._AuthService.saveUserData(),setTimeout(()=>{this._router.navigate(["/home"])},1e3))},error:s=>(this.msgError=s.error.message,this.isLoading=!1,this.loginForms.invalid)})):this.loginForms.markAllAsTouched()}};o.\u0275fac=function(g){return new(g||o)},o.\u0275cmp=_({type:o,selectors:[["app-login"]],standalone:!0,features:[C],decls:22,vars:7,consts:[[1,"bg-main-light","p-2","my-5","w-75","mx-auto","rounded","shadow"],[1,"h2","text-main"],[3,"ngSubmit","formGroup"],[1,"my-3"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],[1,"alert","alert-danger","mt-2"],["for","password"],["formControlName","password","type","password","id","password",1,"form-control"],[1,"d-flex","justify-content-end","align-items-center","gap-3"],["routerLink","/forgot",1,"link-success","cr"],[1,"btn-main","my-3",3,"disabled"],[1,"text-center","text-main","mt-3"],[1,"text-success","h5"],[1,"fas","fa-spin","fa-spinner"]],template:function(g,i){if(g&1&&(n(0,"section",0)(1,"h1",1),r(2,"sign in:"),t(),n(3,"form",2),v("ngSubmit",function(){return i.loginSubmit()}),n(4,"div",3)(5,"label",4),r(6,"Email:"),t(),f(7,"input",5),u(8,I,2,0,"p",6),t(),n(9,"div",3)(10,"label",7),r(11,"Password:"),t(),f(12,"input",8),u(13,B,2,0,"p",6),t(),n(14,"div",9)(15,"a",10),r(16,"Forget Password"),t(),n(17,"button",11),r(18,"login "),u(19,M,2,0,"span"),t()(),u(20,P,2,1,"p",12)(21,R,2,0,"p",13),t()()),g&2){let a,m;l(3),h("formGroup",i.loginForms),l(5),d(8,(a=i.loginForms.get("email"))!=null&&a.errors&&((a=i.loginForms.get("email"))!=null&&a.touched||(a=i.loginForms.get("email"))!=null&&a.dirty)?8:-1),l(5),d(13,(m=i.loginForms.get("password"))!=null&&m.errors&&((m=i.loginForms.get("password"))!=null&&m.touched||(m=i.loginForms.get("password"))!=null&&m.dirty)?13:-1),l(4),h("disabled",i.loginForms.invalid||i.isLoading),l(2),d(19,i.isLoading?19:-1),l(),d(20,i.msgError?20:-1),l(),d(21,i.msgSuccess?21:-1)}},dependencies:[D,T,x,L,y,A,N,w]});let e=o;return e})();export{H as LoginComponent};
