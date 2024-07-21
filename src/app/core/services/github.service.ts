import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Repository, RepositoryResponse } from '../models/repository.model';
import { Contributor } from '../models/contributor.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private baseUrl: string = `${environment.githubApiUrl}`;
  private searchUrl: string = '/search/repositories';
  constructor(private http: HttpClient) {}

  searchRepositories(query: string): Observable<RepositoryResponse> {
    const url = `${this.baseUrl}${this.searchUrl}?q=${query}`;
    return this.http.get<RepositoryResponse>(url);
  }

  getRepositoryDetails(owner: string, repo: string): Observable<Repository> {
    return this.http.get<Repository>(`${this.baseUrl}/repos/${owner}/${repo}`);
  }

  getContributors(owner: string, repo: string): Observable<Contributor[]> {
    return this.http.get<Contributor[]>(
      `${this.baseUrl}/repos/${owner}/${repo}/contributors`
    );
  }
}
