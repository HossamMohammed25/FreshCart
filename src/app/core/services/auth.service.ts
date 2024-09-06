import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { Itoken } from '../../itoken';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private readonly _Router = inject(Router)
private readonly _HttpClient=inject(HttpClient)
userData!: Itoken ;



 registerData(data:object):Observable<any>
 {
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signup`,data)
 }

 loginForm(data:object):Observable<any>
 {
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signin`, data)
 }

saveUserData():void{
  if(localStorage.getItem('userToken') !==null ){
   this.userData = jwtDecode(localStorage.getItem('userToken')!)
// console.log('user data' , this.userData);

  }
}

logOut():void{
  localStorage.removeItem('userToken');
  // this.userData;
  this._Router.navigate(['/login'])

}
setEmailVerify(data:object):Observable<any>
{
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/forgotPasswords`,data )
}

setCodeVerify(data:object):Observable<any>
{
  return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/verifyResetCode`,data )
}
setResetPassword(data:object):Observable<any>
{
  return this._HttpClient.put(`${environment.baseUrl}/api/v1/auth/resetPassword`,data )
}

}
