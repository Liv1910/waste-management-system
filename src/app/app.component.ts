import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, NgIf],
  template: `
    <app-navigation></app-navigation>
    <div class="main-content">
      <router-outlet></router-outlet>
    </div>
    <div class="popup-overlay" *ngIf="isPopupOpen">
      <div class="popup-content">
        <h2>{{ popupTitle }}</h2>
        <p>{{ popupMessage }}</p>
        <button (click)="closePopup()">Close</button>
      </div>
    </div>
  `,

})
export class AppComponent {
  title = 'waste-management-system';
  isPopupOpen = false;
  popupTitle = '';
  popupMessage = '';

  openPopup(title: string, message: string) {
    this.isPopupOpen = true;
    this.popupTitle = title;
    this.popupMessage = message;
  }

  closePopup() {
    this.isPopupOpen = false;
  }
}
