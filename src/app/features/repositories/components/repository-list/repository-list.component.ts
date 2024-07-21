import { Component } from '@angular/core';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
})
export class RepositoryListComponent {
  onSearch(query: string) {
    console.log(query);
  }
}
