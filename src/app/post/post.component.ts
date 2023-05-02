import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  post: Post[] | undefined
  singlePost: any

  constructor(private postService: PostService){}

  ngOnInit(){
    this.getPost()
}

  getPost(): void{
    this.postService.getPosts().subscribe(result => {
      this.post = result
      console.log(this.post)
    })
  }

  showNewPost(newPost: Post){
    this.postService.getNewPost(newPost).subscribe(result => {
      console.log(result)
      this.post?.push(newPost)
    })
  }
}
