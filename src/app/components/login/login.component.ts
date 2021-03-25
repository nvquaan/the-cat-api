import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/_services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn: boolean;
  constructor(private fb: FormBuilder, public loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loadForm();
    this.isLoggedIn = localStorage.getItem('isLoggedIn')=='true'?true:this.loginService.authen.value==true?true:false;
  }
  onSubmit() {
    this.loginService
      .login(
        this.loginForm.controls.username.value,
        this.loginForm.controls.password.value,
        this.loginForm.controls.rememberMe.value
      )
      .subscribe((res) => {
        this.isLoggedIn = res;
      });
  }
  logout() {
    this.loginService.logout().subscribe((res) => {
      this.isLoggedIn = res;
    });
  }

  loadForm() {
    this.loginForm = this.fb.group({
      username: [
        '',
        Validators.compose([
          Validators.required,
          // Validators.minLength(4),
          // Validators.pattern(/^[a-z]{6,32}$/i),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          // Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/),
        ]),
      ],
      rememberMe: false,
    });
  }
}
