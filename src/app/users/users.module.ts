import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserDataComponent } from './user-data/user-data.component';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserDataComponent,
    MessagesComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UsersModule { }
