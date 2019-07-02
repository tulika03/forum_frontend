import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  employee_email: any;
  employee_password: any;
  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder, public nav : AppService) { 
      
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }//

  login() {
    if(this.loginForm.valid) {
      let data = {
        employee_email: this.employee_email,
        employee_password: this.employee_password
      };
      this.loginService.login(data)
    }

  }

  invalidEmailError() {
    console.log("error")
    return this.loginForm.hasError('email') ? 'Please enter a valid email Id' :
      this.loginForm.hasError('required') ? 'Email is required.' : ' ';
  }

}
