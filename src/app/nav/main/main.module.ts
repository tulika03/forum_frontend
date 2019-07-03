import { BoardService } from './boards/boards.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MainService } from './main.service';
import { HttpClientModule } from '@angular/common/http';

import {
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
    MatListModule, MatMenuModule, MatCardModule, MatTabsModule, MatTableModule, 
    MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSnackBarModule
} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BoardsComponent } from './boards/boards.component';
import { CreateBoardComponent } from './boards/create-board/create-board.component';
import { MainComponent } from './main.component';
const routes: Routes = [
    {
        'path': 'view-boards',
        'component': BoardsComponent
    },
    {
        'path': 'create-board', 
        'component': CreateBoardComponent
    }
];


@NgModule({
    declarations: [
        BoardsComponent,
        CreateBoardComponent,
        MainComponent
    ],
    exports: [
        MainComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        RouterModule,
        MatMenuModule,
        MatListModule,
        MatTabsModule,
        MatTableModule, 
        MatPaginatorModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        HttpClientModule
    ],
    providers: [
        MainService, BoardService
    ],
    entryComponents: []
})
export class MainModule {
}