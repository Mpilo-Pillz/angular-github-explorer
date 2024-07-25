import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Issue, IssueState } from '../../../../core/models/issue.model';
import { GithubService } from '../../../../core/services/github.service';
import {
  ISSUE_STATE_ALL,
  ISSUE_STATE_CLOSED,
  ISSUE_STATE_OPEN,
  OWNER,
  REPO,
} from '../../../../shared/models/constants';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
})
export class IssuesListComponent implements OnInit {
  repoOwner: string | null = null;
  repoName: string | null = null;

  issues: Issue[] = [];
  issueState: IssueState = ISSUE_STATE_ALL;
  open = ISSUE_STATE_OPEN;
  closed = ISSUE_STATE_CLOSED;
  all = ISSUE_STATE_ALL;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {
    this.repoOwner = this.route.snapshot.paramMap.get(OWNER);
    this.repoName = this.route.snapshot.paramMap.get(REPO);
    this.fetchIssues();

    this.route.paramMap.subscribe((params) => {
      this.repoOwner = params.get(OWNER);
      this.repoName = params.get(REPO);
      this.fetchIssues();
    });
  }

  fetchIssues(): void {
    if (this.repoOwner && this.repoName) {
      this.githubService
        .getRepositoryIssues(this.repoOwner, this.repoName, this.issueState)
        .subscribe((data) => {
          this.issues = data;
        });
    }
  }

  onStateChange(newState: IssueState): void {
    this.issueState = newState;
    this.fetchIssues();
  }
}
