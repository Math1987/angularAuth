import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ConnectComponent } from './components/connect/connect.component';
import { NewComponent } from './components/new/new.component';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from './login.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/login.', '.json' )
}

@NgModule({
  declarations: [
    LoginComponent,
    ConnectComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      isolate: true
  })
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
