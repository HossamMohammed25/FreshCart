import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Icategories } from '../../core/interfaces/icategories';
import { Iproduct } from '../../core/interfaces/iproduct';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { CartService } from '../../core/services/cart.service';
import { CategoriesService } from '../../core/services/categories.service';
import { ProductsService } from '../../core/services/products.service';
import { WishlistService } from '../../core/services/wishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
imports: [CarouselModule,RouterLink,CurrencyPipe,SearchPipe,FormsModule,TranslateModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit ,OnDestroy {

  
  customOptionsCat: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    pullDrag: false,
    rtl: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 7
      }
    },
    nav: true
  }
  customOptionsMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    rtl: true,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: true
  }

  productSearch:string='';

  private readonly _ProductsService = inject(ProductsService)
  private readonly _CategoriesService = inject(CategoriesService)
  private readonly _CartService = inject(CartService)
  private readonly _WishlistService = inject(WishlistService)
  private readonly _ToastrService = inject(ToastrService)
  products: Iproduct[] = [];
  categoriesList:Icategories[]=[];
  productSub!:Subscription;
  categorySub!:Subscription;
  wishlistSub!:Subscription;
  cartSub!:Subscription;
  removeProductSub!:Subscription;


  
  changeHeart:any =null;

ngOnInit(): void {
  // all categories
  this.categorySub= this._CategoriesService.getAllCategories().subscribe({
    next: (res) => {

      this.categoriesList = res.data;
     
    }
  })


  // products
  this.productSub=   this._ProductsService.getAllProducts().subscribe({
      next:(res)=>{
        // console.log(res.data);
        this.products = res.data;
        this.changeHeart = res.data
        if(localStorage.getItem('heart') !== null){

          this.changeHeart = localStorage.getItem('heart')
                
                }

      }
    })
  
}


addToCart(id:string):void{
  this.cartSub= this._CartService.addProductToCart(id).subscribe({
    next:(res)=>{
      // console.log(res);

      
      this._ToastrService.success(res.message , 'Fresh Cart')
      this._CartService.cartNumber.set(res.numOfCartItems)
      
    }
  })
}



addToWishlist(id:string):void{
  this.wishlistSub=  this._WishlistService.setToWishlist(id).subscribe({
    next:(res)=>{
      this.changeHeart=res.data
      localStorage.setItem('heart', JSON.stringify(this.changeHeart))
      
      // console.log(res);
      this._ToastrService.success(res.message , 'Wishlist')
    }
  })
  
}

deleteProduct(id:string):void{
  this.removeProductSub= this._WishlistService.removeProductWishlist(id).subscribe({
    next:(res)=>{
      this.changeHeart=res.data
        // console.log(res,'delete');
        localStorage.setItem('heart',JSON.stringify(this.changeHeart))
        
    }
  })
}



  




ngOnDestroy(): void {
  this.productSub?.unsubscribe();
  this.categorySub?.unsubscribe();
  this.cartSub?.unsubscribe();
  this.wishlistSub?.unsubscribe();
  this.removeProductSub?.unsubscribe();
  
}
 

}
