import { Component, OnInit, Input } from '@angular/core';
import {NotificationService} from "../../services/notification.service";
import {Notification} from "@interfaces/notification.interface";

@Component({
  selector: 'app-notification-manager',
  templateUrl: './notification-manager.component.html',
  styleUrls: ['./notification-manager.component.scss']
})
export class NotificationManagerComponent implements OnInit {
  @Input() stackLimit = 3;

  notifications: Notification[] = [];

  constructor(
    public notificationService: NotificationService
  ) {
    notificationService.message$.subscribe((notification: Notification)  => {
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
