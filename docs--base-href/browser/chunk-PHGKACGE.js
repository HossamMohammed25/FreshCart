import{T as o,Y as n,tc as p,yc as i}from"./chunk-4C3NXVLE.js";var h=(()=>{let r=class r{constructor(t){this._HttpClient=t}checkout(t,e){return this._HttpClient.post(`${i.baseUrl}/api/v1/orders/checkout-session/${t}?url=${i.localhost}`,{shippingAddress:e})}getAllorders(t){return this._HttpClient.get(`${i.baseUrl}/api/v1/orders/user/${t}`)}cashOrder(t,e){return this._HttpClient.post(`${i.baseUrl}/api/v1/orders/${t}`,{shippingAddress:e})}};r.\u0275fac=function(e){return new(e||r)(n(p))},r.\u0275prov=o({token:r,factory:r.\u0275fac,providedIn:"root"});let s=r;return s})();export{h as a};
