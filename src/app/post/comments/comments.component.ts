import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comments } from 'src/app/model/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{

  @Input() commentList: Comments[] | undefined = []
  // @Input() emri: string = ''
  @Output() selectedComment = new EventEmitter<string>

  ngOnInit(){
    this.commentList
  }

  clickedComment(email: string | undefined){
    this.selectedComment.emit(email)
  }

}
