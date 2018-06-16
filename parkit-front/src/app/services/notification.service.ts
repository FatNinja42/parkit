import { Injectable } from '@angular/core';
import { StompService } from '@elderbyte/ngx-stomp';

@Injectable()
export class NotificationService {
  constructor(private stompService: StompService) {
    const topic = '/topic/metadata/changed';
    this.stompService.connectedClient.subscribe(
      client => {
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
}
