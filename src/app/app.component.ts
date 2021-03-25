import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from './_services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  isDisabled:boolean;
  constructor(public loginService: LoginService) {
  }
  ngOnInit(): void {
    this.loginService.authen.subscribe(authen => {
      this.isDisabled = localStorage.getItem('isLoggedIn')=='true'?false:authen==true?false:true;
    });
  }
 
}
