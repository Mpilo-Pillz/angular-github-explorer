import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../../../core/services/github.service';
import { Repository } from '../../../../core/models/repository.model';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
})
export class RepositoryDetailsComponent implements OnInit {
  repository: Repository | null = null;
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
        .subscribe((data: any) => {
          console.log(data);
          this.repository = data;
        });
    }
  }
}
