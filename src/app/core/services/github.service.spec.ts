import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GithubService } from './github.service';
import { environment } from '../../environments/environment';
import { RepositoryResponse } from '../models/repository.model';

const testRepositories = {
  incomplete_results: false,
  total_count: 3,
  items: [
    {
      id: 1,
      name: 'angular',
      owner: {
        login: 'angular',
        id: 2,
        node_id: '',
        avatar_url: '',
        url: '',
        html_url: '',
        followers_url: '',
      },
      stargazers_count: 75000,
      forks_count: 20500,
      open_issues_count: 700,
      description: 'The modern web developer’s platform',
      html_url: 'https://github.com/angular/angular',
      node_id: '',
      full_name: '',
      private: false,
      fork: false,
      url: '',
      size: 0,
      watchers_count: 0,
      language: '',
      has_issues: false,
      has_projects: false,
      license: null,
      allow_forking: false,
      is_template: false,
      web_commit_signoff_required: false,
      visibility: '',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: '',
      score: 0,
    },
    {
      id: 2,
      name: 'react',
      owner: {
        login: 'facebook',
        id: 3,
        node_id: '',
        avatar_url: '',
        url: '',
        html_url: '',
        followers_url: '',
      },
      stargazers_count: 170000,
      forks_count: 34000,
      open_issues_count: 900,
      description:
        'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
      html_url: 'https://github.com/facebook/react',
      node_id: '',
      full_name: '',
      private: false,
      fork: false,
      url: '',
      size: 0,
      watchers_count: 0,
      language: '',
      has_issues: false,
      has_projects: false,
      license: null,
      allow_forking: false,
      is_template: false,
      web_commit_signoff_required: false,
      visibility: '',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: '',
      score: 0,
    },
    {
      id: 3,
      name: 'vue',
      owner: {
        login: 'vuejs',
        id: 4,
        node_id: '123',
        avatar_url: 'https://test.unit.co',
        url: 'https://test.unit.co',
        html_url: 'https://test.unit.co',
        followers_url: 'https://test.unit.co',
      },
      stargazers_count: 190000,
      forks_count: 31000,
      open_issues_count: 500,
      description: 'The Progressive JavaScript Framework',
      html_url: 'https://github.com/vuejs/vue',
      node_id: '',
      full_name: '',
      private: false,
      fork: false,
      url: '',
      size: 0,
      watchers_count: 0,
      language: '',
      has_issues: false,
      has_projects: false,
      license: null,
      allow_forking: false,
      is_template: false,
      web_commit_signoff_required: false,
      visibility: '',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: '',
      score: 0,
    },
  ],
};
describe('GithubService', () => {
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService],
    });
    service = TestBed.inject(GithubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch repositories', () => {
    const mockRepos: RepositoryResponse = testRepositories;
    service.searchRepositories('mockRepos').subscribe((repos) => {
      expect(repos.items.length).toBe(3);
      expect(repos).toEqual(mockRepos);
    });

    const req = httpMock.expectOne(
      `${environment.githubApiUrl}/search/repositories?q=mockRepos`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockRepos);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
