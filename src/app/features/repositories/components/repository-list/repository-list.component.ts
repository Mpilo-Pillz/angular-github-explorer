import { Component } from '@angular/core';
import { GithubService } from '../../../../core/services/github.service';
import { Repository } from '../../../../core/models/repository.model';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
})
export class RepositoryListComponent {
  repositories: Repository[];
  constructor(private githubService: GithubService) {
    this.repositories = [];
  }
  onSearch(query: string) {
    this.githubService
      .searchRepositories(query)
      .subscribe((repositoryResponse) => {
        console.log(repositoryResponse);
        this.repositories = repositoryResponse.items;
      });
  }
}
