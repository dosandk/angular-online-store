import {Injectable} from '@angular/core';

import {ReplaySubject} from 'rxjs';

import {Notification} from "@interfaces/notification.interface";

const getId = () => Math.random().toString(36).substring(2, 9);

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  message$ = new ReplaySubject<Notification>();

  show(neMessage: string) {
    const obj = {
      id: getId(),
      message: neMessage
    };

    this.message$.next(obj);
  }
}
