import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PickupService {
  private apiUrl = 'api/pickups';

  constructor(private http: HttpClient) {}

  schedulePickup(pickupData: any): Observable<any> {
    return this.http.post(this.apiUrl, pickupData);
  }

  getPickupHistory(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/history/${userId}`);
  }

  getPickupSchedule(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/schedule/${userId}`);
  }
}
