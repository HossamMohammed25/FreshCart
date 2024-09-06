import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MyTranslationService } from '../../core/services/my-translation.service';

@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,TranslateModule],
  templateUrl: './nav-auth.component.html',
  styleUrl: './nav-auth.component.scss'
})
export class NavAuthComponent {
  readonly _TranslateService= inject(TranslateService)
  private readonly _MyTranslationService= inject(MyTranslationService)

  change(lang:string):void{
    this._MyTranslationService.changeLang(lang)



  }
}
