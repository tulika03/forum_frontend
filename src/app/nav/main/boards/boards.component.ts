import { BoardService } from './boards.service';
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
  displayedColumns: string[] = ['Board Title', 'Description', 'createdOn', 'createdBy'];
  

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  dataSource : any;
  boardData;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public nav: MainService, private router : Router, public boardService: BoardService ) {
  
  }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    this.nav.show()
    this.boardService.getBoardsList().subscribe((data) => {
      console.log(data)
      this.boardData = data;
      let boardDetails = [];
      for(let i=0; i< this.boardData.length; i++) {
        var date =  new Date(this.boardData[i].created_on)
        boardDetails.push({
          id: this.boardData[i]._id,
          board_title: this.boardData[i].board_name,
          description:  this.boardData[i].board_description,
          createdOn: date.getDate() + '/' +  date.getMonth() + '/' + date.getFullYear(),
          createdBy: this.boardData[i].board_created_by.employee_firstName
        })
      }
      this.dataSource = new MatTableDataSource(boardDetails)
    this.dataSource.paginator = this.paginator;
    })

  }

  addBoard() {
    this.router.navigate(['/forum/create-board'])
  }

}
