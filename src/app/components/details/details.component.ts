import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { Subscription } from 'rxjs';
import { Iproduct } from '../../core/interfaces/iproduct';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit , OnDestroy {
 private readonly  _ActivatedRoute=inject(ActivatedRoute)
 private readonly  _ProductsService=inject(ProductsService)
 private readonly _CartService = inject(CartService)
 private readonly _ToastrService = inject(ToastrService)
 productIDSub!:Subscription;
 productSub!:Subscription;
  productDetails: Iproduct | null =null;

  ngOnInit(): void {
    this.productIDSub= this._ActivatedRoute.paramMap.subscribe({
        next:(p)=>{
          // console.log(p.get('id'))
         let productID = p.get('id')

         this.productIDSub =   this._ProductsService.getSpecificProducts(productID).subscribe({
           next:(res)=>{
             this.productDetails= res.data
             }
         })
       
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
  
  
  ngOnDestroy(): void {
this.productIDSub?.unsubscribe();
this.productSub?.unsubscribe();
this.cartSub?.unsubscribe();

  }
}
