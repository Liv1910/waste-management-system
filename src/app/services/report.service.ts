import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'api/reports';

  constructor(private http: HttpClient) {}

  generateReport(reportType: string, params: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${reportType}`, params);
  }
}
