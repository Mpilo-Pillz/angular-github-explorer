import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { GithubService } from '../../../../core/services/github.service';
import { Issue, IssueState } from '../../../../core/models/issue.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
})
export class IssuesListComponent implements OnInit {
  repoOwner: string | null = null;
  repoName: string | null = null;

  issues: Issue[] = [];
  state: IssueState = 'all';

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['repoOwner'] || changes['repoName'] || changes['state']) {
  //     this.fetchIssues();
  //   }
  // }

  ngOnInit(): void {
    this.repoOwner = this.route.snapshot.paramMap.get('owner');
    this.repoName = this.route.snapshot.paramMap.get('repo');
    this.fetchIssues();

    this.route.paramMap.subscribe((params) => {
      this.repoOwner = params.get('owner');
      this.repoName = params.get('repo');
      this.fetchIssues();
    });
  }

  fetchIssues(): void {
    if (this.repoOwner && this.repoName) {
      this.githubService
        .getRepositoryIssues(this.repoOwner, this.repoName, this.state)
        .subscribe((data) => {
          console.log('ISSSUUEE==>', data);

          this.issues = data;
        });
    }
  }

  onStateChange(newState: 'open' | 'closed' | 'all'): void {
    this.state = newState;
    this.fetchIssues();
  }
}
