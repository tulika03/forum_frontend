import { MainService } from './main.service';

import {
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
    MatListModule, MatMenuModule, MatCardModule, MatTabsModule, MatTableModule, MatPaginatorModule
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
        MatSidenavModule
    ],
    providers: [
        MainService
    ],
    entryComponents: []
})
export class MainModule {
}