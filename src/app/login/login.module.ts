import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import {
    MatButtonModule, MatIconModule, MatFormFieldModule,
    MatListModule, MatCardModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
const routes: Routes = [
    {
        'path': 'login',
        'component': LoginComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        RouterModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        HttpClientModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        ReactiveFormsModule
    ],
    providers: [LoginService]
})
export class LoginModule { }
