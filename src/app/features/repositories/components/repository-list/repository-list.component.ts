import { Component } from '@angular/core';
import { GithubService } from '../../../../core/services/github.service';
import { Repository } from '../../../../core/models/repository.model';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
})
export class RepositoryListComponent {
  repositories: any[];
  constructor(private githubService: GithubService) {
    this.repositories = [
      {
        id: 1,
        name: 'angular',
        owner: {
          login: 'angular',
          id: 2,
        },
        stargazers_count: 75000,
        forks_count: 20500,
        open_issues_count: 700,
        description: 'The modern web developer’s platform',
        html_url: 'https://github.com/angular/angular',
      },
      {
        id: 2,
        name: 'react',
        owner: {
          login: 'facebook',
          id: 3,
        },
        stargazers_count: 170000,
        forks_count: 34000,
        open_issues_count: 900,
        description:
          'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
        html_url: 'https://github.com/facebook/react',
      },
      {
        id: 3,
        name: 'vue',
        owner: {
          login: 'vuejs',
          id: 4,
        },
        stargazers_count: 190000,
        forks_count: 31000,
        open_issues_count: 500,
        description: 'The Progressive JavaScript Framework',
        html_url: 'https://github.com/vuejs/vue',
      },
    ];
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
