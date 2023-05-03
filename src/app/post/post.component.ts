import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  post: Post[] | undefined
  @ViewChild("editedData")  editedForm?: NgForm
  currentPostId! : number


  constructor(private postService: PostService){}

  ngOnInit(){
    this.getPost()
}

  getPost(): void{
    this.postService.getPosts().subscribe(result => {
      this.post = result
    })
  }

  addNewPost(newPost: Post){
    this.postService.addNewPost(newPost).subscribe(() => {
      this.post?.push(newPost)
    })
  }

  deletePost(post: Post){
    this.postService.deletePost(post.id).subscribe(() => {
      this.post?.splice(this.post.indexOf(post), 1)
    })
  }

  updatePost(post: Post){
    this.currentPostId = post.id
    let currentPost = this.post?.find(p => {
      return p.id === post.id
    })

    this.editedForm?.setValue({
      body: currentPost?.body,
      title: currentPost?.title
    })

    post.title = this.editedForm?.value.title
    post.body = this.editedForm?.value.body

    this.updateThePost(post);
  }

  updateThePost(post: Post){
    this.postService.updatePost(this.currentPostId, post).subscribe(updatedPost => {

      let index = this.post?.findIndex(p => p.id === updatedPost.id);
      if(index !== undefined){
        this.post![index] = updatedPost;
      }
      })
  }
}
