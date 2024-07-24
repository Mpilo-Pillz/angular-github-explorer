import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-icon',
  templateUrl: './repo-icon.component.html',
})
export class RepoIconComponent {
  @Input() icon: string | null = null;
  @Input() count: number | null = null;
}
