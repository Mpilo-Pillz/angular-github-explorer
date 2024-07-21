import { RouterModule, Routes } from '@angular/router';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { NgModule } from '@angular/core';
import { RepositoryDetailsComponent } from './components/repository-details/repository-details.component';

const routes: Routes = [
  {
    path: '',
    component: RepositoryListComponent,
  },
  {
    path: 'repositories/details/:owner/:repo',
    component: RepositoryDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepositoriesRoutingModule {}
