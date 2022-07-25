import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  date = new Date();
  locale!: string;

  constructor(
    public authS : AuthService,
    public languageS : LanguageService,
    public translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    translate.use('en').subscribe( res => {
    });
    this.languageS.language$.subscribe( language => {
      translate.use(language);
    })

  }
  ngOnInit(): void {

  }
  setLanguage( langue : 'fr' | 'en' ){
    // this.translate.use(langue);
    this.languageS.language$.next(langue) ;
    if ( this.authS.userNow ){
      this.authS.updateUser( { language : langue })
    }
  }
  deconnection(){
      this.authS.deconnection();
  }
}
