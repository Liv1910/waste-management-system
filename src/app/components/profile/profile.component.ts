import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  notifications: any[] = [];
  showNotifications = false;
  email: string = 'userabc@gmail.com';

  constructor(private userService: UserService, private notificationService: NotificationService) {}

  ngOnInit() {
    this.userService.getUser('currentUserId').subscribe(
      user => this.user = user,
      error => console.error('Error fetching user data', error)
    );

    this.notificationService.getNotifications('currentUserId').subscribe(
      notifications => this.notifications = notifications,
      error => console.error('Error fetching notifications', error)
    );
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
}
