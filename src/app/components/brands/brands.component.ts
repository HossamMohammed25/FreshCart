import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { Ibrands } from '../../core/interfaces/ibrands';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit,OnDestroy {
  private readonly _BrandsService=inject(BrandsService)
  brandsList: Ibrands []=[]

  isClicked:boolean=false;
  imgSrc:string | null=''
  name:string=''
  slug:string=''
  barndsSub!:Subscription;

  ngOnInit(): void {
    this.barndsSub=  this._BrandsService.getAllBrands().subscribe({
      next:(res)=>{
        // console.log(res.data);
        this.brandsList=res.data
        
      }
    })

  }
  
  openModal(imgSrc:string , name:string , slug:string):void{
    this.isClicked=true;
    
    this.imgSrc = imgSrc
    this.name =name
    this.slug = slug
  
  }

  ngOnDestroy(): void {
      this.barndsSub?.unsubscribe();
  }
}
