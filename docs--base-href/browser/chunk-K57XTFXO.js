import{a as y}from"./chunk-23F6HY5V.js";import{Cb as v,Db as f,Ja as m,Jb as h,Na as r,Z as c,aa as d,eb as l,kb as p,lb as g,mb as n,nb as a,ob as u}from"./chunk-4C3NXVLE.js";var S=(t,e)=>e._id;function b(t,e){if(t&1&&(n(0,"div",1)(1,"div",2)(2,"div",3),u(3,"img",4),a(),n(4,"div",5)(5,"h2",6),v(6),a()()()()),t&2){let o=e.$implicit;r(3),l("src",o.image,m)("alt",o.name),r(3),f(o.name)}}var D=(()=>{let e=class e{constructor(){this._CategoriesService=c(y),this.categoriesItems=[]}ngOnInit(){this.categorySub=this._CategoriesService.getAllCategories().subscribe({next:s=>{this.categoriesItems=s.data}})}ngOnDestroy(){this.categorySub?.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["app-categories"]],standalone:!0,features:[h],decls:4,vars:0,consts:[[1,"row","g-3","my-3"],[1,"col-md-4"],[1,"product","rounded-2","card"],[1,"card-img"],["height","350px",1,"w-100",3,"src","alt"],[1,"card-body"],[1,"text-center","h3","text-success","fw-semibold"]],template:function(i,C){i&1&&(n(0,"section")(1,"div",0),p(2,b,7,3,"div",1,S),a()()),i&2&&(r(2),g(C.categoriesItems))}});let t=e;return t})();export{D as CategoriesComponent};
