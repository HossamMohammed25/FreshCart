import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MyTranslationService {
private readonly _TranslateService = inject(TranslateService)
private readonly _PLATFORMID = inject(PLATFORM_ID)
private readonly _RendererFactory2 = inject(RendererFactory2).createRenderer(null,null)
  constructor() {   

    if(isPlatformBrowser(this._PLATFORMID)){
      let saveLang = localStorage.getItem('lang')

    this._TranslateService.setDefaultLang('en');

    this.setLang()


   

        
    }
    
  }

  setLang():void{
    let saveLang = localStorage.getItem('lang')
    if(saveLang !== null){

      this._TranslateService.use(saveLang !)
    }
    if(saveLang === 'en'){
      this._RendererFactory2.setAttribute(document.documentElement , 'dir' ,'ltr')
      this._RendererFactory2.setAttribute(document.documentElement , 'lang' ,'en')
      
  } else if(saveLang === 'ar'){
    this._RendererFactory2.setAttribute(document.documentElement , 'dir' ,'rtl')
    this._RendererFactory2.setAttribute(document.documentElement , 'lang' ,'ar')
  }
}


changeLang(lang:string):void{
  if(isPlatformBrowser(this._PLATFORMID)){

    localStorage.setItem('lang' , lang)
  this.setLang()
    
  }


}
}
