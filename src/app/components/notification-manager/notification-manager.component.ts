import { Component, OnInit, Input } from '@angular/core';
import {NotificationService} from "../../services/notification.service";
import {INotification} from "../../interfaces/notification.interface";

@Component({
  selector: 'app-notification-manager',
  templateUrl: './notification-manager.component.html',
  styleUrls: ['./notification-manager.component.scss']
})
export class NotificationManagerComponent implements OnInit {
  // 3 - magic value. move it to constant. (notificationTimeDuration example)
  @Input() stackLimit = 3;

  notifications: INotification[] = [];

  constructor(
    public notificationService: NotificationService
  ) {
    // I know this component isn't destroyed yet. But potentially could be a memory leak. Don't forget to unsubscribe.
    notificationService.message$.subscribe((notification:INotification)  => {
      if (this.notifications.length === this.stackLimit) {
        this.notifications.shift();
      }

      this.notifications.push(notification);
    });
  }

  onDelete (id: string) {
    this.notifications = this.notifications.filter(notification => notification.id !== id);
  }

  ngOnInit(): void {}
}
