import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { NavModule } from '../../nav.module';



@Injectable() 
export class BoardService {

    url = NavModule.APIEndPoint
    token: any;
    constructor( private http: HttpClient, private snackBar: MatSnackBar, private router: Router) {
        this.token = "Bearer " + localStorage.getItem("jwt_token")
    }

    // add new board
    addBoard(data) {
        console.log("token is: ", this.token)
        this.http.post(this.url + 'board/addBoard', data, {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                'Authorization': this.token
            })
        })
        .subscribe((data) => {
            this.snackBar.open(' ', "Data saved successfully", {
                duration: 2000,
                horizontalPosition: 'end',
                verticalPosition: 'bottom'
            })
            this.router.navigate(['forum/view-boards'])
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


    // view board details

    getBoardsList() {
        return this.http.get(this.url + 'board/viewBoards', {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                'Authorization': this.token 
            })
        }) 
         .pipe(map(
             (data) => data
         ))
    }
}