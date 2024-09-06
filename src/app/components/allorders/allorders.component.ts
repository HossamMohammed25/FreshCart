import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Iorders } from '../../core/interfaces/iorders';
import { IprevOrders } from '../../core/interfaces/iprev-orders';
import { OrdersService } from '../../core/services/orders.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent implements OnInit , OnDestroy {
  private readonly _OrdersService = inject(OrdersService);

tokenId: Iorders={} as Iorders;
prevProduct: IprevOrders []=[];

allordersSub!:Subscription;

  ngOnInit(): void {
    this.tokenId= jwtDecode(    localStorage.getItem('userToken')!    )
    
    this.allordersSub=  this._OrdersService.getAllorders( this.tokenId.id).subscribe({

      next: (res) => {

        // console.log(res);
        this.prevProduct=res;
        
      },
      
    })




  }

  ngOnDestroy(): void {
      this.allordersSub?.unsubscribe();
  }
}
