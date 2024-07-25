import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { IssuesRoutingModule } from './issues-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [IssuesListComponent],
  imports: [CommonModule, IssuesRoutingModule, SharedModule],
})
export class IssuesModule {}
