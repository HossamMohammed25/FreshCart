import './polyfills.server.mjs';
import{a as l}from"./chunk-QZLY374Y.mjs";import{k as n}from"./chunk-SX4IOAQB.mjs";import{a as r}from"./chunk-EC73D4GI.mjs";import{Hc as a,Q as s,W as i}from"./chunk-ZWGHKFBJ.mjs";var d=(()=>{let e=class e{constructor(){this._Router=i(n),this._HttpClient=i(a)}registerData(t){return this._HttpClient.post(`${r.baseUrl}/api/v1/auth/signup`,t)}loginForm(t){return this._HttpClient.post(`${r.baseUrl}/api/v1/auth/signin`,t)}saveUserData(){localStorage.getItem("userToken")!==null&&(this.userData=l(localStorage.getItem("userToken")))}logOut(){localStorage.removeItem("userToken"),this._Router.navigate(["/login"])}setEmailVerify(t){return this._HttpClient.post(`${r.baseUrl}/api/v1/auth/forgotPasswords`,t)}setCodeVerify(t){return this._HttpClient.post(`${r.baseUrl}/api/v1/auth/verifyResetCode`,t)}setResetPassword(t){return this._HttpClient.put(`${r.baseUrl}/api/v1/auth/resetPassword`,t)}};e.\u0275fac=function(p){return new(p||e)},e.\u0275prov=s({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{d as a};
