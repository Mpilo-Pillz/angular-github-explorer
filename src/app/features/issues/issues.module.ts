import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { IssuesRoutingModule } from './issues-routing.module';

@NgModule({
  declarations: [IssuesListComponent],
  imports: [CommonModule, IssuesRoutingModule],
})
export class IssuesModule {}
