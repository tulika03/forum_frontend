import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {
  commentGroup: FormGroup
  comment_desc: any;
  commentsData = [
    {
      commentId: 1,
      commentBy : "abc",
      commentOn : '1st jan 2018',
      commentDesc: "sdgs ftysdtf sdrtfrstrftsadt fsdrstr ",
      Reply : {
        replyBy: "aaaaa", 
        replyOn : '5th jan 2018',
        replyDesc: "refgey f euyfewutr ytry retyew rye frerewtr"
      },
      addReply: false
    },
    {
      commentId: 2,
      commentBy : "abcdef",
      commentOn : '3rd jan 2018',
      commentDesc: "ytrytry tretr",
      Reply : {
        replyBy: "aaaaabbbbbb", 
        replyOn : '8th jan 2018',
        replyDesc: "rg tret tretrt tretr trete r rt rtr t rtyrtret trt ret rt ert ert ertrtr rte trewt"
      },
      addReply: false
    },
    {
      commentId: 3,
      commentBy : "lmnopq",
      commentOn : '10th jan 2018',
      commentDesc: "iiiiiichjdhcuhxuh tretr",
      Reply : {
        replyBy: "aaaaabbbbbb", 
        replyOn : '15th jan 2018',
        replyDesc: "ygy tfgfgfttf ttrtttt rtrt rtrtrttr t rtyrtret trt ret rt ert ert ertrtr rte trewt"
      },
      addReply: false
    },
    {
      commentId: 4,
      commentBy : "ifffu fuyftfyt",
      commentOn : '18th jan 2018',
      commentDesc: "iiiiiichjdhcuhxuh tretr",
      Reply : {
       
      },
      addReply: true
    },
    {
      commentId: 5,
      commentBy : "ifffsdsdsdsdsu fuyftfyt",
      commentOn : '18th Feb 2018',
      commentDesc: "dssdfsfsdfdf dfsdf fvdfvfdvfdvfdv fgsdh gfhdsgf dfyyg dcdf rerwe rrrtretsdsfsf ere ere tredsgfd sgfhds fhgf dhsgfhds gfhgdsf hdsgfhds gfhdsgfgdsh fdsgfds fsdf sdfsd fdf tretr",
      Reply : {
       
      },
      addReply: false
    }
  ]

  commentVal: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.commentGroup = this.formBuilder.group({
      comment: ['']
    })
  }

  checkReplyLength(data) {
    if(Object.entries(data).length > 0) {
      return true
    }
    else {
      return false
    }
  }

  postComment() {
    let currentDate = Date.now().toString()
    this.commentsData.unshift({
        commentId: this.commentsData.length,
        commentBy : "ifffsdsdsdsdsu fuyftfyt",
        commentOn : currentDate,
        commentDesc: this.commentVal,
        Reply : {
         
        },
        addReply: false
    })

    this.commentGroup.controls.comment.reset()
    this.commentVal = ""
  }

}
