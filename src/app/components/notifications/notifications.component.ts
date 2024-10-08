import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class ManageNotificationsComponent {
  notifications: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get<any[]>('http://localhost:3000/api/notifications').subscribe(data => {
      this.notifications = data;
    });
  }
}
