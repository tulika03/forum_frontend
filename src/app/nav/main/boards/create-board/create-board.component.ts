import { BoardService } from './../boards.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './../../../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss']
})
export class CreateBoardComponent implements OnInit {

  boardTitle: any;
  description: any;
  userId: any;
  createForm : FormGroup
  token: any;
  constructor(public nav: AppService, private formBuilder : FormBuilder, public boardService: BoardService) { }

  ngOnInit() {
    this.nav.show()
    this.createForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['']
    })

    this.userId = localStorage.getItem("user_id")
  
  }


  addBoardData() {
    console.log("adding board data")
    var data = {
      board_name: this.boardTitle,
      board_description: this.description,
      board_created_by: this.userId
    }
    this.boardService.addBoard(data)
  }
}
