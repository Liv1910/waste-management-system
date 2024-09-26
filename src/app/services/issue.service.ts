import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private apiUrl = 'api/issues';

  constructor(private http: HttpClient) {}

  reportIssue(issueData: any): Observable<any> {
    return this.http.post(this.apiUrl, issueData);
  }

  getIssues(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateIssueStatus(id: string, status: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { status });
  }
}
