import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { IAccount } from '../_model/account';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  accounts:Array<IAccount> = [
    {
      username: 'a',
      password: '123456'
    },
    {
      username: 'b',
      password: '123456'
    }
  ];
  authen: BehaviorSubject<boolean> = new BehaviorSubject(!localStorage.getItem('isLoggedIn'));
  
  constructor() {
   }
  login(username:string, password:string, rememberMe:boolean){
    const account:IAccount = this.accounts.find(a => {
      return a.username == username && a.password == password
    });
    if(account){
      if(rememberMe){
        localStorage.setItem('isLoggedIn', 'true');
        this.authen.next(!!localStorage.getItem('isLoggedIn'));
      }
      else{
        this.authen.next(true);
      }
      return of(true);
    }
    else{
      localStorage.setItem('isLoggedIn', 'false');
      this.authen.next(!localStorage.getItem('isLoggedIn'));
      return of(false);
    }
  }
  logout(){
    localStorage.setItem('isLoggedIn', 'false');
    this.authen.next(!localStorage.getItem('isLoggedIn'));
    return of(false);
  }
}
