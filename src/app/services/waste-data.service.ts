import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WasteDataService {
  constructor(private http: HttpClient) { }

  getWasteData(): Observable<any> {
    return this.http.get('/api/waste-data');
  }

  // Add more methods for CRUD operations
}
