import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comments } from 'src/app/model/comment';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit{

  postDetails: Post | undefined
  postId: number | undefined
  comments: Comments[] = []
  emailFromChild: string = ""
  // emri: string = "Flavio ALibeaj"

  constructor(private postService: PostService, private route: ActivatedRoute){
    this.route.params.subscribe(params => {
      this.postId = params["id"]
      console.log(this.postId)
    })
  }

  ngOnInit(): void {
    this.getPostDetails()
    this.getCommentsByPostId()
  }

  getPostDetails(): void{
    this.postService.getPostByPostId(this.postId).subscribe(result => {
      this.postDetails = result
      console.log(this.postDetails)
    })
  }

  getCommentsByPostId(): void {
    this.postService.getCommentsByPostId(this.postId).subscribe(result => {
      this.comments = result
      console.log(this.comments)
    })
  }

  showEmail(email: string){
    this.emailFromChild = email
  }
}
