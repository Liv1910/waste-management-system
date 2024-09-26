import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api'; // Base URL for the API

  constructor(private http: HttpClient) { }

  // Method to get user profile
  getUserProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user-profile`);
  }

  // Method to update user profile
  updateUserProfile(profileData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/update-profile`, profileData);
  }

  // Method to handle user login
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  signup(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  validateEmail(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/validate-email`, { email });
  }
}
