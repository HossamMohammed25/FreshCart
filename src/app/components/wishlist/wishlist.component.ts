import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Iwishlist } from '../../core/interfaces/iwishlist';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit,OnDestroy {
  private readonly _WishlistService = inject(WishlistService)
  private readonly _CartService = inject(CartService)

  wishListDetails: Iwishlist | null ={} as Iwishlist

  wishlistSub!:Subscription;
  removeProductSub!:Subscription;
  addCartSub!:Subscription;
  
  ngOnInit(): void {
  
  
this.wish()


}
wish():void{
 this.wishlistSub= this._WishlistService.getUserWishlist().subscribe({
    next:(res)=>{
      // console.log(res,"wish")
      this.wishListDetails = res

      
    }
    })
  }

deleteProduct(id:string):void{
 this.removeProductSub= this._WishlistService.removeProductWishlist(id).subscribe({
    next:(res)=>{
        // console.log(res,'delete');
        localStorage.setItem('heart', res.data)

this.wish()      
        
    }
  })
}

addCart(id:string):void{
 this.addCartSub= this._CartService.addProductToCart(id).subscribe({
    next:(res)=>{
      // console.log(res,'addcart');
      this.wishListDetails = res
      this._CartService.cartNumber.set(res.numOfCartItems)
      this._WishlistService.removeProductWishlist(id).subscribe({
        next:(res)=>{
            // console.log(res,'delete');
            localStorage.setItem('heart', res.data)

    this.wish()      
            
        }
      })

    }
} )
}

ngOnDestroy(): void {
    this.removeProductSub?.unsubscribe();
    this.addCartSub?.unsubscribe();
    this.wishlistSub?.unsubscribe();
}

}
