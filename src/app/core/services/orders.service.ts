import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private readonly _HttpClient:HttpClient) { }
  checkout(id:string|null ,shippingDetails:object ):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/checkout-session/${id}?url=${environment.localhost}`, {
      "shippingAddress":shippingDetails
    }
   
  )
  }

  getAllorders(id:string):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/orders/user/${id}`)
  }

  cashOrder(id:string |null ,shippingDetails:object ):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/${id}`,{
      "shippingAddress":shippingDetails

    })
  }

}
