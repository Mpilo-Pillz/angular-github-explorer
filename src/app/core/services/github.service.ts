import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Repository } from '../models/repository.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private baseUrl: string = `${environment.githubApiUrl}/search/repositories`;
  constructor(private http: HttpClient) {}

  searchRepositories(query: string): Observable<Repository[]> {
    const url = `${this.baseUrl}?q=${query}`;
    return this.http.get<Repository[]>(url);
  }
}
