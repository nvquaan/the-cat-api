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
  authen: BehaviorSubject<boolean> = new BehaviorSubject(!this.getLocalStorage());
  
  constructor() {
   }
  login(username:string, password:string, rememberMe:boolean){
    const account:IAccount = this.accounts.find(a => {
      return a.username == username && a.password == password
    });
    if(account){
      if(rememberMe){
        this.setLocalStorage('true');
        this.authen.next(!!this.getLocalStorage());
      }
      else{
        this.authen.next(true);
      }
      return of(true);
    }
    else{
      this.setLocalStorage('false');
      this.authen.next(!this.getLocalStorage());
      return of(false);
    }
  }
  logout(){
    this.setLocalStorage('false');
    this.authen.next(!this.getLocalStorage());
    return of(false);
  }
  private getLocalStorage(){
    return localStorage.getItem('isLoggedIn')
  }
  private setLocalStorage(str: string){
    localStorage.setItem('isLoggedIn', str);
  }
}
