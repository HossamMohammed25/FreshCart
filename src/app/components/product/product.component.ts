import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Icategories } from '../../core/interfaces/icategories';
import { Iproduct } from '../../core/interfaces/iproduct';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { CartService } from '../../core/services/cart.service';
import { ProductsService } from '../../core/services/products.service';
import { WishlistService } from '../../core/services/wishlist.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CarouselModule,RouterLink,CurrencyPipe,SearchPipe,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit , OnDestroy {

  productSearch:string='';

  private readonly _ProductsService = inject(ProductsService)
  private readonly _CartService = inject(CartService)
  private readonly _WishlistService = inject(WishlistService)
  private readonly _ToastrService = inject(ToastrService)
  products: Iproduct[] = [];
  categoriesList:Icategories[]=[];
  productSub!:Subscription;
  addCartSub!:Subscription;
  addWishSub!:Subscription;
  removeSub!:Subscription;
    changeHeart:any =null;


ngOnInit(): void {
  // all categories
 

// products
  this.productSub=   this._ProductsService.getAllProducts().subscribe({
      next:(res)=>{
        // console.log(res.data);
        this.products = res.data;
        if(localStorage.getItem('heart') !== null){

          this.changeHeart = localStorage.getItem('heart')
                
                }
      }
    })
  
}

addToCart(id:string):void{
  this.addCartSub= this._CartService.addProductToCart(id).subscribe({
    next:(res)=>{
      // console.log(res);

      
      this._ToastrService.success(res.message , 'Fresh Cart')
      this._CartService.cartNumber.set(res.numOfCartItems)
      
    }
  })
}



addToWishlist(id:string):void{
this.addWishSub=  this._WishlistService.setToWishlist(id).subscribe({
    next:(res)=>{
      this.changeHeart=res.data
      localStorage.setItem('heart', JSON.stringify(this.changeHeart))
      
      // console.log(res);
      this._ToastrService.success(res.message , 'Wishlist')
    }
  })
  
}

deleteProduct(id:string):void{
 this.removeSub= this._WishlistService.removeProductWishlist(id).subscribe({
    next:(res)=>{
      this.changeHeart=res.data
        // console.log(res,'delete');
        localStorage.setItem('heart',JSON.stringify(this.changeHeart))
        
    }
  })
}


ngOnDestroy(): void {
  this.productSub?.unsubscribe();
  this.addCartSub?.unsubscribe();
  this.addWishSub?.unsubscribe();
  this.removeSub?.unsubscribe();

}
 

}

