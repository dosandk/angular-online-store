import {Component, OnDestroy, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {INotification} from "../../interfaces/notification.interface";
import { notificationTimeDuration } from '../../constants/notification-time-duration';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {

  @Input() notification!: INotification;
  @Output() deleteNotification = new EventEmitter<string>();

  timerId!: number;
  // 3000 - magic value. move it to constant with appropriate name. Please consider solution:
  public duration = notificationTimeDuration;

  // remove unused constructor
  constructor() {}

  ngOnInit(): void {
    this.timerId = setTimeout(() => {
      this.deleteNotification.emit(this.notification.id);
    }, this.duration);
  }

  ngOnDestroy() {
    clearTimeout(this.timerId);
  }
}
