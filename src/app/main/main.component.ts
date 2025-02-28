import { Component } from '@angular/core';
import { ChatbptService } from '../service/chatbpt.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor(private service: ChatbptService) {}
  message: string = '';
  response: string = '';
  Message = {};
  chatbot: FormGroup = new FormGroup({
    message: new FormControl(''),
  });
  getChat() {
    this.service.getChat(this.chatbot.value).subscribe((data) => {
      data = this.message;
      console.log(JSON.parse(data));
    });
  }
}
