import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LanguageService } from './language.service';

export type User = {
  email : String,
  token : String
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : ReplaySubject<any> = new ReplaySubject() ;
  userNow! : any ;

  constructor(
    private http : HttpClient,
    private languageS : LanguageService
  ) { 

    this.user$.subscribe( user => {
      this.userNow = user ;
      if ( user && user.language ){
        this.languageS.setLanguage(user.language);
      }

    })

    if ( localStorage.getItem('token') ){
        this.http.get<User>(`${environment.apiUrl}/u/get`).subscribe( user => {
          this.user$.next(user);
        }, err => {
          localStorage.removeItem('token');
        })
    }else{
      this.user$.next(null);
    }
  }
  deconnection(){
    localStorage.removeItem('token');
    this.user$.next(null);
  }

  updateUser( datas : any ){
    this.http.post<any>(`${environment.apiUrl}/u/update`,  datas ).subscribe( user => {
      this.user$.next(user);
    }, err => {
      localStorage.removeItem('token');
    })
  }

}
