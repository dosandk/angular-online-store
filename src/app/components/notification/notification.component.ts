import {Component, OnDestroy, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Notification} from "@interfaces/notification.interface";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {

  @Input() notification!: Notification;
  @Output() deleteNotification = new EventEmitter<string>();

  timerId!: number;
  duration = 3000;

  ngOnInit(): void {
    this.timerId = setTimeout(() => {
      this.deleteNotification.emit(this.notification.id);
    }, this.duration);
  }

  ngOnDestroy() {
    clearTimeout(this.timerId);
  }
}
