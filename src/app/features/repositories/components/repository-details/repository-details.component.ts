import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../../../core/services/github.service';
import { Repository } from '../../../../core/models/repository.model';
import { switchMap } from 'rxjs';
import { Contributor } from '../../../../core/models/contributor.model';

const OWNER = 'owner';
const REPO = 'repo';
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
        })
      )
      .subscribe((contributors: Contributor[]) => {
        console.log(contributors);
        this.contributors = contributors;
      });
  }
}
