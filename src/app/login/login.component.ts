import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../shared/services/language.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  languageSub! : Subscription; 

  constructor(
    public languageS : LanguageService,
    public translate: TranslateService,
    public loginS : LoginService
    
    ) {

      translate.setDefaultLang(this.languageS.language$.getValue());
      this.languageSub = this.languageS.language$.subscribe( langue => {

        translate.use(langue).subscribe( res => {
        });

      });
  }

  ngOnInit(): void {

    

  }
  ngOnDestroy(): void {

    this.languageSub.unsubscribe()

  }

}
