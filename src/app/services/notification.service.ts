import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';
// it's a good practice to use a https://www.typescriptlang.org/tsconfig#paths
// please consider the updated tsconfig.json file and usage below
import { INotification } from "@interfaces/notification.interface";

// try to keep this kind of utils functions in a separate file to make services/components as clean as possible
const getId = () => Math.random().toString(36).substring(2, 9);

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  message$ = new ReplaySubject<INotification>();

  show(neMessage: string) {
    const obj = {
      id: getId(),
      message: neMessage
    };

    this.message$.next(obj);
  }
}
