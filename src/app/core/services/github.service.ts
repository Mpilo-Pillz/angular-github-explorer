import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private baseUrl: string = 'https://api.github.com/search/repositories';
  constructor(private http: HttpClient) {}

  searchRepositories(query: string): Observable<any> {
    const url = `${this.baseUrl}?q=${query}`;
    return this.http.get<any>(url);
  }
}
