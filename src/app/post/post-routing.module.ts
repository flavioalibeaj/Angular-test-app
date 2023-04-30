import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {path:"", component: PostComponent},
  {path: "post-details/:id", component: PostDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
