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

// this.repositories = [
//   {
//     id: 14812407,
//     node_id: 'MDEwOlJlcG9zaXRvcnkxNDgxMjQwNw==',
//     name: 'waf-fle',
//     full_name: 'klaubert/waf-fle',
//     private: false,
//     owner: {
//       login: 'klaubert',
//       id: 1089704,
//       node_id: 'MDQ6VXNlcjEwODk3MDQ=',
//       avatar_url: 'https://avatars.githubusercontent.com/u/1089704?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/klaubert',
//       html_url: 'https://github.com/klaubert',
//       followers_url: 'https://api.github.com/users/klaubert/followers',
//       following_url:
//         'https://api.github.com/users/klaubert/following{/other_user}',
//       gists_url: 'https://api.github.com/users/klaubert/gists{/gist_id}',
//       starred_url:
//         'https://api.github.com/users/klaubert/starred{/owner}{/repo}',
//       subscriptions_url:
//         'https://api.github.com/users/klaubert/subscriptions',
//       organizations_url: 'https://api.github.com/users/klaubert/orgs',
//       repos_url: 'https://api.github.com/users/klaubert/repos',
//       events_url: 'https://api.github.com/users/klaubert/events{/privacy}',
//       received_events_url:
//         'https://api.github.com/users/klaubert/received_events',
//       type: 'User',
//       site_admin: false,
//     },
//     html_url: 'https://github.com/klaubert/waf-fle',
//     description: 'WAF-FLE, ModSecurity Console',
//     fork: false,
//     url: 'https://api.github.com/repos/klaubert/waf-fle',
//     forks_url: 'https://api.github.com/repos/klaubert/waf-fle/forks',
//     keys_url: 'https://api.github.com/repos/klaubert/waf-fle/keys{/key_id}',
//     collaborators_url:
//       'https://api.github.com/repos/klaubert/waf-fle/collaborators{/collaborator}',
//     teams_url: 'https://api.github.com/repos/klaubert/waf-fle/teams',
//     hooks_url: 'https://api.github.com/repos/klaubert/waf-fle/hooks',
//     issue_events_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues/events{/number}',
//     events_url: 'https://api.github.com/repos/klaubert/waf-fle/events',
//     assignees_url:
//       'https://api.github.com/repos/klaubert/waf-fle/assignees{/user}',
//     branches_url:
//       'https://api.github.com/repos/klaubert/waf-fle/branches{/branch}',
//     tags_url: 'https://api.github.com/repos/klaubert/waf-fle/tags',
//     blobs_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/blobs{/sha}',
//     git_tags_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/tags{/sha}',
//     git_refs_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/refs{/sha}',
//     trees_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/trees{/sha}',
//     statuses_url:
//       'https://api.github.com/repos/klaubert/waf-fle/statuses/{sha}',
//     languages_url:
//       'https://api.github.com/repos/klaubert/waf-fle/languages',
//     stargazers_url:
//       'https://api.github.com/repos/klaubert/waf-fle/stargazers',
//     contributors_url:
//       'https://api.github.com/repos/klaubert/waf-fle/contributors',
//     subscribers_url:
//       'https://api.github.com/repos/klaubert/waf-fle/subscribers',
//     subscription_url:
//       'https://api.github.com/repos/klaubert/waf-fle/subscription',
//     commits_url:
//       'https://api.github.com/repos/klaubert/waf-fle/commits{/sha}',
//     git_commits_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/commits{/sha}',
//     comments_url:
//       'https://api.github.com/repos/klaubert/waf-fle/comments{/number}',
//     issue_comment_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues/comments{/number}',
//     contents_url:
//       'https://api.github.com/repos/klaubert/waf-fle/contents/{+path}',
//     compare_url:
//       'https://api.github.com/repos/klaubert/waf-fle/compare/{base}...{head}',
//     merges_url: 'https://api.github.com/repos/klaubert/waf-fle/merges',
//     archive_url:
//       'https://api.github.com/repos/klaubert/waf-fle/{archive_format}{/ref}',
//     downloads_url:
//       'https://api.github.com/repos/klaubert/waf-fle/downloads',
//     issues_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues{/number}',
//     pulls_url:
//       'https://api.github.com/repos/klaubert/waf-fle/pulls{/number}',
//     milestones_url:
//       'https://api.github.com/repos/klaubert/waf-fle/milestones{/number}',
//     notifications_url:
//       'https://api.github.com/repos/klaubert/waf-fle/notifications{?since,all,participating}',
//     labels_url:
//       'https://api.github.com/repos/klaubert/waf-fle/labels{/name}',
//     releases_url:
//       'https://api.github.com/repos/klaubert/waf-fle/releases{/id}',
//     deployments_url:
//       'https://api.github.com/repos/klaubert/waf-fle/deployments',
//     created_at: '2013-11-29T23:57:04Z',
//     updated_at: '2024-06-29T10:30:50Z',
//     pushed_at: '2022-10-01T22:52:50Z',
//     git_url: 'git://github.com/klaubert/waf-fle.git',
//     ssh_url: 'git@github.com:klaubert/waf-fle.git',
//     clone_url: 'https://github.com/klaubert/waf-fle.git',
//     svn_url: 'https://github.com/klaubert/waf-fle',
//     homepage: 'http://waf-fle.org',
//     size: 1386,
//     stargazers_count: 139,
//     watchers_count: 139,
//     language: 'PHP',
//     has_issues: true,
//     has_projects: true,
//     has_downloads: true,
//     has_wiki: true,
//     has_pages: false,
//     has_discussions: false,
//     forks_count: 73,
//     mirror_url: null,
//     archived: false,
//     disabled: false,
//     open_issues_count: 40,
//     license: {
//       key: 'gpl-2.0',
//       name: 'GNU General Public License v2.0',
//       spdx_id: 'GPL-2.0',
//       url: 'https://api.github.com/licenses/gpl-2.0',
//       node_id: 'MDc6TGljZW5zZTg=',
//     },
//     allow_forking: true,
//     is_template: false,
//     web_commit_signoff_required: false,
//     topics: [],
//     visibility: 'public',
//     forks: 73,
//     open_issues: 40,
//     watchers: 139,
//     default_branch: 'master',
//     score: 1,
//   },
//   {
//     id: 14812407,
//     node_id: 'MDEwOlJlcG9zaXRvcnkxNDgxMjQwNw==',
//     name: 'waf-fle',
//     full_name: 'klaubert/waf-fle',
//     private: false,
//     owner: {
//       login: 'klaubert',
//       id: 1089704,
//       node_id: 'MDQ6VXNlcjEwODk3MDQ=',
//       avatar_url: 'https://avatars.githubusercontent.com/u/1089704?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/klaubert',
//       html_url: 'https://github.com/klaubert',
//       followers_url: 'https://api.github.com/users/klaubert/followers',
//       following_url:
//         'https://api.github.com/users/klaubert/following{/other_user}',
//       gists_url: 'https://api.github.com/users/klaubert/gists{/gist_id}',
//       starred_url:
//         'https://api.github.com/users/klaubert/starred{/owner}{/repo}',
//       subscriptions_url:
//         'https://api.github.com/users/klaubert/subscriptions',
//       organizations_url: 'https://api.github.com/users/klaubert/orgs',
//       repos_url: 'https://api.github.com/users/klaubert/repos',
//       events_url: 'https://api.github.com/users/klaubert/events{/privacy}',
//       received_events_url:
//         'https://api.github.com/users/klaubert/received_events',
//       type: 'User',
//       site_admin: false,
//     },
//     html_url: 'https://github.com/klaubert/waf-fle',
//     description: 'WAF-FLE, ModSecurity Console',
//     fork: false,
//     url: 'https://api.github.com/repos/klaubert/waf-fle',
//     forks_url: 'https://api.github.com/repos/klaubert/waf-fle/forks',
//     keys_url: 'https://api.github.com/repos/klaubert/waf-fle/keys{/key_id}',
//     collaborators_url:
//       'https://api.github.com/repos/klaubert/waf-fle/collaborators{/collaborator}',
//     teams_url: 'https://api.github.com/repos/klaubert/waf-fle/teams',
//     hooks_url: 'https://api.github.com/repos/klaubert/waf-fle/hooks',
//     issue_events_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues/events{/number}',
//     events_url: 'https://api.github.com/repos/klaubert/waf-fle/events',
//     assignees_url:
//       'https://api.github.com/repos/klaubert/waf-fle/assignees{/user}',
//     branches_url:
//       'https://api.github.com/repos/klaubert/waf-fle/branches{/branch}',
//     tags_url: 'https://api.github.com/repos/klaubert/waf-fle/tags',
//     blobs_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/blobs{/sha}',
//     git_tags_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/tags{/sha}',
//     git_refs_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/refs{/sha}',
//     trees_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/trees{/sha}',
//     statuses_url:
//       'https://api.github.com/repos/klaubert/waf-fle/statuses/{sha}',
//     languages_url:
//       'https://api.github.com/repos/klaubert/waf-fle/languages',
//     stargazers_url:
//       'https://api.github.com/repos/klaubert/waf-fle/stargazers',
//     contributors_url:
//       'https://api.github.com/repos/klaubert/waf-fle/contributors',
//     subscribers_url:
//       'https://api.github.com/repos/klaubert/waf-fle/subscribers',
//     subscription_url:
//       'https://api.github.com/repos/klaubert/waf-fle/subscription',
//     commits_url:
//       'https://api.github.com/repos/klaubert/waf-fle/commits{/sha}',
//     git_commits_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/commits{/sha}',
//     comments_url:
//       'https://api.github.com/repos/klaubert/waf-fle/comments{/number}',
//     issue_comment_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues/comments{/number}',
//     contents_url:
//       'https://api.github.com/repos/klaubert/waf-fle/contents/{+path}',
//     compare_url:
//       'https://api.github.com/repos/klaubert/waf-fle/compare/{base}...{head}',
//     merges_url: 'https://api.github.com/repos/klaubert/waf-fle/merges',
//     archive_url:
//       'https://api.github.com/repos/klaubert/waf-fle/{archive_format}{/ref}',
//     downloads_url:
//       'https://api.github.com/repos/klaubert/waf-fle/downloads',
//     issues_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues{/number}',
//     pulls_url:
//       'https://api.github.com/repos/klaubert/waf-fle/pulls{/number}',
//     milestones_url:
//       'https://api.github.com/repos/klaubert/waf-fle/milestones{/number}',
//     notifications_url:
//       'https://api.github.com/repos/klaubert/waf-fle/notifications{?since,all,participating}',
//     labels_url:
//       'https://api.github.com/repos/klaubert/waf-fle/labels{/name}',
//     releases_url:
//       'https://api.github.com/repos/klaubert/waf-fle/releases{/id}',
//     deployments_url:
//       'https://api.github.com/repos/klaubert/waf-fle/deployments',
//     created_at: '2013-11-29T23:57:04Z',
//     updated_at: '2024-06-29T10:30:50Z',
//     pushed_at: '2022-10-01T22:52:50Z',
//     git_url: 'git://github.com/klaubert/waf-fle.git',
//     ssh_url: 'git@github.com:klaubert/waf-fle.git',
//     clone_url: 'https://github.com/klaubert/waf-fle.git',
//     svn_url: 'https://github.com/klaubert/waf-fle',
//     homepage: 'http://waf-fle.org',
//     size: 1386,
//     stargazers_count: 139,
//     watchers_count: 139,
//     language: 'PHP',
//     has_issues: true,
//     has_projects: true,
//     has_downloads: true,
//     has_wiki: true,
//     has_pages: false,
//     has_discussions: false,
//     forks_count: 73,
//     mirror_url: null,
//     archived: false,
//     disabled: false,
//     open_issues_count: 40,
//     license: {
//       key: 'gpl-2.0',
//       name: 'GNU General Public License v2.0',
//       spdx_id: 'GPL-2.0',
//       url: 'https://api.github.com/licenses/gpl-2.0',
//       node_id: 'MDc6TGljZW5zZTg=',
//     },
//     allow_forking: true,
//     is_template: false,
//     web_commit_signoff_required: false,
//     topics: [],
//     visibility: 'public',
//     forks: 73,
//     open_issues: 40,
//     watchers: 139,
//     default_branch: 'master',
//     score: 1,
//   },
//   {
//     id: 14812407,
//     node_id: 'MDEwOlJlcG9zaXRvcnkxNDgxMjQwNw==',
//     name: 'waf-fle',
//     full_name: 'klaubert/waf-fle',
//     private: false,
//     owner: {
//       login: 'klaubert',
//       id: 1089704,
//       node_id: 'MDQ6VXNlcjEwODk3MDQ=',
//       avatar_url: 'https://avatars.githubusercontent.com/u/1089704?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/klaubert',
//       html_url: 'https://github.com/klaubert',
//       followers_url: 'https://api.github.com/users/klaubert/followers',
//       following_url:
//         'https://api.github.com/users/klaubert/following{/other_user}',
//       gists_url: 'https://api.github.com/users/klaubert/gists{/gist_id}',
//       starred_url:
//         'https://api.github.com/users/klaubert/starred{/owner}{/repo}',
//       subscriptions_url:
//         'https://api.github.com/users/klaubert/subscriptions',
//       organizations_url: 'https://api.github.com/users/klaubert/orgs',
//       repos_url: 'https://api.github.com/users/klaubert/repos',
//       events_url: 'https://api.github.com/users/klaubert/events{/privacy}',
//       received_events_url:
//         'https://api.github.com/users/klaubert/received_events',
//       type: 'User',
//       site_admin: false,
//     },
//     html_url: 'https://github.com/klaubert/waf-fle',
//     description: 'WAF-FLE, ModSecurity Console',
//     fork: false,
//     url: 'https://api.github.com/repos/klaubert/waf-fle',
//     forks_url: 'https://api.github.com/repos/klaubert/waf-fle/forks',
//     keys_url: 'https://api.github.com/repos/klaubert/waf-fle/keys{/key_id}',
//     collaborators_url:
//       'https://api.github.com/repos/klaubert/waf-fle/collaborators{/collaborator}',
//     teams_url: 'https://api.github.com/repos/klaubert/waf-fle/teams',
//     hooks_url: 'https://api.github.com/repos/klaubert/waf-fle/hooks',
//     issue_events_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues/events{/number}',
//     events_url: 'https://api.github.com/repos/klaubert/waf-fle/events',
//     assignees_url:
//       'https://api.github.com/repos/klaubert/waf-fle/assignees{/user}',
//     branches_url:
//       'https://api.github.com/repos/klaubert/waf-fle/branches{/branch}',
//     tags_url: 'https://api.github.com/repos/klaubert/waf-fle/tags',
//     blobs_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/blobs{/sha}',
//     git_tags_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/tags{/sha}',
//     git_refs_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/refs{/sha}',
//     trees_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/trees{/sha}',
//     statuses_url:
//       'https://api.github.com/repos/klaubert/waf-fle/statuses/{sha}',
//     languages_url:
//       'https://api.github.com/repos/klaubert/waf-fle/languages',
//     stargazers_url:
//       'https://api.github.com/repos/klaubert/waf-fle/stargazers',
//     contributors_url:
//       'https://api.github.com/repos/klaubert/waf-fle/contributors',
//     subscribers_url:
//       'https://api.github.com/repos/klaubert/waf-fle/subscribers',
//     subscription_url:
//       'https://api.github.com/repos/klaubert/waf-fle/subscription',
//     commits_url:
//       'https://api.github.com/repos/klaubert/waf-fle/commits{/sha}',
//     git_commits_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/commits{/sha}',
//     comments_url:
//       'https://api.github.com/repos/klaubert/waf-fle/comments{/number}',
//     issue_comment_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues/comments{/number}',
//     contents_url:
//       'https://api.github.com/repos/klaubert/waf-fle/contents/{+path}',
//     compare_url:
//       'https://api.github.com/repos/klaubert/waf-fle/compare/{base}...{head}',
//     merges_url: 'https://api.github.com/repos/klaubert/waf-fle/merges',
//     archive_url:
//       'https://api.github.com/repos/klaubert/waf-fle/{archive_format}{/ref}',
//     downloads_url:
//       'https://api.github.com/repos/klaubert/waf-fle/downloads',
//     issues_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues{/number}',
//     pulls_url:
//       'https://api.github.com/repos/klaubert/waf-fle/pulls{/number}',
//     milestones_url:
//       'https://api.github.com/repos/klaubert/waf-fle/milestones{/number}',
//     notifications_url:
//       'https://api.github.com/repos/klaubert/waf-fle/notifications{?since,all,participating}',
//     labels_url:
//       'https://api.github.com/repos/klaubert/waf-fle/labels{/name}',
//     releases_url:
//       'https://api.github.com/repos/klaubert/waf-fle/releases{/id}',
//     deployments_url:
//       'https://api.github.com/repos/klaubert/waf-fle/deployments',
//     created_at: '2013-11-29T23:57:04Z',
//     updated_at: '2024-06-29T10:30:50Z',
//     pushed_at: '2022-10-01T22:52:50Z',
//     git_url: 'git://github.com/klaubert/waf-fle.git',
//     ssh_url: 'git@github.com:klaubert/waf-fle.git',
//     clone_url: 'https://github.com/klaubert/waf-fle.git',
//     svn_url: 'https://github.com/klaubert/waf-fle',
//     homepage: 'http://waf-fle.org',
//     size: 1386,
//     stargazers_count: 139,
//     watchers_count: 139,
//     language: 'PHP',
//     has_issues: true,
//     has_projects: true,
//     has_downloads: true,
//     has_wiki: true,
//     has_pages: false,
//     has_discussions: false,
//     forks_count: 73,
//     mirror_url: null,
//     archived: false,
//     disabled: false,
//     open_issues_count: 40,
//     license: {
//       key: 'gpl-2.0',
//       name: 'GNU General Public License v2.0',
//       spdx_id: 'GPL-2.0',
//       url: 'https://api.github.com/licenses/gpl-2.0',
//       node_id: 'MDc6TGljZW5zZTg=',
//     },
//     allow_forking: true,
//     is_template: false,
//     web_commit_signoff_required: false,
//     topics: [],
//     visibility: 'public',
//     forks: 73,
//     open_issues: 40,
//     watchers: 139,
//     default_branch: 'master',
//     score: 1,
//   },
//   {
//     id: 14812407,
//     node_id: 'MDEwOlJlcG9zaXRvcnkxNDgxMjQwNw==',
//     name: 'waf-fle',
//     full_name: 'klaubert/waf-fle',
//     private: false,
//     owner: {
//       login: 'klaubert',
//       id: 1089704,
//       node_id: 'MDQ6VXNlcjEwODk3MDQ=',
//       avatar_url: 'https://avatars.githubusercontent.com/u/1089704?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/klaubert',
//       html_url: 'https://github.com/klaubert',
//       followers_url: 'https://api.github.com/users/klaubert/followers',
//       following_url:
//         'https://api.github.com/users/klaubert/following{/other_user}',
//       gists_url: 'https://api.github.com/users/klaubert/gists{/gist_id}',
//       starred_url:
//         'https://api.github.com/users/klaubert/starred{/owner}{/repo}',
//       subscriptions_url:
//         'https://api.github.com/users/klaubert/subscriptions',
//       organizations_url: 'https://api.github.com/users/klaubert/orgs',
//       repos_url: 'https://api.github.com/users/klaubert/repos',
//       events_url: 'https://api.github.com/users/klaubert/events{/privacy}',
//       received_events_url:
//         'https://api.github.com/users/klaubert/received_events',
//       type: 'User',
//       site_admin: false,
//     },
//     html_url: 'https://github.com/klaubert/waf-fle',
//     description: 'WAF-FLE, ModSecurity Console',
//     fork: false,
//     url: 'https://api.github.com/repos/klaubert/waf-fle',
//     forks_url: 'https://api.github.com/repos/klaubert/waf-fle/forks',
//     keys_url: 'https://api.github.com/repos/klaubert/waf-fle/keys{/key_id}',
//     collaborators_url:
//       'https://api.github.com/repos/klaubert/waf-fle/collaborators{/collaborator}',
//     teams_url: 'https://api.github.com/repos/klaubert/waf-fle/teams',
//     hooks_url: 'https://api.github.com/repos/klaubert/waf-fle/hooks',
//     issue_events_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues/events{/number}',
//     events_url: 'https://api.github.com/repos/klaubert/waf-fle/events',
//     assignees_url:
//       'https://api.github.com/repos/klaubert/waf-fle/assignees{/user}',
//     branches_url:
//       'https://api.github.com/repos/klaubert/waf-fle/branches{/branch}',
//     tags_url: 'https://api.github.com/repos/klaubert/waf-fle/tags',
//     blobs_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/blobs{/sha}',
//     git_tags_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/tags{/sha}',
//     git_refs_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/refs{/sha}',
//     trees_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/trees{/sha}',
//     statuses_url:
//       'https://api.github.com/repos/klaubert/waf-fle/statuses/{sha}',
//     languages_url:
//       'https://api.github.com/repos/klaubert/waf-fle/languages',
//     stargazers_url:
//       'https://api.github.com/repos/klaubert/waf-fle/stargazers',
//     contributors_url:
//       'https://api.github.com/repos/klaubert/waf-fle/contributors',
//     subscribers_url:
//       'https://api.github.com/repos/klaubert/waf-fle/subscribers',
//     subscription_url:
//       'https://api.github.com/repos/klaubert/waf-fle/subscription',
//     commits_url:
//       'https://api.github.com/repos/klaubert/waf-fle/commits{/sha}',
//     git_commits_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/commits{/sha}',
//     comments_url:
//       'https://api.github.com/repos/klaubert/waf-fle/comments{/number}',
//     issue_comment_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues/comments{/number}',
//     contents_url:
//       'https://api.github.com/repos/klaubert/waf-fle/contents/{+path}',
//     compare_url:
//       'https://api.github.com/repos/klaubert/waf-fle/compare/{base}...{head}',
//     merges_url: 'https://api.github.com/repos/klaubert/waf-fle/merges',
//     archive_url:
//       'https://api.github.com/repos/klaubert/waf-fle/{archive_format}{/ref}',
//     downloads_url:
//       'https://api.github.com/repos/klaubert/waf-fle/downloads',
//     issues_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues{/number}',
//     pulls_url:
//       'https://api.github.com/repos/klaubert/waf-fle/pulls{/number}',
//     milestones_url:
//       'https://api.github.com/repos/klaubert/waf-fle/milestones{/number}',
//     notifications_url:
//       'https://api.github.com/repos/klaubert/waf-fle/notifications{?since,all,participating}',
//     labels_url:
//       'https://api.github.com/repos/klaubert/waf-fle/labels{/name}',
//     releases_url:
//       'https://api.github.com/repos/klaubert/waf-fle/releases{/id}',
//     deployments_url:
//       'https://api.github.com/repos/klaubert/waf-fle/deployments',
//     created_at: '2013-11-29T23:57:04Z',
//     updated_at: '2024-06-29T10:30:50Z',
//     pushed_at: '2022-10-01T22:52:50Z',
//     git_url: 'git://github.com/klaubert/waf-fle.git',
//     ssh_url: 'git@github.com:klaubert/waf-fle.git',
//     clone_url: 'https://github.com/klaubert/waf-fle.git',
//     svn_url: 'https://github.com/klaubert/waf-fle',
//     homepage: 'http://waf-fle.org',
//     size: 1386,
//     stargazers_count: 139,
//     watchers_count: 139,
//     language: 'PHP',
//     has_issues: true,
//     has_projects: true,
//     has_downloads: true,
//     has_wiki: true,
//     has_pages: false,
//     has_discussions: false,
//     forks_count: 73,
//     mirror_url: null,
//     archived: false,
//     disabled: false,
//     open_issues_count: 40,
//     license: {
//       key: 'gpl-2.0',
//       name: 'GNU General Public License v2.0',
//       spdx_id: 'GPL-2.0',
//       url: 'https://api.github.com/licenses/gpl-2.0',
//       node_id: 'MDc6TGljZW5zZTg=',
//     },
//     allow_forking: true,
//     is_template: false,
//     web_commit_signoff_required: false,
//     topics: [],
//     visibility: 'public',
//     forks: 73,
//     open_issues: 40,
//     watchers: 139,
//     default_branch: 'master',
//     score: 1,
//   },
//   {
//     id: 14812407,
//     node_id: 'MDEwOlJlcG9zaXRvcnkxNDgxMjQwNw==',
//     name: 'waf-fle',
//     full_name: 'klaubert/waf-fle',
//     private: false,
//     owner: {
//       login: 'klaubert',
//       id: 1089704,
//       node_id: 'MDQ6VXNlcjEwODk3MDQ=',
//       avatar_url: 'https://avatars.githubusercontent.com/u/1089704?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/klaubert',
//       html_url: 'https://github.com/klaubert',
//       followers_url: 'https://api.github.com/users/klaubert/followers',
//       following_url:
//         'https://api.github.com/users/klaubert/following{/other_user}',
//       gists_url: 'https://api.github.com/users/klaubert/gists{/gist_id}',
//       starred_url:
//         'https://api.github.com/users/klaubert/starred{/owner}{/repo}',
//       subscriptions_url:
//         'https://api.github.com/users/klaubert/subscriptions',
//       organizations_url: 'https://api.github.com/users/klaubert/orgs',
//       repos_url: 'https://api.github.com/users/klaubert/repos',
//       events_url: 'https://api.github.com/users/klaubert/events{/privacy}',
//       received_events_url:
//         'https://api.github.com/users/klaubert/received_events',
//       type: 'User',
//       site_admin: false,
//     },
//     html_url: 'https://github.com/klaubert/waf-fle',
//     description: 'WAF-FLE, ModSecurity Console',
//     fork: false,
//     url: 'https://api.github.com/repos/klaubert/waf-fle',
//     forks_url: 'https://api.github.com/repos/klaubert/waf-fle/forks',
//     keys_url: 'https://api.github.com/repos/klaubert/waf-fle/keys{/key_id}',
//     collaborators_url:
//       'https://api.github.com/repos/klaubert/waf-fle/collaborators{/collaborator}',
//     teams_url: 'https://api.github.com/repos/klaubert/waf-fle/teams',
//     hooks_url: 'https://api.github.com/repos/klaubert/waf-fle/hooks',
//     issue_events_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues/events{/number}',
//     events_url: 'https://api.github.com/repos/klaubert/waf-fle/events',
//     assignees_url:
//       'https://api.github.com/repos/klaubert/waf-fle/assignees{/user}',
//     branches_url:
//       'https://api.github.com/repos/klaubert/waf-fle/branches{/branch}',
//     tags_url: 'https://api.github.com/repos/klaubert/waf-fle/tags',
//     blobs_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/blobs{/sha}',
//     git_tags_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/tags{/sha}',
//     git_refs_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/refs{/sha}',
//     trees_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/trees{/sha}',
//     statuses_url:
//       'https://api.github.com/repos/klaubert/waf-fle/statuses/{sha}',
//     languages_url:
//       'https://api.github.com/repos/klaubert/waf-fle/languages',
//     stargazers_url:
//       'https://api.github.com/repos/klaubert/waf-fle/stargazers',
//     contributors_url:
//       'https://api.github.com/repos/klaubert/waf-fle/contributors',
//     subscribers_url:
//       'https://api.github.com/repos/klaubert/waf-fle/subscribers',
//     subscription_url:
//       'https://api.github.com/repos/klaubert/waf-fle/subscription',
//     commits_url:
//       'https://api.github.com/repos/klaubert/waf-fle/commits{/sha}',
//     git_commits_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/commits{/sha}',
//     comments_url:
//       'https://api.github.com/repos/klaubert/waf-fle/comments{/number}',
//     issue_comment_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues/comments{/number}',
//     contents_url:
//       'https://api.github.com/repos/klaubert/waf-fle/contents/{+path}',
//     compare_url:
//       'https://api.github.com/repos/klaubert/waf-fle/compare/{base}...{head}',
//     merges_url: 'https://api.github.com/repos/klaubert/waf-fle/merges',
//     archive_url:
//       'https://api.github.com/repos/klaubert/waf-fle/{archive_format}{/ref}',
//     downloads_url:
//       'https://api.github.com/repos/klaubert/waf-fle/downloads',
//     issues_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues{/number}',
//     pulls_url:
//       'https://api.github.com/repos/klaubert/waf-fle/pulls{/number}',
//     milestones_url:
//       'https://api.github.com/repos/klaubert/waf-fle/milestones{/number}',
//     notifications_url:
//       'https://api.github.com/repos/klaubert/waf-fle/notifications{?since,all,participating}',
//     labels_url:
//       'https://api.github.com/repos/klaubert/waf-fle/labels{/name}',
//     releases_url:
//       'https://api.github.com/repos/klaubert/waf-fle/releases{/id}',
//     deployments_url:
//       'https://api.github.com/repos/klaubert/waf-fle/deployments',
//     created_at: '2013-11-29T23:57:04Z',
//     updated_at: '2024-06-29T10:30:50Z',
//     pushed_at: '2022-10-01T22:52:50Z',
//     git_url: 'git://github.com/klaubert/waf-fle.git',
//     ssh_url: 'git@github.com:klaubert/waf-fle.git',
//     clone_url: 'https://github.com/klaubert/waf-fle.git',
//     svn_url: 'https://github.com/klaubert/waf-fle',
//     homepage: 'http://waf-fle.org',
//     size: 1386,
//     stargazers_count: 139,
//     watchers_count: 139,
//     language: 'PHP',
//     has_issues: true,
//     has_projects: true,
//     has_downloads: true,
//     has_wiki: true,
//     has_pages: false,
//     has_discussions: false,
//     forks_count: 73,
//     mirror_url: null,
//     archived: false,
//     disabled: false,
//     open_issues_count: 40,
//     license: {
//       key: 'gpl-2.0',
//       name: 'GNU General Public License v2.0',
//       spdx_id: 'GPL-2.0',
//       url: 'https://api.github.com/licenses/gpl-2.0',
//       node_id: 'MDc6TGljZW5zZTg=',
//     },
//     allow_forking: true,
//     is_template: false,
//     web_commit_signoff_required: false,
//     topics: [],
//     visibility: 'public',
//     forks: 73,
//     open_issues: 40,
//     watchers: 139,
//     default_branch: 'master',
//     score: 1,
//   },
//   {
//     id: 14812407,
//     node_id: 'MDEwOlJlcG9zaXRvcnkxNDgxMjQwNw==',
//     name: 'waf-fle',
//     full_name: 'klaubert/waf-fle',
//     private: false,
//     owner: {
//       login: 'klaubert',
//       id: 1089704,
//       node_id: 'MDQ6VXNlcjEwODk3MDQ=',
//       avatar_url: 'https://avatars.githubusercontent.com/u/1089704?v=4',
//       gravatar_id: '',
//       url: 'https://api.github.com/users/klaubert',
//       html_url: 'https://github.com/klaubert',
//       followers_url: 'https://api.github.com/users/klaubert/followers',
//       following_url:
//         'https://api.github.com/users/klaubert/following{/other_user}',
//       gists_url: 'https://api.github.com/users/klaubert/gists{/gist_id}',
//       starred_url:
//         'https://api.github.com/users/klaubert/starred{/owner}{/repo}',
//       subscriptions_url:
//         'https://api.github.com/users/klaubert/subscriptions',
//       organizations_url: 'https://api.github.com/users/klaubert/orgs',
//       repos_url: 'https://api.github.com/users/klaubert/repos',
//       events_url: 'https://api.github.com/users/klaubert/events{/privacy}',
//       received_events_url:
//         'https://api.github.com/users/klaubert/received_events',
//       type: 'User',
//       site_admin: false,
//     },
//     html_url: 'https://github.com/klaubert/waf-fle',
//     description: 'WAF-FLE, ModSecurity Console',
//     fork: false,
//     url: 'https://api.github.com/repos/klaubert/waf-fle',
//     forks_url: 'https://api.github.com/repos/klaubert/waf-fle/forks',
//     keys_url: 'https://api.github.com/repos/klaubert/waf-fle/keys{/key_id}',
//     collaborators_url:
//       'https://api.github.com/repos/klaubert/waf-fle/collaborators{/collaborator}',
//     teams_url: 'https://api.github.com/repos/klaubert/waf-fle/teams',
//     hooks_url: 'https://api.github.com/repos/klaubert/waf-fle/hooks',
//     issue_events_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues/events{/number}',
//     events_url: 'https://api.github.com/repos/klaubert/waf-fle/events',
//     assignees_url:
//       'https://api.github.com/repos/klaubert/waf-fle/assignees{/user}',
//     branches_url:
//       'https://api.github.com/repos/klaubert/waf-fle/branches{/branch}',
//     tags_url: 'https://api.github.com/repos/klaubert/waf-fle/tags',
//     blobs_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/blobs{/sha}',
//     git_tags_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/tags{/sha}',
//     git_refs_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/refs{/sha}',
//     trees_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/trees{/sha}',
//     statuses_url:
//       'https://api.github.com/repos/klaubert/waf-fle/statuses/{sha}',
//     languages_url:
//       'https://api.github.com/repos/klaubert/waf-fle/languages',
//     stargazers_url:
//       'https://api.github.com/repos/klaubert/waf-fle/stargazers',
//     contributors_url:
//       'https://api.github.com/repos/klaubert/waf-fle/contributors',
//     subscribers_url:
//       'https://api.github.com/repos/klaubert/waf-fle/subscribers',
//     subscription_url:
//       'https://api.github.com/repos/klaubert/waf-fle/subscription',
//     commits_url:
//       'https://api.github.com/repos/klaubert/waf-fle/commits{/sha}',
//     git_commits_url:
//       'https://api.github.com/repos/klaubert/waf-fle/git/commits{/sha}',
//     comments_url:
//       'https://api.github.com/repos/klaubert/waf-fle/comments{/number}',
//     issue_comment_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues/comments{/number}',
//     contents_url:
//       'https://api.github.com/repos/klaubert/waf-fle/contents/{+path}',
//     compare_url:
//       'https://api.github.com/repos/klaubert/waf-fle/compare/{base}...{head}',
//     merges_url: 'https://api.github.com/repos/klaubert/waf-fle/merges',
//     archive_url:
//       'https://api.github.com/repos/klaubert/waf-fle/{archive_format}{/ref}',
//     downloads_url:
//       'https://api.github.com/repos/klaubert/waf-fle/downloads',
//     issues_url:
//       'https://api.github.com/repos/klaubert/waf-fle/issues{/number}',
//     pulls_url:
//       'https://api.github.com/repos/klaubert/waf-fle/pulls{/number}',
//     milestones_url:
//       'https://api.github.com/repos/klaubert/waf-fle/milestones{/number}',
//     notifications_url:
//       'https://api.github.com/repos/klaubert/waf-fle/notifications{?since,all,participating}',
//     labels_url:
//       'https://api.github.com/repos/klaubert/waf-fle/labels{/name}',
//     releases_url:
//       'https://api.github.com/repos/klaubert/waf-fle/releases{/id}',
//     deployments_url:
//       'https://api.github.com/repos/klaubert/waf-fle/deployments',
//     created_at: '2013-11-29T23:57:04Z',
//     updated_at: '2024-06-29T10:30:50Z',
//     pushed_at: '2022-10-01T22:52:50Z',
//     git_url: 'git://github.com/klaubert/waf-fle.git',
//     ssh_url: 'git@github.com:klaubert/waf-fle.git',
//     clone_url: 'https://github.com/klaubert/waf-fle.git',
//     svn_url: 'https://github.com/klaubert/waf-fle',
//     homepage: 'http://waf-fle.org',
//     size: 1386,
//     stargazers_count: 139,
//     watchers_count: 139,
//     language: 'PHP',
//     has_issues: true,
//     has_projects: true,
//     has_downloads: true,
//     has_wiki: true,
//     has_pages: false,
//     has_discussions: false,
//     forks_count: 73,
//     mirror_url: null,
//     archived: false,
//     disabled: false,
//     open_issues_count: 40,
//     license: {
//       key: 'gpl-2.0',
//       name: 'GNU General Public License v2.0',
//       spdx_id: 'GPL-2.0',
//       url: 'https://api.github.com/licenses/gpl-2.0',
//       node_id: 'MDc6TGljZW5zZTg=',
//     },
//     allow_forking: true,
//     is_template: false,
//     web_commit_signoff_required: false,
//     topics: [],
//     visibility: 'public',
//     forks: 73,
//     open_issues: 40,
//     watchers: 139,
//     default_branch: 'master',
//     score: 1,
//   },
// ];
