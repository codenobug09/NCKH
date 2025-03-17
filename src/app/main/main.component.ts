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
  boolean: boolean = true;
  message: ChatMessage[] = [];
  chats: Chat[] = [];

  chatbot: FormGroup = new FormGroup({
    message: new FormControl(''),
  });
  getChat() {
    if (this.chatbot.value.message === '') {
      const newChat: Chat = {
        message: '',
        response: 'Please enter a message',
      };
      this.chats.push(newChat);
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
          this.chatbot.reset();
        },
        error: (error: response) => {
          const newChat: Chat = {
            message: '',
            response: error.response,
          };
          this.chats.push(newChat);
          this.boolean = true;
          this.chatbot.reset();
        },
      });
    }
  }
}
