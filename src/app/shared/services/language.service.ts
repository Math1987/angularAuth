import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language$ : BehaviorSubject<string> = new BehaviorSubject<string>("en");

  constructor() { 

  }
  setLanguage( langue : "en" | 'fr'){
    this.language$.next(langue);
  }
  
}
