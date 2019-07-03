import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { NavModule } from '../nav/nav.module';
import *  as jwt_decode from 'jwt-decode'


@Injectable()
export class LoginService {
    url = NavModule.APIEndPoint
    constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    }

    login(data) {
        this.http.post(this.url + 'employee/Employeelogin', data, {
            observe: 'response',
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            })
        })
            .subscribe((data) => {
                let header: HttpHeaders = data.headers;
                localStorage.setItem("jwt_token", data['body']['token']);
                let jwt = localStorage.getItem("jwt_token");
                let decodedJwtData = jwt_decode(jwt)
                 localStorage.setItem("user_name", decodedJwtData.employee_username);
                 localStorage.setItem("user_id", decodedJwtData._id);
                 localStorage.setItem("user_email", decodedJwtData.employee_email)
                this.snackBar.open('', data['body']['message'], {
                    duration: 2000,
                    horizontalPosition: 'end',
                    verticalPosition: 'bottom',
                });
                var a = '/forum/view-boards'
                window.location.href = a;
            },   
            error => {
                this.snackBar.open(' ', error.message, {
                    duration: 2000,
                    horizontalPosition: 'end',
                    verticalPosition: 'bottom',
                    panelClass: ['errorSnackBar']
                })
            })

    } 
}