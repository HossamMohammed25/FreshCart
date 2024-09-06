import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Icart } from '../../core/interfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, OnDestroy {

private readonly _CartService = inject(CartService);
getProductsSub!:Subscription;
deleteProductsSub!:Subscription;
updateProductsSub!:Subscription;
clearProductsSub!:Subscription;

cartDetails: Icart |null ={} as Icart;

ngOnInit(): void {
  this.getProductsSub= this._CartService.getProductsCart().subscribe({
    next:(res)=>{
      // console.log(res.data , 'cart');
      this.cartDetails=res.data;

    }
  })
}
deleteItem(id:string):void{
  this.deleteProductsSub= this._CartService.deleteProductsCart(id).subscribe({
    next:(res)=>{
      // console.log(res);
      this.cartDetails=res.data;
      this._CartService.cartNumber.set(res.numOfCartItems)
    }
  })
}

updateCount(id:string , count:number):void{
 if(count>0){
  this.updateProductsSub=  this._CartService.updateCount(id, count).subscribe({
    next:(res)=>{
      // console.log(res);
      this.cartDetails=res.data;

    }

  })
 }else {
  this.deleteItem(id)
 }
}

clearItems():void{
  this.clearProductsSub= this._CartService.clearCart().subscribe({
    next:(res)=>{
      // console.log(res);
      this._CartService.cartNumber.set(0)
      if(res.message == "success"){
        this.cartDetails = null;

      }
      
    }
  })
}

ngOnDestroy(): void {
  this.getProductsSub?.unsubscribe();
  this.deleteProductsSub?.unsubscribe();
  this.updateProductsSub?.unsubscribe();
  this.clearProductsSub?.unsubscribe();
  
}

}
