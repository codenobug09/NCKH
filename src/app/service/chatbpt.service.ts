import { response } from './../interfaces/message.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ChatbptService {
  constructor(private http: HttpClient) {}
  getChat(message: string): Observable<response> {
    // return this.http.post<response>(
    //   `${environment.apiUrl}/chat/test`,
    //   message,
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );
    return this.http.post<response>(
      'https://eab0-27-72-88-206.ngrok-free.app/api/chat/test',
      message,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
