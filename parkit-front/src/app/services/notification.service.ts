import { Injectable } from '@angular/core';
import { StompService } from '@elderbyte/ngx-stomp';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotificationService {
  constructor(private stompService: StompService, private http: HttpClient) {
    this.http.get('user').subscribe(r => console.log(r));
    const topic = 'chat';
    this.stompService.connectedClient.subscribe(
      client => {
        console.log('asdsdfgsergrtezgsre');
        const sub = client.subscribe(topic);
        sub.messages.subscribe(
          m => {
            console.log(m.bodyJson);
          },
          err => {
            console.log('Got filtered STOMP topic error!', err);
          }
        );
      },
      err => {
        console.log('STOMP: Failed to subscribe!', err);
      }
    );
  }

  public makeTee() {
    console.log('lalala');
  }
}
