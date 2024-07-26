import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../../../core/services/github.service';
import { Repository } from '../../../../core/models/repository.model';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { Contributor } from '../../../../core/models/contributor.model';

const OWNER = 'owner';
const REPO = 'repo';
@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
})
export class RepositoryDetailsComponent implements OnInit, OnDestroy {
  repository: Repository | null = null;
  contributors: Contributor[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {
    const owner = this.route.snapshot.paramMap.get(OWNER);
    const repo = this.route.snapshot.paramMap.get(REPO);

    if (!owner || !repo) {
      alert('Owner or repository not provided.');
      return;
    }

    this.githubService
      .getRepositoryDetails(owner, repo)
      .pipe(
        switchMap((repositoryDetails: Repository) => {
          this.repository = repositoryDetails;
          return this.githubService.getContributors(owner, repo);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((contributors: Contributor[]) => {
        this.contributors = contributors;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
