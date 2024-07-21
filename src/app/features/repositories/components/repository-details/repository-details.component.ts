import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../../../core/services/github.service';
import { Repository } from '../../../../core/models/repository.model';
import { switchMap } from 'rxjs';
import { Contributor } from '../../../../core/models/contributor.model';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
})
export class RepositoryDetailsComponent implements OnInit {
  repository: Repository | null = null;
  contributors: Contributor[] = [];
  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {
    const owner = this.route.snapshot.paramMap.get('owner');
    const repo = this.route.snapshot.paramMap.get('repo');
    if (owner && repo) {
      this.githubService
        .getRepositoryDetails(owner, repo)
        .pipe(
          switchMap((repositoryResponse: any) => {
            this.repository = repositoryResponse;
            return this.githubService.getContributors(owner, repo);
          })
        )
        .subscribe((contributors: Contributor[]) => {
          console.log(contributors);
          this.contributors = contributors;
        });
    }
  }
}
