import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RepositoryResponse } from '../models/repository.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private baseUrl: string = `${environment.githubApiUrl}/search/repositories`;
  constructor(private http: HttpClient) {}

  searchRepositories(query: string): Observable<RepositoryResponse> {
    const url = `${this.baseUrl}?q=${query}`;
    return this.http.get<RepositoryResponse>(url);
  }

  getRepositoryDetails(
    owner: string,
    repo: string
  ): Observable<RepositoryResponse> {
    return this.http.get<RepositoryResponse>(
      `${this.baseUrl}/repos/${owner}/${repo}`
    );
  }
}
