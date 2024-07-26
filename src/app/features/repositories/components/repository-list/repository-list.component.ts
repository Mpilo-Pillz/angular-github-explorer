import { Component, OnDestroy } from '@angular/core';
import { GithubService } from '../../../../core/services/github.service';
import { Repository } from '../../../../core/models/repository.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
})
export class RepositoryListComponent implements OnDestroy {
  hasSearched = false;
  private destroy$ = new Subject<void>();
  repositories: Repository[];
  loading: boolean = false;
  constructor(private githubService: GithubService) {
    this.repositories = [];
  }
  onSearch(query: string) {
    this.loading = true;
    this.hasSearched = true;
    this.githubService
      .searchRepositories(query)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (repositoryResponse) => {
          this.repositories = repositoryResponse.items;
          this.loading = false;
        },
        error: (error) => {
          alert(error);
          this.loading = false;
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
