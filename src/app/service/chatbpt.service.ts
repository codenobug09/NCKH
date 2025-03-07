import { response } from './../interfaces/message.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatbptService {
  constructor(private http: HttpClient) {}
  getChat(message: string): Observable<response> {
    return this.http.post<response>(
      'http://localhost:8080/api/chat/test',
      message,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
