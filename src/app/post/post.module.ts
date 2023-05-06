import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PostService } from '../services/post.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from "@angular/common/http";
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentsComponent } from './comments/comments.component'
import { FormsModule } from '@angular/forms';
import { UpperLowerPipe } from './upper-lower.pipe';



@NgModule({
  declarations: [
    PostComponent,
    PostDetailsComponent,
    CommentsComponent,
    UpperLowerPipe,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostService]
})
export class PostModule { }
