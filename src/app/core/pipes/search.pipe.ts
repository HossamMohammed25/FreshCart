import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(productsArr:any[] ,word:string ): any {

    return productsArr.filter( (item)=> item.title.toLowerCase().startsWith(word.toLowerCase()) );
  }

}
