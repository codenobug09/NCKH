import { Component } from '@angular/core';
import { ChatbptService } from '../service/chatbpt.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Chat } from '../interfaces/chats.interfaces';
import { response } from '../interfaces/message.interfaces';
import { ChatMessage } from '../interfaces/messagechat.interfaces';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor(private service: ChatbptService) {}
  true: string = '';
  boolean: boolean = true;

  message: ChatMessage[] = [];
  chats: Chat[] = [];

  chatbot: FormGroup = new FormGroup({
    message: new FormControl(''),
  });

  // mouseLeaveHide() {
  //   this.boolean = true;
  // }
  // mouseSeenterShow() {
  //   this.boolean = false;
  // }
  hideNotify() {
    this.true = '';
  }
  getChat() {
    if (this.chatbot.value.message === '') {
      const newChat: Chat = {
        message: '',
        response: 'Please enter a message',
      };
      this.chats.push(newChat);
      this.true = 'true';
    } else {
      this.boolean = false;
      this.service.getChat(this.chatbot.value).subscribe({
        next: (data: response) => {
          const newChat: Chat = {
            message: this.chatbot.value.message,
            response: data.response,
          };
          this.chats.push(newChat);
          this.boolean = true;
          this.true = 'true';
          this.chatbot.reset();
        },
        error: (error: response) => {
          const newChat: Chat = {
            message: this.chatbot.value.message,
            response:
              'Im sorry, I did not understand that because of an error in the server',
          };
          this.chats.push(newChat);
          this.boolean = true;
          this.true = 'true';
          this.chatbot.reset();
        },
      });
    }
  }
}
