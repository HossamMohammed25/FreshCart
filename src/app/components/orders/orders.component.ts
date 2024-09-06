import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../core/services/orders.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit , OnDestroy {
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _OrdersService = inject(OrdersService)
  private readonly _CartService = inject(CartService)
  private readonly _Router = inject(Router)


  cartId:string |null ='';

  orders:FormGroup = this._FormBuilder.group({
    details : [null ,[Validators.required , Validators.minLength(3) , Validators.max(30)]],
    phone : [null , [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
    city: [null,[Validators.required,  Validators.minLength(3) , Validators.max(10)]]
  })

  
  
  activeRouteSub!:Subscription;
  visaSub!:Subscription;
  cashSub!:Subscription;

  ngOnInit(): void {
    this.activeRouteSub=   this._ActivatedRoute.paramMap.subscribe({
        next: (params) => {
          this.cartId = params.get('id')
          // console.log(this.cartId ,'cardid');
          // localStorage.setItem('userCart' , this.cartId!)

        }
      })
  }


  visaPay():void{
    this._OrdersService.checkout(this.cartId , this.orders.value ).subscribe({
      next: (res) => {
        // console.log(res)
        if(res.status === 'success'){
          window.open( res.session.url ,'_self')
        }
        }
    })

  }


  cashPay():void{
    this._OrdersService.cashOrder(this.cartId , this.orders.value).subscribe({
      next: (res) => {
        this._Router.navigate(['/allorders'])
        this._CartService.cartNumber.set(0)
        // console.log(res)
      }
    })
  }

ngOnDestroy(): void {
    this.activeRouteSub?.unsubscribe();
    this.visaSub?.unsubscribe(); 
    this.cashSub?.unsubscribe();
    
}

}
