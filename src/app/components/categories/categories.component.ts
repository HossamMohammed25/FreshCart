import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Icategories } from '../../core/interfaces/icategories';
import { CategoriesService } from '../../core/services/categories.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements  OnInit ,OnDestroy {
  private readonly _CategoriesService = inject(CategoriesService)
  categoriesItems: Icategories [] =[];
  categorySub!:Subscription;
  ngOnInit(): void {
  this.categorySub=  this._CategoriesService.getAllCategories().subscribe({
      next: (res)=>{
        // console.log(res.data);
        this.categoriesItems = res.data
      }
    })
      
  }


  ngOnDestroy(): void {
      this.categorySub?.unsubscribe();
  }
}
