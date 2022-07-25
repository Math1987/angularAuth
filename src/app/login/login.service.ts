import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';
import { LanguageService } from '../shared/services/language.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http : HttpClient,
    private router : Router,
    private authS : AuthService,
    private languageS : LanguageService
  ) {


   }

  createAccount( datas : any ){

    (datas as any)['language'] = this.languageS.language$.getValue();
    this.http.post(`${environment.apiUrl}/u/create`, datas ).subscribe( res => {
      localStorage.setItem('token', (res as any).token);
      this.authS.user$.next(res);
      this.router.navigateByUrl('/home');
    }, err => {
      console.log(err);
      alert('error creating account.');
    });

  }
  login( datas : any ){

    (datas as any)['language'] = this.languageS.language$.getValue();
    this.http.post(`${environment.apiUrl}/u/login`, datas ).subscribe( res => {
      localStorage.setItem('token', (res as any).token);
      this.authS.user$.next(res);
      this.router.navigateByUrl('/home');

    }, err => {
      console.log(err);
      alert('error login.');
    });

  }
}
