import { Component, inject, OnInit, Signal, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MyTranslationService } from '../../core/services/my-translation.service';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,TranslateModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})
export class NavBlankComponent implements OnInit {
  readonly _AuthService= inject(AuthService)
  readonly _TranslateService= inject(TranslateService)
  private readonly _MyTranslationService= inject(MyTranslationService)
  private readonly _CartService= inject(CartService)
  private readonly _WishlistService= inject(WishlistService)



  countNumber :Signal<number> = computed(()=> this._CartService.cartNumber())

  change(lang:string):void{
    this._MyTranslationService.changeLang(lang)

  }

  ngOnInit(): void {

    this._CartService.getProductsCart().subscribe({
      next: (res) => {
      this._CartService.cartNumber.set(res.numOfCartItems)


      
      }
    })
 
      
  }
}
