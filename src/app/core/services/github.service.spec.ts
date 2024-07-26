import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GithubService } from './github.service';
import { environment } from '../../environments/environment';

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
    const mockRepos = [{ name: 'repo1' }, { name: 'repo2' }];
    service.searchRepositories('mockRepos').subscribe((repos) => {
      // expect(repos.length).toBe(2);
      // expect(repos).toEqual(mockRepos);
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
