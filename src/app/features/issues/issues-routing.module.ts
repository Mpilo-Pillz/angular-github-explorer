import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { IssuesListComponent } from './components/issues-list/issues-list.component';

const routes: Routes = [
  { path: ':owner/:repo/issues', component: IssuesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IssuesRoutingModule {}
