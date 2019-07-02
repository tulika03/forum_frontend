import { MainService } from './../main.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['Board Title', 'Description', 'created'];
   periodicElement = [
    {board_title: 1, description: 'Hydrogen', createdOn: 1.0079},
    {board_title: 2, description: 'Helium', createdOn: 4.0026},
    {board_title: 3, description: 'Lithium', createdOn: 6.941},
    {board_title: 4, description: 'Beryllium', createdOn: 9.0122},
    {board_title: 5, description: 'Boron', createdOn: 10.811},
    {board_title: 6, description: 'Carbon', createdOn: 12.0107},
    {board_title: 7, description: 'Nitrogen', createdOn: 14.0067},
    {board_title: 8, description: 'Oxygen', createdOn: 15.9994},
    {board_title: 9, description: 'Fluorine', createdOn: 18.9984},
    {board_title: 10, description: 'Neon', createdOn: 20.1797},
    {board_title: 11, description: 'Sodium', createdOn: 22.9897},
    {board_title: 12, description: 'Magnesium', createdOn: 24.305},
    {board_title: 13, description: 'Aluminum', createdOn: 26.9815},
    {board_title: 14, description: 'Silicon', createdOn: 28.0855},
    {board_title: 15, description: 'Phosphorus', createdOn: 30.9738},
    {board_title: 16, description: 'Sulfur', createdOn: 32.065},
    {board_title: 17, description: 'Chlorine', createdOn: 35.453},
    {board_title: 18, description: 'Argon', createdOn: 39.948},
    {board_title: 19, description: 'Potassium', createdOn: 39.0983},
    {board_title: 20, description: 'Calcium', createdOn: 40.078},
  ];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  dataSource : any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public nav: MainService, private router : Router ) {
    this.dataSource = new MatTableDataSource(this.periodicElement)
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    this.nav.show()
  }

  addBoard() {
    this.router.navigate(['/forum/create-board'])
  }

}
