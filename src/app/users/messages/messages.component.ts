import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  @Output() newMessage = new EventEmitter<string>();
  message: string = ""

  addMessage(message: string){
    this.message = message
    this.newMessage.emit(this.message)
  }
}
